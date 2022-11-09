const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Inventory = require('./includes/inventory');

// cleanup headers
app.set('etag', false);
app.disable('x-powered-by');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.text({ type: 'application/json' }));

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.post('/GC/Authenticate', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
    "UberId": 1,
    "UberIdString": "1",
    "UberName": "DummyUser",
    "DisplayName": "DummyUser",
    "TitleDisplayName": "DummyUser",
    "SessionTicket": "0123456789ABCDEF-0123456789ABCDEF0-1-2-3456789ABCDEF01-23456789ABCDEF01.23456789ABCDEF01"
  });
});

app.get('/GC/UserInfo', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
    "Created": "2000-01-01.00:00:00",
    "DisplayName": "DummyUser",
    "SteamCountry": "US",
    "SteamCurrency": "USD",
    "UberId": 1,
    "UberIdString": "1",
    "UberName": "DummyUser",
    "UserTitleData": {
        "Created": "2000-01-01.00:00:00",
        "DisplayName": "DummyUser",
        "FirstLogin": "2000-01-01.00:00:00",
        "LastLogin": "2000-01-01.00:00:00",
        "TitleId": 3,
        "UberId": 1,
        "VirtualCurrency": {
            "BC": 999999,
            "DN": 999999,
            "LC": 999999
        }
    }
  });
});

app.get('/GC/UserInventory', function(req, res, next){
let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
    "Inventory": Inventory.getInventory(),
    "UberId": "1",
    "VirtualCurrency": {
        "BC": 999999,
        "DN": 999999,
        "LC": 999999
    }
  });
});

app.get('/GameClient/Info', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
    "ServiceInfo": {
        "Configuration": "Production",
        "FacebookCanvasUrl": "http://apps.facebook.com/ubernet/",
        "LobbyServer": "xmpp.uberent.com",
        "ServiceName": "UberNet",
        "Version": 71710
    }
  });
});

app.get('/GameClient/GetTitleData', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
    "Data": {
        "CurrentBuild": "485174"
    },
    "TitleId": 3
  });
});

app.get('/GameClient/PurchasableItems', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
    "Catalog": Inventory.getCatalog() 
  });
});

app.get('/GameClient/UserCustomDataKeys', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
    "Keys": [
        "Arsenal",
        "Arsenal:V4.54",
        "ChallengesUnsecure:V4.54",
        "ClosetOutFits:V4.29",
        "ClosetOutFits:V4.48",
        "Loadout",
        "Loadout:V4.35",
        "Loadout:V4.54",
        "TEMP_CraftParts",
        "UserSettings",
        "UserSettings:V4.29",
        "UserSettings:V4.48"
    ]
  });
});

app.get('/GameClient/UserCustomDataReadOnlyKeys', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
    "Keys": [
        "Challenges:V4.54",
        "SecureStats:V4.54",
        "WeaponTechTree:V1.62",
        "WebProfile"
    ]
  });
});

app.post('/GameClient/UserCustomData', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
  });
});

app.get('/GameClient/UserCustomData', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
  "Data": {
    "Arsenal:V4.54": {
      "Entries": [
        {
          "BluePrint": {
            "KillTag": "",
            "Licenses": [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ],
            "Name": "New",
            "Resources": [
              2717904556,
              1798109935,
              1493156351,
              781839087,
              4094240596,
              709108189,
              2002014109,
              2652500822,
              1783183579,
              2851295471,
              2897869341
            ],
            "Textures": [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]
          },
          "Flags": 7,
          "ID": 4068879257,
          "Type": 26,
          "WeaponLicense": 0
        }
      ],
      "LockerBuildVersion": "492670",
      "LockerMajorVersion": 4,
      "LockerMinorVersion": 54,
      "Stats": {
        "Draws": 0,
        "Entries": [
          {
            "Buff": 0,
            "Damage": 61.9552726745605,
            "Deaths": 30,
            "FireDPSDamageDone": 0,
            "Fired": 3394,
            "Headshots": 59,
            "Heal": 0,
            "Hit": 917,
            "Id": 4068879257,
            "Kills": 59,
            "PotentalFireDamage": 0,
            "Time": 2079.08959960938,
            "WPN_PART_Barrel": 1798109935,
            "WPN_PART_Chassis": 2717904556,
            "WPN_PART_Detonator": 1783183579,
            "WPN_PART_Dispersal": 2851295471,
            "WPN_PART_Magazine": 4094240596,
            "WPN_PART_Payload": 2897869341,
            "WPN_PART_Propulsion": 2002014109,
            "WPN_PART_Scope": 1493156351,
            "WPN_PART_Shell": 2652500822,
            "WPN_PART_Stock": 781839087,
            "WPN_PART_Trigger": 709108189
          }
        ],
        "EquipmentEntries": [
          {
            "BuffDone": 0,
            "DamageDone": 16.3529434204102,
            "HealDone": 0,
            "Hits": 24,
            "Id": 1,
            "Kills": 22,
            "TimeUsed": 0,
            "Uses": 26
          },
          {
            "BuffDone": 0,
            "DamageDone": 1.6216881275177,
            "HealDone": 0,
            "Hits": 4,
            "Id": 3214689068,
            "Kills": 0,
            "TimeUsed": 0,
            "Uses": 10
          }
        ],
        "GameTypeEntries": [
          {
            "Assists": 0,
            "Buckwheat": 0,
            "Buffs": 0,
            "Deaths": 0,
            "Draws": 0,
            "Games": 1,
            "Headshot": 0,
            "Heals": 0,
            "Kills": 0,
            "Losses": 0,
            "MVP": 0,
            "Multi": 0,
            "Score": 0,
            "Time": 0,
            "Type": 1,
            "Wins": 0
          },
          {
            "Assists": 0,
            "Buckwheat": 0,
            "Buffs": 0,
            "Deaths": 1,
            "Draws": 0,
            "Games": 1,
            "Headshot": 0,
            "Heals": 0,
            "Kills": 3,
            "Losses": 1,
            "MVP": 0,
            "Multi": 0,
            "Score": 100,
            "Time": 97,
            "Type": 2,
            "Wins": 0
          },
          {
            "Assists": 5,
            "Buckwheat": 0,
            "Buffs": 0,
            "Deaths": 2,
            "Draws": 0,
            "Games": 1,
            "Headshot": 2,
            "Heals": 0,
            "Kills": 9,
            "Losses": 0,
            "MVP": 0,
            "Multi": 0,
            "Score": 1206,
            "Time": 317,
            "Type": 3,
            "Wins": 1
          },
          {
            "Assists": 10,
            "Buckwheat": 0,
            "Buffs": 0,
            "Deaths": 24,
            "Draws": 0,
            "Games": 3,
            "Headshot": 4,
            "Heals": 0,
            "Kills": 66,
            "Losses": 1,
            "MVP": 2,
            "Multi": 1,
            "Score": 5809,
            "Time": 1937,
            "Type": 4,
            "Wins": 2
          }
        ],
        "Games": 6,
        "Losses": 2,
        "TimeInMatches": 2351,
        "TimeInWeaponCrafting": 38,
        "Version": 4,
        "Wins": 3
      },
      "Version": 14,
      "defaultBPVersionNumber": 0,
      "lastWeaponArsenalId": 4068879257
    },
    "ChallengesUnsecure:V4.54": {
      "ChallengePackActivation": [],
      "LockerBuildVersion": "492670",
      "LockerMajorVersion": 4,
      "LockerMinorVersion": 54,
      "Version": 0
    },
    "ClosetOutFits:V4.48": {
      "Entries": [
        {
          "Belt": 787395968,
          "Belt_license": 0,
          "Character": 0,
          "Cigar": 0,
          "Cigar_license": 0,
          "FacialHair": 1870210546,
          "FacialHair_license": 0,
          "FacialMask": 0,
          "FacialMask_license": 0,
          "Glasses": 0,
          "Glasses_license": 0,
          "HairColor": 0,
          "HairColor_license": 0,
          "Hat": 14328706,
          "Hat_license": 0,
          "Head": 3635569115,
          "Head_license": 0,
          "ID": 3275468575,
          "Kneepads": 0,
          "Kneepads_license": 0,
          "LegStraps": 0,
          "LegStraps_license": 0,
          "LowerBody": 10070368,
          "LowerBody_license": 0,
          "Name": "Axl",
          "Necklace": 3794359073,
          "Necklace_license": 0,
          "Outfit": 0,
          "Outfit_license": 0,
          "Piercings": 0,
          "Piercings_license": 0,
          "Skin": 571940964,
          "Skin_license": 0,
          "Taunt0": 0,
          "Taunt1": 0,
          "Taunt2": 0,
          "Taunt3": 0,
          "Taunt_license0": 0,
          "Taunt_license1": 0,
          "Taunt_license2": 0,
          "Taunt_license3": 0,
          "TorsoStraps": 0,
          "TorsoStraps_license": 0,
          "UpperBody": 1813260818,
          "UpperBody_license": 0
        },
        {
          "Belt": 0,
          "Belt_license": 0,
          "Character": 1,
          "Cigar": 0,
          "Cigar_license": 0,
          "FacialHair": 4263748933,
          "FacialHair_license": 0,
          "FacialMask": 0,
          "FacialMask_license": 0,
          "Glasses": 0,
          "Glasses_license": 0,
          "HairColor": 4247663586,
          "HairColor_license": 0,
          "Hat": 3595081559,
          "Hat_license": 0,
          "Head": 1179551119,
          "Head_license": 0,
          "ID": 2242418700,
          "Kneepads": 0,
          "Kneepads_license": 0,
          "LegStraps": 0,
          "LegStraps_license": 0,
          "LowerBody": 1911537275,
          "LowerBody_license": 0,
          "Name": "T-Bone",
          "Necklace": 0,
          "Necklace_license": 0,
          "Outfit": 0,
          "Outfit_license": 0,
          "Piercings": 0,
          "Piercings_license": 0,
          "Skin": 3425803407,
          "Skin_license": 0,
          "Taunt0": 0,
          "Taunt1": 0,
          "Taunt2": 0,
          "Taunt3": 0,
          "Taunt_license0": 0,
          "Taunt_license1": 0,
          "Taunt_license2": 0,
          "Taunt_license3": 0,
          "TorsoStraps": 0,
          "TorsoStraps_license": 0,
          "UpperBody": 1351657660,
          "UpperBody_license": 0
        },
        {
          "Belt": 827482325,
          "Belt_license": 0,
          "Character": 2,
          "Cigar": 4050738001,
          "Cigar_license": 0,
          "FacialHair": 0,
          "FacialHair_license": 0,
          "FacialMask": 0,
          "FacialMask_license": 0,
          "Glasses": 0,
          "Glasses_license": 0,
          "HairColor": 0,
          "HairColor_license": 0,
          "Hat": 1441046091,
          "Hat_license": 0,
          "Head": 1420740913,
          "Head_license": 0,
          "ID": 1338683679,
          "Kneepads": 0,
          "Kneepads_license": 0,
          "LegStraps": 0,
          "LegStraps_license": 0,
          "LowerBody": 99700496,
          "LowerBody_license": 0,
          "Name": "Helga",
          "Necklace": 0,
          "Necklace_license": 0,
          "Outfit": 0,
          "Outfit_license": 0,
          "Piercings": 0,
          "Piercings_license": 0,
          "Skin": 4281839094,
          "Skin_license": 0,
          "Taunt0": 0,
          "Taunt1": 0,
          "Taunt2": 0,
          "Taunt3": 0,
          "Taunt_license0": 0,
          "Taunt_license1": 0,
          "Taunt_license2": 0,
          "Taunt_license3": 0,
          "TorsoStraps": 0,
          "TorsoStraps_license": 0,
          "UpperBody": 2323910301,
          "UpperBody_license": 0
        }
      ],
      "LastUsedOutfit": 0,
      "LockerBuildVersion": "492670",
      "LockerMajorVersion": 4,
      "LockerMinorVersion": 48,
      "Version": 2
    },
    "Loadout:V4.54": {
      "AvatarIcon": 2306798501,
      "Entries": [
        [
          "Loadout Slot 1",
          4068879257,
          0,
          3214689068,
          0,
          0,
          0,
          0,
          0
        ]
      ],
      "LockerBuildVersion": "492670",
      "LockerMajorVersion": 4,
      "LockerMinorVersion": 54,
      "NewInventory": {
        "Entries": [
          873007695,
          1493156351,
          2717904556
        ],
        "Version": 1
      },
      "Version": 6
    },
    "UserSettings:V4.48": {
      "LockerBuildVersion": "492670",
      "LockerMajorVersion": 4,
      "LockerMinorVersion": 48,
      "Mappings": {
        "Actions": [
          [
            {
              "ID": 33,
              "Type": 1
            }
          ],
          [
            {
              "ID": 11,
              "Type": 1
            }
          ],
          [
            {
              "ID": 29,
              "Type": 1
            }
          ],
          [
            {
              "ID": 14,
              "Type": 1
            }
          ],
          [
            {
              "ID": 42,
              "Type": 1
            },
            {
              "ID": 1792569626,
              "Type": 3
            }
          ],
          [
            {
              "ID": 47,
              "Type": 1
            },
            {
              "ID": 2730849248,
              "Type": 3
            }
          ],
          [
            {
              "ID": 49,
              "Type": 1
            },
            {
              "ID": 1288377036,
              "Type": 3
            }
          ],
          [
            {
              "ID": 16,
              "Type": 1
            },
            {
              "ID": 1988381759,
              "Type": 3
            }
          ],
          [
            {
              "ID": 2829208398,
              "Type": 2
            },
            {
              "ID": 25394345,
              "Type": 3
            }
          ],
          [
            {
              "ID": 3752164312,
              "Type": 2
            },
            {
              "ID": 3586278262,
              "Type": 3
            }
          ],
          [
            {
              "ID": 28,
              "Type": 1
            },
            {
              "ID": 205522505,
              "Type": 3
            }
          ],
          [
            {
              "ID": 15,
              "Type": 1
            },
            {
              "ID": 205522505,
              "Type": 3
            }
          ],
          [
            {
              "ID": 13,
              "Type": 1
            },
            {
              "ID": 2559192339,
              "Type": 3
            }
          ],
          [
            {
              "ID": 2,
              "Type": 1
            }
          ],
          [
            {
              "ID": 3,
              "Type": 1
            }
          ],
          [
            {
              "ID": 27,
              "Type": 1
            },
            {
              "ID": 929688335,
              "Type": 3
            }
          ],
          [
            {
              "ID": 2906001188,
              "Type": 2
            }
          ],
          [
            {
              "ID": 3796914924,
              "Type": 2
            }
          ],
          [
            {
              "ID": 18,
              "Type": 1
            },
            {
              "ID": 2600773912,
              "Type": 3
            }
          ],
          [
            {
              "ID": 20,
              "Type": 1
            },
            {
              "ID": 2433814030,
              "Type": 3
            }
          ],
          [
            {
              "ID": 21,
              "Type": 1
            },
            {
              "ID": 731834200,
              "Type": 3
            }
          ],
          [
            {
              "ID": 22,
              "Type": 1
            },
            {
              "ID": 4152981853,
              "Type": 3
            }
          ],
          [
            {
              "ID": 32,
              "Type": 1
            }
          ],
          [
            {
              "ID": 35,
              "Type": 1
            }
          ],
          [
            {
              "ID": 31,
              "Type": 1
            }
          ],
          [
            {
              "ID": 2829208398,
              "Type": 2
            },
            {
              "ID": 1792569626,
              "Type": 3
            }
          ],
          [
            {
              "ID": 66,
              "Type": 1
            }
          ],
          [
            {
              "ID": 3752164312,
              "Type": 2
            },
            {
              "ID": 205522505,
              "Type": 3
            }
          ],
          [
            {
              "ID": 38,
              "Type": 1
            },
            {
              "ID": 1532701827,
              "Type": 3
            }
          ],
          [
            {
              "ID": 41,
              "Type": 1
            }
          ],
          [],
          [],
          [],
          [],
          [
            {
              "ID": 25,
              "Type": 1
            }
          ],
          [
            {
              "ID": 47,
              "Type": 1
            },
            {
              "ID": 2730849248,
              "Type": 3
            }
          ],
          [
            {
              "ID": 1185688162,
              "Type": 2
            },
            {
              "ID": 929688335,
              "Type": 3
            }
          ]
        ],
        "Version": 0
      },
      "Settings": {
        "Audio.FXVolume": 0.630957007408142,
        "Audio.HitIndicatorVolume": 0.707946002483368,
        "Audio.MasterVolume": 1,
        "Audio.MusicVolume": 0.316228002309799,
        "Audio.UIVolume": 0.316228002309799,
        "Audio.VOVolume": 0.562340974807739,
        "Game.EnableCameraBob": false,
        "Game.EnableGore": true,
        "Game.EnableIncognito": false,
        "Game.EnableNudity": true,
        "Game.EnableOTSToggle": false,
        "Game.FieldOfView": 1,
        "Game.FilterProfanity": false,
        "Game.LanguageId": "EN",
        "Game.SocialIcon": 0,
        "Hidden.AgeGuard": false,
        "Hidden.AgeGuardVersion": 1,
        "Hidden.EULAVersion": 4,
        "Hidden.FuzzyAge": false,
        "Hidden.TOSVersion": 4,
        "Input.ControllerRumble": true,
        "Input.ControllerSensitivity": 0.5,
        "Input.DoubleTapAction": 1,
        "Input.InvertX": false,
        "Input.InvertY": false,
        "Version": "1, 2, 0, 1, 1, 1"
      },
      "TutorialMan": {
        "Version": 1,
        "completedTutorials": [
          2996176117,
          3822944181
        ]
      },
      "Version": 2
    }
  }
  });
});

app.post('/GameClient/UserCustomDataReadOnly', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
  });
});

app.get('/GameClient/UserCustomDataReadOnly', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
  "Data": {
    "Challenges:V4.54": {
      "BotDifficulty": 0.721428573131561,
      "ChallengePackTypes": [],
      "ChallengePacks": [],
      "ChallengesCompleted": 0,
      "CompletedContracts": 0,
      "ContractHistory": [
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ]
      ],
      "ContractPointsAwarded": 0,
      "Contracts": [
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ]
      ],
      "Events": [
        [
          78323812,
          5
        ],
        [
          130769815,
          0
        ],
        [
          147491354,
          0
        ],
        [
          156611625,
          0
        ],
        [
          192735798,
          0
        ],
        [
          216797291,
          1
        ],
        [
          231333354,
          0
        ],
        [
          235920444,
          12997
        ],
        [
          251320132,
          1
        ],
        [
          292670546,
          1
        ],
        [
          359233651,
          1
        ],
        [
          431910345,
          0
        ],
        [
          472761212,
          0
        ],
        [
          498538462,
          0
        ],
        [
          503237229,
          0
        ],
        [
          505602603,
          1
        ],
        [
          509155247,
          1
        ],
        [
          547404311,
          0
        ],
        [
          644708860,
          3
        ],
        [
          655484976,
          0
        ],
        [
          675353474,
          3
        ],
        [
          699998947,
          0
        ],
        [
          736653501,
          15
        ],
        [
          766454516,
          0
        ],
        [
          815070755,
          0
        ],
        [
          866230963,
          2
        ],
        [
          885790640,
          2
        ],
        [
          899789093,
          15
        ],
        [
          917145933,
          2
        ],
        [
          935805591,
          27
        ],
        [
          940952876,
          22
        ],
        [
          958397550,
          0
        ],
        [
          992616738,
          0
        ],
        [
          995346955,
          0
        ],
        [
          1014075469,
          0
        ],
        [
          1024452946,
          0
        ],
        [
          1038233376,
          13
        ],
        [
          1039439958,
          17
        ],
        [
          1052108031,
          0
        ],
        [
          1063010693,
          0
        ],
        [
          1069741936,
          0
        ],
        [
          1082722206,
          0
        ],
        [
          1135783895,
          0
        ],
        [
          1137959783,
          1
        ],
        [
          1171937388,
          24
        ],
        [
          1172195919,
          0
        ],
        [
          1181175995,
          0
        ],
        [
          1203135821,
          2
        ],
        [
          1285052032,
          0
        ],
        [
          1294440808,
          0
        ],
        [
          1353229666,
          1
        ],
        [
          1360412680,
          14
        ],
        [
          1388877022,
          6
        ],
        [
          1393261738,
          0
        ],
        [
          1430869626,
          7
        ],
        [
          1459028731,
          1
        ],
        [
          1542668789,
          0
        ],
        [
          1556660668,
          5
        ],
        [
          1572100637,
          0
        ],
        [
          1579307016,
          4
        ],
        [
          1594232451,
          0
        ],
        [
          1633268291,
          0
        ],
        [
          1658715324,
          0
        ],
        [
          1661615572,
          0
        ],
        [
          1732713113,
          6
        ],
        [
          1740312053,
          0
        ],
        [
          1743475295,
          0
        ],
        [
          1756269010,
          2
        ],
        [
          1778241872,
          0
        ],
        [
          1876007137,
          3
        ],
        [
          1940926467,
          0
        ],
        [
          1982175447,
          0
        ],
        [
          2033843516,
          0
        ],
        [
          2091537855,
          0
        ],
        [
          2123677314,
          0
        ],
        [
          2145011642,
          0
        ],
        [
          2151271282,
          0
        ],
        [
          2243757641,
          0
        ],
        [
          2292169785,
          0
        ],
        [
          2311210038,
          0
        ],
        [
          2389906961,
          0
        ],
        [
          2390282921,
          16
        ],
        [
          2423005601,
          0
        ],
        [
          2433833846,
          0
        ],
        [
          2437193095,
          0
        ],
        [
          2443586866,
          0
        ],
        [
          2444544319,
          0
        ],
        [
          2449448248,
          0
        ],
        [
          2468677098,
          0
        ],
        [
          2492423953,
          1
        ],
        [
          2508219917,
          0
        ],
        [
          2546749544,
          1
        ],
        [
          2596041451,
          0
        ],
        [
          2602854900,
          5
        ],
        [
          2680001306,
          0
        ],
        [
          2697891255,
          0
        ],
        [
          2778909037,
          0
        ],
        [
          2832480799,
          5
        ],
        [
          2854921242,
          0
        ],
        [
          2929779276,
          0
        ],
        [
          2968604205,
          0
        ],
        [
          2980694900,
          0
        ],
        [
          3006097003,
          0
        ],
        [
          3065278657,
          3
        ],
        [
          3129114512,
          0
        ],
        [
          3149007822,
          0
        ],
        [
          3208674932,
          4
        ],
        [
          3231524025,
          0
        ],
        [
          3247045832,
          0
        ],
        [
          3250072339,
          0
        ],
        [
          3316732164,
          0
        ],
        [
          3389282317,
          0
        ],
        [
          3395437203,
          0
        ],
        [
          3450669278,
          0
        ],
        [
          3510179090,
          0
        ],
        [
          3627285777,
          78
        ],
        [
          3631414672,
          0
        ],
        [
          3652238125,
          0
        ],
        [
          3674417562,
          0
        ],
        [
          3694677491,
          0
        ],
        [
          3700795091,
          0
        ],
        [
          3741916683,
          0
        ],
        [
          3742943327,
          0
        ],
        [
          3796630150,
          0
        ],
        [
          3802623530,
          0
        ],
        [
          3803895858,
          0
        ],
        [
          3887865638,
          0
        ],
        [
          3888037771,
          8
        ],
        [
          3904175293,
          2
        ],
        [
          3910193684,
          0
        ],
        [
          3914342336,
          0
        ],
        [
          3934847557,
          0
        ],
        [
          4037281161,
          0
        ],
        [
          4053181046,
          8
        ],
        [
          4101770077,
          21
        ],
        [
          4135316093,
          1
        ],
        [
          4258844844,
          0
        ]
      ],
      "InitContractState": 0,
      "LastCompletedMatchTime": 1526882400,
      "Level": 2,
      "LockerBuildVersion": "492670",
      "LockerMajorVersion": 4,
      "LockerMinorVersion": 54,
      "NextContracts": [
        [
          0
        ],
        [
          0
        ],
        [
          0
        ]
      ],
      "Version": 6,
      "WasFirstMatchOfDay": false,
      "XPIntoNextLevel": 4997,
      "XPToNextLevel": 11000
    },
    "SecureStats:V4.54": {
      "Draws": 0,
      "Entries": [
        {
          "Buff": 0,
          "Damage": 59.3634643554688,
          "Deaths": 30,
          "FireDPSDamageDone": 0,
          "Fired": 3269,
          "Headshots": 58,
          "Heal": 0,
          "Hit": 902,
          "Id": 4068879257,
          "Kills": 52,
          "PotentalFireDamage": 0,
          "Time": 15.7770738601685,
          "WPN_PART_Barrel": 1798109935,
          "WPN_PART_Chassis": 2717904556,
          "WPN_PART_Detonator": 1783183579,
          "WPN_PART_Dispersal": 2851295471,
          "WPN_PART_Magazine": 4094240596,
          "WPN_PART_Payload": 2897869341,
          "WPN_PART_Propulsion": 2002014109,
          "WPN_PART_Scope": 1493156351,
          "WPN_PART_Shell": 2652500822,
          "WPN_PART_Stock": 781839087,
          "WPN_PART_Trigger": 709108189
        }
      ],
      "EquipmentEntries": [
        {
          "BuffDone": 0,
          "DamageDone": 16.3242511749268,
          "HealDone": 0,
          "Hits": 23,
          "Id": 1,
          "Kills": 21,
          "TimeUsed": 0,
          "Uses": 26
        },
        {
          "BuffDone": 0,
          "DamageDone": 1.51233005523682,
          "HealDone": 0,
          "Hits": 4,
          "Id": 3214689068,
          "Kills": 0,
          "TimeUsed": 0,
          "Uses": 10
        }
      ],
      "GameTypeEntries": [
        {
          "Assists": 0,
          "Buckwheat": 0,
          "Buffs": 0,
          "Deaths": 1,
          "Draws": 0,
          "Games": 1,
          "Headshot": 0,
          "Heals": 0,
          "Kills": 3,
          "Losses": 1,
          "MVP": 0,
          "Multi": 0,
          "Score": 105,
          "Time": 108,
          "Type": 2,
          "Wins": 0
        },
        {
          "Assists": 3,
          "Buckwheat": 0,
          "Buffs": 0,
          "Deaths": 2,
          "Draws": 0,
          "Games": 1,
          "Headshot": 1,
          "Heals": 0,
          "Kills": 9,
          "Losses": 0,
          "MVP": 0,
          "Multi": 0,
          "Score": 1231,
          "Time": 317,
          "Type": 3,
          "Wins": 1
        },
        {
          "Assists": 11,
          "Buckwheat": 0,
          "Buffs": 0,
          "Deaths": 24,
          "Draws": 0,
          "Games": 3,
          "Headshot": 4,
          "Heals": 0,
          "Kills": 66,
          "Losses": 1,
          "MVP": 0,
          "Multi": 1,
          "Score": 5864,
          "Time": 1942,
          "Type": 4,
          "Wins": 2
        }
      ],
      "Games": 4,
      "LockerBuildVersion": "492670",
      "LockerMajorVersion": 4,
      "LockerMinorVersion": 54,
      "Losses": 2,
      "TimeInMatches": 2367,
      "TimeInWeaponCrafting": 0,
      "Version": 4,
      "Wins": 3
    },
    "WeaponTechTree:V1.62": {
      "LockerBuildVersion": "492670",
      "LockerMajorVersion": 1,
      "LockerMinorVersion": 62,
      "PartsXP": Inventory.getXP(),
      "Version": 1
    },
    "WebProfile": {
      "BroReferrer": null,
      "BroReferralList": null,
      "Newsletter": 1
    }
  }
  });
});

app.get('/GameClient/RankedStats', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
    Constants: {
      ProvisionalPeriod: 10000
    },
    Results:[
      {
        'Playlist':2889139779,
        'Stats':{
          'Games': 0,
          'Wins': 0,
          'Losses': 0,
          'Draws': 0,
          'PLosses': 0,
          'LLosses': 0,
          'Matches': []
        },
        'Rank':{
          'Bracket':0,
          'Division':0,
          'Progress':0
        }
      }
    ]
  });
});

app.get('/GameClient/GetNews', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
    'News': [
        {
            "HtmlBody": "<div>Welcome to Loadout Reloaded.</div>",
            "Timestamp": "2021-01-01.00:00:00",
            "Title": "Loadout Reloaded"
        }
    ]
  });
});

app.get('/GameClient/GetUberFriendsList', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
    'Friends':[]
  });
});

app.get('/GameAcquisition/GetGameServerRegions', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
    "Regions": [
      {
        "Available": true,
        "Region":"USCentral",
        "GameCount": 1,
        "GamePlayersCount":1,
        "Name": "Dev",
        "PingUrl": "8.8.8.8",
        "GameModes":[
        ]
      }
    ],
    "Playlists": [
    
    ]
  });
});


app.get('/GameAcquisition/GetRegionPlaylists', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
    "Playlists": [
    ]
  });
});

app.post('/GameAcquisition/Matchmake', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(201).json({
    Status: 300,
    RequestID: '1',
    MatchID: 100,
    LobbyID: '100',
    PollWaitTimeMS: 10000,
    ServerHostname: '127.0.0.1',
    ServerPort: 9013,
    Ticket: '100',
  });
});

app.post('/UES/StartSession', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
    SessionId: '1'
  });
});

app.post('/UES/SessionEvent', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
  });
});

app.post('/UES/Heartbeat', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
  });
});

app.post('/UES/EndSession', function(req, res, next){
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip,req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
  });
});

// catch anything not yet processed
app.all('*', function(req, res, next){
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip,'404:',req.method, req.url, JSON.stringify(req.headers));
  console.log(req.body)
  console.log('\n');

  res.status(200).json({
  });
});

app.listen(9880);
