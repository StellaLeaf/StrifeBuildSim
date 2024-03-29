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
const FlexibleResonance = [0,  0,    0,    0,    0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const FlexibleResonance2= [4,  0.65, 0.70, 0.75, 0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0.2,  0.225, 0.25, ]
const PhoenixFlame      = [10, 0.05, 0.06, 0.07, 0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const ShadowStrike      = [0,  0,    0,    0,    0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
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
const KnightMod         = [0,  0,    0,    0,    0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const ChampionMod       = [0,  0,    0,    0,    0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const enchNone          = [0,  0,    0,    0,    0,    0, 0,    0,   0,   0,    0,   0, 0, 0, 0,    0,     0,    ]
const LsText     = ['Last Stand',        '現在ハートx9%でダメージを1/20に軽減', '現在ハートx9.25%でダメージを1/20に軽減', '現在ハートx9.5%でダメージを1/20に軽減']
const VrText     = ['Victory Rush',      'キル時70%で1pt付与(3ptでHP+8)', 'キル時75%で1pt付与(3ptでHP+8)', 'キル時80%で1pt付与(3ptでHP+8)']
const PfText     = ['Phoenix Flame',     '20%でダウンを回避、全回復', '22.5%でダウンを回避、全回復', '25%でダウンを回避、全回復']
const AbText     = ['Arcane Brilliance', '攻撃時、相手に発光3s', '攻撃時、相手に発光3s', '攻撃時、相手に発光3s']
const NsText     = ['Night Stalker',     'Divine以外のglow無効化', 'Divine以外のglow無効化', 'Divine以外のglow無効化']
const EsText     = ['Evershade',         '90%でScroll of Glowingを無効化', '95%でScroll of Glowingを無効化', '100%でScroll of Glowingを無効化']
const enchKeys = {
    "ArcaneBrilliance"   :ArcaneBrilliance,
    "DeathsRuin"         :DeathsRuin,
    "DemonPower"         :DemonPower,
    "Evershade"          :Evershade,
    "FlexibleResonance"  :FlexibleResonance,
    "FlexibleResonance2" :FlexibleResonance2,
    "NorthernWind"       :NorthernWind,
    "PhoenixFlame"       :PhoenixFlame,
    "ShadowStrike"       :ShadowStrike,
    "ShadowStrike0"      :ShadowStrike0,
    "ShadowStrike1"      :ShadowStrike1,
    "ShadowStrike2"      :ShadowStrike2,
    "ShieldWall"         :ShieldWall,
    "SiphonLife"         :SiphonLife,
    "Sunfire"            :Sunfire,
    "ZephyrsBlessing"    :ZephyrsBlessing,
    "ManaFountain"       :ManaFountain,
    "NightStalker"       :NightStalker,
    "VictoryRush"        :VictoryRush,
    "LastStand"          :LastStand,
    "KnightMod"          :KnightMod,
    "ChampionMod"        :ChampionMod,
    "none"               :enchNone
};
const enchTextKeys = {
    "ArcaneBrilliance":AbText,
    "Evershade":EsText,
    "NightStalker":NsText,
    "PhoenixFlame":PfText,
    "VictoryRush":VrText,
    "LastStand":LsText
};
const enchTextLvKeys = {
    "none":0,
    "EnchLev1":1,
    "EnchLev2":2,
    "EnchLev3":3,
};
//AEdata 0Dmg 1Prob 2Dodge
const AmplifyMagic      = [0,   0,    0]
const ArcaneMeditation  = [0,   0,    0]
const Bloodcraze        = [0,   0,    0]
const Bloodcraze2       = [7,   1,    0]
const ConcentratedFire  = [0,   0,    0]
const ConcentratedFire2 = [4,   1,    0]
const CursedPact        = [0,   0,    0]
const DrainSoul         = [0,   0,    0]
const EchoOfDeath       = [100, 1,    0]
const ElementalOverload = [0,   0,    0]
const ElementalOverload2= [6,   1,    0]
const EverlastingLife   = [0,   0,    0]
const FleetFooted       = [0,   0,    0]
const FleetFooted2      = [0,   0,    0.25]
const FragileBalance    = [0,   0,    0]
const GolemProtection   = [0,   0,    0]
const IndomitableSpirit = [0,   0,    0]
const IndomitableSpirit2= [0,   0,    0.15]
const JoyOfWealth       = [0,   0,    0]
const ManaEfficiency    = [0,   0,    0]
const Mastercrafted     = [1,   1,    0]
const Manaflood         = [0,   0,    0]
const Manaflood0        = [1,   1,    0]
const Manaflood1        = [2,   1,    0]
const Manaflood2        = [3,   1,    0]
const ManaBurn          = [0,   0,    0]
const ManaBurn2         = [5,   1,    0]
const Regrowth          = [0,   0,    0]
const SuddenDeath       = [0,   0,    0]
const SuddenDeath2      = [20,  0.05, 0]
const TitanStance       = [0,   0,    0]
const WheelOfFortune    = [0,   0,    0]
const Windsong          = [0,   0,    0]
const Windsong2         = [2,   1,    0]
const aeNone            = [0,   0,    0]
const AmpText    = ['Amplify Magic',     'Scroll of Glowing+4s Rune of Levitation速度二倍']
const AmText     = ['Arcane Meditation', 'HP自然回復停止 静止でHP・スタミナ即時全快']
const CpText     = ['Cursed Pact',       '一定間隔毎に2HP消費']
const DsText     = ['Drain Soul',        'キル時40HP回復']
const ElText     = ['Everlasting Life',  'Totem系使用時5HP回復 Orb系使用時緩衝体力+4']
const FbText     = ['Fragile Balance',   '発動時スタミナ-1 スタミナ7以下で受ダメージ+1']
const GpText     = ['Golem Protection',  '実弾以外のダメージを50%軽減']
const JowText    = ['Joy of Wealth',     'キル時150%でCoin 0.01%でArmorBoxを入手']
const MeText     = ['Mana Efficiency',   'オフハンドのMana消費量を本来の75%にする']
const MbText     = ['Mana Burn',         '攻撃時、相手のManaをdmgの半分(最大10%)削減']
const RegText    = ['Regrowth',          'HP・スタミナ自動回復のクールダウン削除']
const TsText     = ['Titan Stance',      '発動中スタミナが減少 スタミナ0でスニーク時、dmg20%軽減']
const WofText    = ['Wheel of Fortune',  'キル時2%でCoin 0.5%でAS・LTB 0.02%でArmorBoxを入手']
const aeKeys = {
    "AmplifyMagic":AmplifyMagic,
    "ArcaneMeditation":ArcaneMeditation,
    "Bloodcraze":Bloodcraze,
    "Bloodcraze2":Bloodcraze2,
    "ConcentratedFire":ConcentratedFire,
    "ConcentratedFire2":ConcentratedFire2,
    "CursedPact":CursedPact,
    "DrainSoul":DrainSoul,
    "EchoOfDeath":EchoOfDeath,
    "ElementalOverload":ElementalOverload,
    "ElementalOverload2":ElementalOverload2,
    "EverlastingLife":EverlastingLife,
    "FleetFooted":FleetFooted,
    "FleetFooted2":FleetFooted2,
    "FragileBalance":FragileBalance,
    "GolemProtection":GolemProtection,
    "IndomitableSpirit":IndomitableSpirit,
    "IndomitableSpirit2":IndomitableSpirit2,
    "JoyOfWealth":JoyOfWealth,
    "ManaEfficiency":ManaEfficiency,
    "Mastercrafted":Mastercrafted,
    "Manaflood":Manaflood,
    "Manaflood0":Manaflood0,
    "Manaflood1":Manaflood1,
    "Manaflood2":Manaflood2,
    "ManaBurn":ManaBurn,
    "ManaBurn2":ManaBurn2,
    "Regrowth":Regrowth,
    "SuddenDeath":SuddenDeath,
    "SuddenDeath2":SuddenDeath2,
    "TitanStance":TitanStance,
    "WheelOfFortune":WheelOfFortune,
    "Windsong":Windsong,
    "Windsong2":Windsong2,
    "none":aeNone
};
const aeTextKeys = {
    "AmplifyMagic": AmpText,
    'ArcaneMeditation': AmText,
    'CursedPact': CpText,
    'DrainSoul': DsText,
    'EverlastingLife': ElText,
    'FragileBalance': FbText,
    'GolemProtection': GpText,
    'JoyOfWealth': JowText,
    'ManaEfficiency': MeText,
    'ManaBurn': MbText,
    'Regrowth': RegText,
    'TitanStance': TsText,
    'WheelOfFortune': WofText
};
//Addon 0dmg 4DmgProb 5Cap 9rel 13Wt 17DmgMag
const ManaPowder        = [0.25, 0.5, 1.0, 1.5,   1, 0, 0, 0,  0,  0,  0,   0,   0,     0,     0,     0,     0,    1,   1,    1,   1]
const HeavyBullets      = [   2,   4,   6,   8, 0.2, 0, 0, 0,  0,  0,  0,   0,   0,     0,     0,     0,     0,    1,   1,    1,   1]
const ExtendedMagazine  = [   0,   0,   0,   0,   1, 2, 4, 6, 10,  0,  0,   0,   0,     0,     0,     0,     0,    1,   1,    1,   1]
const QuickPull         = [   0,   0,   0,   0,   1, 0, 0, 0,  0, -4, -8, -12, -16,     0,     0,     0,     0,    1,   1,    1,   1]
const LightweightKit    = [   0,   0,   0,   0,   1, 0, 0, 0,  0,  0,  0,   0,   0, 0.004, 0.005, 0.010, 0.015,    1,   1,    1,   1]
const SupersonicAmmo    = [   0,   0,   0,   0,   1, 0, 0, 0,  0,  0,  0,   0,   0,     0,     0,     0,     0,    1,   1,    1,   1]
const SupersonicAmmo2   = [   0,   0,   0,   0,   1, 0, 0, 0,  0,  0,  0,   0,   0,     0,     0,     0,     0, 1.25, 1.5, 1.75, 2.2]
const ShieldBreaker     = [   0,   0,   0,   0,   1, 0, 0, 0,  0,  0,  0,   0,   0,     0,     0,     0,     0,    1,   1,    1,   1]
const ShieldBreaker2    = [   7,   8,   9,  10,   1, 0, 0, 0,  0,  0,  0,   0,   0,     0,     0,     0,     0,    1,   1,    1,   1]
const ApRounds          = [   0,   0,   0,   0,   1, 0, 0, 0,  0,  0,  0,   0,   0,     0,     0,     0,     0,    1,   1,    1,   1]
const EmperorMod        = [   0,   0,   0,   0,   1, 0, 0, 0,  0,  0,  0,   0,   0,     0,     0,     0,     0,    1,   1,    1,   1]
const AdWheelOfFortune  = [   0,   0,   0,   0,   1, 0, 0, 0,  0,  0,  0,   0,   0,     0,     0,     0,     0,    1,   1,    1,   1]
const addonNone         = [   0,   0,   0,   0,   1, 0, 0, 0,  0,  0,  0,   0,   0,     0,     0,     0,     0,    1,   1,    1,   1]
const ApText     = ['AP Rounds', '70%でLastStand無効化', '75%でLastStand無効化', '80%でLastStand無効化', '85%でLastStand無効化']
const AdWofText  = ['Wheel of Fortune', 'キル時2%でCoin 0.5%でAS・LTB 0.02%でArmorBoxを入手', 'キル時2%でCoin 0.5%でAS・LTB 0.02%でArmorBoxを入手', 'キル時2%でCoin 0.5%でAS・LTB 0.02%でArmorBoxを入手', 'キル時2%でCoin 0.5%でAS・LTB 0.02%でArmorBoxを入手']
const addonKeys = {
    "ManaPowder":ManaPowder,
    "HeavyBullets":HeavyBullets,
    "ExtendedMagazine":ExtendedMagazine,
    "QuickPull":QuickPull,
    "LightweightKit":LightweightKit,
    "SupersonicAmmo":SupersonicAmmo,
    "SupersonicAmmo2":SupersonicAmmo2,
    "ShieldBreaker":ShieldBreaker,
    "ShieldBreaker2":ShieldBreaker2,
    "ApRounds":ApRounds,
    "EmperorMod":EmperorMod,
    'AdWheelOfFortune':AdWheelOfFortune,
    "none":addonNone
};
const addonTextKeys = {
    'APRounds':ApText,
    'AdWheelOfFortune':AdWofText
}
const addonTextLvKeys = {
    "AddonLev0":1,
    "AddonLev1":2,
    "AddonLev2":3,
    "AddonLev3":4,
};
//Armor 0HP 1Atk 2Def 3CC 4Mana 5Stamina 6 MaxSta 7Regene
const PChest = [0, 0, 2, 0,  0]
const PHand  = [0, 1, 0, 0,  0]
const PBoots = [0, 0, 0, 0,  0]
const PSet   = [8, 0, 0, 0,  0]
const CChest = [2, 0, 0, 0,  0]
const CHand  = [0, 0, 1, 0,  0]
const CBoots = [0, 0, 0, 0,  0]
const CSet   = [0, 0, 0, 0,  0]
const GChest = [4, 0, 0, 0,  0]
const GHand  = [0, 2, 0, 0,  0]
const GBoots = [0, 0, 1, 0,  0]
const GSet   = [0, 0, 2, 0,  0]
const IChest = [4, 0, 0, 0,  0] 
const IHand  = [0, 0, 0, 5,  0]
const IBoots = [0, 0, 0, 0,  1]
const ISet   = [0, 0, 0, 10, 0]
const FChest = [0, 0, 6, 0,  0]
const SChest = [0, 0, 6, 0,  0]
const NChest = [0, 0, 0, 0,  0]
const NHand  = [0, 0, 0, 0,  0]
const NBoots = [0, 0, 0, 0,  0]
const NSet   = [0, 0, 0, 0,  0]
const CBootsText = ['Cleric Shoes',      'スタミナ回復+1']
const PBootsText = ['Pilgrim Walkers',   'スタミナ回復+1']
const FChestText = ['Fort Armor',        '最大スタミナを3に変更']
const CSetText   = ['Clericフルセット',    'RegenerationⅢ3s']
const ChestKeys = {
    "Cleric":CChest,
    "Fort":FChest,
    "Gladiator":GChest,
    "Pilgrim":PChest,
    "Ivory":IChest,
    "Slick":SChest,
    "none":NChest
};
const HandKeys = {
    "Cleric":CHand,
    "Gladiator":GHand,
    "Pilgrim":PHand,
    "Ivory":IHand,
    "none":NHand
};
const BootsKeys = {
    "Cleric":CBoots,
    "Gladiator":GBoots,
    "Pilgrim":PBoots,
    "Ivory":IBoots,
    "none":NBoots
};
const SetKeys = {
    "Cleric":CSet,
    "Gladiator":GSet,
    "Pilgrim":PSet,
    "Ivory":ISet,
    "none":NSet
};
//Elixir 0Dmg 1Prob 2Wt 3HP 4Dodge
const ECombust      = [10, 0.075, 0,    0,  0]
const ECombust2     = [10, 0.15,  0,    0,  0]
const ECritical     = [3,  0.5,   0,    0,  0]
const EFortitude    = [0,  0,     0,    12, 0]
const EPumpkinCandy = [0,  0,     0,    14, 0]
const EReflex       = [0,  0,     0,    0,  0.15]
const ESpeed        = [0,  0,     0.15, 0,  0]
const EVoid         = [1,  0.2,   0,    0,  0]
const EVoid2        = [4,  0.75,  0,    0,  0]
const EWisdom       = [0,  0,     0,    0,  0]
const ENone         = [0,  0,     0,    0,  0]
const EWisdomText= ['Elixir of Wisdom',    'キル時の獲得マナが25%に増加']
const elixirKeys = {
    "ECombust":ECombust,
    "ECombust2":ECombust2,
    "ECritical":ECritical,
    "EFortitude":EFortitude,
    "EPumpkinCandy":EPumpkinCandy,
    "EReflex":EReflex,
    "ESpeed":ESpeed,
    "EVoid":EVoid,
    "EVoid2":EVoid2,
    "EWisdom":EWisdom,
    "none":ENone
};
//Accessory
const TheMagicalTributeText      = ["The Magical Tribute",      "キル時MSを入手"]
const RingOfLonelyHeartText      = ["Ring of Lonely Heart",     "ダウン時Mana75%減少"]
const TheBlindValorText          = ["The Blind Valor",          "Rune of LevitationのUnluck時間半減"]
const PendantOfMastercrafterText = ["Pendant of Mastercrafter", "キル時Toolboxを入手"]
const StarlightPendantText       = ["Starlight Pendant",        "Hikoboshi系投擲時Mana20%回復"]
const RingOfCompetitorText       = ["Ring of Competitor",       "爆弾設置後復活時間を1sに短縮 キル時10%でポイント二倍 cap時Mana全快"]
const MythrilRingText            = ["Mythril Ring",             "Rune of Levitation使用時50%でUnluck付与無効化 Healing OrbCD無効化"]
const RingOfSacramentoText       = ["Ring of Sacramento",       "20以下のダメージを2軽減"]
const RingOfCobraReflexText      = ["Ring of Cobra Reflex",     "Backstepを前方向に変更"]
const NecklaceOfEffortText       = ["Necklace of Effort",       "キル時獲得EXP+5"]
const GoldenDreamText            = ["Golden Dream",             "エリクサーでの体力上昇無効化"]
const PendantOfStardustText      = ["Pendant of Stardust",      "Hikoboshi,Hikoboshi2,0の投擲数5倍,Hi-K0 Launcher発射数3倍"]
const ExplosiveEaringText        = ["Explosive Earing",         "FragGranadeCD半減 Dynamite投擲数10倍"]
const FeedbackStoneText          = ["Feedback Stone",           "射撃以外のダメージ25%軽減"]
const EvergreenText              = ["Evergreen",                "ダウン時20HP回復して蘇生 CD30s"]
const PendantOfPurpleSealText    = ["Pendant of Purple Seal",   "射撃以外の攻撃力+5"]
const NecklaceOfFaintVoiceText   = ["Necklace of Faint Voice",  "マナ消費オフハンド使用後5秒間マナ回復量1.5倍"]
const NecklaceOfVigorText        = ["Necklace of Vigor",        "体力自動回復停止"]
const ShieldChokerText           = ["Shield Choker",            "貫通抵抗+5 被ダメージ時Mana1%消費"]
const NecklaceOfIcyMoonText      = ["Necklace of Icy Moon",     "発動時マナ-5%"]
const ColdHeartRingText          = ["Cold Heart Ring",          "味方の自分へのスポーン回避 回避前自分のHP全快"]
const RingOfLifeTreeText         = ["Ring of Life Tree",        "体力自然回復時貫通無効の防御力+4"]
const RingOfLifeTree2Text        = ["Ring of Life Tree",        "体力自然回復時Mana回復量+1.5%"]
const EaringOfCursedMindText     = ["Earing of Cursed Mind",    "最大体力を6,Mana最大値を50%に変更"]
const SymbolOfSinfulText         = ["Symbol of Sinful",         "攻撃後2秒以内にオフハンド使用で相手を爆破"]
const TheEyeText                 = ["The Eye",                  "30Kill毎にSoulShardを入手 Lv2000以下の相手との与ダメージ-50%受ダメージが+50%"]
//Lev Atk DefDmg ShotDefProb HP Mana Dodge PDodge　CC CD pene　Acc ExplDefProb
const NecklaceOfHeart        = [75,   0,   0, 0,  4,  0,   0, 0,  0,  0,  0, 0, 0]
const NecklaceOfHeart2       = [75,   0,   0, 0,  10, 0,   0, 0,  0,  0,  0, 0, 0]
const RingOfLonelyHeart      = [325,  0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const VindicatorsPendant     = [675,  0,   0, 0,  4,  0,   0, 0,  0,  0,  0, 0, 0]
const VindicatorsPendant2    = [675,  0,   0, 0,  4,  0,   0, 0,  0,  0,  0, 0, 0]
const NecklaceOfVoid         = [150,  1,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const NecklaceOfVoid2        = [150,  6,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const TheMagicalTribute      = [50,   0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const TheBlindValor          = [350,  0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const TheBlindValor2         = [350,  100, 0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const AmuletOfGoldenGlow     = [250,  0,   0, 0,  0,  0,   0, 25, 0,  0,  0, 0, 0]
const NyrsTear               = [275,  0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const NyrsTear2              = [275,  2,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const TheLuckyStar           = [25,   0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const TheLuckyStar2          = [25,   0,   0, 0,  12, 0,   0, 0,  0,  0,  0, 0, 0]
const RingOfNightmare        = [1000, 0,   0, 0,  8,  0,   0, 0,  0,  0,  0, 0, 0]
const SymbolOfWealth         = [225,  0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const SymbolOfWealth2        = [225,  2,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const CharmOfFortitude       = [120,  0,   0, 0,  6,  0,   0, 0,  0,  0,  0, 0, 0]
const PendantOfMastercrafter = [50,   0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const ArcanaPendant          = [325,  0,   0, 0,  0,  3,   0, 0,  0,  0,  0, 0, 0]
const TitanRing              = [675,  0,   0, 25, 0,  0,   0, 0,  0,  0,  0, 0, 25]
const RingOfNightrose        = [75,   10,  0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const RingOfNightrose2       = [75,   0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const BeggarOfDeath          = [850,  0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const StarlightPendant       = [350,  0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const RedNova                = [625,  0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const RedNova2               = [625,  7,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const RingOfCompetitor       = [425,  0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const MythrilRing            = [400,  0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const RingOfSacramento       = [1500, 0,   2, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const RingOfSacramento2      = [1500, 0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const RingOfCobraReflex      = [385,  0,   0, 0,  0,  0,   5, 0,  0,  0,  0, 0, 0]
const RingOfCobraReflex2     = [385,  3,   0, 0,  0,  0,   5, 0,  0,  0,  0, 0, 0]
const NecklaceOfEffort       = [100,  0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const NecklaceOfEffort2      = [100,  0,   0, 6,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const LifelinkBracelet       = [925,  2,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const LifelinkBracelet2      = [925,  -1,  0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const GoldenDream            = [2000, 0,   0, 0,  12, 0,   0, 0,  0,  0,  0, 0, 0]
const GoldenDream2           = [2000, 0,   0, 0,  16, 0,   0, 0,  0,  0,  0, 0, 0]
const NecklaceOfHelvys       = [3000, 2,   0, 0,  4,  0,   0, 0,  0,  0,  0, 0, 0]
const PendantOfStardust      = [350,  0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const ExplosiveEaring        = [200,  0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const PenetrationStone       = [250,  1,   0, 0,  0,  0,   0, 0,  0,  0,  5, 0, 0]
const FeedbackStone          = [825,  0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 25]
const Evergreen              = [1500, 0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const TheRabbitFoot          = [1000, 0,   0, 0,  0,  0,   0, 2,  10, 0,  0, 0, 0]
const PendantOfPurpleSeal    = [825,  0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const NecklaceOfFaintVoice   = [1250, 0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const NecklaceOfVigor        = [1250, 0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const ShieldChoker           = [1000, 0,   1, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const EnchantedHematite      = [1500, 0,   2, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const NecklaceOfIcyMoon      = [1250, 0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const ColdHeartRing          = [1500, 0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const RingOfBalance          = [3500, 1,   0, 0,  4,  1,   0, 2,  0,  0,  2, 0, 0]
const RingOfLifeTree         = [2000, 0,   0, 2,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const RingOfLifeTree2        = [2000, 0,   0, 2,  0,  1.5, 0, 0,  0,  0,  0, 0, 0]
const EaringOfCursedMind     = [2500, 5,   0, 0,  0,  0,   0, 0,  20, 0,  0, 0, 0]
const RighteousCrescent      = [2500, 0,   0, 0,  0,  0,   0, 0,  10, 20, 0, 0, 0]
const SymbolOfSinful         = [2500, 0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const TheEye                 = [4500, 0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const accyNone               = [0, 0, 0,   0, 0,  0,  0,   0, 0,  0,  0,  0, 0, 0]
const Meteoric    = [0, 0.75, 0,    0, 0, 0,   0, 0, 0, 0,  0,   0,  0]
const Glorious    = [0, 0.5,  0,    0, 0, 0,   0, 0, 0, 0,  0,   0,  0]
const Mightly     = [0, 0.25, 0,    0, 0, 0,   0, 0, 0, 0,  0,   0,  0]
const Blessed     = [0, 0,    0.75, 0, 0, 0,   0, 0, 0, 0,  0,   0,  0]
const Strong      = [0, 0,    0.5,  0, 0, 0,   0, 0, 0, 0,  0,   0,  0]
const Sturdy      = [0, 0,    0.25, 0, 0, 0,   0, 0, 0, 0,  0,   0,  0]
const Spiteful    = [0, 0,    0,    0, 0, 0,   0, 0, 3, 0,  0,   0,  0]
const Assassins   = [0, 0,    0,    0, 0, 0,   0, 0, 5, 0,  0,   0,  0]
const Mages       = [0, 0,    0,    0, 0, 0.3, 0, 0, 0, 0,  0,   0,  0]
const Infusing    = [0, 0,    0,    0, 0, 0.5, 0, 0, 0, 0,  0,   0,  0]
const Penetrative = [0, 0,    0,    0, 0, 0,   0, 0, 0, 0,  1,   0,  0]
const Piercing    = [0, 0,    0,    0, 0, 0,   0, 0, 0, 0,  1.5, 0,  0]
const Impact      = [0, 0,    0,    0, 0, 0,   0, 0, 0, 10, 0,   0,  0]
const Brunt       = [0, 0,    0,    0, 0, 0,   0, 0, 0, 15, 0,   0,  0]
const Skillful    = [0, 0,    0,    0, 0, 0,   0, 0, 0, 0,  0,   8,  0]
const Masters     = [0, 0,    0,    0, 0, 0,   0, 0, 0, 0,  0,   12, 0]
const accyAprNone = [0, 0,    0,    0, 0, 0,   0, 0, 0, 0,  0,   0,  0]
const accyKeys = {
    "NecklaceOfHeart": NecklaceOfHeart,
    "NecklaceOfHeart2": NecklaceOfHeart2,
    "RingOfLonelyHeart": RingOfLonelyHeart,
    "VindicatorsPendant": VindicatorsPendant,
    "VindicatorsPendant2": VindicatorsPendant2,
    "TheMagicalTribute": TheMagicalTribute,
    "NecklaceOfVoid": NecklaceOfVoid,
    "NecklaceOfVoid2": NecklaceOfVoid2,
    "TheBlindValor": TheBlindValor,
    "TheBlindValor2": TheBlindValor2,
    "AmuletOfGoldenGlow": AmuletOfGoldenGlow,
    "NyrsTear": NyrsTear,
    "NyrsTear2": NyrsTear2,
    "TheLuckyStar": TheLuckyStar,
    "TheLuckyStar2": TheLuckyStar2,
    "RingOfNightmare": RingOfNightmare,
    "SymbolOfWealth": SymbolOfWealth,
    "SymbolOfWealth2": SymbolOfWealth2,
    "CharmOfFortitude": CharmOfFortitude,
    "PendantOfMastercrafter": PendantOfMastercrafter,
    "ArcanaPendant": ArcanaPendant,
    "TitanRing": TitanRing,
    "RingOfNightrose": RingOfNightrose,
    "RingOfNightrose2": RingOfNightrose2,
    "BeggarOfDeath": BeggarOfDeath,
    "StarlightPendant": StarlightPendant,
    "RedNova": RedNova,
    "RedNova2": RedNova2,
    "RingOfCompetitor": RingOfCompetitor,
    "MythrilRing": MythrilRing,
    "RingOfSacramento": RingOfSacramento,
    "RingOfSacramento2": RingOfSacramento2,
    "RingOfCobraReflex": RingOfCobraReflex,
    "RingOfCobraReflex2": RingOfCobraReflex2,
    "NecklaceOfEffort": NecklaceOfEffort,
    "NecklaceOfEffort2": NecklaceOfEffort2,
    "LifelinkBracelet": LifelinkBracelet,
    "LifelinkBracelet2": LifelinkBracelet2,
    "GoldenDream": GoldenDream,
    "GoldenDream2": GoldenDream2,
    "NecklaceOfHelvys": NecklaceOfHelvys,
    "PendantOfStardust": PendantOfStardust,
    "ExplosiveEaring": ExplosiveEaring,
    "PenetrationStone": PenetrationStone,
    "FeedbackStone": FeedbackStone,
    "Evergreen": Evergreen,
    "TheRabbitFoot": TheRabbitFoot,
    "PendantOfPurpleSeal": PendantOfPurpleSeal,
    "NecklaceOfFaintVoice": NecklaceOfFaintVoice,
    "NecklaceOfVigor": NecklaceOfVigor,
    "ShieldChoker": ShieldChoker,
    "EnchantedHematite": EnchantedHematite,
    "NecklaceOfIcyMoon": NecklaceOfIcyMoon,
    "ColdHeartRing": ColdHeartRing,
    "RingOfBalance": RingOfBalance,
    "RingOfLifeTree": RingOfLifeTree,
    "RingOfLifeTree2": RingOfLifeTree2,
    "EaringOfCursedMind": EaringOfCursedMind,
    "RighteousCrescent": RighteousCrescent,
    "SymbolOfSinful": SymbolOfSinful,
    "TheEye": TheEye,
    "none": accyNone,
};
const accyAprKeys = {
    "Meteoric": Meteoric,
    "Glorious": Glorious,
    "Mightly": Mightly,
    "Blessed": Blessed,
    "Strong": Strong,
    "Sturdy": Sturdy,
    "Spiteful": Spiteful,
    "Assassins": Assassins,
    "Mages": Mages,
    "Infusing": Infusing,
    "Penetrative": Penetrative,
    "Piercing": Piercing,
    "Impact": Impact,
    "Brunt": Brunt,
    "Skillful": Skillful,
    "Masters": Masters,
    "none": accyAprNone,
};
const accyTextKeys = {
    "TheMagicalTribute": TheMagicalTributeText ,
    "RingOfLonelyHeart": RingOfLonelyHeart ,
    "TheBlindValor": TheBlindValorText ,
    "PendantOfMastercrafter": PendantOfMastercrafterText ,
    "StarlightPendant": StarlightPendantText ,
    "RingOfCompetitor": RingOfCompetitorText ,
    "MythrilRing": MythrilRingText ,
    "RingOfSacramento": RingOfSacramentoText ,
    "RingOfSacramento2": RingOfSacramentoText ,
    "RingOfCobraReflex": RingOfCobraReflexText ,
    "RingOfCobraReflex2": RingOfCobraReflexText ,
    "NecklaceOfEffort": NecklaceOfEffortText ,
    "NecklaceOfEffort2": NecklaceOfEffortText ,
    "GoldenDream": GoldenDreamText ,
    "GoldenDream2": GoldenDreamText ,
    "PendantOfStardust": PendantOfStardustText ,
    "ExplosiveEaring": ExplosiveEaringText ,
    "FeedbackStone": FeedbackStoneText ,
    "Evergreen": EvergreenText ,
    "PendantOfPurpleSeal": PendantOfPurpleSealText ,
    "NecklaceOfFaintVoice": NecklaceOfFaintVoiceText ,
    "NecklaceOfVigor": NecklaceOfVigorText ,
    "ShieldChoker": ShieldChokerText ,
    "NecklaceOfIcyMoon": NecklaceOfIcyMoonText ,
    "ColdHeartRing": ColdHeartRingText ,
    "RingOfLifeTree": RingOfLifeTreeText ,
    "RingOfLifeTree2": RingOfLifeTree2Text ,
    "EaringOfCursedMind": EaringOfCursedMindText ,
    "SymbolOfSinful": SymbolOfSinfulText ,
    "TheEye": TheEyeText ,
};
const Ar11  = ["Frontline Warrior", ]
const Ar12  = ["Bulletproof Armor", ]
const Ar21  = ["No Escape", ]
const Ar22  = ["Trained Marksman", ]
const Ar31  = ["BS Ammo", ]
const Ar32  = ["M80 AP", ]
const Ar41  = ["Life Module", ]
const Ar42  = ["Flak Jacket", ]
const Ar51  = ["Clarity", ]
const Ar52  = ["Iron Will", ]
const Smg11 = ["Misfortune", ]
const Smg12 = ["Shadow Dance", ]
const Smg21 = ["Acrobat", ]
const Smg22 = ["Assasination step", ]
const Smg31 = ["Alacrity", ]
const Smg32 = ["Double Step", ]
const Smg41 = ["Fatal Wound", ]
const Smg42 = ["Consume Shadow", ]
const Smg51 = ["Phantom Menace", ]
const Smg52 = ["Lethal Poison", ]
const Sg11  = ["Leg Meta", ]
const Sg12  = ["Top Three", ]
const Sg21  = ["Berserker Charge", ]
const Sg22  = ["Furious Charge", ]
const Sg31  = ["Blood Hunger", ]
const Sg32  = ["No Pain", ]
const Sg41  = ["Killing Machine", ]
const Sg42  = ["Thick Skin", ]
const Sg51  = ["Savagery", ]
const Sg52  = ["Blood Frenzy", ]
const Lmg11 = ["Walking Tank", ]
const Lmg12 = ["Human Sentry", ]
const Lmg21 = ["Hitscan Bullet", ]
const Lmg22 = ["AA Cannon", ]
const Lmg31 = ["Emergency Flare", ]
const Lmg32 = ["Tactical Smoke", ]
const Lmg41 = ["Reactive Armor", ]
const Lmg42 = ["Titan Armor", ]
const Lmg51 = ["Barrier Module", ]
const Lmg52 = ["Mana Reactor", ]
const Sr11  = ["Reincarnation", ]
const Sr12  = ["Cloak of Mist", ]
const Sr21  = ["Demonic Aura", ]
const Sr22  = ["Darkness Illusion", ]
const Sr31  = ["One Shot One Kill", ]
const Sr32  = ["Quickscope", ]
const Sr41  = ["Annihilation", ]
const Sr42  = ["Nether Bolt", ]
const Sr51  = ["Death Coil", ]
const Sr52  = ["Nethermancy", ]
const Sp11  = ["Mech Soldier", ]
const Sp12  = ["Magical Jetpack", ]
const Sp21  = ["Chain Reaction", ]
const Sp22  = ["Fatigue Gas", ]
const Sp31  = ["Death From Above", ]
const Sp32  = ["Mechanical Body", ]
const Sp41  = ["Special Mixture", ]
const Sp42  = ["Flak Jacket", ]
const Sp51  = ["Custom Jetpack", ]
const Sp52  = ["Glowing Powder", ]
const St11  = ["Evocation", ]
const St12  = ["Frostfire", ]
const St21  = ["Stasis", ]
const St22  = ["Nimble Caster", ]
const St31  = ["Blink Havoc", ]
const St32  = ["Quick Cast", ]
const St41  = ["Mana Feed", ]
const St42  = ["Tranquility", ]
const St51  = ["Endermage", ]
const St52  = ["Call Thunder", ]

const mappings = [
    "maps/1_AR.json",
    "maps/1_AR_CSP.json",
    "maps/3_SMG.json",
    "maps/3_SMG_CSP.json",
    "maps/9_LMG.json",
    "maps/9_LMG_CSP.json",
    "maps/5_SR.json",
    "maps/5_SR_CSP.json",
    "maps/12_CARBINE.json",
    "maps/12_CARBINE_CSP.json",
    "maps/7_EXPLOSIVE.json",
    "maps/7_EXPLOSIVE_CSP.json",
    "maps/6_PISTOL.json",
    "maps/6_PISTOL_CSP.json",
    "maps/4_SG.json",
    "maps/4_SG_CSP.json",
];
