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
    let Accessory = [0, 0, 0, 0, 0, 0, 0, 0, 10, 25, 0, 0, 0];
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
    let enchTableSwitch = 0;
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
            };
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
        const enchNwCheck = document.getElementById("EnchantForm").EnchantSelect.value;
        const oeNwCheck = document.getElementById("OeForm").OeSelect.value;
        const Accy1NwCheck = document.getElementById("Accy1Form").Accessory1Select.value;
        const Accy2NwCheck = document.getElementById("Accy2Form").Accessory2Select.value;
        const Accy3NwCheck = document.getElementById("Accy3Form").Accessory3Select.value;
        const icyNwDmg = (enchNwCheck === "NorthernWind" || oeNwCheck === "NorthernWind") ? 10 : 5;
        const Icymoon = [0, 0, 0, 0, 0, 0];
        if (Accy1NwCheck === "NecklaceOfIcyMoon") {
            Icymoon[3] = icyNwDmg;
            Icymoon[0] = (Result[6] === 0) ? icyNwDmg * 0.55 : icyNwDmg * 0.55 * 1 / (Math.ceil(0.1 * Result[6]));
        } else {
            Icymoon[0] = 0;
            Icymoon[3] = 0;
        };
        if (Accy2NwCheck === "NecklaceOfIcyMoon") {
            Icymoon[4] = icyNwDmg;
            Icymoon[1] = (Result[6] === 0) ? icyNwDmg * 0.55 : icyNwDmg * 0.55 * 1 / (Math.ceil(0.1 * Result[6]));
        } else {
            Icymoon[1] = 0;
            Icymoon[4] = 0;
        };
        if (Accy3NwCheck === "NecklaceOfIcyMoon") {
            Icymoon[5] = icyNwDmg;
            Icymoon[2] = (Result[6] === 0) ? icyNwDmg * 0.55 : icyNwDmg * 0.55 * 1 / (Math.ceil(0.1 * Result[6]));
        } else {
            Icymoon[2] = 0;
            Icymoon[5] = 0;
        };
        const icy4Calc = [Icymoon[0] + Icymoon[1] + Icymoon[2], Icymoon[3] + Icymoon[4] + Icymoon[5]];
        CalcAE(WeaponDmg + ModDmg, WeaponDmg + WeaponHsBonus + ModDmg + ModHsBonus);
        Weapon[0] = WeaponCs[0]
        Weapon[1] = WeaponCs[1]
        Weapon[2] = WeaponCs[2]
        Weapon[3] = WeaponCs[3]
        Weapon[4] = WeaponCs[4]
        Weapon[6] = WeaponCs[6]
        Weapon[7] = WeaponCs[7]
        Weapon[8] = WeaponCs[8]
        let crit4Calc = [0, 0]
        crit4Calc[0] = Accessory[9] * ((Accessory[8] + Armor[3]) / 100) / 100 + 1;
        crit4Calc[1] = Accessory[9] / 100 + 1;
        Result[12] = (WeaponCs[9] * WeaponCs[10])
        Result[13] = WeaponCs[10]
        Result[14] = Math.round(WeaponCs[11] * Math.pow(10, 2)) / Math.pow(10, 2)
        Result[15] = WeaponCs[12]
        Result[16] = WeaponCs[14]
        Result[17] = WeaponCs[15]
        Weapon[9] = WeaponCs[13]
        Result[0] = Math.round(((Weapon[0] + Mod[0] + Ench[0] * EnchActive[0] + Oe[0] * EnchActive[1] + Ae[0] + Addon[0] + Armor[1] + Elixir[0] + Accessory[1] + Result[12] + icy4Calc[0]) * Addon[5] * crit4Calc[0]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[1] = Math.round(((Weapon[0] + Mod[0] + Ench[0] * EnchActive[0] + Oe[0] * EnchActive[1] + Ae[0] + Addon[0] + Armor[1] + Elixir[0] + Accessory[1] + Result[12] + icy4Calc[0] + Weapon[1] + Mod[1] + Ae[2]) * Addon[5] * crit4Calc[0]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[2] = Math.round(((Weapon[0] + Mod[0] + Ench[1] + Oe[1] + Ae[1] + Addon[1] + Armor[1] + Elixir[1] + Accessory[1] + Result[13] + icy4Calc[1]) * Addon[5] * crit4Calc[1]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[3] = Math.round(((Weapon[0] + Mod[0] + Ench[1] + Oe[1] + Ae[1] + Addon[1] + Armor[1] + Elixir[1] + Accessory[1] + Result[13] + icy4Calc[1] + Weapon[1] + Mod[1] + Ae[2]) * Addon[5] * crit4Calc[1]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[4] = Weapon[2] + Mod[2] + Addon[2]
        Result[5] = Weapon[3] + Mod[3] + Addon[3]
        Result[7] = Math.round((Result[0] * Result[6]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[8] = Math.round(Math.abs(Weapon[7] - Mod[5]) * Math.pow(10, 2)) / Math.pow(10, 2)
        Result[9] = Math.round(Math.abs(Weapon[8] - Mod[5]) * Math.pow(10, 2)) / Math.pow(10, 2)
        Result[10] = Math.round(((0.2 + Weapon[9] + Mod[6] + Addon[4] + Elixir[2]) / 0.2) * Math.pow(10, 2)) / Math.pow(10, 2)
        Result[11] = Math.round((Result[4] / Result[6]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[18] = Math.round(((Mod[0] + Ench[0] * EnchActive[0] + Oe[0] * EnchActive[1] + Ae[0] + Addon[0] + Result[12]) * Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[19] = Math.round(((Mod[0] + Ench[1] + Oe[1] + Ae[1] + Addon[1] + Result[13]) * Addon[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[20] = Math.round((Ench[3] + Oe[3] + Armor[2] + WeaponShiftEffect[1] + Accessory[2]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[21] = Math.round((Ench[4] + Oe[4] + Armor[2] + WeaponShiftEffect[1] + Accessory[2]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[22] = Math.round((2 + Ench[5] + Oe[5] + Armor[4] + Accessory[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[23] = Math.round(((Ench[6] + Oe[6] + Ae[3] + WeaponShiftEffect[0] + Elixir[4] + Accessory[6]) * 100) * Math.pow(10, 1)) / Math.pow(10, 1)
        Result[24] = Math.round(20 + Armor[0] + Elixir[3] + Accessory[4]);
        Result[25] = Math.round(Armor[1] + Elixir[0] + Accessory[1]);
        Result[26] = Math.round(Armor[1] + Elixir[1] + Accessory[1]);
        Result[27] = Accessory[10]
        Result[28] = Accessory[3]
        Result[29] = Accessory[12]
        Result[30] = Accessory[11]
        Result[31] = Accessory[7]
        Result[32] = Accessory[8] + Armor[3]
        Result[33] = Accessory[9]
        //0Lev 1Atk 2DefDmg 3ShotDefProb 4HP 5Mana 6Dodge 7PDodge 8CC 9CD 10pene 11Acc 12ExplDefProb
        //Result 0AveDmg 1AveHsDmg 2HiDmg 3HiHsDmg 4Capacity 5Reload 6Rate 7Dps 8Sprd 9Ads 10Wt
        //11Duration 12WpnCC 13WpnCD 14C10m 15Cmax 16ExplDmg 17ExplRadius 18AddAveDmg 19addHiDmg20AveDef 21HiDef
        //22Mana 23Dodge 24Hp 25AveAtk 26HiAtk 27pene 28ShotDefProb 29ExplDefProb 30Acc 31PDodge 32CC 33CD
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
        document.getElementById("DisplayPene").textContent = (Result[27])
        document.getElementById("DisplayShotDefProb").textContent = (Result[28])
        document.getElementById("DisplayExplDefProb").textContent = (Result[29])
        document.getElementById("DisplayAcc").textContent = (Result[30])
        document.getElementById("DisplayPerfectDodge").textContent = (Result[31])
        document.getElementById("DisplayCritChance").textContent = (Result[32])
        document.getElementById("DisplayCritDmg").textContent = (Result[33])
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
        let enchName = document.getElementById("EnchantForm").EnchantSelect.value
        let oeName = document.getElementById("OeForm").OeSelect.value
        const EnchLv = document.getElementById("EnchantForm").EnchantLevSelect.value
        const OeLv = document.getElementById("OeForm").OeLevSelect.value
        const FrToggle = document.getElementById("FrCheck");
        if ((enchName === 'FlexibleResonance') || (oeName === 'FlexibleResonance')) {
            FrLabel.style.display = "inline-block";
        } else {
            FrLabel.style.display = 'none';
            FrToggle.checked = false;
        };
        const calcEnchEfct = (name) => {
            if (name === 'FlexibleResonance' && FrToggle.checked) {name = name + "2"};
            if (name === 'ShadowStrike' && enemyManaElem.value < 50) {
                name = name + "0"
            }else if(name === 'ShadowStrike' && enemyManaElem.value < 75) {
                name = name + "1"
            }else if(name === 'ShadowStrike' && enemyManaElem.value <= 100) {
                name = name + "2"
            };
            return(name);
        };
        enchName = calcEnchEfct(enchName);
        oeName = calcEnchEfct(oeName);
        const EnchLevelsCalc = (ench,name,lv) => {
            if (lv == "EnchLev1") {
                ench[0] = name[0] * name[1];
                ench[1] = name[0];
                ench[2] = name[4];
                ench[3] = name[5] * name[8];
                ench[4] = name[5];
                ench[5] = name[11];
                ench[6] = name[14];
            } else if (lv == "EnchLev2") {
                ench[0] = name[0] * name[2];
                ench[1] = name[0]
                ench[2] = name[4];
                ench[3] = name[6] * name[9];
                ench[4] = name[6];
                ench[5] = name[12];
                ench[6] = name[15];
            } else if (lv == "EnchLev3") {
                ench[0] = name[0] * name[3];
                ench[1] = name[0]
                ench[2] = name[4];
                ench[3] = name[7] * name[10];
                ench[4] = name[7];
                ench[5] = name[13];
                ench[6] = name[16];
            } else {
                ench[0] = 0;
                ench[1] = 0;
                ench[2] = 0;
                ench[3] = 0;
                ench[4] = 0;
                ench[5] = 0;
                ench[6] = 0;
            }
            return(ench);
        };
        EnchLevelsCalc(Ench,enchKeys[enchName],EnchLv)
        EnchLevelsCalc(Oe,enchKeys[oeName],OeLv)
        if (enchTextKeys[enchName] && EnchLv != "none") {
            if (enchTableSwitch === 1) {
                tableElem.tBodies[0].deleteRow(0);
            };
            let TrElem = tableElem.tBodies[0].insertRow(0);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            enchTableSwitch = 1;
            NameElem.appendChild(document.createTextNode(enchTextKeys[enchName][0]));
            ProbElem.appendChild(document.createTextNode(enchTextKeys[enchName][enchTextLvKeys[EnchLv]]));
        } else if (enchTableSwitch === 1) {
            tableElem.tBodies[0].deleteRow(0);
            enchTableSwitch = 0;
        };
        if (enchTextKeys[oeName] && (enchTextKeys[enchName][enchTextLvKeys[EnchLv]] != enchTextKeys[oeName][enchTextLvKeys[OeLv]]) && (OeLv != "none")) {
            if (OeTableSwitch === 1) {
                tableElem.tBodies[0].deleteRow(enchTableSwitch);
            };
            let TrElem = tableElem.tBodies[0].insertRow(enchTableSwitch);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            OeTableSwitch = 1;
            NameElem.appendChild(document.createTextNode(enchTextKeys[oeName][0]));
            ProbElem.appendChild(document.createTextNode(enchTextKeys[oeName][enchTextLvKeys[OeLv]]));
        } else if (OeTableSwitch === 1) {
            tableElem.tBodies[0].deleteRow(enchTableSwitch);
            OeTableSwitch = 0;
        };
        CalcElixir();
        render();
    };
    const CalcAE = (EoDDmg, EoDHsDmg) => {
        let aeName = document.getElementById("AncientEnchantForm").AncientEnchantSelect.value
        const BcToggle = document.getElementById("BcCheck");
        const CfToggle = document.getElementById("CfCheck");
        const SdToggle = document.getElementById("SdCheck");
        const WsToggle = document.getElementById("WsCheck");
        const FfToggle = document.getElementById("FfCheck");
        const IsToggle = document.getElementById("IsCheck");
        const checkAncientEnchants = [
            { name: "Bloodcraze", label: BcLabel, toggle: BcToggle },
            { name: "ConcentratedFire", label: CfLabel, toggle: CfToggle },
            { name: "SuddenDeath", label: SdLabel, toggle: SdToggle },
            { name: "Windsong", label: WsLabel, toggle: WsToggle },
            { name: "FleetFooted", label: FfLabel, toggle: FfToggle },
            { name: "IndomitableSpirit", label: IsLabel, toggle: IsToggle }
        ];
        checkAncientEnchants.forEach((checkAncientEnchant) => {
            if (aeName === checkAncientEnchant.name){
                checkAncientEnchant.label.style.display = 'inline-block';
            } else {
                checkAncientEnchant.label.style.display = "none";
                checkAncientEnchant.toggle.checked = false;
            };
            if (aeName === checkAncientEnchant.name && checkAncientEnchant.toggle.checked) {
                aeName = aeName + "2"
            };
        });
        if (aeName == "ElementalOverload" && myManaElem.value > 30) { aeName = aeName + "2" };
        if (aeName == "ManaBurn" && enemyManaElem.value <= 35) { aeName = aeName + "2" };
        if (aeName == "EchoOfDeath" && EoDDmg >= 50) { aeName = aeName + "2" };
        if (aeName == "Manaflood" && myManaElem.value == 100) {
            aeName = aeName + "2" 
        } else if (aeName == "Manaflood" && myManaElem.value >= 75 ) {
            aeName = aeName + "1" 
        } else if (aeName == "Manaflood" && myManaElem.value >= 50 ) {
            aeName = aeName + "0" 
        };
        Ae[0] = aeKeys[aeName][0]
        Ae[1] = aeKeys[aeName][1]
        Ae[3] = aeKeys[aeName][2]
        if (aeName == "EchoOfDeath" && EoDHsDmg >= 50) {
            Ae[2] = EchoOfDeath[0]
        } else {
            Ae[2] = 0
        };
        if (aeTextKeys[aeName]) {
            if (AeTableSwitch === 1) {
                tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch);
            };
            let TrElem = tableElem.tBodies[0].insertRow(enchTableSwitch + OeTableSwitch);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            AeTableSwitch = 1;
            NameElem.appendChild(document.createTextNode(aeTextKeys[aeName][0]));
            ProbElem.appendChild(document.createTextNode(aeTextKeys[aeName][1]));
        } else if (AeTableSwitch === 1) {
            tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch);
            AeTableSwitch = 0;
        };
    };
    const CalcAddon = () => {
        let addonName = document.getElementById("AddonForm").AddonSelect.value
        const AddonLv = document.getElementById("AddonForm").AddonLevSelect.value
        const SsaToggle = document.getElementById("SsaCheck");
        const SbToggle = document.getElementById("SbCheck");
        const checkAddons = [
            { name: "SupersonicAmmo", label: SsaLabel, toggle: SsaToggle },
            { name: "ShieldBreaker", label: SbLabel, toggle: SbToggle }
        ];
        checkAddons.forEach((checkAddon) => {
            if (addonName === checkAddon.name){
                checkAddon.label.style.display = 'inline-block';
            } else {
                checkAddon.label.style.display = "none";
                checkAddon.toggle.checked = false;
            };
            if (addonName === checkAddon.name && checkAddon.toggle.checked) {
                addonName = addonName + "2"
            };
        });
        if (AddonLv == "AddonLev0") {
            Addon[0] = addonKeys[addonName][0]
            Addon[1] = addonKeys[addonName][0] * addonKeys[addonName][4]
            Addon[2] = addonKeys[addonName][5]
            Addon[3] = addonKeys[addonName][9]
            Addon[4] = addonKeys[addonName][13]
            Addon[5] = addonKeys[addonName][17]
        } else if (AddonLv == "AddonLev1") {
            Addon[0] = addonKeys[addonName][1]
            Addon[1] = addonKeys[addonName][1] * addonKeys[addonName][4]
            Addon[2] = addonKeys[addonName][6]
            Addon[3] = addonKeys[addonName][10]
            Addon[4] = addonKeys[addonName][14]
            Addon[5] = addonKeys[addonName][18]
        } else if (AddonLv == "AddonLev2") {
            Addon[0] = addonKeys[addonName][2]
            Addon[1] = addonKeys[addonName][2] * addonKeys[addonName][4]
            Addon[2] = addonKeys[addonName][7]
            Addon[3] = addonKeys[addonName][11]
            Addon[4] = addonKeys[addonName][15]
            Addon[5] = addonKeys[addonName][19]
        } else if (AddonLv == "AddonLev3") {
            Addon[0] = addonKeys[addonName][3]
            Addon[1] = addonKeys[addonName][3] * addonKeys[addonName][4]
            Addon[2] = addonKeys[addonName][8]
            Addon[3] = addonKeys[addonName][12]
            Addon[4] = addonKeys[addonName][16]
            Addon[5] = addonKeys[addonName][20]
        } else {
            Addon[0] = 0
            Addon[1] = 0
            Addon[2] = 0
            Addon[3] = 0
            Addon[4] = 0
            Addon[5] = 1
        }
        if (addonName == 'ApRounds' && AddonLv != "none") {
            if (AddonTableSwitch === 1) {
                tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch);
            };
            let TrElem = tableElem.tBodies[0].insertRow(enchTableSwitch + OeTableSwitch + AeTableSwitch);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            AddonTableSwitch = 1;
            NameElem.appendChild(document.createTextNode(ApText[0]));
            ProbElem.appendChild(document.createTextNode(ApText[addonTextLvKeys[AddonLv]]));
        } else if (AddonTableSwitch === 1) {
            tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch);
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
                tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch);
            };
            let TrElem = tableElem.tBodies[0].insertRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            ArmorTableSwitch[0] = 1;
            NameElem.appendChild(document.createTextNode(ArmorTextKey[0]));
            ProbElem.appendChild(document.createTextNode(ArmorTextKey[1]));
        }
        let ArmorFullSet = [0, 0, 0, 0, 0, 0, 0, 0]
        if (ChestName === HandName && ChestName === BootsName) {
            ArmorFullSet = SetKeys[ChestName];
        };
        for (let i = 0; i <= 7; i++) {
            Armor[i] = ChestKeys[ChestName][i] + HandKeys[HandName][i] + BootsKeys[BootsName][i] + ArmorFullSet[i]
        };
        if (BootsName == 'Cleric') {
            ArmorEffectFunc(CBootsText);
        } else if (BootsName == 'Pilgrim') {
            ArmorEffectFunc(PBootsText);
        } else if (ArmorTableSwitch[0] === 1) {
            tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch);
            ArmorTableSwitch[0] = 0;
        };
        if (ChestName === "Cleric" && ChestName === HandName && ChestName === BootsName) {
            if (ArmorTableSwitch[1] === 1) {
                tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch +AddonTableSwitch + ArmorTableSwitch[0]);
            };
            let TrElem = tableElem.tBodies[0].insertRow(enchTableSwitch + OeTableSwitch + AeTableSwitch +AddonTableSwitch + ArmorTableSwitch[0]);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            ArmorTableSwitch[1] = 1;
            NameElem.appendChild(document.createTextNode(CSetText[0]));
            ProbElem.appendChild(document.createTextNode(CSetText[1]));
        } else if (ArmorTableSwitch[1] === 1) {
            tableElem.tBodies[1].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0]);
            ArmorTableSwitch[1] = 0;
        };
        render();
    };
    const CalcElixir = () => {
        const enchName = document.getElementById("EnchantForm").EnchantSelect.value
        const oeName = document.getElementById("OeForm").OeSelect.value
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
            if (enchName === "Sunfire" || oeName === "Sunfire"){
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
                tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch +AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1]);
            };
            let TrElem = tableElem.tBodies[0].insertRow(enchTableSwitch + OeTableSwitch + AeTableSwitch +AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1]);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            ElixirTableSwitch = 1;
            NameElem.appendChild(document.createTextNode(EWisdomText[0]));
            ProbElem.appendChild(document.createTextNode(EWisdomText[1]));
        } else if (ElixirTableSwitch === 1) {
            tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1]);
            ElixirTableSwitch = 0;
        };
        render();
    }; 
    const CalcAccessory = () => {
        let Accy1Name = document.getElementById("Accy1Form").Accessory1Select.value
        let Accy2Name = document.getElementById("Accy2Form").Accessory2Select.value
        let Accy3Name = document.getElementById("Accy3Form").Accessory3Select.value
        const Accy1AprName = document.getElementById("Accy1Form").Accy1AprSelect.value
        const Accy2AprName = document.getElementById("Accy2Form").Accy2AprSelect.value
        const Accy3AprName = document.getElementById("Accy3Form").Accy3AprSelect.value
        const NecklaceOfHeartToggle = document.getElementById("NecklaceOfHeartCheck");
        const TheBlindValorToggle = document.getElementById("TheBlindValorCheck");
        const NyrsTearToggle = document.getElementById("NyrsTearCheck");
        const TheLuckyStarToggle = document.getElementById("TheLuckyStarCheck");
        const SymbolOfWealthToggle = document.getElementById("SymbolOfWealthCheck");
        const RingOfNightroseToggle = document.getElementById("RingOfNightroseCheck");
        const RedNovaToggle = document.getElementById("RedNovaCheck");
        const RingOfSacramentoToggle = document.getElementById("RingOfSacramentoCheck");
        const NecklaceOfEffortToggle = document.getElementById("NecklaceOfEffortCheck");
        const LifelinkBraceletToggle = document.getElementById("LifelinkBraceletCheck");
        const GoldenDreamToggle = document.getElementById("GoldenDreamCheck");
        const RingOfLifeTreeToggle = document.getElementById("RingOfLifeTreeCheck");
        const checkAccessories = [
            { name: "NecklaceOfHeart", label: NecklaceOfHeartLabel, toggle: NecklaceOfHeartToggle },
            { name: "TheBlindValor", label: TheBlindValorLabel, toggle: TheBlindValorToggle },
            { name: "NyrsTear", label: NyrsTearLabel, toggle: NyrsTearToggle },
            { name: "TheLuckyStar", label: TheLuckyStarLabel, toggle: TheLuckyStarToggle },
            { name: "SymbolOfWealth", label: SymbolOfWealthLabel, toggle: SymbolOfWealthToggle },
            { name: "RingOfNightrose", label: RingOfNightroseLabel, toggle: RingOfNightroseToggle },
            { name: "RedNova", label: RedNovaLabel, toggle: RedNovaToggle },
            { name: "RingOfSacramento", label: RingOfSacramentoLabel, toggle: RingOfSacramentoToggle },
            { name: "NecklaceOfEffort", label: NecklaceOfEffortLabel, toggle: NecklaceOfEffortToggle },
            { name: "LifelinkBracelet", label: LifelinkBraceletLabel, toggle: LifelinkBraceletToggle },
            { name: "GoldenDream", label: GoldenDreamLabel, toggle: GoldenDreamToggle },
            { name: "RingOfLifeTree", label: RingOfLifeTreeLabel, toggle: RingOfLifeTreeToggle }
        ];
        checkAccessories.forEach((checkAccessory) => {
            if (Accy1Name === checkAccessory.name || Accy2Name === checkAccessory.name || Accy3Name === checkAccessory.name) {
                checkAccessory.label.style.display = 'inline-block';
            } else {
                checkAccessory.label.style.display = 'none';
                checkAccessory.toggle.checked = false;
            };
            if (Accy1Name === checkAccessory.name && checkAccessory.toggle.checked) {
                Accy1Name = Accy1Name + "2"
            } else if (Accy2Name === checkAccessory.name && checkAccessory.toggle.checked) {
                Accy2Name = Accy2Name + "2"
            } else if (Accy3Name === checkAccessory.name && checkAccessory.toggle.checked) {
                Accy3Name = Accy3Name + "2"
            };
        });
        let Accy1 = accyKeys[Accy1Name];
        let Accy2 = accyKeys[Accy2Name];
        let Accy3 = accyKeys[Accy3Name];
        let Accy1Apr = accyAprKeys[Accy1AprName];
        let Accy2Apr = accyAprKeys[Accy2AprName];
        let Accy3Apr = accyAprKeys[Accy3AprName];
        for (let i = 0; i <= 12; i++) {
            Accessory[i] = Accy1[i] + Accy2[i] + Accy3[i] + Accy1Apr[i] + Accy2Apr[i] + Accy3Apr[i]
        };
        Accessory[8] += 10;
        Accessory[9] += 25;
        if (accyTextKeys[Accy1Name]) {
            if (AccessoryTableSwitch[0] === 1) {
                tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1] + ElixirTableSwitch);
            };
            let TrElem = tableElem.tBodies[0].insertRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1] + ElixirTableSwitch);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            AccessoryTableSwitch[0] = 1;
            NameElem.appendChild(document.createTextNode(accyTextKeys[Accy1Name][0]));
            ProbElem.appendChild(document.createTextNode(accyTextKeys[Accy1Name][1]));
        } else if (AccessoryTableSwitch[0] === 1) {
            tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1] + ElixirTableSwitch);
            AccessoryTableSwitch[0] = 0;
        };
        if (accyTextKeys[Accy2Name]) {
            if (AccessoryTableSwitch[1] === 1) {
                tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1] + ElixirTableSwitch + AccessoryTableSwitch[0]);
            };
            let TrElem = tableElem.tBodies[0].insertRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1] + ElixirTableSwitch + AccessoryTableSwitch[0]);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            AccessoryTableSwitch[1] = 1;
            NameElem.appendChild(document.createTextNode(accyTextKeys[Accy2Name][0]));
            ProbElem.appendChild(document.createTextNode(accyTextKeys[Accy2Name][1]));
        } else if (AccessoryTableSwitch[1] === 1) {
            tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1] + ElixirTableSwitch + AccessoryTableSwitch[0]);
            AccessoryTableSwitch[1] = 0;
        };
        if (accyTextKeys[Accy3Name]) {
            if (AccessoryTableSwitch[2] === 1) {
                tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1] + ElixirTableSwitch + AccessoryTableSwitch[0] + AccessoryTableSwitch[1]);
            };
            let TrElem = tableElem.tBodies[0].insertRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1] + ElixirTableSwitch + AccessoryTableSwitch[0] + AccessoryTableSwitch[1]);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            AccessoryTableSwitch[2] = 1;
            NameElem.appendChild(document.createTextNode(accyTextKeys[Accy3Name][0]));
            ProbElem.appendChild(document.createTextNode(accyTextKeys[Accy3Name][1]));
        } else if (AccessoryTableSwitch[2] === 1) {
            tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0] + ArmorTableSwitch[1] + ElixirTableSwitch + AccessoryTableSwitch[0] + AccessoryTableSwitch[1]);
            AccessoryTableSwitch[2] = 0;
        };
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
    };
    const EnchCheckOnChange = (e) => CalcEnch()
    const renderOnChange = (e) => render()
    const AddonCheckOnChange = (e) => CalcAddon()
    const ElixirCheckOnChange = (e) => CalcElixir()
    const AccessoryCheckOnChange = (e) => CalcAccessory()
    document.getElementById("FrCheck").addEventListener('change', EnchCheckOnChange);
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
    document.getElementById("NecklaceOfHeartCheck").addEventListener('change', AccessoryCheckOnChange);
    document.getElementById("TheBlindValorCheck").addEventListener('change', AccessoryCheckOnChange);
    document.getElementById("NyrsTearCheck").addEventListener('change', AccessoryCheckOnChange);
    document.getElementById("TheLuckyStarCheck").addEventListener('change', AccessoryCheckOnChange);
    document.getElementById("SymbolOfWealthCheck").addEventListener('change', AccessoryCheckOnChange);
    document.getElementById("RingOfNightroseCheck").addEventListener('change', AccessoryCheckOnChange);
    document.getElementById("RedNovaCheck").addEventListener('change', AccessoryCheckOnChange);
    document.getElementById("RingOfSacramentoCheck").addEventListener('change', AccessoryCheckOnChange);
    document.getElementById("NecklaceOfEffortCheck").addEventListener('change', AccessoryCheckOnChange);
    document.getElementById("LifelinkBraceletCheck").addEventListener('change', AccessoryCheckOnChange);
    document.getElementById("GoldenDreamCheck").addEventListener('change', AccessoryCheckOnChange);
    document.getElementById("RingOfLifeTreeCheck").addEventListener('change', AccessoryCheckOnChange);

    fetchAll([_pathAr, _pathArp, _pathSmg, _pathSmgp, _pathLmg, _pathLmgp, _pathSr, _pathSrp, _pathCar, _pathCarp, _pathExpl, _pathExplp, _pathSec, _pathSecp, _pathMelee, _pathMeleep]).then((res) => {
        [_objAr, _objArp, _objSmg, _objSmgp, _objLmg, _objLmgp, _objSr, _objSrp, _objCar, _objCarp, _objExpl, _objExplp, _objSec, _objSecp, _objMelee, _objMeleep] = res
    })
    document.getElementById("TypeForm").onchange = () => render();
    document.getElementById("WeaponForm").onchange = () => render();
    document.getElementById("ModForm").onchange = () => render();
    document.getElementById("EnchantForm").onchange = () => {
        CalcEnch();
        CalcElixir();
    };
    document.getElementById("OeForm").onchange = () => {
        CalcEnch();
        CalcElixir();
    };
    document.getElementById("AncientEnchantForm").onchange = () => render();
    document.getElementById("AddonForm").onchange = () => CalcAddon();
    document.getElementById("ArmorForm").onchange = () => CalcArmor();
    document.getElementById("ElixirForm").onchange = () => {
        CalcEnch();
        CalcElixir();
    };
    document.getElementById("Accy1Form").onchange = () => {
        CalcEnch();
        CalcElixir();
        CalcAccessory();
    };
    document.getElementById("Accy2Form").onchange = () => {
        CalcEnch();
        CalcElixir();
        CalcAccessory();
    };
    document.getElementById("Accy3Form").onchange = () => {
        CalcEnch();
        CalcElixir();
        CalcAccessory();
    };
    myManaElem.addEventListener('input', myManaOnChange);
    enemyManaElem.addEventListener('input', enemyManaOnChange);
    setMyManaValue(myManaElem.value);
    setEnemyManaValue(enemyManaElem.value);
});