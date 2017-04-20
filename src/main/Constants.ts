// Various constants and enums used by MFC.  Most of these values can be seen here:
// http://www.myfreecams.com/_js/mfccore.js

export let MAGIC: number = -2027771214;

// STATE is essentially the same as FCVIDEO but has friendly names
// for better log messages and code readability
export enum STATE {
    FreeChat = 0,            // TX_IDLE
    // TX_RESET = 1,         // Unused?
    Away = 2,                // TX_AWAY
    // TX_CONFIRMING = 11,   // Unused?
    Private = 12,            // TX_PVT
    GroupShow = 13,          // TX_GRP
    // TX_RESERVED = 14,     // Unused?
    // TX_KILLMODEL = 15,    // Unused?
    // C2C_ON = 20,          // Unused?
    // C2C_OFF = 21,         // Unused?
    Online = 90,             // RX_IDLE
    // RX_PVT = 91,          // Unused?
    // RX_VOY = 92,          // Unused?
    // RX_GRP = 93,          // Unused?
    // NULL = 126,           // Unused?
    Offline = 127            // OFFLINE
}

export enum CLIENT {
    "VERSION_REQUIRED" = 20060925,
}

export enum DISPLAY {
    "PM_INLINE_WHISPER" = 1,
    "PM_INLINE_ALL" = 2,
}

export enum EVSESSION {
    "NONE" = 0,
    "PRIVATE" = 1,
    "VOYEUR" = 2,
    "GROUP" = 3,
    "FEATURE" = 4,
    "AWAYPVT" = 5,
    "TIP" = 10,
    "PUBLIC" = 100,
    "AWAY" = 101,
    "START" = 102,
    "UPDATE" = 103,
    "STOP" = 104,
}

export enum EVUP {
    "NONE" = 0,
    "DIFF" = 1,
    "FULL" = 2,
}

export enum FCACCEPT {
    "NOBODY" = 0,
    "FRIENDS" = 1,
    "ALL" = 2,
    "V2_NONE" = 8,
    "V2_FRIENDS" = 16,
    "V2_MODELS" = 32,
    "V2_PREMIUMS" = 64,
    "V2_BASICS" = 128,
    "V2_BOOKMARKS" = 256,
    "V2_TOPFRIENDS" = 512,
}

export enum FCACT {
    "CHAN_TIP" = 1006,
    "CHAN_BAN" = 1011,
    "CHAN_UNBAN" = 1012,
    "CHAN_JOIN" = 1051,
    "CHAN_PART" = 1052,
    "CHAN_TOPIC" = 1061,
    "CHAN_WHITEBOARD_ON" = 1101,
    "CHAN_WHITEBOARD_OFF" = 1102,
    "LOGIN" = 8001,
    "LOGOUT" = 8002,
}

export enum FCAPP {
    "NONE" = 0,
    "MASTER" = 1,
    "CHAT" = 2,
    "WORKER" = 3,
    "AUTH" = 4,
    "LOADTEST" = 5,
    "TRANSCODER" = 6,
}

export enum FCBAN {
    "NONE" = 0,
    "TEMP" = 1,
    "60DAY" = 2,
    "LIFE" = 3,
}

export enum FCCHAN {
    "NOOPT" = 0,
    "EVENT_NONE" = 0,
    "JOIN" = 1,
    "EVENT_CLEARCHAT" = 1,
    "PART" = 2,
    "ERR_NOCHANNEL" = 2,
    "EVENT_MUTE" = 2,
    "ERR_NOTMEMBER" = 3,
    "EVENT_TOPIC" = 3,
    "OLDMSG" = 4,
    "ERR_GUESTMUTE" = 4,
    "EVENT_COUNTDOWN" = 4,
    "ERR_GROUPMUTE" = 5,
    "EVENT_KICK" = 5,
    "ERR_NOTALLOWED" = 6,
    "EVENT_RESERVED_001" = 6,
    "EVENT_RESERVED_002" = 7,
    "HISTORY" = 8,
    "EVENT_RESERVED_003" = 8,
    "EVENT_RESERVED_004" = 9,
    "EVENT_RESERVED_005" = 10,
    "EVENT_RESERVED_006" = 11,
    "EVENT_RESERVED_007" = 12,
    "EVENT_RESERVED_008" = 13,
    "EVENT_RESERVED_009" = 14,
    "EVENT_RESERVED_010" = 15,
    "LIST" = 16,
    "EVENT_RESERVED_011" = 16,
    "CAMSTATE" = 16,
    "EVENT_RESERVED_012" = 17,
    "EVENT_RESERVED_013" = 18,
    "WELCOME" = 32,
    "BATCHPART" = 64,
    "EXT_USERNAME" = 128,
    "EXT_USERDATA" = 256,
}

export enum FCERRTYPE {
    "INVALIDUSER" = 10,
    "NOACCESS" = 11,
    "NOSPACE" = 12,
}

export enum FCGROUP {
    "NONE" = 0,
    "EXPIRED" = 1,
    "BUSY" = 2,
    "EMPTY" = 3,
    "DECLINED" = 4,
    "UNAVAILABLE" = 5,
    "SESSION" = 9,
}

export enum FCL {
    "NULL" = 0,
    "FRIENDS" = 1,
    "IGNORES" = 2,
    "BOOKMARKS" = 3,
    "HIDDEN" = 4,
    "HPFRIENDS" = 5,
    "TOPFRIENDS" = 6,
    "NEWS_SUBS" = 7,
    "NEWS_HIDDEN" = 8,
    "MYWEBCAM_ALLOW" = 9,
    "MYWEBCAM_DENY" = 10,
    "BLOCKS_STATES" = 11,
    "BLOCKS_COUNTRIES" = 12,
    "ROOMFILTERS" = 13,
    "BANS" = 14,
    "MUTES" = 15,
    "RESERVED_16" = 16,
    "RESERVED_17" = 17,
    "RESERVED_18" = 18,
    "RESERVED_19" = 19,
    "TAGS" = 20,
    "CAMS" = 21,
    "ROOMMATES" = 22,
    "RESERVED_23" = 23,
    "RESERVED_24" = 24,
    "RESERVED_25" = 25,
    "RESERVED_26" = 26,
    "RESERVED_27" = 27,
    "RESERVED_28" = 28,
    "RESERVED_29" = 29,
}

export enum FCLEVEL {
    "GUEST" = 0,
    "BASIC" = 1,
    "PREMIUM" = 2,
    "MODEL" = 4,
    "ADMIN" = 5,
}

export enum FCMODE {
    "NOPM" = 0,
    "FRIENDPM" = 1,
    "ALLPM" = 2,
}

export enum FCMODEL {
    "NONE" = 0,
    "NOGROUP" = 1,
    "FEATURE1" = 2,
    "FEATURE2" = 4,
    "FEATURE3" = 8,
    "FEATURE4" = 16,
    "FEATURE5" = 32,
}

export enum FCNEWSOPT {
    "NONE" = 0,
    "IN_CHAN" = 1,
    "IN_PM" = 2,
    "AUTOFRIENDS_OFF" = 4,
    "ADDFRIENDS_OFF" = 4,
    "IN_CHAN_NOPVT" = 8,
    "IN_CHAN_NOGRP" = 16,
}

export enum FCNOSESS {
    "NONE" = 0,
    "PVT" = 1,
    "GRP" = 2,
    "TRUEPVT" = 4,
    "TOKEN_MIN" = 8,
}

export enum FCOPT {
    "NONE" = 0,
    "BOLD" = 1,
    "ITALICS" = 2,
    "REMOTEPVT" = 4,
    "TRUEPVT" = 8,
    "CAM2CAM" = 16,
    "RGNBLOCK" = 32,
    "TOKENAPPROX" = 64,
    "TOKENHIDE" = 128,
    "RPAPPROX" = 256,
    "RPHIDE" = 512,
    "HDVIDEO" = 1024,
    "MODELSW" = 2048,
    "GUESTMUTE" = 4096,
    "BASICMUTE" = 8192,
    "SMALLCAPS" = 16384,
    "XMPP" = 32768,
    "WHITEBOARD1" = 65536,
    "WHITEBOARD2" = 131072,
}

export enum FCPORT {
    "EDGE_POLICY" = 843,
    "MASTER_EDGE" = 4000,
    "MASTER_AUTH" = 4001,
    "AUTH_DATAGRAM" = 4002,
    "MASTER_WORKER" = 4003,
    "EDGE_WORKER" = 4004,
    "EDGE_CLIENT1" = 5001,
    "EDGE_AJAX" = 8080,
    "EDGE_CLIENT3" = 8100,
    "EDGE_WEBSOCKGW" = 8101,
    "EDGE_CLIENT2" = 8550,
}

export enum FCRESPONSE {
    "SUCCESS" = 0,
    "ERROR" = 1,
    "NOTICE" = 2,
    "SUSPEND" = 3,
    "SHUTOFF" = 4,
    "WARNING" = 5,
    "QUEUED" = 6,
    "NO_RESULTS" = 7,
    "CACHED" = 8,
    "JSON" = 9,
    "INVALIDUSER" = 10,
    "NOACCESS" = 11,
    "NOSPACE" = 12,
    "INVALIDREQ" = 13,
    "INVALIDARG" = 14,
    "NOTFOUND" = 15,
    "INSUFFICIENT" = 16,
}

export enum FCRPC {
    "NONE" = 0,
    "UPDATEFRIEND" = 1,
    "UPDATEIGNORE" = 2,
    "RESLOADED" = 3,
    "W_READY" = 4,
    "W_OFFLINEQUERY" = 5,
    "W_FRIENDLIST" = 6,
    "W_IGNORELIST" = 7,
    "W_EXT_REQUEST" = 8,
    "W_EXT_RESPONSE" = 9,
}

export enum FCS {
    "SUBSCRIBE" = 1,
    "SYNC" = 2,
    "SESSION" = 10,
    "BAN" = 11,
    "MODEL" = 12,
    "EVENT" = 13,
    "EVENT2" = 14,
    "EXTDATA" = 15,
    "GWCONNECT" = 16,
    "MUTE" = 18,
    "AUTHREQ" = 100,
    "BANREQ" = 101,
    "EVENTREQ" = 102,
    "EVENTRESP" = 103,
    "SENDEVENT" = 104,
    "SENDEVENT2" = 105,
}

export enum FCSBAN {
    "NONE" = 0,
    "USER" = 1,
    "IP" = 2,
}

export enum FCTYPE {
    "CLIENT_DISCONNECTED" = -5,
    "CLIENT_MODELSLOADED" = -4,
    "CLIENT_CONNECTED" = -3,
    "ANY" = -2,
    "UNKNOWN" = -1,
    "NULL" = 0,
    "LOGIN" = 1,
    "ADDFRIEND" = 2,
    "PMESG" = 3,
    "STATUS" = 4,
    "DETAILS" = 5,
    "TOKENINC" = 6,
    "ADDIGNORE" = 7,
    "PRIVACY" = 8,
    "ADDFRIENDREQ" = 9,
    "USERNAMELOOKUP" = 10,
    "ZBAN" = 11,
    "BROADCASTNEWS" = 12,
    "ANNOUNCE" = 13,
    "MANAGELIST" = 14,
    "INBOX" = 15,
    "GWCONNECT" = 16,
    "RELOADSETTINGS" = 17,
    "HIDEUSERS" = 18,
    "RULEVIOLATION" = 19,
    "SESSIONSTATE" = 20,
    "REQUESTPVT" = 21,
    "ACCEPTPVT" = 22,
    "REJECTPVT" = 23,
    "ENDSESSION" = 24,
    "TXPROFILE" = 25,
    "STARTVOYEUR" = 26,
    "SERVERREFRESH" = 27,
    "SETTING" = 28,
    "BWSTATS" = 29,
    "SETGUESTNAME" = 30,
    "TKX" = 30,
    "SETTEXTOPT" = 31,
    "SERVERCONFIG" = 32,
    "MODELGROUP" = 33,
    "REQUESTGRP" = 34,
    "STATUSGRP" = 35,
    "GROUPCHAT" = 36,
    "CLOSEGRP" = 37,
    "UCR" = 38,
    "MYUCR" = 39,
    "SLAVECON" = 40,
    "SLAVECMD" = 41,
    "SLAVEFRIEND" = 42,
    "SLAVEVSHARE" = 43,
    "ROOMDATA" = 44,
    "NEWSITEM" = 45,
    "GUESTCOUNT" = 46,
    "PRELOGINQ" = 47,
    "MODELGROUPSZ" = 48,
    "ROOMHELPER" = 49,
    "CMESG" = 50,
    "JOINCHAN" = 51,
    "CREATECHAN" = 52,
    "INVITECHAN" = 53,
    "KICKCHAN" = 54,
    "QUIETCHAN" = 55,
    "BANCHAN" = 56,
    "PREVIEWCHAN" = 57,
    "SHUTDOWN" = 58,
    "LISTBANS" = 59,
    "UNBAN" = 60,
    "SETWELCOME" = 61,
    "CHANOP" = 62,
    "LISTCHAN" = 63,
    "TAGS" = 64,
    "SETPCODE" = 65,
    "SETMINTIP" = 66,
    "UEOPT" = 67,
    "HDVIDEO" = 68,
    "METRICS" = 69,
    "OFFERCAM" = 70,
    "REQUESTCAM" = 71,
    "MYWEBCAM" = 72,
    "MYCAMSTATE" = 73,
    "PMHISTORY" = 74,
    "CHATFLASH" = 75,
    "TRUEPVT" = 76,
    "BOOKMARKS" = 77,
    "EVENT" = 78,
    "STATEDUMP" = 79,
    "RECOMMEND" = 80,
    "EXTDATA" = 81,
    "NOTIFY" = 84,
    "PUBLISH" = 85,
    "ZGWINVALID" = 95,
    "CONNECTING" = 96,
    "CONNECTED" = 97,
    "DISCONNECTED" = 98,
    "LOGOUT" = 99,
}

export enum FCUCR {
    "VM_LOUNGE" = 0,
    "CREATOR" = 0,
    "VM_MYWEBCAM" = 1,
    "FRIENDS" = 1,
    "MODELS" = 2,
    "PREMIUMS" = 4,
    "BASICS" = 8,
    "BASIC" = 8,
    "ALL" = 15,
}

export enum FCUPDATE {
    "NONE" = 0,
    "MISSMFC" = 1,
    "NEWTIP" = 2,
    "REGION_SAFE" = 3,
    "CAMSCORE" = 4,
    "ROOMFILTER" = 5,
}

export enum FCVIDEO {
    "TX_IDLE" = 0,
    "TX_RESET" = 1,
    "TX_AWAY" = 2,
    "TX_CONFIRMING" = 11,
    "TX_PVT" = 12,
    "TX_GRP" = 13,
    "TX_RESERVED" = 14,
    "TX_KILLMODEL" = 15,
    "C2C_ON" = 20,
    "C2C_OFF" = 21,
    "RX_IDLE" = 90,
    "RX_PVT" = 91,
    "RX_VOY" = 92,
    "RX_GRP" = 93,
    "NULL" = 126,
    "OFFLINE" = 127,
    "UNKNOWN" = 127,
}

export enum FCW {
    "STATE_INIT" = 0,
    "STATE_READY" = 1,
    "STATE_WORKING" = 2,
    "STATE_WAITING" = 3,
    "STATE_INVALID" = 4,
}

export enum FCWINDOW {
    "NO_USER_PM" = 20,
    "OPTIONS_ADD_FRIEND" = 31,
    "OPTIONS_ADD_IGNORE" = 32,
}

export enum FCWOPT {
    "NONE" = 0,
    "ADD" = 1,
    "REMOVE" = 2,
    "LIST" = 4,
    "NO_RECEIPT" = 128,
    "REDIS_JSON" = 256,
    "USERID" = 1024,
    "USERDATA" = 2048,
    "USERNAME" = 4096,
    "C_USERNAME" = 32768,
    "C_MONTHSLOGIN" = 65536,
    "C_LEVEL" = 131072,
    "C_VSTATE" = 262144,
    "C_CHATTEXT" = 524288,
    "C_PROFILE" = 1048576,
    "C_AVATAR" = 2097152,
    "C_RANK" = 4194304,
    "C_SDATE" = 8388608,
}

export enum HIDE {
    "MODEL_GROUPS_AWAY" = 1,
    "MODEL_GROUPS_PRIVATE" = 2,
    "MODEL_GROUPS_GROUP" = 4,
    "MODEL_GROUPS_PUBLIC" = 8,
}

export enum LOUNGE {
    "MASK_AUTO_CLICK" = 1,
    "MASK_NO_CAMSNAPS" = 2,
    "MASK_LOUNGE_MODE" = 4,
}

export enum MAX {
    "FCL" = 30,
}

export enum MODEL {
    "LIST_ICON_NEW_MODEL" = 1,
    "LIST_ICON_RECOMMEND" = 2,
    "LIST_ICON_POPULAR" = 4,
    "LIST_ICON_RECENT" = 8,
    "LIST_ICON_MISSMFC" = 16,
    "LIST_ICON_TRENDING" = 32,
    "LIST_ICON_CUSTOM_ALERTS" = 64,
    "VERSION_REQUIRED" = 220130324,
    "VERSION_MODELWEB" = 320110101,
}

export enum MODELORDER {
    "NONE" = 0,
    "PVT" = 1,
    "TRUEPVT" = 2,
    "GRP" = 4,
}

export enum MYFREECAMS {
    "NEWS_USER_ID" = 481462,
}

export enum MYWEBCAM {
    "EVERYONE" = 0,
    "ONLYUSERS" = 1,
    "ONLYFRIENDS" = 2,
    "ONLYMODELS" = 3,
    "FRIENDSANDMODELS" = 4,
    "WHITELIST" = 5,
    "FRIEND_ID" = 100,
}

export enum PLAT {
    "MFC" = 1,
    "CAM" = 2,
}

export enum PLATFORM {
    "NONE" = 0,
    "MFC" = 1,
    "CAMMUNITY" = 2,
}

export enum SERVER {
    "VERSION" = 20071218,
    "VERSION_REQUIRED" = 20071218,
}

export enum SESSION {
    "ID_START" = 75000000,
    "ID_END" = 950000000,
}

export enum TKOPT {
    "NONE" = 0,
    "START" = 1,
    "STOP" = 2,
    "OPEN" = 4,
    "PVT" = 8,
    "VOY" = 16,
    "GRP" = 32,
    "TIP" = 256,
    "TIP_HIDDEN_AMT" = 512,
    "TIP_OFFLINE" = 1024,
    "TIP_MSG" = 2048,
    "TIP_ANON" = 4096,
    "TIP_PUBLIC" = 8192,
    "TIP_FROMROOM" = 16384,
    "TIP_PUBLICMSG" = 32768,
    "TIP_HISTORY" = 65536,
    "TIP_SILENT" = 131072,
    "TIP_NOCOUNT" = 262144,
    "HDVIDEO" = 1048576,
}

export enum USER {
    "ID_START" = 100,
    "ID_END" = 50000000,
}

export enum USEREXT {
    "NUM" = 0,
    "STRING" = 1,
    "DATA" = 2,
    "STAMP" = 3,
}

export enum V1 {
    "FLV" = 0,
    "F4V" = 1,
}

export enum V2 {
    "NONE" = 2,
    "FLV" = 4,
    "F4V" = 8,
    "MP4X" = 16,
    "MP4W" = 32,
}

export enum WEBCAM {
    "SECURITY_EVERYONE" = 0,
    "SECURITY_FRIENDS" = 2,
    "SECURITY_MODELS" = 3,
    "SECURITY_MODELS_FRIENDS" = 4,
    "SECURITY_ALLOWED" = 5,
    "SECURITY_FRIEND_ID" = 100,
}

export enum WINDOW {
    "MODE_DEFAULT" = 0,
    "MODE_DHTML" = 1,
    "MODE_DESKTOP_DHTML" = 1,
    "MODE_BROWSER" = 2,
    "MODE_MOBILE_DHTML" = 2,
}

export enum WORKER {
    "ID_START" = 50000000,
    "ID_END" = 75000000,
}

