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
const Sunfire = [3, 0.67, 0.72, 0.77, 0]
const DemonPower = [4, 0.35, 0.4, 0.45, 0]
const SiphonLife = [2, 0.4, 0.5, 0.6, 0]
const DeathsRuin = [6, 0.55, 0.6, 0.65, 0.15]
const ArcaneBrilliance = [3, 0.35, 0.45, 0.55, 0.2]
const NorthernWind = [5, 0.45, 0.5, 0.55, 0.1]
const FlexibleResonance = [4, 0.65, 0.70, 0.75, 0]
const PhoenixFlame = [10, 0.05, 0.06, 0.07, 0]
const ShadowStrike0 = [6, 0.7, 0.75, 0.8, 0]
const ShadowStrike1 = [2, 0.7, 0.75, 0.8, 0]
const ShadowStrike2 = [2, 0.4, 0.45, 0.5, 0]
//AEdata
const BcDmg = 7
const EoDmg = 6
const McDmg = 1
const CfDmg = 4
const MbDmg = 5
const WsDmg = 2
const SdAverageDmg = 1
const SdHighestDmg = 20
const MflDmg0 = 1;
const MflDmg1 = 2;
const MflDmg2 = 3;
const EodDmg = 100
const Result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const Weapon = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const Mod = [0, 0, 0, 0, 0, 0, 0, 0]
const EnchDmg = [0, 0, 0, 0, 0, 0];
const Ae = [0, 0, 0]
const Addon = [0, 0, 0, 0, 0, 1]
const EnchActive =[0, 0];
const MpDmg = [0.25, 0.5, 1.0, 1.5]
const HbAverageDmg = [0.4, 0.8, 1.2, 1.6]
const HbHighestDmg = [2, 4, 6, 8]
const EmCapacity = [2, 4, 6, 10]
const QpReload = [-4, -8, -12, -16]
const LkWeight = [0.004, 0.005, 0.010, 0.015]
const SsaDmg = [1.25, 1.5, 1.75, 2.2]
const SbDmg = [7, 8, 9, 10]
const _pathAr = "maps/1_AR.json"
const _pathArp = "maps/1_AR_CSP.json"
const _pathSmg = "maps/3_SMG.json"
const _pathSmgp = "maps/3_SMG_CSP.json"
const _pathLmg = "maps/9_LMG.json"
const _pathLmgp = "maps/9_LMG_CSP.json"
const _pathSr = "maps/5_SR.json"
const _pathSrp = "maps/5_SR_CSP.json"
const _pathCar = "maps/12_CARBINE.json"
const _pathCarp = "maps/12_CARBINE_CSP.json"
const _pathExpl = "maps/7_EXPLOSIVE.json"
const _pathExplp = "maps/7_EXPLOSIVE_CSP.json"
const _pathSec = "maps/6_PISTOL.json"
const _pathSecp = "maps/6_PISTOL_CSP.json"
const _pathMelee = "maps/4_SG.json"
const _pathMeleep = "maps/4_SG_CSP.json"
let jsondata
let jsondata2
let _objAr
let _objArp
let _objSmg
let _objSmgp
let _objLmg
let _objLmgp
let _objSr
let _objSrp
let _objCar
let _objCarp
let _objExpl
let _objExplp
let _objSec
let _objSecp
let _objMelee
let _objMeleep

const fetchAll = (urls) => Promise.all(urls.map(url => fetch(url, {
    method: "GET"
}).then(response => {
    if (!response.ok) throw new Error("Network response was not ok")
    return response.json()
})))

const render = () => {
    let TypeKey = document.getElementById("TypeForm").TypeSelect.value
    let WeaponKey = document.getElementById("WeaponForm").WeaponSelect.value
    let ModKey = document.getElementById("ModForm").ModSelect.value
    if (TypeKey === "none") {
        jsondata ='none';
        jsondata2 ='none';
    }else if(WeaponKey === 'graveless'||WeaponKey === 'Helheim'||WeaponKey === 'horizon'||WeaponKey === 'thirdeye'||WeaponKey === 'Coldfang'){
        jsondata = _objSr
        jsondata2 = _objArp
    }else if(WeaponKey === 'minigun'||WeaponKey === 'awr'){
        jsondata = _objExpl
        jsondata2 = _objLmgp
    } else if (TypeKey === "AssaultRifle") {
        jsondata = _objAr
        jsondata2 = _objArp
    } else if (TypeKey === "SMG" || TypeKey === "Shotgun") {
        jsondata = _objSmg
        jsondata2 = _objSmgp
    } else if (TypeKey === "LMG") {
        jsondata = _objLmg
        jsondata2 = _objLmgp
    } else if (TypeKey === "SniperRifle") {
        jsondata = _objSr
        jsondata2 = _objSrp
    } else if (TypeKey === "Carbine") {
        jsondata = _objCar
        jsondata2 = _objCarp
    } else if (TypeKey === "Special" || TypeKey === "Staves") {
        jsondata = _objExpl
        jsondata2 = _objExplp
    } else if (TypeKey === "Secondary") {
        jsondata = _objSec
        jsondata2 = _objSecp
    } else if (TypeKey === "Melee") {
        jsondata = _objMelee
        jsondata2 = _objMeleep
    }
    let WeaponReloadStyle = 0
    let WeaponRateKey = 0
    let WeaponAdsKey = 0
    let WeaponCcKey = 0
    let WeaponCdKey = 0
    let WeaponC10mKey = 0
    let WeaponCmaxKey = 0
    let WeaponDmg = 0
    let WeaponHsBonus = 0
    let WeaponReloadAmount = 0
    let WeaponReloadDuration = 0
    let WeaponPellets = 0
    let WeaponSpread = 0
    let WeaponWeight = 0
    let WeaponExplDmg = 0
    let WeaponExplRadius = 0
    if (!(WeaponKey === "none" || jsondata == 'none')) {
        //リロード配列の処理
        if(typeof jsondata[WeaponKey]["Reload"] === 'undefined'){
            WeaponReloadStyle = 0
            WeaponReloadAmount = 0
            WeaponReloadDuration = 0
        }else{
            if(typeof jsondata[WeaponKey]["Reload"]["Reload_Bullets_Individually"] === 'undefined'){
                WeaponReloadStyle = 0
                document.getElementById("DisplayReloadStyle").textContent = null
            } else if (jsondata[WeaponKey]["Reload"]["Reload_Bullets_Individually"] === true) {
                WeaponReloadStyle = 1
                document.getElementById("DisplayReloadStyle").textContent = ("/発")
            } else {
                WeaponReloadStyle = 0
                document.getElementById("DisplayReloadStyle").textContent = null
            }
            WeaponReloadAmount = jsondata[WeaponKey]["Reload"]["Reload_Amount"]
            WeaponReloadDuration = jsondata[WeaponKey]["Reload"]["Reload_Duration"]
        };
        //セミ・バーストの処理
        const notFullauto = () => {
            if (typeof jsondata[WeaponKey]["Burstfire"] === 'undefined') {
                WeaponRateKey = 20 / jsondata[WeaponKey]["Shooting"]["Delay_Between_Shots"]
            } else if (jsondata[WeaponKey]["Burstfire"]["Enable"] === true) {
                WeaponRateKey = (20 / jsondata[WeaponKey]["Shooting"]["Delay_Between_Shots"]) * jsondata[WeaponKey]["Burstfire"]["Shots_Per_Burst"]
            } else {
                WeaponRateKey = 20 / jsondata[WeaponKey]["Shooting"]["Delay_Between_Shots"]
            }
        }
        //フルオートとか
        if (typeof jsondata[WeaponKey]["Fully_Automatic"] === "undefined") {
            notFullauto()
        } else if (jsondata[WeaponKey]["Fully_Automatic"]["Enable"] === true) {
            WeaponRateKey = jsondata[WeaponKey]["Fully_Automatic"]["Fire_Rate"] + 4
        } else {
            notFullauto()
        }
        if (typeof jsondata[WeaponKey]["Sneak"] === "undefined") {
            WeaponAdsKey = 0
        } else if (jsondata[WeaponKey]["Sneak"]["Enable"] === true) {
            WeaponAdsKey = jsondata[WeaponKey]["Sneak"]["Zoom_Bullet_Spread"]
        } else {
            WeaponAdsKey = 0
        }
        //Crit
        if (typeof jsondata[WeaponKey]["Critical_Hits"] === "undefined") {
            WeaponCcKey = 0
            WeaponCdKey = 0
        } else if (jsondata[WeaponKey]["Critical_Hits"]["Enable"] === true) {
            WeaponCcKey = jsondata[WeaponKey]["Critical_Hits"]["Chance"] / 100
            WeaponCdKey = jsondata[WeaponKey]["Critical_Hits"]["Bonus_Damage"]
        } else {
            WeaponCcKey = 0
            WeaponCdKey = 0
        }
        //ExplDmg
        if (typeof jsondata[WeaponKey]["Explosions"] === "undefined") {
            WeaponExplDmg = 0
            WeaponExplRadius = 0
        } else if (jsondata[WeaponKey]["Explosions"]["Enable"] === true) {
            WeaponExplDmg = jsondata[WeaponKey]["Explosions"]["Damage_Multiplier"]
            WeaponExplRadius = jsondata[WeaponKey]["Explosions"]["Explosion_Radius"]
        } else {
            WeaponExplDmg = 0
            WeaponExplRadius = 0
        }

        if (typeof jsondata[WeaponKey]["Damage_Based_On_Flight_Time"] === "undefined") {
            WeaponC10mKey = 0
            WeaponCmaxKey = 0
        } else if (jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Enable"] === true) {
            if (jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Maximum_Damage"] > 0 && jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Bonus_Damage_Per_Tick"] > 0) {
                WeaponC10mKey = (jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Bonus_Damage_Per_Tick"] / (jsondata[WeaponKey]["Shooting"]["Projectile_Speed"] / 10)) * 10
                WeaponCmaxKey = jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Maximum_Damage"]
            } else if (jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Maximum_Damage"] < 0 && jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Bonus_Damage_Per_Tick"] < 0) {
                WeaponC10mKey = (jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Bonus_Damage_Per_Tick"] / (jsondata[WeaponKey]["Shooting"]["Projectile_Speed"] / 10)) * 10
                WeaponCmaxKey = jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Maximum_Damage"]
            } else {
                WeaponC10mKey = 0
                WeaponCmaxKey = 0
            }
        } else {
            WeaponC10mKey = 0
            WeaponCmaxKey = 0
        }
        if(typeof jsondata[WeaponKey]["Headshot"] ==='undefined'){
            WeaponHsBonus = 0;
        }else{
            WeaponHsBonus = jsondata[WeaponKey]["Headshot"]["Bonus_Damage"]
        };
        if(typeof jsondata[WeaponKey]["Shooting"]["Projectile_Damage"]==='undefined'){
            WeaponDmg = 0;
        }else{
            WeaponDmg = jsondata[WeaponKey]["Shooting"]["Projectile_Damage"]
        };
        if(typeof jsondata[WeaponKey]["Shooting"]["Bullet_Spread"]==='undefined'){
            WeaponSpread = 0;
        }else{
        WeaponSpread = jsondata[WeaponKey]["Shooting"]["Bullet_Spread"]
        };
        WeaponPellets = jsondata[WeaponKey]["Shooting"]["Projectile_Amount"]
        WeaponWeight = jsondata2[WeaponKey]["itemHoldEffects"]["GunWeight"]
    }
    let ModCapacity = 0
    let ModReload = 0
    let ModWeight = 0
    let ModHsBonus = 0
    let ModRate = 0
    let ModSpread = 0
    let ModDmg = 0
    if (!(ModKey === "none" || WeaponKey === "none" || jsondata2 == 'none')) {
        let cspAry = null
        for (const i in jsondata2[WeaponKey]["Attachments"]["AttachmentsAffect"]) {
            cspAry = jsondata2[WeaponKey]["Attachments"]["AttachmentsAffect"][i].split(":")
            if (cspAry[1] === ModKey && cspAry[0] === "CAPACITY") {
                ModCapacity = Number(cspAry[2])
            }
            if (cspAry[1] === ModKey && cspAry[0] === "RELOAD") {
                ModReload = Number(cspAry[2])
            }
            if (cspAry[1] === ModKey && cspAry[0] === "GUNWEIGHT") {
                ModWeight = Number(cspAry[2])
            }
            if (cspAry[1] === ModKey && cspAry[0] === "HEADSHOT") {
                ModHsBonus = Number(cspAry[2])
            }
            if (cspAry[1] === ModKey && cspAry[0] === "FIRERATE") {
                ModRate = Number(cspAry[2])
            }
            if (cspAry[1] === ModKey && cspAry[0] === "PRESHOOT") {
                ModSpread = Number(cspAry[2])
            }
            if (cspAry[1] === ModKey && cspAry[0] === "DAMAGE") {
                ModDmg = Number(cspAry[2])
            }
        }
    }
    const WeaponCs = [
        WeaponDmg,
        WeaponHsBonus,
        WeaponReloadAmount,
        WeaponReloadDuration,
        WeaponReloadStyle,
        WeaponRateKey,
        WeaponPellets,
        WeaponSpread,
        WeaponAdsKey,
        WeaponCcKey,
        WeaponCdKey,
        WeaponC10mKey,
        WeaponCmaxKey,
        WeaponWeight,
        WeaponExplDmg,
        WeaponExplRadius
    ]
    const Mod = [
        ModDmg,
        ModHsBonus,
        ModCapacity,
        ModReload,
        ModRate,
        ModSpread,
        ModWeight
    ]
    Weapon[5] = WeaponCs[5]
    if(Weapon[5] === Infinity){
        Weapon[5] = 20;
    }
    Result[6] = Math.round((Weapon[5] + Mod[4]) * Math.pow(10, 2)) / Math.pow(10, 2);
    if(Result[6] === 0 || EnchDmg[4] === 0){
        EnchActive[0] = 1;
    }else{
        EnchActive[0] = 1/(Math.ceil(EnchDmg[4]*Result[6]));
    };
    if(Result[6] === 0 || EnchDmg[5] === 0){
        EnchActive[1] = 1;
    }else{
        EnchActive[1] = 1/(Math.ceil(EnchDmg[5]*Result[6]));
    };
    CalcAE(WeaponDmg+ModDmg, WeaponDmg+WeaponHsBonus+ModDmg+ModHsBonus);
    Weapon[0] = WeaponCs[0]
    Weapon[1] = WeaponCs[1]
    Weapon[2] = WeaponCs[2]
    Weapon[3] = WeaponCs[3]
    Weapon[4] = WeaponCs[4]
    Weapon[6] = WeaponCs[6]
    Weapon[7] = WeaponCs[7]
    Weapon[8] = WeaponCs[8]
    Result[12] = (WeaponCs[9] * WeaponCs[10])
    Result[13] = WeaponCs[10]
    Result[14] = Math.round(WeaponCs[11] * Math.pow(10, 2)) / Math.pow(10, 2)
    Result[15] = WeaponCs[12]
    Result[16] = WeaponCs[14]
    Result[17] = WeaponCs[15]
    Weapon[9] = WeaponCs[13]
    Result[0] = Math.round(((Weapon[0] + Mod[0] + EnchDmg[0] * EnchActive[0] + EnchDmg[2] * EnchActive[1] + Ae[0] + Addon[0] + Result[12])*Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[1] = Math.round(((Weapon[0] + Mod[0] + EnchDmg[0] * EnchActive[0] + EnchDmg[2] * EnchActive[1] + Ae[0] + Addon[0] + Result[12] + Weapon[1] + Mod[1] + Ae[2])*Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[2] = Math.round(((Weapon[0] + Mod[0] + EnchDmg[1] + EnchDmg[3] + Ae[1] + Addon[1] + Result[13])*Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[3] = Math.round(((Weapon[0] + Mod[0] + EnchDmg[1] + EnchDmg[3] + Ae[1] + Addon[1] + Result[13] + Weapon[1] + Mod[1] + Ae[2])*Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[4] = Weapon[2] + Mod[2] + Addon[2]
    Result[5] = Weapon[3] + Mod[3] + Addon[3]
    Result[7] = Math.round((Result[0] * Result[6]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[8] = Math.round(Math.abs(Weapon[7] - Mod[5]) * Math.pow(10, 2)) / Math.pow(10, 2)
    Result[9] = Math.round(Math.abs(Weapon[8] - Mod[5]) * Math.pow(10, 2)) / Math.pow(10, 2)
    Result[10] = Math.round(((0.2 + Weapon[9] + Mod[6] + Addon[4]) / 0.2) * Math.pow(10, 2)) / Math.pow(10, 2)
    Result[11] = Math.round((Result[4] / Result[6]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[18] = Math.round(((Mod[0] + EnchDmg[0] * EnchActive[0] + EnchDmg[2] * EnchActive[1] + Ae[0] + Addon[0] + Result[12])*Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[19] = Math.round(((Mod[0] + EnchDmg[1] + EnchDmg[3] + Ae[1] + Addon[1] + Result[13])*Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
    //Result 0AveDmg 1AveHsDmg 2HiDmg 3HiHsDmg 4Capacity 5Reload 6Rate 7Dps 8Sprd 9Ads 10Wt 11Duration 12CC 13CD 14C10m 15Cmax 16ExplDmg 17ExplRadius 18AddDmg
    //DesktopDisplay
    document.getElementById("DisplayRate").textContent = (Result[6])
    document.getElementById("DisplayCapacity").textContent = (Result[4])
    document.getElementById("DisplayReload").textContent = (Result[5])
    document.getElementById("DisplaySpread").textContent = (Result[8])
    document.getElementById("DisplayAdsSpread").textContent = (Result[9])
    document.getElementById("DisplayChangeDmg10m").textContent = (Result[14])
    document.getElementById("DisplayChangeDmgMax").textContent = (Result[15])
    document.getElementById("DisplayWeight").textContent = (Result[10])
    //MobileDisplay
    document.getElementById("MobileDisplayRate").textContent = (Result[6])
    document.getElementById("MobileDisplayCapacity").textContent = (Result[4])
    document.getElementById("MobileDisplayReload").textContent = (Result[5])
    document.getElementById("MobileDisplaySpread").textContent = (Result[8])
    document.getElementById("MobileDisplayAdsSpread").textContent = (Result[9])
    document.getElementById("MobileDisplayChangeDmg10m").textContent = (Result[14])
    document.getElementById("MobileDisplayChangeDmgMax").textContent = (Result[15])
    document.getElementById("MobileDisplayWeight").textContent = (Result[10])
    //テキスト系
    if (Result[11] > 0) {
        document.getElementById("DisplayDuration").textContent = (Result[11])
        document.getElementById("MobileDisplayDuration").textContent = (Result[11])
    } else {
        document.getElementById("DisplayDuration").textContent = 0
        document.getElementById("MobileDisplayDuration").textContent = 0
    };
    if (Result[16] > 0) {
        document.getElementById("DisplayChangeDmgStyle").textContent = ('爆発dmg')
        document.getElementById("MobileDisplayChangeDmgStyle").textContent = ('爆発dmg')
        document.getElementById("DisplayChangeMaxStyle").textContent = ('爆発半径')
        document.getElementById("MobileDisplayChangeMaxStyle").textContent = ('爆発半径')
        document.getElementById("DisplayChangeDmg10m").textContent = (Result[16]+'%')
        document.getElementById("MobileDisplayChangeDmg10m").textContent = (Result[16]+'%')
        document.getElementById("DisplayChangeDmgMax").textContent = (Result[17])
        document.getElementById("MobileDisplayChangeDmgMax").textContent = (Result[17])
        document.getElementById("DisplayAddDmg").textContent = ("+"+Result[18]+"("+Result[19]+")")
        document.getElementById("MobileDisplayAddDmg").textContent = ("+"+Result[18]+"("+Result[19]+")")
    }else if(Result[14] > 0){
        document.getElementById("DisplayChangeDmgStyle").textContent = ('10m増幅')
        document.getElementById("MobileDisplayChangeDmgStyle").textContent = ('10m増幅')
        document.getElementById("DisplayChangeMaxStyle").textContent = ('最大増幅量')
        document.getElementById("MobileDisplayChangeMaxStyle").textContent = ('最大増幅量')
        document.getElementById("DisplayChangeDmg10m").textContent = (Result[14])
        document.getElementById("DisplayChangeDmgMax").textContent = (Result[15])
        document.getElementById("MobileDisplayChangeDmg10m").textContent = (Result[14])
        document.getElementById("MobileDisplayChangeDmgMax").textContent = (Result[15])
        document.getElementById("DisplayAddDmg").textContent = null
        document.getElementById("MobileDisplayAddDmg").textContent = null
    }else{
        document.getElementById("DisplayChangeDmgStyle").textContent = ('10m減衰')
        document.getElementById("MobileDisplayChangeDmgStyle").textContent = ('10m減衰')
        document.getElementById("DisplayChangeMaxStyle").textContent = ('最大減衰量')
        document.getElementById("MobileDisplayChangeMaxStyle").textContent = ('最大減衰量')
        document.getElementById("DisplayChangeDmg10m").textContent = (Result[14])
        document.getElementById("DisplayChangeDmgMax").textContent = (Result[15])
        document.getElementById("MobileDisplayChangeDmg10m").textContent = (Result[14])
        document.getElementById("MobileDisplayChangeDmgMax").textContent = (Result[15])
        document.getElementById("DisplayAddDmg").textContent = null
        document.getElementById("MobileDisplayAddDmg").textContent = null
    };
    if (Weapon[6] > 1) {
        document.getElementById("DisplayPellets").textContent = ("x" + Weapon[6])
        document.getElementById("MobileDisplayPellets").textContent = ("x" + Weapon[6])
    }else{
        document.getElementById("DisplayPellets").textContent = (null)
        document.getElementById("MobileDisplayPellets").textContent = (null)
    };
    if (!(WeaponKey === "none" || jsondata == 'none')) {
        if(typeof jsondata[WeaponKey]["Shooting"]["Projectile_Damage"] === 'undefined'){
            document.getElementById("DisplayAverageDmg").textContent = ('なし')
            document.getElementById("DisplayAverageHsDmg").textContent = ('なし')
            document.getElementById("DisplayHighestDmg").textContent = ('なし')
            document.getElementById("DisplayHighestHsDmg").textContent = ('なし')
            document.getElementById("DisplayDps").textContent = ('なし')
            document.getElementById("MobileDisplayAverageDmg").textContent = ('なし')
            document.getElementById("MobileDisplayAverageHsDmg").textContent = ('なし')
            document.getElementById("MobileDisplayHighestDmg").textContent = ('なし')
            document.getElementById("MobileDisplayHighestHsDmg").textContent = ('なし')   
            document.getElementById("MobileDisplayDps").textContent = ('なし')
        }else{
            document.getElementById("DisplayAverageDmg").textContent = (Result[0])
            document.getElementById("DisplayAverageHsDmg").textContent = (Result[1])
            document.getElementById("DisplayHighestDmg").textContent = (Result[2])
            document.getElementById("DisplayHighestHsDmg").textContent = (Result[3])
            document.getElementById("DisplayDps").textContent = (Result[7])
            document.getElementById("MobileDisplayAverageDmg").textContent = (Result[0])
            document.getElementById("MobileDisplayAverageHsDmg").textContent = (Result[1])
            document.getElementById("MobileDisplayHighestDmg").textContent = (Result[2])
            document.getElementById("MobileDisplayHighestHsDmg").textContent = (Result[3])   
            document.getElementById("MobileDisplayDps").textContent = (Result[7])
        };
    } else {
            document.getElementById("DisplayAverageDmg").textContent = 0
            document.getElementById("DisplayAverageHsDmg").textContent = 0
            document.getElementById("DisplayHighestDmg").textContent = 0
            document.getElementById("DisplayHighestHsDmg").textContent = 0
            document.getElementById("DisplayDps").textContent = 0
            document.getElementById("MobileDisplayAverageDmg").textContent = 0
            document.getElementById("MobileDisplayAverageHsDmg").textContent = 0
            document.getElementById("MobileDisplayHighestDmg").textContent = 0
            document.getElementById("MobileDisplayHighestHsDmg").textContent = 0  
            document.getElementById("MobileDisplayDps").textContent = 0
    }
}
const categorySelect2 = document.getElementById("TypeSelect")
const subCategorySelect2 = document.getElementById("WeaponSelect")
WeaponTypes.forEach(category => {
    const option = document.createElement("option")
    option.textContent = category
    categorySelect2.appendChild(option)
})
categorySelect2.addEventListener("input", () => {
    const options = document.querySelectorAll("#WeaponSelect > option")
    options.forEach(option => option.remove())
    const firstSelect = document.createElement("option")
    firstSelect.textContent = "武器を選択"
    firstSelect.setAttribute("value", "none")
    subCategorySelect2.appendChild(firstSelect)
    subCategorySelect2.disabled = false
    if (categorySelect2.value == "blank") return subCategorySelect2.disabled = true
    WeaponList.forEach(subCategory => {
        if (categorySelect2.value == subCategory.category) {
            const option = document.createElement("option")
            option.textContent = subCategory.name
            option.setAttribute("value", subCategory.value)
            subCategorySelect2.appendChild(option)
        }
    })
})

const CalcEnch = () => {
    const Ench = document.getElementById("EnchantForm").EnchantSelect.value
    const EnchLv = document.getElementById("EnchantForm").EnchantLevSelect.value
    const FrToggle = document.getElementById("FrCheck");
    if(Ench == 'FlexibleResonance'){
        FrLabel.style.display = "inline-block";
    }else{
        FrLabel.style.display = 'none';
        FrToggle.checked = false;
    };
    function EnchLevelsCalc(EnchKey){
        if (EnchLv == "EnchLev1") {
            EnchDmg[0] = EnchKey[0]*EnchKey[1];
            EnchDmg[1] = EnchKey[0];
            EnchDmg[4] = EnchKey[4];

        } else if (EnchLv == "EnchLev2") {
            EnchDmg[0] = EnchKey[0]*EnchKey[2];
            EnchDmg[1] = EnchKey[0]
            EnchDmg[4] = EnchKey[4];

        } else if (EnchLv == "EnchLev3") {
            EnchDmg[0] = EnchKey[0]*EnchKey[3];
            EnchDmg[1] = EnchKey[0]
            EnchDmg[4] = EnchKey[4];

        } else {
            EnchDmg[0] = 0;
            EnchDmg[1] = 0;
            EnchDmg[4] = 0;
        }
    };
    if (Ench == "ArcaneBrilliance") {
        EnchLevelsCalc(ArcaneBrilliance);
    }else if(Ench == 'DeathsRuin'){
        EnchLevelsCalc(DeathsRuin);
    }else if(Ench == 'DemonPower'){
        EnchLevelsCalc(DemonPower);
    }else if(Ench == 'Evershade'){
        EnchLevelsCalc(Evershade);
    }else if(Ench == 'FlexibleResonance' && FrToggle.checked){
        EnchLevelsCalc(FlexibleResonance);
    }else if(Ench == 'ManaFountain'){
        EnchLevelsCalc(ManaFountain);
    }else if(Ench == 'NightStalker'){
        EnchLevelsCalc(NightStalker);
    }else if(Ench == 'NorthernWind'){
        EnchLevelsCalc(NorthernWind);
    }else if(Ench == 'PhoenixFlame'){
        EnchLevelsCalc(PhoenixFlame);
    }else if(Ench == 'ShadowStrike'&&enemyManaElem.value < 50){
        EnchLevelsCalc(ShadowStrike0);
    }else if(Ench == 'ShadowStrike'&&enemyManaElem.value < 75){
        EnchLevelsCalc(ShadowStrike1);
    }else if(Ench == 'ShadowStrike'&&enemyManaElem.value <= 100){
        EnchLevelsCalc(ShadowStrike2);
    }else if(Ench == 'ShieldWall'){
        EnchLevelsCalc(ShieldWall);
    }else if(Ench == 'SiphonLife'){
        EnchLevelsCalc(SiphonLife);
    }else if(Ench == 'Sunfire'){
        EnchLevelsCalc(Sunfire);
    }else if(Ench == 'VictoryRush'){
        EnchLevelsCalc(VictoryRush);
    }else if(Ench == 'ZephyrsBlessing'){
        EnchLevelsCalc(ZephyrsBlessing);
    }else{
        EnchDmg[0] = 0;
        EnchDmg[1] = 0;
        EnchDmg[4] = 0;
    }
    render()
};
const CalcOE = () => {
    const OE = document.getElementById("OeForm").OeSelect.value
    const OELv = document.getElementById("OeForm").OeLevSelect.value
    const OeFrToggle = document.getElementById("OeFrCheck");
    if(OE == 'FlexibleResonance'){
        OeFrLabel.style.display = 'inline-block';
    }else{
        OeFrLabel.style.display = 'none'
        OeFrToggle.checked = false;
    };
    function OELevelsCalc(OeKey){
        if (OELv == "OeLev1") {
            EnchDmg[2] = OeKey[0]*OeKey[1]
            EnchDmg[3] = OeKey[0]
            EnchDmg[5] = OeKey[4];
        } else if (OELv == "OeLev2") {
            EnchDmg[2] = OeKey[0]*OeKey[2]
            EnchDmg[3] = OeKey[0]
            EnchDmg[5] = OeKey[4];
        } else if (OELv == "OeLev3") {
            EnchDmg[2] = OeKey[0]*OeKey[3]
            EnchDmg[3] = OeKey[0]
            EnchDmg[5] = OeKey[4];
        } else {
            EnchDmg[2] = 0;
            EnchDmg[3] = 0;
            EnchDmg[5] = 0;
        }
    };
    if (OE == "ArcaneBrilliance") {
        OELevelsCalc(ArcaneBrilliance);
    }else if(OE == 'DeathsRuin'){
        OELevelsCalc(DeathsRuin);
    }else if(OE == 'DemonPower'){
        OELevelsCalc(DemonPower);
    }else if(OE == 'Evershade'){
        OELevelsCalc(Evershade);
    }else if(OE == 'FlexibleResonance' && OeFrToggle.checked){
        OELevelsCalc(FlexibleResonance);
    }else if(OE == 'ManaFountain'){
        OELevelsCalc(ManaFountain);
    }else if(OE == 'NightStalker'){
        OELevelsCalc(NightStalker);
    }else if(OE == 'NorthernWind'){
        OELevelsCalc(NorthernWind);
    }else if(OE == 'PhoenixFlame'){
        OELevelsCalc(PhoenixFlame);
    }else if(OE == 'ShadowStrike'&&enemyManaElem.value < 50){
        OELevelsCalc(ShadowStrike0);
    }else if(OE == 'ShadowStrike'&&enemyManaElem.value < 75){
        OELevelsCalc(ShadowStrike1);
    }else if(OE == 'ShadowStrike'&&enemyManaElem.value <= 100){
        OELevelsCalc(ShadowStrike2);
    }else if(OE == 'ShieldWall'){
        OELevelsCalc(ShieldWall);
    }else if(OE == 'SiphonLife'){
        OELevelsCalc(SiphonLife);
    }else if(OE == 'Sunfire'){
        OELevelsCalc(Sunfire);
    }else if(OE == 'VictoryRush'){
        OELevelsCalc(VictoryRush);
    }else if(OE == 'ZephyrsBlessing'){
        OELevelsCalc(ZephyrsBlessing);
    }else{
        EnchDmg[2] = 0;
        EnchDmg[3] = 0;
        EnchDmg[5] = 0;
    }
    render()
};
const CalcAE = (EoDDmg, EoDHsDmg) => {
    const AE = document.getElementById("AncientEnchantForm").AncientEnchantSelect.value
    const BcToggle = document.getElementById("BcCheck");
    const CfToggle = document.getElementById("CfCheck");
    const SdToggle = document.getElementById("SdCheck");
    const WsToggle = document.getElementById("WsCheck");
    if(AE == "Bloodcraze"){
        BcLabel.style.display = 'inline-block';
    }else{
        BcLabel.style.display = 'none';
        BcToggle.checked = false;
    };

    if(AE == "ConcentratedFire"){
        CfLabel.style.display = 'inline-block';
    }else{
        CfLabel.style.display = 'none';
        CfToggle.checked = false;
    };

    if(AE == "SuddenDeath"){
        SdLabel.style.display = 'inline-block';
    }else{
        SdLabel.style.display = 'none';
        SdToggle.checked = false;
    };

    if(AE == "Windsong"){
        WsLabel.style.display = 'inline-block';
    }else{
        WsLabel.style.display = 'none';
        WsToggle.checked = false;
    };

    if (AE == "Bloodcraze" && BcToggle.checked) {
        Ae[0] = BcDmg
        Ae[1] = BcDmg
    } else if (AE == "ElementalOverload"&&myManaElem.value > 30) {
        Ae[0] = EoDmg
        Ae[1] = EoDmg
    } else if (AE == "Mastercrafted") {
        Ae[0] = McDmg
        Ae[1] = McDmg
    } else if (AE == "ConcentratedFire" && CfToggle.checked) {
        Ae[0] = CfDmg
        Ae[1] = CfDmg
    } else if (AE == "SuddenDeath" && SdToggle.checked) {
        Ae[0] = SdAverageDmg
        Ae[1] = SdHighestDmg
    } else if (AE == "ManaBurn" && enemyManaElem.value <= 35) {
        Ae[0] = MbDmg
        Ae[1] = MbDmg
    } else if (AE == "Manaflood" && myManaElem.value == 100) {
        Ae[0] = MflDmg2
        Ae[1] = MflDmg2
    } else if (AE == "Manaflood" && myManaElem.value >= 75) {
        Ae[0] = MflDmg1
        Ae[1] = MflDmg1
    } else if (AE == "Manaflood" && myManaElem.value >= 50) {
        Ae[0] = MflDmg0
        Ae[1] = MflDmg0
    } else if (AE == "EchoOfDeath" && EoDDmg >= 50){
        Ae[0] = EodDmg
        Ae[1] = EodDmg
    } else if (AE == "Windsong" && WsToggle.checked) {
        Ae[0] = WsDmg
        Ae[1] = WsDmg
    } else {
        Ae[0] = 0
        Ae[1] = 0
    }
    if (AE == "EchoOfDeath" && EoDHsDmg >= 50){
        Ae[2] = EodDmg
    }else{
        Ae[2] = 0
    }
}

const CalcAddon = () => {
    const AddonKey = document.getElementById("AddonForm").AddonSelect.value
    const AddonLv = document.getElementById("AddonForm").AddonLevSelect.value
    const SsaToggle = document.getElementById("SsaCheck");
    const SbToggle = document.getElementById("SbCheck");
    if(AddonKey == 'SupersonicAmmo'){
        SsaLabel.style.display = 'inline-block';
    }else{
        SsaLabel.style.display = 'none';
        SsaToggle.checked = false;
    };
    if(AddonKey == 'ShieldBreaker'){
        SbLabel.style.display = 'inline-block';
    }else{
        SbLabel.style.display = 'none';
        SbToggle.checked = false;
    };
    if (AddonKey == "ManaPowder") {
        Addon[2] = 0
        Addon[3] = 0
        Addon[4] = 0
        Addon[5] = 1
        if (AddonLv == "AddonLev0") {
            Addon[0] = MpDmg[0]
            Addon[1] = MpDmg[0]
        } else if (AddonLv == "AddonLev1") {
            Addon[0] = MpDmg[1]
            Addon[1] = MpDmg[1]
        } else if (AddonLv == "AddonLev2") {
            Addon[0] = MpDmg[2]
            Addon[1] = MpDmg[2]
        } else if (AddonLv == "AddonLev3") {
            Addon[0] = MpDmg[3]
            Addon[1] = MpDmg[3]
        } else {
            Addon[0] = 0
            Addon[1] = 0
        }
    } else if (AddonKey == "HeavyBullets") {
        Addon[2] = 0
        Addon[3] = 0
        Addon[4] = 0
        Addon[5] = 1
        if (AddonLv == "AddonLev0") {
            Addon[0] = HbAverageDmg[0]
            Addon[1] = HbHighestDmg[0]
        } else if (AddonLv == "AddonLev1") {
            Addon[0] = HbAverageDmg[1]
            Addon[1] = HbHighestDmg[1]
        } else if (AddonLv == "AddonLev2") {
            Addon[0] = HbAverageDmg[2]
            Addon[1] = HbHighestDmg[2]
        } else if (AddonLv == "AddonLev3") {
            Addon[0] = HbAverageDmg[3]
            Addon[1] = HbHighestDmg[3]
        } else {
            Addon[0] = 0
            Addon[1] = 0
        }
    } else if (AddonKey == "ExtendedMagazine") {
        Addon[0] = 0
        Addon[1] = 0
        Addon[3] = 0
        Addon[4] = 0
        Addon[5] = 1
        if (AddonLv == "AddonLev0") {
            Addon[2] = EmCapacity[0]
        } else if (AddonLv == "AddonLev1") {
            Addon[2] = EmCapacity[1]
        } else if (AddonLv == "AddonLev2") {
            Addon[2] = EmCapacity[2]
        } else if (AddonLv == "AddonLev3") {
            Addon[2] = EmCapacity[3]
        } else {
            Addon[2] = 0
        }
    } else if (AddonKey == "QuickPull") {
        Addon[0] = 0
        Addon[1] = 0
        Addon[2] = 0
        Addon[3] = 0
        Addon[4] = 0
        Addon[5] = 1
        if (AddonLv == "AddonLev0") {
            Addon[3] = QpReload[0]
        } else if (AddonLv == "AddonLev1") {
            Addon[3] = QpReload[1]
        } else if (AddonLv == "AddonLev2") {
            Addon[3] = QpReload[2]
        } else if (AddonLv == "AddonLev3") {
            Addon[3] = QpReload[3]
        } else {
            Addon[3] = 0
        }
    } else if (AddonKey == "LightweightKit") {
        Addon[0] = 0
        Addon[1] = 0
        Addon[2] = 0
        Addon[3] = 0
        Addon[5] = 1
        if (AddonLv == "AddonLev0") {
            Addon[4] = LkWeight[0]
        } else if (AddonLv == "AddonLev1") {
            Addon[4] = LkWeight[1]
        } else if (AddonLv == "AddonLev2") {
            Addon[4] = LkWeight[2]
        } else if (AddonLv == "AddonLev3") {
            Addon[4] = LkWeight[3]
        } else {
            Addon[4] = 0
        }
    } else if (AddonKey == "SupersonicAmmo" && SsaToggle.checked) {
        Addon[0] = 0
        Addon[1] = 0
        Addon[2] = 0
        Addon[3] = 0
        Addon[4] = 0
        if (AddonLv == "AddonLev0") {
            Addon[5] = SsaDmg[0]
        } else if (AddonLv == "AddonLev1") {
            Addon[5] = SsaDmg[1]
        } else if (AddonLv == "AddonLev2") {
            Addon[5] = SsaDmg[2]
        } else if (AddonLv == "AddonLev3") {
            Addon[5] = SsaDmg[3]
        } else {
            Addon[5] = 1
        }
    } else if (AddonKey == "ShieldBreaker" && SbToggle.checked) {
        Addon[2] = 0
        Addon[3] = 0
        Addon[4] = 0
        Addon[5] = 1
        if (AddonLv == "AddonLev0") {
            Addon[0] = SbDmg[0]
            Addon[1] = SbDmg[0]
        } else if (AddonLv == "AddonLev1") {
            Addon[0] = SbDmg[1]
            Addon[1] = SbDmg[1]
        } else if (AddonLv == "AddonLev2") {
            Addon[0] = SbDmg[2]
            Addon[1] = SbDmg[2]
        } else if (AddonLv == "AddonLev3") {
            Addon[0] = SbDmg[3]
            Addon[1] = SbDmg[3]
        } else {
            Addon[0] = 0;
            Addon[1] = 0;
        }
    } else {
        Addon[0] = 0
        Addon[1] = 0
        Addon[2] = 0
        Addon[3] = 0
        Addon[4] = 0
        Addon[5] = 1
    }
    render()
}


document.addEventListener("DOMContentLoaded", () => {
    fetchAll([_pathAr, _pathArp, _pathSmg, _pathSmgp, _pathLmg, _pathLmgp, _pathSr, _pathSrp, _pathCar, _pathCarp, _pathExpl, _pathExplp, _pathSec, _pathSecp, _pathMelee, _pathMeleep]).then((res) => {
        [_objAr, _objArp, _objSmg, _objSmgp, _objLmg, _objLmgp, _objSr, _objSrp, _objCar, _objCarp, _objExpl, _objExplp, _objSec, _objSecp, _objMelee, _objMeleep] = res
        console.log(res.concat())
    })
    document.getElementById("TypeForm").onchange = () => render()
    document.getElementById("WeaponForm").onchange = () => render()
    document.getElementById("ModForm").onchange = () => render()
    document.getElementById("EnchantForm").onchange = () => CalcEnch()
    document.getElementById("OeForm").onchange = () => CalcOE()
    document.getElementById("AncientEnchantForm").onchange = () => render()
    document.getElementById("AddonForm").onchange = () => CalcAddon()
})
const myManaElem = document.getElementById('myMana');
const enemyManaElem = document.getElementById('enemyMana');
const myManaValueElem = document.getElementById('myMana-value');
const enemyManaValueElem = document.getElementById('enemyMana-value');

const setMyManaValue = (val) => {
  myManaValueElem.innerText = val;
}
const setEnemyManaValue = (val) => {
    enemyManaValueElem.innerText = val;
  }

const myManaOnChange = (e) =>{
    setMyManaValue(e.target.value);
    render();
}
const enemyManaOnChange = (e) =>{
    setEnemyManaValue(e.target.value);
    CalcEnch();
    CalcOE();
}
const EnchCheckOnChange = (e) =>{
    CalcEnch();
}
const OeCheckOnChange = (e) =>{
    CalcOE();
}
const AeCheckOnChange = (e) =>{
    render();
}
const AddonCheckOnChange = (e) =>{
    CalcAddon();
}
document.getElementById("FrCheck").addEventListener('change', EnchCheckOnChange);
document.getElementById("OeFrCheck").addEventListener('change', OeCheckOnChange);
document.getElementById("BcCheck").addEventListener('change', AeCheckOnChange);
document.getElementById("CfCheck").addEventListener('change', AeCheckOnChange);
document.getElementById("SdCheck").addEventListener('change', AeCheckOnChange);
document.getElementById("WsCheck").addEventListener('change', AeCheckOnChange);
document.getElementById("SsaCheck").addEventListener('change', AddonCheckOnChange);
document.getElementById("SbCheck").addEventListener('change', AddonCheckOnChange);
window.onload = () => {
  myManaElem.addEventListener('input', myManaOnChange);
  enemyManaElem.addEventListener('input', enemyManaOnChange);
  setMyManaValue(myManaElem.value);
  setEnemyManaValue(enemyManaElem.value);
}