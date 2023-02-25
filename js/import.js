//WeaponData
const WeaponTypes = [
    "AssaultRifle",
    "SMG",
    "Shotgun",
    "LMG",
    "SniperRifle",
    "Carbine",
    "Special",
    "Staves",
    "Secondary",
    "Melee"
]
const WeaponList = [
    {
        category: "AssaultRifle",
        name: "A-12 Plastic Rifle",
        value: "weird"
    },
    {
        category: "AssaultRifle",
        name: "AK Rifle",
        value: "cak"
    },
    {
        category: "AssaultRifle",
        name: "AVG Auto Rifle",
        value: "avg"
    },
    {
        category: "AssaultRifle",
        name: "Cilzret Fullauto",
        value: "Cilzret"
    },
    {
        category: "AssaultRifle",
        name: "Divine Long Bow",
        value: "divine"
    },
    {
        category: "AssaultRifle",
        name: "F44 Dominance",
        value: "Dominance"
    },
    {
        category: "AssaultRifle",
        name: "FAZZI Automana",
        value: "fazzi"
    },
    {
        category: "AssaultRifle",
        name: "GEO Mana Rifle",
        value: "geo"
    },
    {
        category: "AssaultRifle",
        name: "Gerard Auto Rifle",
        value: "gerard"
    },
    {
        category: "AssaultRifle",
        name: "Golden AK[フルオート]",
        value: "goldak"
    },
    {
        category: "AssaultRifle",
        name: "Golden AK[セミオート]",
        value: "goldak2"
    },
    {
        category: "AssaultRifle",
        name: "GROUZA",
        value: "groza"
    },
    {
        category: "AssaultRifle",
        name: "Hamlock AR",
        value: "hemlock"
    },
    {
        category: "AssaultRifle",
        name: "Harbinger Auto Rifle",
        value: "harbinger"
    },
    {
        category: "AssaultRifle",
        name: "Hopekeeper",
        value: "hopekeeper"
    },
    {
        category: "AssaultRifle",
        name: "JAME Manaburst Rifle",
        value: "jame"
    },
    {
        category: "AssaultRifle",
        name: "Lexxi Burst Rifle",
        value: "lexxi"
    },
    {
        category: "AssaultRifle",
        name: "Luna Crossbow",
        value: "lunabow"
    },
    {
        category: "AssaultRifle",
        name: "M2002",
        value: "M2002"
    },
    {
        category: "AssaultRifle",
        name: "MDR",
        value: "MDR"
    },
    {
        category: "AssaultRifle",
        name: "MR-4 Smokey",
        value: "smokey"
    },
    {
        category: "AssaultRifle",
        name: "MR-4 Smokey EXT",
        value: "cu_smokey"
    },
    {
        category: "AssaultRifle",
        name: "MR-12 Automana",
        value: "automana"
    },
    {
        category: "AssaultRifle",
        name: "MR-52 Cyclone",
        value: "cyclone"
    },
    {
        category: "AssaultRifle",
        name: "MR-55 Stormfury",
        value: "stormfury"
    },
    {
        category: "AssaultRifle",
        name: "MR-89 Doubletail",
        value: "Doubletail"
    },
    {
        category: "AssaultRifle",
        name: "MR-94 Gargoyle",
        value: "gargoyle"
    },
    {
        category: "AssaultRifle",
        name: "MRC-1 Silvermist",
        value: "Silvermist"
    },
    {
        category: "AssaultRifle",
        name: "NURF Water Rifle",
        value: "waterar"
    },
    {
        category: "AssaultRifle",
        name: "Ouroboros AR",
        value: "ouro"
    },
    {
        category: "AssaultRifle",
        name: "Serenity Auto Rifle",
        value: "Serenity"
    },
    {
        category: "AssaultRifle",
        name: "Starfaller",
        value: "starfaller"
    },
    {
        category: "AssaultRifle",
        name: "The Shooting Star",
        value: "shootingstar"
    },
    {
        category: "AssaultRifle",
        name: "Twinvision Rifle",
        value: "twinvision"
    },
    {
        category: "AssaultRifle",
        name: "Type 89",
        value: "ctype"
    },
    {
        category: "AssaultRifle",
        name: "Tyrant Automana",
        value: "Tyrant"
    },
    {
        category: "AssaultRifle",
        name: "UDON-SKP Automana",
        value: "udon"
    },
    {
        category: "AssaultRifle",
        name: "VK-74 FLETLINE",
        value: "fletline"
    },
    {
        category: "AssaultRifle",
        name: "Warewolf AR",
        value: "warewolf"
    },
    {
        category: "AssaultRifle",
        name: "Warmonger",
        value: "warmonger"
    },
    {
        category: "AssaultRifle",
        name: "WOUND Auto Rifle",
        value: "wound"
    },
    {
        category: "AssaultRifle",
        name: "XR-4 Auto Rifle",
        value: "xr4"
    },
    {
        category: "SMG",
        name: "Anarchy",
        value: "anarchy"
    },
    {
        category: "SMG",
        name: "Brawler Burst PDW",
        value: "brawler"
    },
    {
        category: "SMG",
        name: "Brigit, the bringer of flame",
        value: "Brigit"
    },
    {
        category: "SMG",
        name: "Demonflare",
        value: "demonflare"
    },
    {
        category: "SMG",
        name: "Doorknocker",
        value: "door"
    },
    {
        category: "SMG",
        name: "Drumming Victory",
        value: "cu_victory"
    },
    {
        category: "SMG",
        name: "Envy",
        value: "Envy"
    },
    {
        category: "SMG",
        name: "FW-5 Azuris PDW",
        value: "azuris"
    },
    {
        category: "SMG",
        name: "Gabriel PDW",
        value: "Gabriel"
    },
    {
        category: "SMG",
        name: "GG36 SMG",
        value: "gg36"
    },
    {
        category: "SMG",
        name: "H.E.A.T 5",
        value: "heat5"
    },
    {
        category: "SMG",
        name: "Hystis 535",
        value: "Hystis"
    },
    {
        category: "SMG",
        name: "K92 Tiamat",
        value: "tiamat"
    },
    {
        category: "SMG",
        name: "K95 Basilisk",
        value: "Basilisk"
    },
    {
        category: "SMG",
        name: "Lynn SMG",
        value: "lynn"
    },
    {
        category: "SMG",
        name: "Nox SMG",
        value: "nox"
    },
    {
        category: "SMG",
        name: "P9000 Mana PDW",
        value: "P9000"
    },
    {
        category: "SMG",
        name: "PP90N1 Dummy's",
        value: "pp90n1"
    },
    {
        category: "SMG",
        name: "Rogue's Shooter",
        value: "rogues"
    },
    {
        category: "SMG",
        name: "Silent Treatment",
        value: "Silent"
    },
    {
        category: "SMG",
        name: "The Bumblebee",
        value: "bumblebee"
    },
    {
        category: "SMG",
        name: "Thousand Cut",
        value: "thousand"
    },
    {
        category: "SMG",
        name: "Type6 Hicycle PDW",
        value: "type6"
    },
    {
        category: "SMG",
        name: "Victory",
        value: "victory"
    },
    {
        category: "SMG",
        name: "VMT-2 Mice SMG",
        value: "vmt"
    },
    {
        category: "SMG",
        name: "Windmaker",
        value: "windmaker"
    },
    {
        category: "SMG",
        name: "X-1 Ammit",
        value: "Ammit"
    },
    {
        category: "SMG",
        name: "XS-5 Nether Beatle",
        value: "netherbeatle"
    },
    {
        category: "SMG",
        name: "XS-21 Pandora PDW",
        value: "pandora"
    },
    {
        category: "Shotgun",
        name: "AA122 Mana Shotgun",
        value: "aa12"
    },
    {
        category: "Shotgun",
        name: "Bazl's Blunderbuss",
        value: "bazl"
    },
    {
        category: "Shotgun",
        name: "Black Thunder",
        value: "blackThunder"
    },
    {
        category: "Shotgun",
        name: "Blondie[散弾]",
        value: "blond"
    },
    {
        category: "Shotgun",
        name: "Blondie[フラグ]",
        value: "blond2"
    },
    {
        category: "Shotgun",
        name: "Crescent of Asha",
        value: "Asha"
    },
    {
        category: "Shotgun",
        name: "Crimson",
        value: "Crimson"
    },
    {
        category: "Shotgun",
        name: "E420 Hydra",
        value: "Hydra"
    },
    {
        category: "Shotgun",
        name: "F-85 The Raven",
        value: "raven"
    },
    {
        category: "Shotgun",
        name: "Gauss Rifle",
        value: "cgauss"
    },
    {
        category: "Shotgun",
        name: "Ghahr's Shotgun",
        value: "Ghahr"
    },
    {
        category: "Shotgun",
        name: "Howard's Double Barrel",
        value: "howard"
    },
    {
        category: "Shotgun",
        name: "K-RAR Mana Splasher",
        value: "krar"
    },
    {
        category: "Shotgun",
        name: "LF-14 Auto Shotgun",
        value: "lf14"
    },
    {
        category: "Shotgun",
        name: "Lios Double Barrel",
        value: "lios"
    },
    {
        category: "Shotgun",
        name: "Lusha's Harp",
        value: "harp"
    },
    {
        category: "Shotgun",
        name: "M890 Beanshot",
        value: "m890"
    },
    {
        category: "Shotgun",
        name: "Ogrehunt",
        value: "ogrehunt"
    },
    {
        category: "Shotgun",
        name: "Ogrehunt Slug",
        value: "sogrehunt"
    },
    {
        category: "Shotgun",
        name: "OgreKiller",
        value: "cu_ogrehunt"
    },
    {
        category: "Shotgun",
        name: "Pianis Mana Splasher",
        value: "Pianis"
    },
    {
        category: "Shotgun",
        name: "Pianis Mana Splasher Slug",
        value: "sPianis"
    },
    {
        category: "Shotgun",
        name: "Sabertooth Shotgun",
        value: "sabertooth"
    },
    {
        category: "Shotgun",
        name: "SG80 Evicserate",
        value: "evis"
    },
    {
        category: "Shotgun",
        name: "Spacemaker",
        value: "spacemaker"
    },
    {
        category: "Shotgun",
        name: "STUD Shotgun",
        value: "stud"
    },
    {
        category: "Shotgun",
        name: "The 1980",
        value: "1990"
    },
    {
        category: "Shotgun",
        name: "The Extra",
        value: "extra"
    },
    {
        category: "Shotgun",
        name: "The Thunder",
        value: "Thunder"
    },
    {
        category: "Shotgun",
        name: "Troublemaker Shotgun",
        value: "trouble"
    },
    {
        category: "LMG",
        name: "Brutus MG",
        value: "Brutus"
    },
    {
        category: "LMG",
        name: "GILT Hypercycle LMG[高レート]",
        value: "gilt"
    },
    {
        category: "LMG",
        name: "GILT Hypercycle LMG[高精度]",
        value: "gilt2"
    },
    {
        category: "LMG",
        name: "Gorgon 114 LMG",
        value: "Gorgon"
    },
    {
        category: "LMG",
        name: "Life Barrage Wand",
        value: "lifebarrage"
    },
    {
        category: "LMG",
        name: "M666 Spatfire",
        value: "spit"
    },
    {
        category: "LMG",
        name: "M757 Cleaner LMG",
        value: "M757"
    },
    {
        category: "LMG",
        name: "M9190 Beehive",
        value: "bee"
    },
    {
        category: "LMG",
        name: "MG-80 Heavy Machinegun",
        value: "MG80"
    },
    {
        category: "LMG",
        name: "MK4 Machine Gun",
        value: "mk4"
    },
    {
        category: "LMG",
        name: "MK7 Baretooth",
        value: "baretooth"
    },
    {
        category: "LMG",
        name: "MK18 Leaf Cleaner",
        value: "leafcleaner"
    },
    {
        category: "LMG",
        name: "PBP-14",
        value: "PBP14"
    },
    {
        category: "LMG",
        name: "Silverstein MG",
        value: "silverstein"
    },
    {
        category: "LMG",
        name: "TT4 Nefaris LMG",
        value: "nefaris"
    },
    {
        category: "LMG",
        name: "TT4 Nefaris MMG",
        value: "cu_nefaris"
    },
    {
        category: "LMG",
        name: "	TT66 Doom LMG",
        value: "TT666"
    },
    {
        category: "LMG",
        name: "XL9 Mozer",
        value: "mozer"
    },
    {
        category: "SniperRifle",
        name: "Barnett the Deathbringer",
        value: "Barnett"
    },
    {
        category: "SniperRifle",
        name: "Car98k",
        value: "car98k"
    },
    {
        category: "SniperRifle",
        name: "Coldfang DMR",
        value: "Coldfang"
    },
    {
        category: "SniperRifle",
        name: "Colubrid .75 CAL",
        value: "colubrid"
    },
    {
        category: "SniperRifle",
        name: "Devil's Whisper",
        value: "devilswhisper"
    },
    {
        category: "SniperRifle",
        name: "EFX Photon Compressor",
        value: "photon"
    },
    {
        category: "SniperRifle",
        name: "Endseeker",
        value: "endseeker"
    },
    {
        category: "SniperRifle",
        name: "ENT Sniper Rifle",
        value: "ent"
    },
    {
        category: "SniperRifle",
        name: "Flying Serpent",
        value: "flyingserpent"
    },
    {
        category: "SniperRifle",
        name: "Graveless DMR",
        value: "graveless"
    },
    {
        category: "SniperRifle",
        name: "Helheim DMR",
        value: "Helheim"
    },
    {
        category: "SniperRifle",
        name: "Horizon Rifle",
        value: "horizon"
    },
    {
        category: "SniperRifle",
        name: "Hunting Rifle",
        value: "chunt"
    },
    {
        category: "SniperRifle",
        name: "Ironbark Sniper Rifle",
        value: "ironbark"
    },
    {
        category: "SniperRifle",
        name: "Knightfall",
        value: "Knightfall"
    },
    {
        category: "SniperRifle",
        name: "Lisrithe, Life and the Eternal Rest",
        value: "Lisrithe"
    },
    {
        category: "SniperRifle",
        name: "Lisrithe's Wish",
        value: "Lis2"
    },
    {
        category: "SniperRifle",
        name: "M850 Smogg Sniper Rifle",
        value: "smog"
    },
    {
        category: "SniperRifle",
        name: "Mark-7 EBR",
        value: "mark7"
    },
    {
        category: "SniperRifle",
        name: "Mellowwood",
        value: "mellowwood"
    },
    {
        category: "SniperRifle",
        name: "Minerva Anti-Matter Rifle",
        value: "minerva"
    },
    {
        category: "SniperRifle",
        name: "Moon Night",
        value: "moonnight"
    },
    {
        category: "SniperRifle",
        name: "Phobia SR-22",
        value: "phobia"
    },
    {
        category: "SniperRifle",
        name: "Pierce Sniper Rifle",
        value: "pierce"
    },
    {
        category: "SniperRifle",
        name: "PMG Hékate Ⅱ",
        value: "hekate"
    },
    {
        category: "SniperRifle",
        name: "Rabbit Silencer",
        value: "Rabbitsilencer"
    },
    {
        category: "SniperRifle",
        name: "RSK Sniper Rifle",
        value: "rsk"
    },
    {
        category: "SniperRifle",
        name: "Shadowvein",
        value: "shadowvein"
    },
    {
        category: "SniperRifle",
        name: "Skullcrusher",
        value: "skullcrusher"
    },
    {
        category: "SniperRifle",
        name: "Skullcrusher QD",
        value: "cu_skullcrusher"
    },
    {
        category: "SniperRifle",
        name: "Syndra's Bow",
        value: "syndra"
    },
    {
        category: "SniperRifle",
        name: "The Zomzeozy",
        value: "zom"
    },
    {
        category: "SniperRifle",
        name: "Third Eye DMR",
        value: "thirdeye"
    },
    {
        category: "SniperRifle",
        name: "Trueflight Bow",
        value: "true"
    },
    {
        category: "SniperRifle",
        name: "UDED Rail Rifle",
        value: "uded"
    },
    {
        category: "SniperRifle",
        name: "Wingmen",
        value: "wingmen"
    },
    {
        category: "Carbine",
        name: "Bayou Short Rifle",
        value: "Bayou"
    },
    {
        category: "Carbine",
        name: "Bayou Short Rifle[アタッチメント]",
        value: "Bayou_at"
    },
    {
        category: "Carbine",
        name: "CARB-7",
        value: "carb7"
    },
    {
        category: "Carbine",
        name: "CARB-7[アタッチメント]",
        value: "carb7_at"
    },
    {
        category: "Carbine",
        name: "Chimaera CQB",
        value: "Chimaera"
    },
    {
        category: "Carbine",
        name: "Chimaera CQB[アタッチメント]",
        value: "Chimaera_at"
    },
    {
        category: "Carbine",
        name: "ECR-11 Carbine",
        value: "ecr11"
    },
    {
        category: "Carbine",
        name: "ECR-11 Carbine[アタッチメント]",
        value: "carb7_at"
    },
    {
        category: "Carbine",
        name: "Fiendsbreath Carbine",
        value: "fiendsbreath"
    },
    {
        category: "Carbine",
        name: "Fiendsbreath Carbine[アタッチメント]",
        value: "fiend_st"
    },
    {
        category: "Carbine",
        name: "Gritt Carbine",
        value: "Gritt"
    },
    {
        category: "Carbine",
        name: "Gritt Carbine[アタッチメント]",
        value: "Gritt_at"
    },
    {
        category: "Carbine",
        name: "Hellhound Short Rifle",
        value: "hellhound"
    },
    {
        category: "Carbine",
        name: "Hellhound Short Rifle[アタッチメント]",
        value: "hell_at"
    },
    {
        category: "Carbine",
        name: "Maelstrom Carbine",
        value: "Maelstrom"
    },
    {
        category: "Carbine",
        name: "Maelstrom Carbine[アタッチメント]",
        value: "maelstrom_at"
    },
    {
        category: "Carbine",
        name: "Maelstrom CQB",
        value: "cu_Maelstrom"
    },
    {
        category: "Carbine",
        name: "Maelstrom CQB[アタッチメント]",
        value: "cu_maelstrom_at"
    },
    {
        category: "Carbine",
        name: "Shepherd 055",
        value: "Shepherd"
    },
    {
        category: "Carbine",
        name: "Shepherd 055[アタッチメント]",
        value: "Shepherd_at"
    },
    {
        category: "Carbine",
        name: "Varg G5",
        value: "Varg"
    },
    {
        category: "Carbine",
        name: "Varg G5[アタッチメント]",
        value: "Varg_at"
    },
    {
        category: "Special",
        name: "AWR Gatling Laser",
        value: "awr"
    },
    {
        category: "Special",
        name: "Brugo Homing Missile",
        value: "Brugo"
    },
    {
        category: "Special",
        name: "F52 Ifrit Pigcooker",
        value: "ifrit"
    },
    {
        category: "Special",
        name: "F60 Ignis Firestarter",
        value: "ignis"
    },
    {
        category: "Special",
        name: "GL3 Handy Mortar",
        value: "mortar"
    },
    {
        category: "Special",
        name: "GL90 Warbringer",
        value: "warbringer"
    },
    {
        category: "Special",
        name: "GL 88 Carpet Bomber",
        value: "carpet"
    },
    {
        category: "Special",
        name: "Golembreaker",
        value: "golembreaker"
    },
    {
        category: "Special",
        name: "Hi-K0 Launcher",
        value: "hikolaunch"
    },
    {
        category: "Special",
        name: "Hi-K0 Launcher[Stardust]",
        value: "2hikolaunch"
    },
    {
        category: "Special",
        name: "Hi-K0 Launcher 2021",
        value: "hiko2021"
    },
    {
        category: "Special",
        name: "HLL Magic Launcher",
        value: "HLL"
    },
    {
        category: "Special",
        name: "Jikill Sonic Launcher",
        value: "jikill"
    },
    {
        category: "Special",
        name: "Kali Magic Launcher",
        value: "kali"
    },
    {
        category: "Special",
        name: "Keg Bomb",
        value: "keg"
    },
    {
        category: "Special",
        name: "Kerkox Mana Scroller",
        value: "Kerkox"
    },
    {
        category: "Special",
        name: "Love Launcher",
        value: "love"
    },
    {
        category: "Special",
        name: "MK20 Mana Waster",
        value: "minigun"
    },
    {
        category: "Special",
        name: "PKB-8004",
        value: "pkb"
    },
    {
        category: "Special",
        name: "Princess Crossbow",
        value: "princess"
    },
    {
        category: "Special",
        name: "Ragnis Rocket Launcher",
        value: "ragnis"
    },
    {
        category: "Special",
        name: "Rania's Chocolate Javelin",
        value: "javelin2"
    },
    {
        category: "Special",
        name: "Rania's Crossbow",
        value: "Rania"
    },
    {
        category: "Special",
        name: "Rania's Javelin",
        value: "javelin"
    },
    {
        category: "Special",
        name: "Rubber Shuriken",
        value: "rubbershuriken"
    },
    {
        category: "Special",
        name: "S.O.L Rocket Launcher",
        value: "sol"
    },
    {
        category: "Special",
        name: "Spear of Judgement",
        value: "judgementspear"
    },
    {
        category: "Special",
        name: "T-X01 Anti-matter Missile",
        value: "antitank"
    },
    {
        category: "Special",
        name: "T-X Homing Nuke",
        value: "TX"
    },
    {
        category: "Special",
        name: "Tempest Grenade Launcher",
        value: "tempest"
    },
    {
        category: "Special",
        name: "The Bazooka",
        value: "cbazooka"
    },
    {
        category: "Special",
        name: "The Deathmachine",
        value: "deathmachine"
    },
    {
        category: "Special",
        name: "The Eliminator",
        value: "eliminator"
    },
    {
        category: "Special",
        name: "TN-43 Remote TNT",
        value: "remote"
    },
    {
        category: "Special",
        name: "Trauma",
        value: "trauma"
    },
    {
        category: "Special",
        name: "Tigerhorse",
        value: "cu_trauma"
    },
    {
        category: "Special",
        name: "TX-500 Amber Cannon[直進]",
        value: "amber"
    },
    {
        category: "Special",
        name: "TX-500 Amber Cannon[ホーミング]",
        value: "amber2"
    },
    {
        category: "Special",
        name: "Vateth Homing Missile",
        value: "Vateth"
    },
    {
        category: "Special",
        name: "Vely's Party Cracker",
        value: "Velys"
    },
    {
        category: "Staves",
        name: "Âconi, Fifth Element of the Arctic",
        value: "lame"
    },
    {
        category: "Staves",
        name: "Âconi's Wistfulness[空爆]",
        value: "lame21"
    },
    {
        category: "Staves",
        name: "Âconi's Wistfulness[射撃]",
        value: "lame22"
    },
    {
        category: "Staves",
        name: "Arcane Bomb",
        value: "arcaneexplosion"
    },
    {
        category: "Staves",
        name: "Breir's Javelin",
        value: "breir"
    },
    {
        category: "Staves",
        name: "Enchanted Rod",
        value: "enchantedrod"
    },
    {
        category: "Staves",
        name: "Flame Rod",
        value: "flamerod"
    },
    {
        category: "Staves",
        name: "Grim Reaper",
        value: "grimreaper"
    },
    {
        category: "Staves",
        name: "Ice Rod",
        value: "icerod"
    },
    {
        category: "Staves",
        name: "Kyugetu",
        value: "kyugetu"
    },
    {
        category: "Staves",
        name: "Nahhra, Devourer of Worlds",
        value: "Nahhra"
    },
    {
        category: "Staves",
        name: "Phantom Bolt",
        value: "Phantom"
    },
    {
        category: "Staves",
        name: "Pumpkin Wand",
        value: "pumpkinwand"
    },
    {
        category: "Staves",
        name: "Shadow Bolt",
        value: "cu_Phantom"
    },
    {
        category: "Staves",
        name: "Rod",
        value: "rod"
    },
    {
        category: "Staves",
        name: "Staff of Barrage",
        value: "sob"
    },
    {
        category: "Staves",
        name: "Staff of Cursing",
        value: "soc"
    },
    {
        category: "Staves",
        name: "Staff of Eda",
        value: "eda"
    },
    {
        category: "Staves",
        name: "Staff of Elna",
        value: "soe"
    },
    {
        category: "Staves",
        name: "Staff of Glorious",
        value: "sog"
    },
    {
        category: "Staves",
        name: "Staff of Release",
        value: "sor"
    },
    {
        category: "Staves",
        name: "Staff of Sorrow",
        value: "sorrow"
    },
    {
        category: "Staves",
        name: "Staff of Spirit",
        value: "sos"
    },
    {
        category: "Staves",
        name: "Staff of Vesta",
        value: "Vesta"
    },
    {
        category: "Staves",
        name: "Staff of Zisca",
        value: "Zisca"
    },
    {
        category: "Staves",
        name: "Worldender",
        value: "worldender"
    },
    {
        category: "Staves",
        name: "Yuki Kaze",
        value: "yuki"
    },
    {
        category: "Secondary",
        name: "Alien Phaser",
        value: "alienpistol"
    },
    {
        category: "Secondary",
        name: "Alpha Phaser",
        value: "alphaphaser"
    },
    {
        category: "Secondary",
        name: "Arda Sure Shot",
        value: "arda"
    },
    {
        category: "Secondary",
        name: "Aries",
        value: "aries"
    },
    {
        category: "Secondary",
        name: "Arizona",
        value: "arizona"
    },
    {
        category: "Secondary",
        name: "Beta Phaser",
        value: "betaphaser"
    },
    {
        category: "Secondary",
        name: "Book of Mother Earth",
        value: "bookofmother"
    },
    {
        category: "Secondary",
        name: "Desert Falcon",
        value: "desertfalcon"
    },
    {
        category: "Secondary",
        name: "Desertdog MMG",
        value: "Desertdog"
    },
    {
        category: "Secondary",
        name: "Desolation",
        value: "deso"
    },
    {
        category: "Secondary",
        name: "Eclipse",
        value: "Eclipse"
    },
    {
        category: "Secondary",
        name: "Forty Three Pistol",
        value: "43"
    },
    {
        category: "Secondary",
        name: "G7 Self Defence",
        value: "g7"
    },
    {
        category: "Secondary",
        name: "Gadrec's Sawed-off",
        value: "gadrec"
    },
    {
        category: "Secondary",
        name: "GL1 Grenade Shooter",
        value: "GL1"
    },
    {
        category: "Secondary",
        name: "GL4 Compact Launcher",
        value: "GL4"
    },
    {
        category: "Secondary",
        name: "GL99 Micro Missile Launcher",
        value: "gl99"
    },
    {
        category: "Secondary",
        name: "Golden One",
        value: "goldenone"
    },
    {
        category: "Secondary",
        name: "Golden TK[通常]",
        value: "goldtk"
    },
    {
        category: "Secondary",
        name: "Golden TK[サイレンサー]",
        value: "goldtk2"
    },
    {
        category: "Secondary",
        name: "Golden West",
        value: "gold"
    },
    {
        category: "Secondary",
        name: "Golden West 2022",
        value: "gold2"
    },
    {
        category: "Secondary",
        name: "H1 Goblin Hunter",
        value: "goblin"
    },
    {
        category: "Secondary",
        name: "Harden's Blunderbuss",
        value: "Harden"
    },
    {
        category: "Secondary",
        name: "Joker",
        value: "joker"
    },
    {
        category: "Secondary",
        name: "Karc-8",
        value: "Karc"
    },
    {
        category: "Secondary",
        name: "Limewillow",
        value: "limewillow"
    },
    {
        category: "Secondary",
        name: "Lonewolf",
        value: "lonewolf"
    },
    {
        category: "Secondary",
        name: "Loveling♥",
        value: "lovelove"
    },
    {
        category: "Secondary",
        name: "M-P4 Battlecraft Pistol",
        value: "battlecraft"
    },
    {
        category: "Secondary",
        name: "Modernbick Shotgun",
        value: "modern"
    },
    {
        category: "Secondary",
        name: "Moria Nagan",
        value: "morianagan"
    },
    {
        category: "Secondary",
        name: "N1 Hidden Gun",
        value: "hiddengun"
    },
    {
        category: "Secondary",
        name: "Old West",
        value: "oldwest"
    },
    {
        category: "Secondary",
        name: "Old West Fanning Shot",
        value: "oldf"
    },
    {
        category: "Secondary",
        name: "Old West Triple Action",
        value: "old3"
    },
    {
        category: "Secondary",
        name: "P5 Auto Pistol",
        value: "p5"
    },
    {
        category: "Secondary",
        name: "P77 Quad Action",
        value: "quadaction"
    },
    {
        category: "Secondary",
        name: "P-20 Stormcaller",
        value: "stormcaller"
    },
    {
        category: "Secondary",
        name: "PocketCannon",
        value: "pocketcannon"
    },
    {
        category: "Secondary",
        name: "Quickcleave",
        value: "Quickcleave"
    },
    {
        category: "Secondary",
        name: "Red Mongoose",
        value: "redmongoose"
    },
    {
        category: "Secondary",
        name: "Silver Old West",
        value: "olds"
    },
    {
        category: "Secondary",
        name: "Sixfinger",
        value: "sixfinger"
    },
    {
        category: "Secondary",
        name: "Sling Shot",
        value: "demonpower"
    },
    {
        category: "Secondary",
        name: "TC5 Magicka",
        value: "tc5"
    },
    {
        category: "Secondary",
        name: "The Etna",
        value: "etna"
    },
    {
        category: "Secondary",
        name: "UZH Portable SMG",
        value: "uzh"
    },
    {
        category: "Secondary",
        name: "Vunnaq",
        value: "vunna"
    },
    {
        category: "Secondary",
        name: "Vunnaq Fullauto",
        value: "vunnaf"
    },
    {
        category: "Secondary",
        name: "Wandrak Hand Cannon",
        value: "wardrak"
    },
    {
        category: "Secondary",
        name: "Water Pistol",
        value: "waterpistol"
    },
    {
        category: "Secondary",
        name: "Wildville ‘75",
        value: "Wildville"
    },
    {
        category: "Secondary",
        name: "",
        value: "thetester"
    },
    {
        category: "Secondary",
        name: "",
        value: "thetester2"
    },
    {
        category: "Melee",
        name: "Aodhlugh, Creator of Volcanoes",
        value: "Aodhlugh"
    },
    {
        category: "Melee",
        name: "Az'gan, The matter of darkness[近接]",
        value: "azz"
    },
    {
        category: "Melee",
        name: "Az'gan, The matter of darkness[射撃]",
        value: "azz_at"
    },
    {
        category: "Melee",
        name: "Bloody Axe",
        value: "bloodyaxe"
    },
    {
        category: "Melee",
        name: "Broken Dahlia",
        value: "dahlia"
    },
    {
        category: "Melee",
        name: "Cultist Knife",
        value: "cultist"
    },
    {
        category: "Melee",
        name: "Gravity Axe",
        value: "gravity"
    },
    {
        category: "Melee",
        name: "kanabou",
        value: "kanabou"
    },
    {
        category: "Melee",
        name: "Manablade",
        value: "manablade"
    },
    {
        category: "Melee",
        name: "Mine Uchi",
        value: "mineuchi"
    },
    {
        category: "Melee",
        name: "Ninja Kunai",
        value: "kunai"
    },
    {
        category: "Melee",
        name: "Nyr, Thunderblade of Oath Keeper",
        value: "Nyr"
    },
    {
        category: "Melee",
        name: "SA-SA",
        value: "sasa"
    },
    {
        category: "Melee",
        name: "Shadowfang",
        value: "Shadowfang"
    },
    {
        category: "Melee",
        name: "StarBlade",
        value: "starblade"
    },
    {
        category: "Melee",
        name: "Sword of Faith",
        value: "swordoffaith"
    },
    {
        category: "Melee",
        name: "The Brute",
        value: "Brute"
    },
    {
        category: "Melee",
        name: "The Punisher",
        value: "punisher"
    },
    {
        category: "Melee",
        name: "Valhalla",
        value: "Valhalla"
    },
    {
        category: "Melee",
        name: "Warblade of Thanatos",
        value: "thanatos"
    },
    {
        category: "Melee",
        name: "Windsong Polearm",
        value: "Windsong"
    },
    {
        category: "Melee",
        name: "Witch's Broom",
        value: "broom"
    },
    {
        category: "Melee",
        name: "Xeg'then, Initiator of Sundown",
        value: "xeg"
    },
    {
        category: "Melee",
        name: "Zan Getsu",
        value: "zangetsu"
    }
]
//EnchData
//0Dmg 1ProbLv1 2ProbLv2 3ProbLv3 4Cooldown 5DefLv1 6DefLv2 7DefLv3 8DefProbLv1 9DefProbLv2 10DefProbLv3
//    Name              = [Dmg,DmgLv     ,     , CD,   DefLv  ,    , DefProbLv     , ManaLv , DodgeLv,      ,    ]
const Sunfire           = [3,  0.67, 0.72, 0.77, 0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const DemonPower        = [4,  0.35, 0.4,  0.45, 0,    1, 1.5,  2,   1,   1,    1,   0, 0, 0, 0,    0,     0,    ]
const SiphonLife        = [2,  0.4,  0.5,  0.6,  0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const DeathsRuin        = [6,  0.55, 0.6,  0.65, 0.15, 0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const ArcaneBrilliance  = [3,  0.35, 0.45, 0.55, 0.2,  0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const NorthernWind      = [5,  0.45, 0.5,  0.55, 0.1,  0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const FlexibleResonance = [4,  0.65, 0.70, 0.75, 0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0.2,  0.225, 0.25, ]
const PhoenixFlame      = [10, 0.05, 0.06, 0.07, 0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const ShadowStrike0     = [6,  0.7,  0.75, 0.8,  0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const ShadowStrike1     = [2,  0.7,  0.75, 0.8,  0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const ShadowStrike2     = [2,  0.4,  0.45, 0.5,  0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const ShieldWall        = [0,  0,    0,    0,    0,    2, 2.25, 2.5, 1,   1,    1,   0, 0, 0, 0,    0,     0,    ]
const Evershade         = [0,  0,    0,    0,    0,    1, 1.5,  2,   1,   1,    1,   0, 0, 0, 0,    0,     0,    ]
const ZephyrsBlessing   = [0,  0,    0,    0,    0,    2, 2,    2,   0.6, 0.65, 0.7, 0, 0, 0, 0.13, 0.14,  0.15, ]
const ManaFountain      = [0,  0,    0,    0,    0,    0, 0,    0,   0,   0,    0,   4, 5, 6, 0,    0,     0,    ]
const NightStalker      = [0,  0,    0,    0,    0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0.08, 0.09,  0.1,  ]
const VictoryRush       = [0,  0,    0,    0,    0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
//AEdata 0Dmg 1Prob 2Dodge
const Bc = [7, 1, 0]
const Eo = [6, 1, 0]
const Mc = [1, 1, 0]
const Cf = [4, 1, 0]
const Mb = [5, 1, 0]
const Ws = [2, 1, 0]
const Sd = [20, 0.05, 0]
const Mfl0 = [1, 1, 0]
const Mfl1 = [2, 1, 0]
const Mfl2 = [3, 1, 0]
const Eod = [100, 1, 0]
const Ff = [0, 0, 0.25]
const Is = [0, 0, 0.15]
//Armor 0HP 1Atk 2Def 3CC 4Mana 5Stamina 6 MaxSta 7Regene
const PChest = [0, 0, 2, 0, 0, 0, 0]
const PHand = [0, 1, 0, 0]
const PBoots = [0, 0, 0, 0, 0, 1]
const PSet = [8, 0, 0, 0, 0, 0, 0, 0]
const CChest = [2, 0, 0, 0, 0, 0, 0]
const CHand = [0, 0, 1, 0]
const CBoots = [0, 0, 0, 0, 0, 1]
const CSet = [0, 0, 0, 0, 0, 0, 0, 1]
const GChest = [4, 0, 0, 0, 0, 0, 0]
const GHand = [0, 2, 0, 0]
const GBoots = [0, 0, 1, 0, 0, 0]
const GSet = [0, 0, 2, 0, 0, 0, 0, 0]
const IChest = [4, 0, 0, 0, 0, 0, 0] 
const IHand = [0, 0, 0, 0.05]
const IBoots = [0, 0, 0, 0, 1, 0]
const ISet = [0, 0, 0, 0.1, 0, 0, 0, 0]
const FChest = [0, 0, 6, 0, 0, 0, -7]
const SChest = [0, 0, 6, 0, 0, 0, 0]
//Elixir 0Dmg 1Prob 2Wt 3HP 4Dodge 5Mana
const Elixir = [0, 0, 0, 0, 0, 0]
const ECombust = [10 ,0.075, 0, 0, 0, 0]
const ECombust_Sf = [10, 0.15, 0, 0, 0, 0] 
const ECritical = [3, 0.5, 0, 0, 0, 0]
const EFortitude = [0, 0, 0, 12, 0, 0]
const EPumpkinCandy = [0, 0, 0, 14, 0, 0]
const EReflex = [0, 0, 0, 0, 0.15, 0]
const ESpeed = [0, 0, 0.15, 0, 0, 0]
const EVoid = [4, 0.75, 0, 0, 0, 0]
const EWisdom = [0, 0, 0, 0, 0, 0.25]