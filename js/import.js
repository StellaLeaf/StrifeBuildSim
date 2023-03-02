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
const LastStand         = [0,  0,    0,    0,    0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const LsText = ['Last Stand',        '現在ハートx9%', '現在ハートx9.25%', '現在ハートx9.5%']
const VrText = ['Victory Rush',      'キル時70%で1pt付与(3ptでHP+8)', 'キル時75%で1pt付与(3ptでHP+8)', 'キル時80%で1pt付与(3ptでHP+8)']
const PfText = ['Phoenix Flame',     '20%でダウンを回避、全回復', '22.5%でダウンを回避、全回復', '25%でダウンを回避、全回復']
const AbText = ['Arcane Brilliance', '攻撃時、相手に発光3s', '攻撃時、相手に発光3s', '攻撃時、相手に発光3s']
const NsText = ['Night Stalker',     'Divine以外のglow無効化', 'Divine以外のglow無効化', 'Divine以外のglow無効化']
const EsText = ['Evershade',         '90%でScroll of Glowingを無効化', '95%でScroll of Glowingを無効化', '100%でScroll of Glowingを無効化']
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
//Addon
const MpDmg = [0.25, 0.5, 1.0, 1.5]
const HbAverageDmg = [0.4, 0.8, 1.2, 1.6]
const HbHighestDmg = [2, 4, 6, 8]
const EmCapacity = [2, 4, 6, 10]
const QpReload = [-4, -8, -12, -16]
const LkWeight = [0.004, 0.005, 0.010, 0.015]
const SsaDmg = [1.25, 1.5, 1.75, 2.2]
const SbDmg = [7, 8, 9, 10]
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