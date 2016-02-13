/* jshint node: true, nonstandard: true, esversion: 6, indent: 4, undef: true, unused: true, bitwise: true, eqeqeq: true, latedef: true, trailing: true */
/* globals describe, it, before */
// To generate a test coverage report, from the root of the MFCAuto repo, run:
//  istanbul cover .\node_modules\mocha\bin\_mocha ./src/test/test.js
// That's assuming you have mocha installed locally and istanbul installed globally
//@TODO - More response packet validation everywhere
"use strict";
let assert = require('assert');
let mfc = require('../../lib/MFCAuto.js');

describe('Startup Scenarios', function () {
    it("should be able to dynamically load the MFC server config", function (done) {
        let client = new mfc.Client();
        client.ensureServerConfigIsLoaded(function () {
            assert.notStrictEqual(client.serverConfig, undefined);
            assert.notStrictEqual(client.serverConfig.chat_servers, undefined);
            assert.notStrictEqual(client.serverConfig.chat_servers.length, 0);
            done();
        });
    });
    it("should be able to connect without logging in", function (done) {
        let client = new mfc.Client();
        client.connect(false, done);
    });
    it("should be able to log in as a guest", function (done) {
        let client = new mfc.Client();
        assert.strictEqual(client.username.indexOf('guest'), 0, "We didn't start in the default state?");
        client.on("LOGIN", function (packet) {
            assert.strictEqual(packet.nArg1, 0, "Failed login error code");
            assert.strictEqual(client.username.indexOf("Guest"), 0, "We didn't log in as a guest successfully");
            done();
        });
        client.connect(true);
    });
});

describe('Connected Scenarios', function () {
    this.timeout(7000);
    let client = new mfc.Client();
    before(function (done) {
        client.connectAndWaitForModels(done);
    });
    describe("Client", function () {
        it("should be able to send a USERNAMELOOKUP query and parse a valid response", function (done) {
            //Get all the models that are on cam
            let models = mfc.Model.findModels((m) => m.vs === 0);
            assert.notStrictEqual(models.length, 0, "No online models??  That's weird");
            
            //Pull out the first online model
            let model = models[0];
            assert.notStrictEqual(model.nm, undefined, "Models no longer have a name (nm) property?");

            //Register a handler for USERNAMELOOKUP messages
            function callback(packet) {
                //Check the contents, looking for known/unknown properties and validating the username //@TODO - @BUGBUG
                assert.strictEqual(packet.sMessage.nm, model.nm);
            
                //Remove this listener and complete the test
                client.removeListener("USERNAMELOOKUP", callback);
                done();
            }

            client.on("USERNAMELOOKUP", callback);

            //Query for her username
            client.TxCmd(mfc.FCTYPE.USERNAMELOOKUP, 0, 20, 0, model.nm);
        });

        it("should be able to join a room and log chat", function (done) {
            //Get all models with over 500 people in their room
            let popularModels = mfc.Model.findModels((m) => m.rc >= 500 && m.vs === 0);
            assert.notStrictEqual(popularModels.length, 0, "No models in public chat have more than 500 members in their rooms?");
           
            //Find the most popular model in free chat right now
            popularModels.sort(function (a, b) {
                if (a.rc > b.rc) {
                    return 1;
                }
                if (a.rc < b.rc) {
                    return -1;
                }
                return 0;
            });

            let queen = popularModels[popularModels.length - 1];

            client.on("CMESG", function (packet) {
                assert.strictEqual(packet.aboutModel.uid, queen.uid);
                if (packet.chatString !== undefined) {
                    //@TODO - Also ensure at least one of these
                    //messages has an emote to cover Packet._parseEmotes
                    //ideally we'd also check tips and tip messages but
                    //there is no guarantee we would see a tip before the timeout
                    client.leaveRoom(packet.aboutModel.uid);
                    client.removeAllListeners("CMESG");
                    done();
                }
            });

            client.joinRoom(queen.uid);
        });

        it("should be able to encode chat strings", function (done) {
            client.EncodeRawChat("I am happy :mhappy", function (parsedString, aMsg2) {
                assert.strictEqual(aMsg2.length,2,"Unexpected number of emotes parsed");
                assert.strictEqual(aMsg2[0], "I am happy ");
                assert.strictEqual(aMsg2[1].txt,":mhappy");
                assert.strictEqual(aMsg2[1].url,"http://www.myfreecams.com/chat_images/u/2c/2c9d2da6.gif");
                assert.strictEqual(aMsg2[1].code,"#~ue,2c9d2da6.gif,mhappy~#");
                assert.strictEqual(parsedString, "I am happy #~ue,2c9d2da6.gif,mhappy~#", "Encoding failed or returned an unexpected format");
                done();
            });
        });

        it("should be able to send chat", function (done) {
            /*
            @TODO - Find a room that allows guest chat, join it, send some text
            and validate that we receive the text back with a matching username, etc
            */
            //assert.fail("@TODO");
            done();
        });
        
        /*
        @TODO - More tests...
        Add a callback to the joinroom/sendChat/sendPM functions and ensure we
        get error messages for them when we're not allowed
        
        Generally change the callback formats to fit the expected patters of error first
        
        cover client.sendPM somehow (might need to log in for that unfortunately)
        
        maybe in before() here you set up an ANY handler that collects all seen FCTypes
        from the server and raises and then at the end we have one final test that confirms
        that we didn't see a new FCType?  Or we could do the same by getting mfccore.js from
        the server and iterating over all the FCTypes in it I guess.  The latter might be
        faster and more complete, assuming we know where to find the latest greated mfccore.js
        
        set up a gulp test task and integrate it with VS Code
        */
    });
});
