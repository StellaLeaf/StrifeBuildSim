const Result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const Weapon = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const Mod = [0, 0, 0, 0, 0, 0, 0, 0]
const EnchDmg = [0, 0, 0, 0, 0, 0];
const Ae = [0, 0]
const Addon = [0, 0, 0, 0, 0]
const Sunfire = [3, 0.67, 0.72, 0.77, 0]
const DemonPower = [4, 0.35, 0.4, 0.45, 0]
const SiphonLife = [2, 0.4, 0.5, 0.6, 0]
const DeathsRuin = [6, 0.55, 0.6, 0.65, 0.15]
const ArcaneBrilliance = [3, 0.35, 0.45, 0.55, 0.2]
const NorthernWind = [5, 0.45, 0.5, 0.55, 0.1]
const FlexibleResonance = [4, 0.65, 0.70, 0.75, 0]
const PhoenixFlame = [10, 0.05, 0.06, 0.07, 0]
const EnchActive =[0, 0];
const BcDmg = 7
const EoDmg = 6
const McDmg = 1
const CfDmg = 4
const SdAverageDmg = 1
const SdHighestDmg = 20
const MpDmg = [0.25, 0.5, 1.0, 1.5]
const HbAverageDmg = [0.4, 0.8, 1.2, 1.6]
const HbHighestDmg = [2, 4, 6, 8]
const EmCapacity = [2, 4, 6, 10]
const QpReload = [-4, -8, -12, -16]
const LkWeight = [0.004, 0.005, 0.010, 0.015]
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
        WeaponWeight
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
    Weapon[9] = WeaponCs[13]
    Result[0] = Math.round((Weapon[0] + Mod[0] + EnchDmg[0] * EnchActive[0] + EnchDmg[2] * EnchActive[1] + Ae[0] + Addon[0] + Result[12]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[1] = Math.round((Weapon[0] + Mod[0] + EnchDmg[0] * EnchActive[0] + EnchDmg[2] * EnchActive[1] + Ae[0] + Addon[0] + Result[12] + Weapon[1] + Mod[1]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[2] = Math.round((Weapon[0] + Mod[0] + EnchDmg[1] + EnchDmg[3] + Ae[1] + Addon[1] + Result[13]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[3] = Math.round((Weapon[0] + Mod[0] + EnchDmg[1] + EnchDmg[3] + Ae[1] + Addon[1] + Result[13] + Weapon[1] + Mod[1]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[4] = Weapon[2] + Mod[2] + Addon[2]
    Result[5] = Weapon[3] + Mod[3] + Addon[3]
    Result[7] = Math.round((Result[0] * Result[6]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[8] = Math.round(Math.abs(Weapon[7] + Mod[5]) * Math.pow(10, 2)) / Math.pow(10, 2)
    Result[9] = Math.round(Math.abs(Weapon[8] + Mod[5]) * Math.pow(10, 2)) / Math.pow(10, 2)
    Result[10] = Math.round(((0.2 + Weapon[9] + Mod[6] + Addon[4]) / 0.2) * Math.pow(10, 2)) / Math.pow(10, 2)
    Result[11] = Math.round((Result[4] / Result[6]) * Math.pow(10, 1)) / Math.pow(10, 1)
    document.getElementById("DisplayAverageDmg").textContent = (Result[0])
    document.getElementById("DisplayAverageHsDmg").textContent = (Result[1])
    document.getElementById("DisplayHighestDmg").textContent = (Result[2])
    document.getElementById("DisplayHighestHsDmg").textContent = (Result[3])
    document.getElementById("DisplayRate").textContent = (Result[6])
    document.getElementById("DisplayCapacity").textContent = (Result[4])
    document.getElementById("DisplayReload").textContent = (Result[5])
    document.getElementById("DisplaySpread").textContent = (Result[8])
    document.getElementById("DisplayAdsSpread").textContent = (Result[9])
    document.getElementById("DisplayDps").textContent = (Result[7])
    document.getElementById("DisplayChangeDmg10m").textContent = (Result[14])
    document.getElementById("DisplayChangeDmgMax").textContent = (Result[15])
    document.getElementById("DisplayWeight").textContent = (Result[10])
    if (Result[11] > 0){document.getElementById("DisplayDuration").textContent = (Result[11])
    }else{ document.getElementById("DisplayDuration").textContent = 0
    };
    if (Weapon[6] > 1) {document.getElementById("DisplayPellets").textContent = ("x" + Weapon[6])
    }else{document.getElementById("DisplayPellets").textContent = (null)
    };
    console.log(Result)
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
    }else if(Ench == 'FlexibleResonance'){
        EnchLevelsCalc(FlexibleResonance);
    }else if(Ench == 'ManaFountain'){
        EnchLevelsCalc(ManaFountain);
    }else if(Ench == 'NightStalker'){
        EnchLevelsCalc(NightStalker);
    }else if(Ench == 'NorthernWind'){
        EnchLevelsCalc(NorthernWind);
    }else if(Ench == 'PhoenixFlame'){
        EnchLevelsCalc(PhoenixFlame);
    }else if(Ench == 'ShadowStrike'){
        EnchLevelsCalc(ShadowStrike);
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
}

const CalcOE = () => {
    const OE = document.getElementById("OeForm").OeSelect.value
    const OELv = document.getElementById("OeForm").OeLevSelect.value
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
    }else if(OE == 'FlexibleResonance'){
        OELevelsCalc(FlexibleResonance);
    }else if(OE == 'ManaFountain'){
        OELevelsCalc(ManaFountain);
    }else if(OE == 'NightStalker'){
        OELevelsCalc(NightStalker);
    }else if(OE == 'NorthernWind'){
        OELevelsCalc(NorthernWind);
    }else if(OE == 'PhoenixFlame'){
        OELevelsCalc(PhoenixFlame);
    }else if(OE == 'ShadowStrike'){
        OELevelsCalc(ShadowStrike);
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
const CalcAE = () => {
    const AE = document.getElementById("AncientEnchantForm").AncientEnchantSelect.value
    if (AE == "Bloodcraze") {
        Ae[0] = BcDmg
        Ae[1] = BcDmg
    } else if (AE == "ElementalOverload") {
        Ae[0] = EoDmg
        Ae[1] = EoDmg
    } else if (AE == "Mastercrafted") {
        Ae[0] = McDmg
        Ae[1] = McDmg
    } else if (AE == "ConcentratedFire") {
        Ae[0] = CfDmg
        Ae[1] = CfDmg
    } else if (AE == "SuddenDeath") {
        Ae[0] = SdAverageDmg
        Ae[1] = SdHighestDmg
    } else {
        Ae[0] = 0
        Ae[1] = 0
    }
    render()
}

const CalcAddon = () => {
    const Addon = document.getElementById("AddonForm").AddonSelect.value
    const AddonLv = document.getElementById("AddonForm").AddonLevSelect.value
    if (Addon == "ManaPowder") {
        Addon[2] = 0
        Addon[3] = 0
        Addon[4] = 0
        if (AddonLv == "AddonLev0") {
            Addon[0] = MpDmg[0]
            Addon[1] = MpDmg[0]
        } else if (AddonLv == "AddonLev1") {
            Addon[0] = MpDmg[0]
            Addon[1] = MpDmg[0]
        } else if (AddonLv == "AddonLev2") {
            Addon[0] = MpDmg[0]
            Addon[1] = MpDmg[0]
        } else if (AddonLv == "AddonLev3") {
            Addon[0] = MpDmg[0]
            Addon[1] = MpDmg[0]
        } else {
            Addon[0] = 0
            Addon[1] = 0
        }
    } else if (Addon == "HeavyBullets") {
        Addon[2] = 0
        Addon[3] = 0
        Addon[4] = 0
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
    } else if (Addon == "ExtendedMagazine") {
        Addon[0] = 0
        Addon[1] = 0
        Addon[3] = 0
        Addon[4] = 0
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
    } else if (Addon == "QuickPull") {
        Addon[0] = 0
        Addon[1] = 0
        Addon[3] = 0
        Addon[4] = 0
        if (AddonLv == "AddonLev0") {
            Addonr = QpReload[0]
        } else if (AddonLv == "AddonLev1") {
            Addon[3] = QpReload[1]
        } else if (AddonLv == "AddonLev2") {
            Addon[3] = QpReload[2]
        } else if (AddonLv == "AddonLev3") {
            Addon[3] = QpReload[3]
        } else {
            Addon[3] = 0
        }
    } else if (Addon == "LightweightKit") {
        Addon[0] = 0
        Addon[1] = 0
        Addon[3] = 0
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
    } else {
        Addon[0] = 0
        Addon[1] = 0
        Addon[2] = 0
        Addon[3] = 0
        Addon[4] = 0
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
    document.getElementById("AncientEnchantForm").onchange = () => CalcAE()
    document.getElementById("AddonForm").onchange = () => CalcAddon()
})