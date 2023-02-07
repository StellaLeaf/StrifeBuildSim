const Result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const Weapon = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const Mod = [0, 0, 0, 0, 0, 0, 0, 0]
const Ench = [0, 0, 0, 0]
const Ae = [0, 0]
const Addon = [0, 0, 0, 0, 0]
const SfAverageDmg = [2.01, 2.16, 2, 31]
const SfHighestDmg = 3
const DpAverageDmg = [1.4, 1.6, 1.8]
const DpHighestDmg = 4
const SlAverageDmg = [0.8, 1.0, 1.2]
const SlHighestDmg = 2
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
    if (TypeKey === "none") {
        //none
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
    let WeaponKey = document.getElementById("WeaponForm").WeaponSelect.value
    let ModKey = document.getElementById("ModForm").ModSelect.value
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
    if (!(WeaponKey === "none" || jsondata == undefined)) {
        if (typeof jsondata === "undefined") {
            WeaponReloadStyle = 0
        } else if (jsondata[WeaponKey]["Reload"]["Reload_Bullets_Individually"] === "true") {
            WeaponReloadStyle = 1
        } else {
            WeaponReloadStyle = 0
        }

        function notFullauto() {
            if (jsondata[WeaponKey]["Burstfire"] === "undefined") {
                WeaponRateKey = 20 / jsondata[WeaponKey]["Shooting"]["Delay_Between_Shots"]
            } else if (jsondata[WeaponKey]["Burstfire"]["Enable"] === "true") {
                WeaponRateKey = (20 / jsondata[WeaponKey]["Shooting"]["Delay_Between_Shots"]) * jsondata[WeaponKey]["Burstfire"]["Shots_Per_Burst"]
            } else {
                WeaponRateKey = 20 / jsondata[WeaponKey]["Shooting"]["Delay_Between_Shots"]
            }
        }
        if (typeof jsondata[WeaponKey]["Fully_Automatic"] === "undefined") {
            notFullauto()
        } else if (jsondata[WeaponKey]["Fully_Automatic"]["Enable"] === "true") {
            WeaponRateKey = jsondata[WeaponKey]["Fully_Automatic"]["Fire_Rate"] + 4
        } else {
            notFullauto()
        }
        if (typeof jsondata[WeaponKey]["Sneak"] === "undefined") {
            WeaponAdsKey = 0
        } else if (jsondata[WeaponKey]["Sneak"]["Enable"] === "true") {
            WeaponAdsKey = jsondata[WeaponKey]["Sneak"]["Zoom_Bullet_Spread"]
        } else {
            WeaponAdsKey = 0
        }

        if (typeof jsondata[WeaponKey]["Critical_Hits"] === "undefined") {
            WeaponCcKey = 0
            WeaponCdKey = 0
        } else if (jsondata[WeaponKey]["Critical_Hits"]["Enable"] === "true") {
            WeaponCcKey = jsondata[WeaponKey]["Critical_Hits"]["Chance"] / 100
            WeaponCdKey = jsondata[WeaponKey]["Critical_Hits"]["Bonus_Damage"]
        } else {
            WeaponCcKey = 0
            WeaponCdKey = 0
        }

        if (typeof jsondata[WeaponKey]["Damage_Based_On_Flight_Time"] === "undefined") {
            WeaponC10mKey = 0
            WeaponCmaxKey = 0
        } else if (jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Enable"] = "true") {
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
        WeaponDmg = jsondata[WeaponKey]["Shooting"]["Projectile_Damage"]
        WeaponHsBonus = jsondata[WeaponKey]["Headshot"]["Bonus_Damage"]
        WeaponReloadAmount = jsondata[WeaponKey]["Reload"]["Reload_Amount"]
        WeaponReloadDuration = jsondata[WeaponKey]["Reload"]["Reload_Duration"]
        WeaponPellets = jsondata[WeaponKey]["Shooting"]["Projectile_Amount"]
        WeaponSpread = jsondata[WeaponKey]["Shooting"]["Bullet_Spread"]
        WeaponWeight = jsondata2[WeaponKey]["itemHoldEffects"]["GunWeight"]
    }
    let ModCapacity = 0
    let ModReload = 0
    let ModWeight = 0
    let ModHsBonus = 0
    let ModRate = 0
    let ModSpread = 0
    let ModDmg = 0
    if (!(ModKey === "none" || WeaponKey === "none" || jsondata2 == undefined)) {
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
    Weapon[0] = WeaponCs[0]
    Weapon[1] = WeaponCs[1]
    Weapon[2] = WeaponCs[2]
    Weapon[3] = WeaponCs[3]
    Weapon[4] = WeaponCs[4]
    Weapon[5] = WeaponCs[5]
    Weapon[6] = WeaponCs[6]
    Weapon[7] = WeaponCs[7]
    Weapon[8] = WeaponCs[8]
    Result[12] = (WeaponCs[9] * WeaponCs[10])
    Result[13] = WeaponCs[10]
    Result[14] = Math.round(WeaponCs[11] * Math.pow(10, 2)) / Math.pow(10, 2)
    Result[15] = WeaponCs[12]
    Weapon[9] = WeaponCs[13]
    Result[0] = Math.round((Weapon[0] + Mod[0] + Ench[0] + Ench[2] + Ae[0] + Addon[0] + Result[12]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[1] = Math.round((Weapon[0] + Mod[0] + Ench[0] + Ench[2] + Ae[0] + Addon[0] + Result[12] + Weapon[1] + Mod[1]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[2] = Math.round((Weapon[0] + Mod[0] + Ench[1] + Ench[3] + Ae[1] + Addon[1] + Result[13]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[3] = Math.round((Weapon[0] + Mod[0] + Ench[1] + Ench[3] + Ae[1] + Addon[1] + Result[13] + Weapon[1] + Mod[1]) * Math.pow(10, 1)) / Math.pow(10, 1)
    Result[4] = Weapon[2] + Mod[2] + Addon[2]
    Result[5] = Weapon[3] + Mod[3] + Addon[3]
    Result[6] = Math.round((Weapon[5] + Mod[4]) * Math.pow(10, 2)) / Math.pow(10, 2)
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
    if (Result[11] > 0) {
        document.getElementById("DisplayDuration").textContent = (Result[11])
    } else {
        document.getElementById("DisplayDuration").textContent = 0
    }
    if (Weapon[6] > 1) {
        document.getElementById("DisplayPellets").textContent = ("x" + Weapon[6])
    } else {
        document.getElementById("DisplayPellets").textContent = (null)
    }
    if (Weapon[4] != 0) {
        document.getElementById("DisplayReloadStyle").textContent = ("/発")
    } else {
        document.getElementById("DisplayReloadStyle").textContent = (null)
    }
}
//武器選択モジュール
const categorySelect2 = document.getElementById("TypeSelect")
const subCategorySelect2 = document.getElementById("WeaponSelect")
WeaponTypes.forEach(category => {
    const option = document.createElement("option")
    option.textContent = category

    categorySelect2.appendChild(option)
})
categorySelect2.addEventListener("input", () => {

    // 小分類のプルダウンをリセット
    const options = document.querySelectorAll("#WeaponSelect > option")
    options.forEach(option => {
        option.remove()
    })

    // 小分類のプルダウンに「選択してください」を加える
    const firstSelect = document.createElement("option")
    firstSelect.textContent = "武器を選択してください"
    firstSelect.setAttribute("value", "none")
    subCategorySelect2.appendChild(firstSelect)

    // 小分類を選択（クリック）できるようにする
    subCategorySelect2.disabled = false

    // 大分類が選択されていない（「選択してください」になっている）とき、小分類を選択（クリック）できないようにする
    if (categorySelect2.value == "blank") {
        subCategorySelect2.disabled = true
        return
    }
    // 大分類で選択されたカテゴリーと同じ小分類のみを、プルダウンの選択肢に設定する
    WeaponList.forEach(subCategory => {
        if (categorySelect2.value == subCategory.category) {
            const option = document.createElement("option")
            option.textContent = subCategory.name
            option.setAttribute("value", subCategory.value)
            subCategorySelect2.appendChild(option)
        }
    })
})
//トリガー
document.getElementById("TypeForm").onchange = () => render()
document.getElementById("WeaponForm").onchange = () => render()
document.getElementById("ModForm").onchange = () => render()
//エンチャダメージ処理
document.getElementById("EnchantForm").onchange = function () {
    switch (document.getElementById("EnchantForm").EnchantSelect.value) {
        case "Sunfire":
            switch (document.getElementById("EnchantForm").EnchantLevSelect.value) {
                case "EnchLev1":
                    Ench[0] = SfAverageDmg[0]
                    Ench[1] = SfHighestDmg
                    break
                case "EnchLev2":
                    Ench[0] = SfAverageDmg[1]
                    Ench[1] = SfHighestDmg
                    break
                case "EnchLev3":
                    Ench[0] = SfAverageDmg[2]
                    Ench[1] = SfHighestDmg
                    break
                default:
                    Ench[0] = 0
                    Ench[1] = 0
                    break
            }
            break
        case "DemonPower":
            switch (document.getElementById("EnchantForm").EnchantLevSelect.value) {
                case "EnchLev1":
                    Ench[0] = DpAverageDmg[0]
                    Ench[1] = DpHighestDmg
                    break
                case "EnchLev2":
                    Ench[0] = DpAverageDmg[1]
                    Ench[1] = DpHighestDmg
                    break
                case "EnchLev3":
                    Ench[0] = DpAverageDmg[2]
                    Ench[1] = DpHighestDmg
                    break
                default:
                    Ench[0] = 0
                    Ench[1] = 0
                    break
            }
            break
        case "SiphonLife":
            switch (document.getElementById("EnchantForm").EnchantLevSelect.value) {
                case "EnchLev1":
                    Ench[0] = SlAverageDmg[0]
                    Ench[1] = SlHighestDmg
                    break
                case "EnchLev2":
                    Ench[0] = SlAverageDmg[1]
                    Ench[1] = SlHighestDmg
                    break
                case "EnchLev3":
                    Ench[0] = SlAverageDmg[2]
                    Ench[1] = SlHighestDmg
                    break
                default:
                    Ench[0] = 0
                    Ench[1] = 0
                    break
            }
            break
        default:
            Ench[0] = 0
            Ench[1] = 0
            break
    }
    render()
}
//OEダメージ処理
document.getElementById("OeForm").onchange = function () {
    switch (document.getElementById("OeForm").OeSelect.value) {
        case "OeSunfire":
            switch (document.getElementById("OeForm").OeLevSelect.value) {
                case "OeLev1":
                    Ench[2] = SfAverageDmg[0]
                    Ench[3] = SfHighestDmg
                    break
                case "OeLev2":
                    Ench[2] = SfAverageDmg[1]
                    Ench[3] = SfHighestDmg
                    break
                case "OeLev3":
                    Ench[2] = SfAverageDmg[2]
                    Ench[3] = SfHighestDmg
                    break
                default:
                    Ench[2] = 0
                    Ench[3] = 0
                    break
            }
            break
        case "OeDemonPower":
            switch (document.getElementById("OeForm").OeLevSelect.value) {
                case "OeLev1":
                    Ench[2] = DpAverageDmg[0]
                    Ench[3] = DpHighestDmg
                    break
                case "OeLev2":
                    Ench[2] = DpAverageDmg[1]
                    Ench[3] = DpHighestDmg
                    break
                case "OeLev3":
                    Ench[2] = DpAverageDmg[2]
                    Ench[3] = DpHighestDmg
                    break
                default:
                    Ench[2] = 0
                    Ench[3] = 0
                    break
            }
            break
        case "OeSiphonLife":
            switch (document.getElementById("OeForm").OeLevSelect.value) {
                case "OeLev1":
                    Ench[2] = SlAverageDmg[0]
                    Ench[3] = SlHighestDmg
                    break
                case "OeLev2":
                    Ench[2] = SlAverageDmg[1]
                    Ench[3] = SlHighestDmg
                    break
                case "OeLev3":
                    Ench[2] = SlAverageDmg[2]
                    Ench[3] = SlHighestDmg
                    break
                default:
                    Ench[2] = 0
                    Ench[3] = 0
                    break
            }
            break
        default:
            Ench[2] = 0
            Ench[3] = 0
            break
    }
    render()
}
//AEダメージ処理
document.getElementById("AncientEnchantForm").onchange = function () {
    switch (document.getElementById("AncientEnchantForm").AncientEnchantSelect.value) {
        case "Bloodcraze":
            Ae[0] = BcDmg
            Ae[1] = BcDmg
            break
        case "ElementalOverload":
            Ae[0] = EoDmg
            Ae[1] = EoDmg
            break
        case "Mastercrafted":
            Ae[0] = McDmg
            Ae[1] = McDmg
            break
        case "ConcentratedFire":
            Ae[0] = CfDmg
            Ae[1] = CfDmg
            break
        case "SuddenDeath":
            Ae[0] = SdAverageDmg
            Ae[1] = SdHighestDmg
        default:
            Ae[0] = 0
            Ae[1] = 0
            break
    }
    render()
}
//Addonダメージ処理
document.getElementById("AddonForm").onchange = function () {
    switch (document.getElementById("AddonForm").AddonSelect.value) {
        case "ManaPowder":
            Addon[2] = 0
            Addon[3] = 0
            Addon[4] = 0
            switch (document.getElementById("AddonForm").AddonLevSelect.value) {
                case "AddonLev0":
                    Addon[0] = MpDmg[0]
                    Addon[1] = MpDmg[0]
                    break
                case "AddonLev1":
                    Addon[0] = MpDmg[1]
                    Addon[1] = MpDmg[1]
                    break
                case "AddonLev2":
                    Addon[0] = MpDmg[2]
                    Addon[1] = MpDmg[2]
                    break
                case "AddonLev3":
                    Addon[0] = MpDmg[3]
                    Addon[1] = MpDmg[3]
                    break
                default:
                    Addon[0] = 0
                    Addon[1] = 0
                    break
            }
            break
        case "HeavyBullets":
            Addon[2] = 0
            Addon[3] = 0
            Addon[4] = 0
            switch (document.getElementById("AddonForm").AddonLevSelect.value) {
                case "AddonLev0":
                    Addon[0] = HbAverageDmg[0]
                    Addon[1] = HbHighestDmg[0]
                    break
                case "AddonLev1":
                    Addon[0] = HbAverageDmg[1]
                    Addon[1] = HbHighestDmg[1]
                case "AddonLev2":
                    Addon[0] = HbAverageDmg[2]
                    Addon[1] = HbHighestDmg[2]
                    break
                case "AddonLev3":
                    Addon[0] = HbAverageDmg[3]
                    Addon[1] = HbHighestDmg[3]
                    break
                default:
                    Addon[0] = 0
                    Addon[1] = 0
                    break
            }
            case "ExtendedMagazine":
                Addon[0] = 0
                Addon[1] = 0
                Addon[3] = 0
                Addon[4] = 0
                switch (document.getElementById("AddonForm").AddonLevSelect.value) {
                    case "AddonLev0":
                        Addon[2] = EmCapacity[0]
                        break
                    case "AddonLev1":
                        Addon[2] = EmCapacity[1]
                        break
                    case "AddonLev2":
                        Addon[2] = EmCapacity[2]
                        break
                    case "AddonLev3":
                        Addon[2] = EmCapacity[3]
                        break
                    default:
                        Addon[2] = 0
                }
                break
            case "QuickPull":
                Addon[0] = 0
                Addon[1] = 0
                Addon[3] = 0
                Addon[4] = 0
                switch (document.getElementById("AddonForm").AddonLevSelect.value) {
                    case "AddonLev0":
                        Addonr = QpReload[0]
                        break
                    case "AddonLev1":
                        Addon[3] = QpReload[1]
                        break
                    case "AddonLev2":
                        Addon[3] = QpReload[2]
                        break
                    case "AddonLev3":
                        Addon[3] = QpReload[3]
                        break
                    default:
                        Addon[3] = 0
                }
                case "LightweightKit":
                    Addon[0] = 0
                    Addon[1] = 0
                    Addon[3] = 0
                    switch (document.getElementById("AddonForm").AddonLevSelect.value) {
                        case "AddonLev0":
                            Addon[4] = LkWeight[0]
                            break
                        case "AddonLev1":
                            Addon[4] = LkWeight[1]
                            break
                        case "AddonLev2":
                            Addon[4] = LkWeight[2]
                            break
                        case "AddonLev3":
                            Addon[4] = LkWeight[3]
                            break
                        default:
                            Addon[4] = 0
                    }
                    break
                default:
                    Addon[0] = 0
                    Addon[1] = 0
                    Addon[2] = 0
                    Addon[3] = 0
                    Addon[4] = 0
                    break
    }
    render()
}

document.addEventListener("DOMContentLoaded", () => {
    fetchAll([_pathAr, _pathArp, _pathSmg, _pathSmgp, _pathLmg, _pathLmgp, _pathSr, _pathSrp, _pathCar, _pathCarp, _pathExpl, _pathExplp, _pathSec, _pathSecp, _pathMelee, _pathMeleep]).then((res) => {
        [_objAr, _objArp, _objSmg, _objSmgp, _objLmg, _objLmgp, _objSr, _objSrp, _objCar, _objCarp, _objExpl, _objExplp, _objSec, _objSecp, _objMelee, _objMeleep] = res
        console.log(res.concat())
    })
})