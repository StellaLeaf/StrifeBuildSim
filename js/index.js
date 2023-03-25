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
    const Elixir = [0, 0, 0, 0, 0, 0];
    //Lev Atk DefDmg DefProb HP Mana Dodge PDodge　CC CD pene Acc
    const Accessory = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
    let AddonTableSwitch = 0;
    let ArmorTableSwitch = [0, 0];
    let ElixirTableSwitch = 0;
    let AccessoryTableSwitch = [0, 0, 0]; 
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
        Result[0] = Math.round(((Weapon[0] + Mod[0] + Ench[0] * EnchActive[0] + Oe[0] * EnchActive[1] + Ae[0] + Addon[0] + Armor[1] + Elixir[0] + Result[12]) * Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[1] = Math.round(((Weapon[0] + Mod[0] + Ench[0] * EnchActive[0] + Oe[0] * EnchActive[1] + Ae[0] + Addon[0] + Armor[1] + Elixir[0] + Result[12] + Weapon[1] + Mod[1] + Ae[2]) * Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[2] = Math.round(((Weapon[0] + Mod[0] + Ench[1] + Oe[1] + Ae[1] + Addon[1] + Armor[1] + Elixir[1] + Result[13]) * Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[3] = Math.round(((Weapon[0] + Mod[0] + Ench[1] + Oe[1] + Ae[1] + Addon[1] + Armor[1] + Elixir[1] + Result[13] + Weapon[1] + Mod[1] + Ae[2]) * Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[4] = Weapon[2] + Mod[2] + Addon[2]
        Result[5] = Weapon[3] + Mod[3] + Addon[3]
        Result[7] = Math.round((Result[0] * Result[6]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[8] = Math.round(Math.abs(Weapon[7] - Mod[5]) * Math.pow(10, 2)) / Math.pow(10, 2)
        Result[9] = Math.round(Math.abs(Weapon[8] - Mod[5]) * Math.pow(10, 2)) / Math.pow(10, 2)
        Result[10] = Math.round(((0.2 + Weapon[9] + Mod[6] + Addon[4] + Elixir[2]) / 0.2) * Math.pow(10, 2)) / Math.pow(10, 2)
        Result[11] = Math.round((Result[4] / Result[6]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[18] = Math.round(((Mod[0] + Ench[0] * EnchActive[0] + Oe[0] * EnchActive[1] + Ae[0] + Addon[0] + Result[12]) * Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[19] = Math.round(((Mod[0] + Ench[1] + Oe[1] + Ae[1] + Addon[1] + Result[13]) * Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[20] = Math.round((Ench[3] + Oe[3] + Armor[2] + WeaponShiftEffect[1]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[21] = Math.round((Ench[4] + Oe[4] + Armor[2] + WeaponShiftEffect[1]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[22] = Math.round((2 + Ench[5] + Oe[5] + Armor[4]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[23] = Math.round(((Ench[6] + Oe[6] + Ae[3] + WeaponShiftEffect[0] + Elixir[4]) * 100) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[24] = Math.round(20 + Armor[0] + Elixir[3]);
        Result[25] = Math.round(Armor[1] + Elixir[0]);
        Result[26] = Math.round(Armor[1] + Elixir[1]);
        //Result 0AveDmg 1AveHsDmg 2HiDmg 3HiHsDmg 4Capacity 5Reload 6Rate 7Dps 8Sprd 9Ads 10Wt 11Duration 12CC 13CD 14C10m 15Cmax 16ExplDmg 17ExplRadius 18AddAveDmg 19addHiDmg 20AveDef 21HiDef 22Mana 23Dodge 24Hp 25Avetk 26HiAtk
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
        document.getElementById("DisplayAveAtk").textContent = (Result[25])
        document.getElementById("DisplayHiAtk").textContent = (Result[26])

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
        function EnchEffectFunc0 (EnchTextKey) {
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
        function EnchEffectFunc1 (EnchTextKey) {
            if (EnchTableSwitch === 1) {
                tableElem.tBodies[0].deleteRow(0);
            };
            let TrElem = tableElem.tBodies[0].insertRow(0);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            EnchTableSwitch = 1;
            NameElem.appendChild(document.createTextNode(EnchTextKey[0]));
            ProbElem.appendChild(document.createTextNode(EnchTextKey[1]));
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
            EnchEffectFunc0(LsText);
        } else if (EnchKey == 'VictoryRush') {
            EnchEffectFunc0(VrText);
        }else if (EnchKey == 'PhoenixFlame') {
            EnchEffectFunc0(PfText);
        }else if (EnchKey == 'ArcaneBrilliance') {
            EnchEffectFunc1(AbText);
        }else if (EnchKey == 'NightStalker') {
            EnchEffectFunc1(NsText);
        }else if (EnchKey == 'Evershade') {
            EnchEffectFunc0(EsText);
        } else if (EnchTableSwitch === 1) {
            tableElem.tBodies[0].deleteRow(0);
            EnchTableSwitch = 0;
        };       
        CalcElixir();
        render();
    };
    const CalcOE = () => {
        const OeKey = document.getElementById("OeForm").OeSelect.value
        const OeLv = document.getElementById("OeForm").OeLevSelect.value
        const OeFrToggle = document.getElementById("OeFrCheck");
        function OeEffectFunc0 (OeTextKey) {
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
        function OeEffectFunc1 (OeTextKey) {
            if (OeTableSwitch === 1) {
                tableElem.tBodies[0].deleteRow(EnchTableSwitch);
            };
            let TrElem = tableElem.tBodies[0].insertRow(EnchTableSwitch);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            OeTableSwitch = 1;
            NameElem.appendChild(document.createTextNode(OeTextKey[0]));
            ProbElem.appendChild(document.createTextNode(OeTextKey[1]));
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
            OeEffectFunc0(LsText);
        } else if (OeKey == 'VictoryRush') {
            OeEffectFunc0(VrText)
        }else if (OeKey == 'PhoenixFlame') {
            OeEffectFunc0(PfText)
        }else if (OeKey == 'ArcaneBrilliance') {
            OeEffectFunc1(AbText)
        }else if (OeKey == 'NightStalker') {
            OeEffectFunc1(NsText)
        }else if (OeKey == 'Evershade') {
            OeEffectFunc0(EsText);
        } else if (OeTableSwitch === 1) {
            tableElem.tBodies[0].deleteRow(EnchTableSwitch);
            OeTableSwitch = 0;
        }
        CalcElixir();
        render();
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
    };
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
        if (AddonKey == 'ApRound') {
            if (AddonTableSwitch === 1) {
                tableElem.tBodies[0].deleteRow(EnchTableSwitch + OeTableSwitch + AeTableSwitch);
            };
            let TrElem = tableElem.tBodies[0].insertRow(EnchTableSwitch + OeTableSwitch + AeTableSwitch);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            AddonTableSwitch = 1;
            NameElem.appendChild(document.createTextNode(ApText[0]));
            if (AddonLv == "AddonLev0"){
                ProbElem.appendChild(document.createTextNode(ApText[1]));
            }else if (AddonLv == "AddonLev1"){
                ProbElem.appendChild(document.createTextNode(ApText[2]));
            } else if (AddonLv == "AddonLev2") {
                ProbElem.appendChild(document.createTextNode(ApText[3]));
            } else if (AddonLv == "AddonLev3") {
                ProbElem.appendChild(document.createTextNode(ApText[4]));
            };
        } else if (AddonTableSwitch === 1) {
            tableElem.tBodies[0].deleteRow(EnchTableSwitch + OeTableSwitch + AeTableSwitch);
            AddonTableSwitch = 0;
        }
        render()
    };
    const CalcArmor = () => {
        const ChestName = document.getElementById("ArmorForm").ChestSelect.value
        const HandName = document.getElementById("ArmorForm").HandSelect.value
        const BootsName = document.getElementById("ArmorForm").BootsSelect.value
        function ArmorEffectFunc (ArmorTextKey) {
            if (ArmorTableSwitch[0] === 1) {
                tableElem.tBodies[0].deleteRow(EnchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch);
            };
            let TrElem = tableElem.tBodies[0].insertRow(EnchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            ArmorTableSwitch[0] = 1;
            NameElem.appendChild(document.createTextNode(ArmorTextKey[0]));
            ProbElem.appendChild(document.createTextNode(ArmorTextKey[1]));
        }
        let Chest = [0, 0, 0, 0, 0, 0, 0]
        let Hand = [0, 0, 0, 0]
        let Boots = [0, 0, 0, 0, 0, 0]
        let ArmorFullSet = [0, 0, 0, 0, 0, 0, 0, 0]
        function ChestSelectCalc(ChestKey) {
            Chest = ChestKey;
        };
        function HandSelectCalc (HandKey) {
            Hand = HandKey;
        };
        function BootsSelectCalc (BootsKey) {
            Boots = BootsKey;
        };
        function ArmorFullSetCalc (ArmorFullSetKey) {
            ArmorFullSet = ArmorFullSetKey;
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
        if (ChestName === "Cleric" && ChestName === HandName && ChestName === BootsName) {
            ArmorFullSetCalc(CSet);
        } else if (ChestName === "Gladiator" && ChestName === HandName && ChestName === BootsName) {
            ArmorFullSetCalc(GSet);
        } else if (ChestName === "Pilgrim" && ChestName === HandName && ChestName === BootsName) {
            ArmorFullSetCalc(PSet);
        } else if (ChestName === "Ivory" && ChestName === HandName && ChestName === BootsName) {
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
        if (BootsName == 'Cleric') {
            ArmorEffectFunc(CBootsText);
        } else if (BootsName == 'Pilgrim') {
            ArmorEffectFunc(PBootsText);
        } else if (ArmorTableSwitch[0] === 1) {
            tableElem.tBodies[0].deleteRow(EnchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch);
            ArmorTableSwitch[0] = 0;
        };
        if (ChestName === "Cleric" && ChestName === HandName && ChestName === BootsName) {
            if (ArmorTableSwitch[1] === 1) {
                tableElem.tBodies[0].deleteRow(EnchTableSwitch + OeTableSwitch + AeTableSwitch +AddonTableSwitch + ArmorTableSwitch[0]);
            };
            let TrElem = tableElem.tBodies[0].insertRow(EnchTableSwitch + OeTableSwitch + AeTableSwitch +AddonTableSwitch + ArmorTableSwitch[0]);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            ArmorTableSwitch[1] = 1;
            NameElem.appendChild(document.createTextNode(CSetText[0]));
            ProbElem.appendChild(document.createTextNode(CSetText[1]));
        } else if (ArmorTableSwitch[1] === 1) {
            tableElem.tBodies[1].deleteRow(EnchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0]);
            ArmorTableSwitch[1] = 0;
        };
        render();
    };
    const CalcElixir = () => {
        const EnchKey = document.getElementById("EnchantForm").EnchantSelect.value
        const OeKey = document.getElementById("OeForm").OeSelect.value
        const ElixirKey = document.getElementById("ElixirForm").ElixirSelect.value
        const EVoidToggle = document.getElementById("EVoidCheck");
        if (ElixirKey == 'EVoid') {
            EVoidLabel.style.display = 'inline-block';
        } else {
            EVoidLabel.style.display = 'none';
            EVoidToggle.checked = false;
        };
        function ElixirSet(ElixirName) {
            Elixir[0] = ElixirName[0] * ElixirName[1];
            Elixir[1] = ElixirName[0];
            Elixir[2] = ElixirName[2];
            Elixir[3] = ElixirName[3];
            Elixir[4] = ElixirName[4];
        };
        if (ElixirKey === "ECombust") {
            if (EnchKey === "Sunfire" || OeKey === "Sunfire"){
                ElixirSet(ECombust_Sf);
            } else {
                ElixirSet(ECombust); 
            };
        } else if (ElixirKey === "ECritical") {
            ElixirSet(ECritical);
        } else if (ElixirKey === "EFortitude") {
            ElixirSet(EFortitude);
        } else if (ElixirKey === "EPumpkinCandy") {
            ElixirSet(EPumpkinCandy);
        } else if (ElixirKey === "EReflex") {
            ElixirSet(EReflex);
        } else if (ElixirKey === "ESpeed") {
            ElixirSet(ESpeed);
        } else if (ElixirKey === "EVoid" && EVoidToggle.checked) {
            ElixirSet(EVoid);
        } else if (ElixirKey === "EWisdom") {
            ElixirSet(EWisdom);
        } else {
            Elixir[0] = 0;
            Elixir[1] = 0;
            Elixir[2] = 0;
            Elixir[3] = 0;
            Elixir[4] = 0;
        }
        if (ElixirKey === "EWisdom") {
            if (ElixirTableSwitch === 1) {
                tableElem.tBodies[0].deleteRow(EnchTableSwitch + OeTableSwitch + AeTableSwitch +AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1]);
            };
            let TrElem = tableElem.tBodies[0].insertRow(EnchTableSwitch + OeTableSwitch + AeTableSwitch +AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1]);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            ElixirTableSwitch = 1;
            NameElem.appendChild(document.createTextNode(EWisdomText[0]));
            ProbElem.appendChild(document.createTextNode(EWisdomText[1]));
        } else if (ElixirTableSwitch === 1) {
            tableElem.tBodies[0].deleteRow(EnchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1]);
            ElixirTableSwitch = 0;
        };
        render();
    }; 
    const CalcAccessory = () => {
        const Accy1Name = document.getElementById("Accy1Form").Accessory1Select.value
        const Accy2Name = document.getElementById("Accy2Form").Accessory2Select.value
        const Accy3Name = document.getElementById("Accy3Form").Accessory3Select.value
        const Accy1AprName = document.getElementById("Accy1Form").Accy1AprSelect.value
        const Accy2AprName = document.getElementById("Accy2Form").Accy2AprSelect.value
        const Accy3AprName = document.getElementById("Accy3Form").Accy3AprSelect.value
        function AccessoryEffectFunc (AccessoryTextKey) {
            if (AccessoryTableSwitch[0] === 1) {
                tableElem.tBodies[0].deleteRow(EnchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1] + ElixirTableSwitch);
            };
            let TrElem = tableElem.tBodies[0].insertRow(EnchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1] + ElixirTableSwitch);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            AccessoryTableSwitch[0] = 1;
            NameElem.appendChild(document.createTextNode(AccessoryTextKey[0]));
            ProbElem.appendChild(document.createTextNode(AccessoryTextKey[1]));
        };
        let Accy1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let Accy2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let Accy3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let Accy1Apr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let Accy2Apr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let Accy3Apr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        function Accy1SelectCalc(Accy1Key) {
            Accy1 = Accy1Key;
        };
        function Accy2SelectCalc(Accy2Key) {
            Accy2 = Accy2Key;
        };
        function Accy3SelectCalc(Accy3Key) {
            Accy3 = Accy3Key;
        };
        function Accy1AprSelectCalc(Accy1AprKey) {
            Accy1Apr = Accy1AprKey;
        };
        function Accy2AprSelectCalc(Accy2AprKey) {
            Accy2Apr = Accy2AprKey;
        };
        function Accy3AprSelectCalc(Accy3AprKey) {
            Accy3Apr = Accy3AprKey;
        };
        if(Accy1Name === "NecklaceOfHeart") {
            Accy1SelectCalc(NecklaceOfHeart);
        }else if(Accy1Name === "RingOfLonelyHeart") {
            Accy1SelectCalc(RingOfLonelyHeart);
        }else if(Accy1Name === "VindicatorsPendant") {
            Accy1SelectCalc(VindicatorsPendant);
        }else if(Accy1Name === "NecklaceOfVoid") {
            Accy1SelectCalc(NecklaceOfVoid);
        }else if(Accy1Name === "TheBlindValor") {
            Accy1SelectCalc(TheBlindValor);
        }else if(Accy1Name === "AmuletOfGoldenGlow") {
            Accy1SelectCalc(AmuletOfGoldenGlow);
        }else if(Accy1Name === "NyrsTear") {
            Accy1SelectCalc(NyrsTear);
        }else if(Accy1Name === "TheLuckyStar") {
            Accy1SelectCalc(TheLuckyStar);
        }else if(Accy1Name === "RingOfNightmare") {
            Accy1SelectCalc(RingOfNightmare);
        }else if(Accy1Name === "SymbolOfWealth") {
            Accy1SelectCalc(SymbolOfWealth);
        }else if(Accy1Name === "CharmOfFortitude") {
            Accy1SelectCalc(CharmOfFortitude);
        }else if(Accy1Name === "PendantOfMastercrafter") {
            Accy1SelectCalc(PendantOfMastercrafter);
        }else if(Accy1Name === "ArcanaPendant") {
            Accy1SelectCalc(ArcanaPendant);
        }else if(Accy1Name === "TitanRing") {
            Accy1SelectCalc(TitanRing);
        }else if(Accy1Name === "RingOfNightrose") {
            Accy1SelectCalc(RingOfNightrose);
        }else if(Accy1Name === "BeggarOfDeath") {
            Accy1SelectCalc(BeggarOfDeath);
        }else if(Accy1Name === "StarlightPendant") {
            Accy1SelectCalc(StarlightPendant);
        }else if(Accy1Name === "RedNova") {
            Accy1SelectCalc(RedNova);
        }else if(Accy1Name === "RingOfCompetitor") {
            Accy1SelectCalc(RingOfCompetitor);
        }else if(Accy1Name === "MythrilRing") {
            Accy1SelectCalc(MythrilRing);
        }else if(Accy1Name === "RingOfSacramento") {
            Accy1SelectCalc(RingOfSacramento);
        }else if(Accy1Name === "RingOfCobraReflex") {
            Accy1SelectCalc(RingOfCobraReflex);
        }else if(Accy1Name === "NecklaceOfEffort") {
            Accy1SelectCalc(NecklaceOfEffort);
        }else if(Accy1Name === "LifelinkBracelet") {
            Accy1SelectCalc(LifelinkBracelet);
        }else if(Accy1Name === "GoldenDream") {
            Accy1SelectCalc(GoldenDream);
        }else if(Accy1Name === "NecklaceOfHelvys") {
            Accy1SelectCalc(NecklaceOfHelvys);
        }else if(Accy1Name === "PendantOfStardust") {
            Accy1SelectCalc(PendantOfStardust);
        }else if(Accy1Name === "ExplosiveEaring") {
            Accy1SelectCalc(ExplosiveEaring);
        }else if(Accy1Name === "PenetrationStone") {
            Accy1SelectCalc(PenetrationStone);
        }else if(Accy1Name === "FeedbackStone") {
            Accy1SelectCalc(FeedbackStone);
        }else if(Accy1Name === "Evergreen") {
            Accy1SelectCalc(Evergreen);
        }else if(Accy1Name === "TheRabbitFoot") {
            Accy1SelectCalc(TheRabbitFoot);
        }else if(Accy1Name === "PendantOfPurpleSeal") {
            Accy1SelectCalc(PendantOfPurpleSeal);
        }else if(Accy1Name === "NecklaceOfFaintVoice") {
            Accy1SelectCalc(NecklaceOfFaintVoice);
        }else if(Accy1Name === "NecklaceOfVigor") {
            Accy1SelectCalc(NecklaceOfVigor);
        }else if(Accy1Name === "ShieldChoker") {
            Accy1SelectCalc(ShieldChoker);
        }else if(Accy1Name === "EnchantedHematite") {
            Accy1SelectCalc(EnchantedHematite);
        }else if(Accy1Name === "NecklaceOfIcyMoon") {
            Accy1SelectCalc(NecklaceOfIcyMoon);
        }else if(Accy1Name === "ColdHeartRing") {
            Accy1SelectCalc(ColdHeartRing);
        }else if(Accy1Name === "RingOfBalance") {
            Accy1SelectCalc(RingOfBalance);
        }else if(Accy1Name === "RingOfLifeTree") {
            Accy1SelectCalc(RingOfLifeTree);
        }else if(Accy1Name === "EaringOfCursedMind") {
            Accy1SelectCalc(EaringOfCursedMind);
        }else if(Accy1Name === "RighteousCrescent") {
            Accy1SelectCalc(RighteousCrescent);
        }else if(Accy1Name === "SymbolOfSinful") {
            Accy1SelectCalc(SymbolOfSinful);
        }else if(Accy1Name === "TheEye") {
            Accy1SelectCalc(TheEye);
        }else{
            Accy1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        if(Accy2Name === "NecklaceOfHeart") {
            Accy2SelectCalc(NecklaceOfHeart);
        }else if(Accy2Name === "RingOfLonelyHeart") {
            Accy2SelectCalc(RingOfLonelyHeart);
        }else if(Accy2Name === "VindicatorsPendant") {
            Accy2SelectCalc(VindicatorsPendant);
        }else if(Accy2Name === "NecklaceOfVoid") {
            Accy2SelectCalc(NecklaceOfVoid);
        }else if(Accy2Name === "TheBlindValor") {
            Accy2SelectCalc(TheBlindValor);
        }else if(Accy2Name === "AmuletOfGoldenGlow") {
            Accy2SelectCalc(AmuletOfGoldenGlow);
        }else if(Accy2Name === "NyrsTear") {
            Accy2SelectCalc(NyrsTear);
        }else if(Accy2Name === "TheLuckyStar") {
            Accy2SelectCalc(TheLuckyStar);
        }else if(Accy2Name === "RingOfNightmare") {
            Accy2SelectCalc(RingOfNightmare);
        }else if(Accy2Name === "SymbolOfWealth") {
            Accy2SelectCalc(SymbolOfWealth);
        }else if(Accy2Name === "CharmOfFortitude") {
            Accy2SelectCalc(CharmOfFortitude);
        }else if(Accy2Name === "PendantOfMastercrafter") {
            Accy2SelectCalc(PendantOfMastercrafter);
        }else if(Accy2Name === "ArcanaPendant") {
            Accy2SelectCalc(ArcanaPendant);
        }else if(Accy2Name === "TitanRing") {
            Accy2SelectCalc(TitanRing);
        }else if(Accy2Name === "RingOfNightrose") {
            Accy2SelectCalc(RingOfNightrose);
        }else if(Accy2Name === "BeggarOfDeath") {
            Accy2SelectCalc(BeggarOfDeath);
        }else if(Accy2Name === "StarlightPendant") {
            Accy2SelectCalc(StarlightPendant);
        }else if(Accy2Name === "RedNova") {
            Accy2SelectCalc(RedNova);
        }else if(Accy2Name === "RingOfCompetitor") {
            Accy2SelectCalc(RingOfCompetitor);
        }else if(Accy2Name === "MythrilRing") {
            Accy2SelectCalc(MythrilRing);
        }else if(Accy2Name === "RingOfSacramento") {
            Accy2SelectCalc(RingOfSacramento);
        }else if(Accy2Name === "RingOfCobraReflex") {
            Accy2SelectCalc(RingOfCobraReflex);
        }else if(Accy2Name === "NecklaceOfEffort") {
            Accy2SelectCalc(NecklaceOfEffort);
        }else if(Accy2Name === "LifelinkBracelet") {
            Accy2SelectCalc(LifelinkBracelet);
        }else if(Accy2Name === "GoldenDream") {
            Accy2SelectCalc(GoldenDream);
        }else if(Accy2Name === "NecklaceOfHelvys") {
            Accy2SelectCalc(NecklaceOfHelvys);
        }else if(Accy2Name === "PendantOfStardust") {
            Accy2SelectCalc(PendantOfStardust);
        }else if(Accy2Name === "ExplosiveEaring") {
            Accy2SelectCalc(ExplosiveEaring);
        }else if(Accy2Name === "PenetrationStone") {
            Accy2SelectCalc(PenetrationStone);
        }else if(Accy2Name === "FeedbackStone") {
            Accy2SelectCalc(FeedbackStone);
        }else if(Accy2Name === "Evergreen") {
            Accy2SelectCalc(Evergreen);
        }else if(Accy2Name === "TheRabbitFoot") {
            Accy2SelectCalc(TheRabbitFoot);
        }else if(Accy2Name === "PendantOfPurpleSeal") {
            Accy2SelectCalc(PendantOfPurpleSeal);
        }else if(Accy2Name === "NecklaceOfFaintVoice") {
            Accy2SelectCalc(NecklaceOfFaintVoice);
        }else if(Accy2Name === "NecklaceOfVigor") {
            Accy2SelectCalc(NecklaceOfVigor);
        }else if(Accy2Name === "ShieldChoker") {
            Accy2SelectCalc(ShieldChoker);
        }else if(Accy2Name === "EnchantedHematite") {
            Accy2SelectCalc(EnchantedHematite);
        }else if(Accy2Name === "NecklaceOfIcyMoon") {
            Accy2SelectCalc(NecklaceOfIcyMoon);
        }else if(Accy2Name === "ColdHeartRing") {
            Accy2SelectCalc(ColdHeartRing);
        }else if(Accy2Name === "RingOfBalance") {
            Accy2SelectCalc(RingOfBalance);
        }else if(Accy2Name === "RingOfLifeTree") {
            Accy2SelectCalc(RingOfLifeTree);
        }else if(Accy2Name === "EaringOfCursedMind") {
            Accy2SelectCalc(EaringOfCursedMind);
        }else if(Accy2Name === "RighteousCrescent") {
            Accy2SelectCalc(RighteousCrescent);
        }else if(Accy2Name === "SymbolOfSinful") {
            Accy2SelectCalc(SymbolOfSinful);
        }else if(Accy2Name === "TheEye") {
            Accy2SelectCalc(TheEye);
        }else{
            Accy2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        if(Accy3Name === "NecklaceOfHeart") {
            Accy3SelectCalc(NecklaceOfHeart);
        }else if(Accy3Name === "RingOfLonelyHeart") {
            Accy3SelectCalc(RingOfLonelyHeart);
        }else if(Accy3Name === "VindicatorsPendant") {
            Accy3SelectCalc(VindicatorsPendant);
        }else if(Accy3Name === "NecklaceOfVoid") {
            Accy3SelectCalc(NecklaceOfVoid);
        }else if(Accy3Name === "TheBlindValor") {
            Accy3SelectCalc(TheBlindValor);
        }else if(Accy3Name === "AmuletOfGoldenGlow") {
            Accy3SelectCalc(AmuletOfGoldenGlow);
        }else if(Accy3Name === "NyrsTear") {
            Accy3SelectCalc(NyrsTear);
        }else if(Accy3Name === "TheLuckyStar") {
            Accy3SelectCalc(TheLuckyStar);
        }else if(Accy3Name === "RingOfNightmare") {
            Accy3SelectCalc(RingOfNightmare);
        }else if(Accy3Name === "SymbolOfWealth") {
            Accy3SelectCalc(SymbolOfWealth);
        }else if(Accy3Name === "CharmOfFortitude") {
            Accy3SelectCalc(CharmOfFortitude);
        }else if(Accy3Name === "PendantOfMastercrafter") {
            Accy3SelectCalc(PendantOfMastercrafter);
        }else if(Accy3Name === "ArcanaPendant") {
            Accy3SelectCalc(ArcanaPendant);
        }else if(Accy3Name === "TitanRing") {
            Accy3SelectCalc(TitanRing);
        }else if(Accy3Name === "RingOfNightrose") {
            Accy3SelectCalc(RingOfNightrose);
        }else if(Accy3Name === "BeggarOfDeath") {
            Accy3SelectCalc(BeggarOfDeath);
        }else if(Accy3Name === "StarlightPendant") {
            Accy3SelectCalc(StarlightPendant);
        }else if(Accy3Name === "RedNova") {
            Accy3SelectCalc(RedNova);
        }else if(Accy3Name === "RingOfCompetitor") {
            Accy3SelectCalc(RingOfCompetitor);
        }else if(Accy3Name === "MythrilRing") {
            Accy3SelectCalc(MythrilRing);
        }else if(Accy3Name === "RingOfSacramento") {
            Accy3SelectCalc(RingOfSacramento);
        }else if(Accy3Name === "RingOfCobraReflex") {
            Accy3SelectCalc(RingOfCobraReflex);
        }else if(Accy3Name === "NecklaceOfEffort") {
            Accy3SelectCalc(NecklaceOfEffort);
        }else if(Accy3Name === "LifelinkBracelet") {
            Accy3SelectCalc(LifelinkBracelet);
        }else if(Accy3Name === "GoldenDream") {
            Accy3SelectCalc(GoldenDream);
        }else if(Accy3Name === "NecklaceOfHelvys") {
            Accy3SelectCalc(NecklaceOfHelvys);
        }else if(Accy3Name === "PendantOfStardust") {
            Accy3SelectCalc(PendantOfStardust);
        }else if(Accy3Name === "ExplosiveEaring") {
            Accy3SelectCalc(ExplosiveEaring);
        }else if(Accy3Name === "PenetrationStone") {
            Accy3SelectCalc(PenetrationStone);
        }else if(Accy3Name === "FeedbackStone") {
            Accy3SelectCalc(FeedbackStone);
        }else if(Accy3Name === "Evergreen") {
            Accy3SelectCalc(Evergreen);
        }else if(Accy3Name === "TheRabbitFoot") {
            Accy3SelectCalc(TheRabbitFoot);
        }else if(Accy3Name === "PendantOfPurpleSeal") {
            Accy3SelectCalc(PendantOfPurpleSeal);
        }else if(Accy3Name === "NecklaceOfFaintVoice") {
            Accy3SelectCalc(NecklaceOfFaintVoice);
        }else if(Accy3Name === "NecklaceOfVigor") {
            Accy3SelectCalc(NecklaceOfVigor);
        }else if(Accy3Name === "ShieldChoker") {
            Accy3SelectCalc(ShieldChoker);
        }else if(Accy3Name === "EnchantedHematite") {
            Accy3SelectCalc(EnchantedHematite);
        }else if(Accy3Name === "NecklaceOfIcyMoon") {
            Accy3SelectCalc(NecklaceOfIcyMoon);
        }else if(Accy3Name === "ColdHeartRing") {
            Accy3SelectCalc(ColdHeartRing);
        }else if(Accy3Name === "RingOfBalance") {
            Accy3SelectCalc(RingOfBalance);
        }else if(Accy3Name === "RingOfLifeTree") {
            Accy3SelectCalc(RingOfLifeTree);
        }else if(Accy3Name === "EaringOfCursedMind") {
            Accy3SelectCalc(EaringOfCursedMind);
        }else if(Accy3Name === "RighteousCrescent") {
            Accy3SelectCalc(RighteousCrescent);
        }else if(Accy3Name === "SymbolOfSinful") {
            Accy3SelectCalc(SymbolOfSinful);
        }else if(Accy3Name === "TheEye") {
            Accy3SelectCalc(TheEye);
        }else{
            Accy3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        if(Accy1AprName === "Meteoric") {
            Accy1AprSelectCalc(Meteoric);
        }else if(Accy1AprName === "Glorious") {
            Accy1AprSelectCalc(Glorious);
        }else if(Accy1AprName === "Mightly") {
            Accy1AprSelectCalc(Mightly);
        }else if(Accy1AprName === "Blessed") {
            Accy1AprSelectCalc(Blessed);
        }else if(Accy1AprName === "Strong") {
            Accy1AprSelectCalc(Strong);
        }else if(Accy1AprName === "Sturdy") {
            Accy1AprSelectCalc(Sturdy);
        }else if(Accy1AprName === "Spiteful") {
            Accy1AprSelectCalc(Spiteful);
        }else if(Accy1AprName === "Assassins") {
            Accy1AprSelectCalc(Assassins);
        }else if(Accy1AprName === "Mages") {
            Accy1AprSelectCalc(Mages);
        }else if(Accy1AprName === "Infusing") {
            Accy1AprSelectCalc(Infusing);
        }else if(Accy1AprName === "Penetrative") {
            Accy1AprSelectCalc(Penetrative);
        }else if(Accy1AprName === "Piercing") {
            Accy1AprSelectCalc(Piercing);
        }else if(Accy1AprName === "Impact") {
            Accy1AprSelectCalc(Impact);
        }else if(Accy1AprName === "Brunt") {
            Accy1AprSelectCalc(Brunt);
        }else if(Accy1AprName === "Skillful") {
            Accy1AprSelectCalc(Skillful);
        }else if(Accy1AprName === "Masters") {
            Accy1AprSelectCalc(Masters);
        }else{
            Accy1Apr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        if(Accy2AprName === "Meteoric") {
            Accy2AprSelectCalc(Meteoric);
        }else if(Accy2AprName === "Glorious") {
            Accy2AprSelectCalc(Glorious);
        }else if(Accy2AprName === "Mightly") {
            Accy2AprSelectCalc(Mightly);
        }else if(Accy2AprName === "Blessed") {
            Accy2AprSelectCalc(Blessed);
        }else if(Accy2AprName === "Strong") {
            Accy2AprSelectCalc(Strong);
        }else if(Accy2AprName === "Sturdy") {
            Accy2AprSelectCalc(Sturdy);
        }else if(Accy2AprName === "Spiteful") {
            Accy2AprSelectCalc(Spiteful);
        }else if(Accy2AprName === "Assassins") {
            Accy2AprSelectCalc(Assassins);
        }else if(Accy2AprName === "Mages") {
            Accy2AprSelectCalc(Mages);
        }else if(Accy2AprName === "Infusing") {
            Accy2AprSelectCalc(Infusing);
        }else if(Accy2AprName === "Penetrative") {
            Accy2AprSelectCalc(Penetrative);
        }else if(Accy2AprName === "Piercing") {
            Accy2AprSelectCalc(Piercing);
        }else if(Accy2AprName === "Impact") {
            Accy2AprSelectCalc(Impact);
        }else if(Accy2AprName === "Brunt") {
            Accy2AprSelectCalc(Brunt);
        }else if(Accy2AprName === "Skillful") {
            Accy2AprSelectCalc(Skillful);
        }else if(Accy2AprName === "Masters") {
            Accy2AprSelectCalc(Masters);
        }else{
            Accy2Apr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        if(Accy3AprName === "Meteoric") {
            Accy3AprSelectCalc(Meteoric);
        }else if(Accy3AprName === "Glorious") {
            Accy3AprSelectCalc(Glorious);
        }else if(Accy3AprName === "Mightly") {
            Accy3AprSelectCalc(Mightly);
        }else if(Accy3AprName === "Blessed") {
            Accy3AprSelectCalc(Blessed);
        }else if(Accy3AprName === "Strong") {
            Accy3AprSelectCalc(Strong);
        }else if(Accy3AprName === "Sturdy") {
            Accy3AprSelectCalc(Sturdy);
        }else if(Accy3AprName === "Spiteful") {
            Accy3AprSelectCalc(Spiteful);
        }else if(Accy3AprName === "Assassins") {
            Accy3AprSelectCalc(Assassins);
        }else if(Accy3AprName === "Mages") {
            Accy3AprSelectCalc(Mages);
        }else if(Accy3AprName === "Infusing") {
            Accy3AprSelectCalc(Infusing);
        }else if(Accy3AprName === "Penetrative") {
            Accy3AprSelectCalc(Penetrative);
        }else if(Accy3AprName === "Piercing") {
            Accy3AprSelectCalc(Piercing);
        }else if(Accy3AprName === "Impact") {
            Accy3AprSelectCalc(Impact);
        }else if(Accy3AprName === "Brunt") {
            Accy3AprSelectCalc(Brunt);
        }else if(Accy3AprName === "Skillful") {
            Accy3AprSelectCalc(Skillful);
        }else if(Accy3AprName === "Masters") {
            Accy3AprSelectCalc(Masters);
        }else{
            Accy3Apr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        Accessory[0] = Accy1[0] + Accy2[0] + Accy3[0] + Accy1Apr[0] + Accy2Apr[0] + Accy3Apr[0]
        Accessory[1] = Accy1[1] + Accy2[1] + Accy3[1] + Accy1Apr[1] + Accy2Apr[1] + Accy3Apr[1]
        Accessory[2] = Accy1[2] + Accy2[2] + Accy3[2] + Accy1Apr[2] + Accy2Apr[2] + Accy3Apr[2]
        Accessory[3] = Accy1[3] + Accy2[3] + Accy3[3] + Accy1Apr[3] + Accy2Apr[3] + Accy3Apr[3] 
        Accessory[4] = Accy1[4] + Accy2[4] + Accy3[4] + Accy1Apr[4] + Accy2Apr[4] + Accy3Apr[4]
        Accessory[5] = Accy1[5] + Accy2[5] + Accy3[5] + Accy1Apr[5] + Accy2Apr[5] + Accy3Apr[5]
        Accessory[6] = Accy1[6] + Accy2[6] + Accy3[6] + Accy1Apr[6] + Accy2Apr[6] + Accy3Apr[6]
        Accessory[7] = Accy1[7] + Accy2[7] + Accy3[7] + Accy1Apr[7] + Accy2Apr[7] + Accy3Apr[7]
        Accessory[8] = Accy1[8] + Accy2[8] + Accy3[8] + Accy1Apr[8] + Accy2Apr[8] + Accy3Apr[8]
        Accessory[9] = Accy1[9] + Accy2[9] + Accy3[9] + Accy1Apr[9] + Accy2Apr[9] + Accy3Apr[9]
        Accessory[10] = Accy1[10] + Accy2[10] + Accy3[10] + Accy1Apr[10] + Accy2Apr[10] + Accy3Apr[10]
        Accessory[11] = Accy1[11] + Accy2[11] + Accy3[11] + Accy1Apr[11] + Accy2Apr[11] + Accy3Apr[11]
        console.log(Accessory)
        render();
    };
    const myManaElem = document.getElementById('myMana');
    const enemyManaElem = document.getElementById('enemyMana');
    const myManaValueElem = document.getElementById('myMana-value');
    const enemyManaValueElem = document.getElementById('enemyMana-value');
    const setMyManaValue = (val) => {
        myManaValueElem.innerText = val;
    };
    const setEnemyManaValue = (val) => {
        enemyManaValueElem.innerText = val;
    };
    const myManaOnChange = (e) => {
        setMyManaValue(e.target.value);
     };
    const enemyManaOnChange = (e) => {
        setEnemyManaValue(e.target.value);
        CalcEnch();
        CalcOE();
    };
    const EnchCheckOnChange = (e) => CalcEnch()
    const OeCheckOnChange = (e) => CalcOE()
    const renderOnChange = (e) => render()
    const AddonCheckOnChange = (e) => CalcAddon()
    const ElixirCheckOnChange = (e) => CalcElixir()
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
    document.getElementById("EVoidCheck").addEventListener('change', ElixirCheckOnChange);
    fetchAll([_pathAr, _pathArp, _pathSmg, _pathSmgp, _pathLmg, _pathLmgp, _pathSr, _pathSrp, _pathCar, _pathCarp, _pathExpl, _pathExplp, _pathSec, _pathSecp, _pathMelee, _pathMeleep]).then((res) => {
        [_objAr, _objArp, _objSmg, _objSmgp, _objLmg, _objLmgp, _objSr, _objSrp, _objCar, _objCarp, _objExpl, _objExplp, _objSec, _objSecp, _objMelee, _objMeleep] = res
        console.log(res.concat())
    })
    document.getElementById("TypeForm").onchange = () => render();
    document.getElementById("WeaponForm").onchange = () => render();
    document.getElementById("ModForm").onchange = () => render();
    document.getElementById("EnchantForm").onchange = () => {
        CalcEnch();
        CalcElixir();
    };
    document.getElementById("OeForm").onchange = () => {
        CalcOE();
        CalcElixir();
    };
    document.getElementById("AncientEnchantForm").onchange = () => render();
    document.getElementById("AddonForm").onchange = () => CalcAddon();
    document.getElementById("ArmorForm").onchange = () => CalcArmor();
    document.getElementById("ElixirForm").onchange = () => {
        CalcEnch();
        CalcOE();
        CalcElixir();
    };
    document.getElementById("Accy1Form").onchange = () => {
        CalcEnch();
        CalcOE();
        CalcElixir();
        CalcAccessory();
    };
    document.getElementById("Accy2Form").onchange = () => {
        CalcEnch();
        CalcOE();
        CalcElixir();
        CalcAccessory();
    };
    document.getElementById("Accy3Form").onchange = () => {
        CalcEnch();
        CalcOE();
        CalcElixir();
        CalcAccessory();
    };
    myManaElem.addEventListener('input', myManaOnChange);
    enemyManaElem.addEventListener('input', enemyManaOnChange);
    setMyManaValue(myManaElem.value);
    setEnemyManaValue(enemyManaElem.value);
})