document.addEventListener("DOMContentLoaded", () => {
    var tableElem = document.getElementById('EffectTable');
    const Result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const Weapon = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    //0Dmg 1Prob 2Cooldown 3Def 4Dodge
    const Ench = [0, 0, 0, 0, 0, 0, 0, 0]
    const Oe = [0, 0, 0, 0, 0, 0, 0, 0]
    const Ae = [0, 0, 0, 0]
    const Addon = [0, 0, 0, 0, 0, 1]
    //Armor 0HP 1Atk 2Def 3CC 4Mana 5Stamina 6MaxSta 7Regene
    const Armor = [0, 0, 0, 0, 0, 0, 0, 0];
    const EnchActive = [0, 0];
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
    let EnchTableSwitch = 0;
    let OeTableSwitch = 0;
    let AeTableSwitch = 0;
    const fetchAll = (urls) => Promise.all(urls.map(url => fetch(url, {
        method: "GET"
    }).then(response => {
        if (!response.ok) throw new Error("Network response was not ok")
        return response.json()
    })))
    const render = (renderCheck) => {
        let TypeKey = document.getElementById("TypeForm").TypeSelect.value
        let WeaponKey = document.getElementById("WeaponForm").WeaponSelect.value
        let ModKey = document.getElementById("ModForm").ModSelect.value
        const BsToggle = document.getElementById("BsCheck");
        const MsToggle = document.getElementById("MsCheck");
        if (TypeKey === "none") {
            jsondata = 'none';
            jsondata2 = 'none';
        } else if (WeaponKey === 'graveless' || WeaponKey === 'Helheim' || WeaponKey === 'horizon' || WeaponKey === 'thirdeye' || WeaponKey === 'Coldfang') {
            jsondata = _objSr
            jsondata2 = _objArp
        } else if (WeaponKey === 'minigun' || WeaponKey === 'awr') {
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
        if (TypeKey == "SMG") {
            BsLabel.style.display = "inline-block";
        } else {
            BsLabel.style.display = 'none';
            BsToggle.checked = false;
        };
        if (TypeKey == "LMG") {
            MsLabel.style.display = "inline-block";
        } else {
            MsLabel.style.display = 'none';
            MsToggle.checked = false;
        };
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
        let WeaponShiftEffect = [0, 0]
        if (BsToggle.checked){
            WeaponShiftEffect[0] = 0.25;
            WeaponShiftEffect[1] = 0;
        }else if (MsToggle.checked){
            WeaponShiftEffect[1] = 3;
            WeaponShiftEffect[0] = 0;
        }else {
            WeaponShiftEffect[0] = 0;
            WeaponShiftEffect[1] = 0;
        }
        if (!(WeaponKey === "none" || jsondata == 'none')) {
            //リロード配列の処理
            if (typeof jsondata[WeaponKey]["Reload"] === 'undefined') {
                WeaponReloadStyle = 0
                WeaponReloadAmount = 0
                WeaponReloadDuration = 0
            } else {
                if (typeof jsondata[WeaponKey]["Reload"]["Reload_Bullets_Individually"] === 'undefined') {
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
            if (typeof jsondata[WeaponKey]["Headshot"] === 'undefined') {
                WeaponHsBonus = 0;
            } else {
                WeaponHsBonus = jsondata[WeaponKey]["Headshot"]["Bonus_Damage"]
            };
            if (typeof jsondata[WeaponKey]["Shooting"]["Projectile_Damage"] === 'undefined') {
                WeaponDmg = 0;
            } else {
                WeaponDmg = jsondata[WeaponKey]["Shooting"]["Projectile_Damage"]
            };
            if (typeof jsondata[WeaponKey]["Shooting"]["Bullet_Spread"] === 'undefined') {
                WeaponSpread = 0;
            } else {
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
        if (Weapon[5] === Infinity) {
            Weapon[5] = 20;
        }
        Result[6] = Math.round((Weapon[5] + Mod[4]) * Math.pow(10, 2)) / Math.pow(10, 2);
        if (Result[6] === 0 || Ench[2] === 0) {
            EnchActive[0] = 1;
        } else {
            EnchActive[0] = 1 / (Math.ceil(Ench[2] * Result[6]));
        };
        if (Result[6] === 0 || Oe[2] === 0) {
            EnchActive[1] = 1;
        } else {
            EnchActive[1] = 1 / (Math.ceil(Oe[2] * Result[6]));
        };
        CalcAE(WeaponDmg + ModDmg, WeaponDmg + WeaponHsBonus + ModDmg + ModHsBonus);
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
        Result[0] = Math.round(((Weapon[0] + Mod[0] + Ench[0] * EnchActive[0] + Oe[0] * EnchActive[1] + Ae[0] + Addon[0] + Result[12]) * Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[1] = Math.round(((Weapon[0] + Mod[0] + Ench[0] * EnchActive[0] + Oe[0] * EnchActive[1] + Ae[0] + Addon[0] + Result[12] + Weapon[1] + Mod[1] + Ae[2]) * Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[2] = Math.round(((Weapon[0] + Mod[0] + Ench[1] + Oe[1] + Ae[1] + Addon[1] + Result[13]) * Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[3] = Math.round(((Weapon[0] + Mod[0] + Ench[1] + Oe[1] + Ae[1] + Addon[1] + Result[13] + Weapon[1] + Mod[1] + Ae[2]) * Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[4] = Weapon[2] + Mod[2] + Addon[2]
        Result[5] = Weapon[3] + Mod[3] + Addon[3]
        Result[7] = Math.round((Result[0] * Result[6]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[8] = Math.round(Math.abs(Weapon[7] - Mod[5]) * Math.pow(10, 2)) / Math.pow(10, 2)
        Result[9] = Math.round(Math.abs(Weapon[8] - Mod[5]) * Math.pow(10, 2)) / Math.pow(10, 2)
        Result[10] = Math.round(((0.2 + Weapon[9] + Mod[6] + Addon[4]) / 0.2) * Math.pow(10, 2)) / Math.pow(10, 2)
        Result[11] = Math.round((Result[4] / Result[6]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[18] = Math.round(((Mod[0] + Ench[0] * EnchActive[0] + Oe[0] * EnchActive[1] + Ae[0] + Addon[0] + Result[12]) * Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[19] = Math.round(((Mod[0] + Ench[1] + Oe[1] + Ae[1] + Addon[1] + Result[13]) * Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[20] = Math.round((Ench[3] + Oe[3] + Armor[2] + WeaponShiftEffect[1]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[21] = Math.round((Ench[4] + Oe[4] + Armor[2] + WeaponShiftEffect[1]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[22] = Math.round((2 + Ench[5] + Oe[5] + Armor[4]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[23] = Math.round(((Ench[6] + Oe[6] + Ae[3] + WeaponShiftEffect[0]) * 100) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[24] = Math.round(20 + Armor[0]);
        Result[25] = Math.round(Armor[1]);
        //Result 0AveDmg 1AveHsDmg 2HiDmg 3HiHsDmg 4Capacity 5Reload 6Rate 7Dps 8Sprd 9Ads 10Wt 11Duration 12CC 13CD 14C10m 15Cmax 16ExplDmg 17ExplRadius 18AddAveDmg 19addHiDmg 20AveDef 21HiDef 22Mana 23Dodge
        //DesktopDisplay
        document.getElementById("DisplayRate").textContent = (Result[6])
        document.getElementById("DisplayCapacity").textContent = (Result[4])
        document.getElementById("DisplayReload").textContent = (Result[5])
        document.getElementById("DisplaySpread").textContent = (Result[8])
        document.getElementById("DisplayAdsSpread").textContent = (Result[9])
        document.getElementById("DisplayChangeDmg10m").textContent = (Result[14])
        document.getElementById("DisplayChangeDmgMax").textContent = (Result[15])
        document.getElementById("DisplayWeight").textContent = (Result[10])
        document.getElementById("DisplayAveDef").textContent = (Result[20])
        document.getElementById("DisplayHiDef").textContent = (Result[21])
        document.getElementById("DisplayMana").textContent = (Result[22])
        document.getElementById("DisplayHp").textContent = (Result[24])
        document.getElementById("DisplayAtk").textContent = (Result[25])

        //MobileDisplay
        document.getElementById("MobileDisplayRate").textContent = (Result[6])
        document.getElementById("MobileDisplayCapacity").textContent = (Result[4])
        document.getElementById("MobileDisplayReload").textContent = (Result[5])
        document.getElementById("MobileDisplaySpread").textContent = (Result[8])
        document.getElementById("MobileDisplayAdsSpread").textContent = (Result[9])
        document.getElementById("MobileDisplayChangeDmg10m").textContent = (Result[14])
        document.getElementById("MobileDisplayChangeDmgMax").textContent = (Result[15])
        document.getElementById("MobileDisplayWeight").textContent = (Result[10])
        //if系
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
            document.getElementById("DisplayChangeDmg10m").textContent = (Result[16] + '%')
            document.getElementById("MobileDisplayChangeDmg10m").textContent = (Result[16] + '%')
            document.getElementById("DisplayChangeDmgMax").textContent = (Result[17])
            document.getElementById("MobileDisplayChangeDmgMax").textContent = (Result[17])
            document.getElementById("DisplayAddDmg").textContent = ("+" + Result[18] + "(" + Result[19] + ")")
            document.getElementById("MobileDisplayAddDmg").textContent = ("+" + Result[18] + "(" + Result[19] + ")")
        } else if (Result[14] > 0) {
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
        } else {
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
        } else {
            document.getElementById("DisplayPellets").textContent = (null)
            document.getElementById("MobileDisplayPellets").textContent = (null)
        };
        if (!(WeaponKey === "none" || jsondata == 'none')) {
            if (typeof jsondata[WeaponKey]["Shooting"]["Projectile_Damage"] === 'undefined') {
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
            } else {
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
        }
        if (Result[23] <= 60) {
            document.getElementById("DisplayDodge").textContent = (Result[23])
        } else {
            document.getElementById("DisplayDodge").textContent = 60;
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
        const EnchKey = document.getElementById("EnchantForm").EnchantSelect.value
        const EnchLv = document.getElementById("EnchantForm").EnchantLevSelect.value
        const FrToggle = document.getElementById("FrCheck");
        function EnchEffectFunc (EnchTextKey) {
            if (EnchTableSwitch === 1) {
                tableElem.tBodies[0].deleteRow(0);
            };
            let TrElem = tableElem.tBodies[0].insertRow(0);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            EnchTableSwitch = 1;
            NameElem.appendChild(document.createTextNode(EnchTextKey[0]));
            if (EnchLv == "EnchLev1"){
                ProbElem.appendChild(document.createTextNode(EnchTextKey[1]));
            } else if (EnchLv == "EnchLev2") {
                ProbElem.appendChild(document.createTextNode(EnchTextKey[2]));
            } else if (EnchLv == "EnchLev3") {
                ProbElem.appendChild(document.createTextNode(EnchTextKey[3]));
            };
        }
        if (EnchKey == 'FlexibleResonance') {
            FrLabel.style.display = "inline-block";
        } else {
            FrLabel.style.display = 'none';
            FrToggle.checked = false;
        };
        function EnchLevelsCalc(EnchName) {
            if (EnchLv == "EnchLev1") {
                Ench[0] = EnchName[0] * EnchName[1];
                Ench[1] = EnchName[0];
                Ench[2] = EnchName[4];
                Ench[3] = EnchName[5] * EnchName[8];
                Ench[4] = EnchName[5];
                Ench[5] = EnchName[11];
                Ench[6] = EnchName[14];
            } else if (EnchLv == "EnchLev2") {
                Ench[0] = EnchName[0] * EnchName[2];
                Ench[1] = EnchName[0]
                Ench[2] = EnchName[4];
                Ench[3] = EnchName[6] * EnchName[9];
                Ench[4] = EnchName[6];
                Ench[5] = EnchName[12];
                Ench[6] = EnchName[15];
            } else if (EnchLv == "EnchLev3") {
                Ench[0] = EnchName[0] * EnchName[3];
                Ench[1] = EnchName[0]
                Ench[2] = EnchName[4];
                Ench[3] = EnchName[7] * EnchName[10];
                Ench[4] = EnchName[7];
                Ench[5] = EnchName[13];
                Ench[6] = EnchName[16];
            } else {
                Ench[0] = 0;
                Ench[1] = 0;
                Ench[2] = 0;
                Ench[3] = 0;
                Ench[4] = 0;
                Ench[5] = 0;
                Ench[6] = 0;
            }
        };
        if (EnchKey == "ArcaneBrilliance") {
            EnchLevelsCalc(ArcaneBrilliance);
        } else if (EnchKey == 'DeathsRuin') {
            EnchLevelsCalc(DeathsRuin);
        } else if (EnchKey == 'DemonPower') {
            EnchLevelsCalc(DemonPower);
        } else if (EnchKey == 'Evershade') {
            EnchLevelsCalc(Evershade);
        } else if (EnchKey == 'FlexibleResonance' && FrToggle.checked) {
            EnchLevelsCalc(FlexibleResonance);
        } else if (EnchKey == 'ManaFountain') {
            EnchLevelsCalc(ManaFountain);
        } else if (EnchKey == 'NightStalker') {
            EnchLevelsCalc(NightStalker);
        } else if (EnchKey == 'NorthernWind') {
            EnchLevelsCalc(NorthernWind);
        } else if (EnchKey == 'PhoenixFlame') {
            EnchLevelsCalc(PhoenixFlame);
        } else if (EnchKey == 'ShadowStrike' && enemyManaElem.value < 50) {
            EnchLevelsCalc(ShadowStrike0);
        } else if (EnchKey == 'ShadowStrike' && enemyManaElem.value < 75) {
            EnchLevelsCalc(ShadowStrike1);
        } else if (EnchKey == 'ShadowStrike' && enemyManaElem.value <= 100) {
            EnchLevelsCalc(ShadowStrike2);
        } else if (EnchKey == 'ShieldWall') {
            EnchLevelsCalc(ShieldWall);
        } else if (EnchKey == 'SiphonLife') {
            EnchLevelsCalc(SiphonLife);
        } else if (EnchKey == 'Sunfire') {
            EnchLevelsCalc(Sunfire);
        } else if (EnchKey == 'ZephyrsBlessing') {
            EnchLevelsCalc(ZephyrsBlessing);
        } else if (EnchKey == 'ManaFountain') {
            EnchLevelsCalc(ManaFountain);
        } else {
            Ench[0] = 0;
            Ench[1] = 0;
            Ench[2] = 0;
            Ench[3] = 0;
            Ench[4] = 0;
            Ench[5] = 0;
            Ench[6] = 0;
        }
        if (EnchKey == 'LastStand') {
            EnchEffectFunc(LsText);
        } else if (EnchKey == 'VictoryRush') {
            EnchEffectFunc(VrText);
        }else if (EnchKey == 'PhoenixFlame') {
            EnchEffectFunc(PfText);
        }else if (EnchKey == 'ArcaneBrilliance') {
            EnchEffectFunc(AbText);
        }else if (EnchKey == 'NightStalker') {
            EnchEffectFunc(NsText);
        }else if (EnchKey == 'Evershade') {
            EnchEffectFunc(EsText);
        } else if (EnchTableSwitch === 1) {
            tableElem.tBodies[0].deleteRow(0);
            EnchTableSwitch = 0;
        }       
        render()
    };
    const CalcOE = () => {
        const OeKey = document.getElementById("OeForm").OeSelect.value
        const OeLv = document.getElementById("OeForm").OeLevSelect.value
        const OeFrToggle = document.getElementById("OeFrCheck");
        function OeEffectFunc (OeTextKey) {
            if (OeTableSwitch === 1) {
                tableElem.tBodies[0].deleteRow(EnchTableSwitch);
            };
            let TrElem = tableElem.tBodies[0].insertRow(EnchTableSwitch);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            OeTableSwitch = 1;
            NameElem.appendChild(document.createTextNode(OeTextKey[0]));
            if (OeLv == "OeLev1"){
                ProbElem.appendChild(document.createTextNode(OeTextKey[1]));
            } else if (OeLv == "OeLev2") {
                ProbElem.appendChild(document.createTextNode(OeTextKey[2]));
            } else if (OeLv == "OeLev3") {
                ProbElem.appendChild(document.createTextNode(OeTextKey[3]));
            };
        }
        if (OeKey == 'FlexibleResonance') {
            OeFrLabel.style.display = 'inline-block';
        } else {
            OeFrLabel.style.display = 'none'
            OeFrToggle.checked = false;
        };
        function OELevelsCalc(OeName) {
            if (OeLv == "OeLev1") {
                Oe[0] = OeName[0] * OeName[1]
                Oe[1] = OeName[0]
                Oe[2] = OeName[4];
                Oe[3] = OeName[5] * OeName[8];
                Oe[4] = OeName[5];
                Oe[5] = OeName[11];
                Oe[6] = OeName[14];
            } else if (OeLv == "OeLev2") {
                Oe[0] = OeName[0] * OeName[2]
                Oe[1] = OeName[0]
                Oe[2] = OeName[4];
                Oe[3] = OeName[6] * OeName[9];
                Oe[4] = OeName[6];
                Oe[5] = OeName[12];
                Oe[6] = OeName[15];
            } else if (OeLv == "OeLev3") {
                Oe[0] = OeName[0] * OeName[3]
                Oe[1] = OeName[0]
                Oe[2] = OeName[4];
                Oe[3] = OeName[7] * OeName[10];
                Oe[4] = OeName[7];
                Oe[5] = OeName[13];
                Oe[6] = OeName[16];
            } else {
                Oe[0] = 0;
                Oe[1] = 0;
                Oe[2] = 0;
                Oe[3] = 0;
                Oe[4] = 0;
                Oe[5] = 0;
                Oe[6] = 0;
            }
        };
        if (OeKey == "ArcaneBrilliance") {
            OELevelsCalc(ArcaneBrilliance);
        } else if (OeKey == 'DeathsRuin') {
            OELevelsCalc(DeathsRuin);
        } else if (OeKey == 'DemonPower') {
            OELevelsCalc(DemonPower);
        } else if (OeKey == 'Evershade') {
            OELevelsCalc(Evershade);
        } else if (OeKey == 'FlexibleResonance' && OeFrToggle.checked) {
            OELevelsCalc(FlexibleResonance);
        } else if (OeKey == 'ManaFountain') {
            OELevelsCalc(ManaFountain);
        } else if (OeKey == 'NightStalker') {
            OELevelsCalc(NightStalker);
        } else if (OeKey == 'NorthernWind') {
            OELevelsCalc(NorthernWind);
        } else if (OeKey == 'PhoenixFlame') {
            OELevelsCalc(PhoenixFlame);
        } else if (OeKey == 'ShadowStrike' && enemyManaElem.value < 50) {
            OELevelsCalc(ShadowStrike0);
        } else if (OeKey == 'ShadowStrike' && enemyManaElem.value < 75) {
            OELevelsCalc(ShadowStrike1);
        } else if (OeKey == 'ShadowStrike' && enemyManaElem.value <= 100) {
            OELevelsCalc(ShadowStrike2);
        } else if (OeKey == 'ShieldWall') {
            OELevelsCalc(ShieldWall);
        } else if (OeKey == 'SiphonLife') {
            OELevelsCalc(SiphonLife);
        } else if (OeKey == 'Sunfire') {
            OELevelsCalc(Sunfire);
        } else if (OeKey == 'ZephyrsBlessing') {
            OELevelsCalc(ZephyrsBlessing);
        } else if (OeKey == 'ManaFountain') {
            OELevelsCalc(ManaFountain);
        } else if (OeKey == 'LastStand') {
            OELevelsCalc(LastStand);
        } else if (OeKey == 'VictoryRush') {
            OELevelsCalc(VictoryRush);
        } else {
            Oe[0] = 0;
            Oe[1] = 0;
            Oe[2] = 0;
            Oe[3] = 0;
            Oe[4] = 0;
            Oe[5] = 0;
            Oe[6] = 0;
        }
        if (OeKey == 'LastStand') {
            OeEffectFunc(LsText);
        } else if (OeKey == 'VictoryRush') {
            OeEffectFunc(VrText)
        }else if (OeKey == 'PhoenixFlame') {
            OeEffectFunc(PfText)
        }else if (OeKey == 'ArcaneBrilliance') {
            OeEffectFunc(AbText)
        }else if (OeKey == 'NightStalker') {
            OeEffectFunc(NsText)
        }else if (OeKey == 'Evershade') {
            OeEffectFunc(EsText);
        } else if (OeTableSwitch === 1) {
            tableElem.tBodies[0].deleteRow(EnchTableSwitch);
            OeTableSwitch = 0;
        }
        render()
    };
    const CalcAE = (EoDDmg, EoDHsDmg) => {
        const AeKey = document.getElementById("AncientEnchantForm").AncientEnchantSelect.value
        const BcToggle = document.getElementById("BcCheck");
        const CfToggle = document.getElementById("CfCheck");
        const SdToggle = document.getElementById("SdCheck");
        const WsToggle = document.getElementById("WsCheck");
        const FfToggle = document.getElementById("FfCheck");
        const IsToggle = document.getElementById("IsCheck");
        function AeEffectFunc (AeTextKey) {
            if (AeTableSwitch === 1) {
                tableElem.tBodies[0].deleteRow(EnchTableSwitch + OeTableSwitch);
            };
            let TrElem = tableElem.tBodies[0].insertRow(EnchTableSwitch + OeTableSwitch);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            AeTableSwitch = 1;
            NameElem.appendChild(document.createTextNode(AeTextKey[0]));
            ProbElem.appendChild(document.createTextNode(AeTextKey[1]));
        }
        if (AeKey == "Bloodcraze") {
            BcLabel.style.display = 'inline-block';
        } else {
            BcLabel.style.display = 'none';
            BcToggle.checked = false;
        };
        if (AeKey == "ConcentratedFire") {
            CfLabel.style.display = 'inline-block';
        } else {
            CfLabel.style.display = 'none';
            CfToggle.checked = false;
        };
        if (AeKey == "SuddenDeath") {
            SdLabel.style.display = 'inline-block';
        } else {
            SdLabel.style.display = 'none';
            SdToggle.checked = false;
        };
        if (AeKey == "Windsong") {
            WsLabel.style.display = 'inline-block';
        } else {
            WsLabel.style.display = 'none';
            WsToggle.checked = false;
        };
        if (AeKey == "FleetFooted") {
            FfLabel.style.display = 'inline-block';
        } else {
            FfLabel.style.display = 'none';
            FfToggle.checked = false;
        };
        if (AeKey == "IndomitableSpirit") {
            IsLabel.style.display = 'inline-block';
        } else {
            IsLabel.style.display = 'none';
            IsToggle.checked = false;
        };
        function AeSet(AeName){
            Ae[0] = AeName[0]
            Ae[1] = AeName[0] * AeName[1]
            Ae[3] = AeName[2]
        }
        if (AeKey == "Bloodcraze" && BcToggle.checked) {
            AeSet(Bc);
        } else if (AeKey == "ElementalOverload" && myManaElem.value > 30) {
            AeSet(Eo);
        } else if (AeKey == "Mastercrafted") {
            AeSet(Mc);
        } else if (AeKey == "ConcentratedFire" && CfToggle.checked) {
            AeSet(Cf);
        } else if (AeKey == "SuddenDeath" && SdToggle.checked) {
            AeSet(Sd);
        } else if (AeKey == "ManaBurn" && enemyManaElem.value <= 35) {
            AeSet(Mb);
        } else if (AeKey == "Manaflood" && myManaElem.value == 100) {
            AeSet(Mfl2);
        } else if (AeKey == "Manaflood" && myManaElem.value >= 75) {
            AeSet(Mfl1);
        } else if (AeKey == "Manaflood" && myManaElem.value >= 50) {
            AeSet(Mfl0);
        } else if (AeKey == "EchoOfDeath" && EoDDmg >= 50) {
            AeSet(Eod);
        } else if (AeKey == "Windsong" && WsToggle.checked) {
            AeSet(Ws);
        } else if (AeKey == "FleetFooted" && FfToggle.checked) {
            AeSet(Ff);
        } else if (AeKey == "IndomitableSpirit" && IsToggle.checked) {
            AeSet(Is);
        } else {
            Ae[0] = 0
            Ae[1] = 0
            Ae[3] = 0
        }
        if (AeKey == "EchoOfDeath" && EoDHsDmg >= 50) {
            Ae[2] = Eod[0]
        } else {
            Ae[2] = 0
        }
        if (AeKey == 'AmplifyMagic') {
            AeEffectFunc(AmpText);
        } else if (AeKey == 'ArcaneMeditation') {
            AeEffectFunc(AmText);
        } else if (AeKey == 'CursedPact') {
            AeEffectFunc(CpText);
        } else if (AeKey == 'DrainSoul') {
            AeEffectFunc(DsText);
        } else if (AeKey == 'EverlastingLife') {
            AeEffectFunc(ElText);
        } else if (AeKey == 'FragileBalance') {
            AeEffectFunc(FbText);
        } else if (AeKey == 'GolemProtection') {
            AeEffectFunc(GpText);
        } else if (AeKey == 'JoyOfWealth') {
            AeEffectFunc(JowText);
        } else if (AeKey == 'ManaEfficiency') {
            AeEffectFunc(MeText);
        } else if (AeKey == 'ManaBurn') {
            AeEffectFunc(MbText);
        } else if (AeKey == 'Regrowth') {
            AeEffectFunc(RegText);
        } else if (AeKey == 'TitanStance') {
            AeEffectFunc(TsText);
        } else if (AeKey == 'WheelOfFortune') {
            AeEffectFunc(WofText);
        } else if (AeTableSwitch === 1) {
            tableElem.tBodies[0].deleteRow(EnchTableSwitch + OeTableSwitch);
            AeTableSwitch = 0;
        }
    }

    const CalcAddon = () => {
        const AddonKey = document.getElementById("AddonForm").AddonSelect.value
        const AddonLv = document.getElementById("AddonForm").AddonLevSelect.value
        const SsaToggle = document.getElementById("SsaCheck");
        const SbToggle = document.getElementById("SbCheck");
        if (AddonKey == 'SupersonicAmmo') {
            SsaLabel.style.display = 'inline-block';
        } else {
            SsaLabel.style.display = 'none';
            SsaToggle.checked = false;
        };
        if (AddonKey == 'ShieldBreaker') {
            SbLabel.style.display = 'inline-block';
        } else {
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

    const CalcArmor = () => {
        const ChestName = document.getElementById("ArmorForm").ChestSelect.value
        const HandName = document.getElementById("ArmorForm").HandSelect.value
        const BootsName = document.getElementById("ArmorForm").BootsSelect.value
        let Chest = [0, 0, 0, 0, 0, 0, 0]
        let Hand = [0, 0, 0, 0]
        let Boots = [0, 0, 0, 0, 0, 0]
        let ArmorFullSet = [0, 0, 0, 0, 0, 0, 0, 0]
        function ChestSelectCalc(ChestKey) {
            Chest[0] = ChestKey[0];
            Chest[1] = ChestKey[1];
            Chest[2] = ChestKey[2];
            Chest[3] = ChestKey[3];
            Chest[4] = ChestKey[4];
            Chest[5] = ChestKey[5];
            Chest[6] = ChestKey[6];
        };
        function HandSelectCalc (HandKey) {
            Hand[0] = HandKey[0];
            Hand[1] = HandKey[1];
            Hand[2] = HandKey[2];
            Hand[3] = HandKey[3];
        };
        function BootsSelectCalc (BootsKey) {
            Boots[0] = BootsKey[0];
            Boots[1] = BootsKey[1];
            Boots[2] = BootsKey[2];
            Boots[3] = BootsKey[3];
            Boots[4] = BootsKey[4];
            Boots[5] = BootsKey[5];
        };
        function ArmorFullSetCalc (ArmorFullSetKey) {
            ArmorFullSet[0] = ArmorFullSetKey[0];
            ArmorFullSet[1] = ArmorFullSetKey[1];
            ArmorFullSet[2] = ArmorFullSetKey[2];
            ArmorFullSet[3] = ArmorFullSetKey[3];
            ArmorFullSet[4] = ArmorFullSetKey[4];
            ArmorFullSet[5] = ArmorFullSetKey[5];
            ArmorFullSet[6] = ArmorFullSetKey[6];
            ArmorFullSet[7] = ArmorFullSetKey[7];
        };
        if (ChestName === "Cleric") {
            ChestSelectCalc(CChest);
        } else if (ChestName === "Fort") {
            ChestSelectCalc(FChest);
        } else if (ChestName === "Gladiator") {
            ChestSelectCalc(GChest);
        } else if (ChestName === "Pilgrim") {
            ChestSelectCalc(PChest);
        } else if (ChestName === "Ivory") {
            ChestSelectCalc(IChest);
        } else if (ChestName === "Slick") {
            ChestSelectCalc(SChest);
        } else {
            Chest = [0, 0, 0, 0, 0, 0, 0];
        };
        if (HandName === "Cleric") {
            HandSelectCalc(CHand);
        } else if (HandName === "Gladiator") {
            HandSelectCalc(GHand);
        } else if (HandName === "Pilgrim") {
            HandSelectCalc(PHand);
        } else if (HandName === "Ivory") {
            HandSelectCalc(IHand);
        } else {
            Hand = [0, 0, 0, 0];
        };
        if (BootsName === "Cleric") {
            BootsSelectCalc(CBoots);
        } else if (BootsName === "Gladiator") {
            BootsSelectCalc(GBoots);
        } else if (BootsName === "Pilgrim") {
            BootsSelectCalc(PBoots);
        } else if (BootsName === "Ivory") {
            BootsSelectCalc(IBoots);
        } else {
            Boots = [0, 0, 0, 0, 0, 0];
        };
        if (ChestName === "Cleric" && ChestName === HandName === BootsName) {
            ArmorFullSetCalc(CSet);
        } else if (ChestName === "Gladiator" && ChestName === HandName === BootsName) {
            ArmorFullSetCalc(GSet);
        } else if (ChestName === "Pilgrim" && ChestName === HandName === BootsName) {
            ArmorFullSetCalc(PSet);
        } else if (ChestName === "Ivory" && ChestName === HandName === BootsName) {
            ArmorFullSetCalc(ISet);
        } else {
            ArmorFullSet = [0, 0, 0, 0, 0, 0, 0, 0]
        };
        Armor[0] = Chest[0] + Hand[0] + Boots[0] + ArmorFullSet[0];
        Armor[1] = Chest[1] + Hand[1] + Boots[1] + ArmorFullSet[1];
        Armor[2] = Chest[2] + Hand[2] + Boots[2] + ArmorFullSet[2];
        Armor[3] = Chest[3] + Hand[3] + Boots[3] + ArmorFullSet[3];
        Armor[4] = Chest[4] + Boots[4] + ArmorFullSet[4];
        Armor[5] = Chest[5] + Boots[5] + ArmorFullSet[5];
        Armor[6] = Chest[6] + ArmorFullSet[6];
        Armor[7] = ArmorFullSet[7];
        render()
    }
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

    const myManaOnChange = (e) => {
        setMyManaValue(e.target.value);
        render();
    }
    const enemyManaOnChange = (e) => {
        setEnemyManaValue(e.target.value);
        CalcEnch();
        CalcOE();
    }
    const EnchCheckOnChange = (e) => {
        CalcEnch();
    }
    const OeCheckOnChange = (e) => {
        CalcOE();
    }
    const renderOnChange = (e) => {
        render();
    }
    const AddonCheckOnChange = (e) => {
        CalcAddon();
    }
    document.getElementById("FrCheck").addEventListener('change', EnchCheckOnChange);
    document.getElementById("OeFrCheck").addEventListener('change', OeCheckOnChange);
    document.getElementById("BcCheck").addEventListener('change', renderOnChange);
    document.getElementById("CfCheck").addEventListener('change', renderOnChange);
    document.getElementById("SdCheck").addEventListener('change', renderOnChange);
    document.getElementById("WsCheck").addEventListener('change', renderOnChange);
    document.getElementById("FfCheck").addEventListener('change', renderOnChange);
    document.getElementById("IsCheck").addEventListener('change', renderOnChange);
    document.getElementById("SsaCheck").addEventListener('change', AddonCheckOnChange);
    document.getElementById("SbCheck").addEventListener('change', AddonCheckOnChange);
    document.getElementById("BsCheck").addEventListener('change', renderOnChange);
    document.getElementById("MsCheck").addEventListener('change', renderOnChange);
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
    document.getElementById("ArmorForm").onchange = () => CalcArmor()
    myManaElem.addEventListener('input', myManaOnChange);
    enemyManaElem.addEventListener('input', enemyManaOnChange);
    setMyManaValue(myManaElem.value);
    setEnemyManaValue(enemyManaElem.value);
})