var prompt      = require('prompt'); /* debugging prompt, use in development */
var WebSocket   = require('ws'); /* websockets */
var fs          = require('fs'); /* file system */
//var lzmajs      = require('lzma-purejs'); /* file compression for replay files, they have to be in lmza for intercompatiblity */
var ref         = require('ref');
var struct      = require('ref-struct');
var ffi         = require('ffi'); /* allows dynamic linking of the ocgapi.dll */
var MersenneTwister    = require('mersennetwister'); /* shuffler*/

//Constances
console.log(process.argv);
var launchpostion = 0;
                    
var configuration = {   
    'version'   : (1),
    'port'      : (1337),
    'banlist'   : (0),
    'cardpool'  : ( 2),
    'gamemode'  : ( 2),
    'priority'  : (0),
    'deckcheck' : ( 0),
    'shuffle'   : ( 0),
    'startLP'   : ( 8000),
    'starthand' : ( 5),
    'draw'      : (1),
    'timer'     : ( 180),
    'production': ( 0)
                    };
