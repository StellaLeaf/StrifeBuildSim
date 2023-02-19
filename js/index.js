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
    Result[8] = Math.round(Math.abs(Weapon[7] + Mod[5]) * Math.pow(10, 2)) / Math.pow(10, 2)
    Result[9] = Math.round(Math.abs(Weapon[8] + Mod[5]) * Math.pow(10, 2)) / Math.pow(10, 2)
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
    };
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