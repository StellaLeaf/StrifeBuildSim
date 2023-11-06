document.addEventListener("DOMContentLoaded", () => {
    var tableElem = document.getElementById('EffectTable');
    let enchAveDmg   = 0;
    let enchMaxDmg   = 0;
    let enchCoolDown = 0;
    let enchAveDef   = 0;
    let enchMaxDef   = 0;
    let enchMana     = 0;
    let enchDodge    = 0;

    let oeAveDmg   = 0;
    let oeMaxDmg   = 0;
    let oeCoolDown = 0;
    let oeAveDef   = 0;
    let oeMaxDef   = 0;
    let oeMana     = 0;
    let oeDodge    = 0;

    let aeAveDmg   = 0;
    let aeMaxDmg   = 0;
    let aeDodge    = 0;
    let aeEodHsDmg = 0;

    let addonAveDmg    = 0;
    let addonMaxDmg    = 0;
    let addonCapa      = 0;
    let addonRelDura   = 0;
    let addonWt        = 0;
    let addonSsaDmgMag = 1;

    let armorHp   = 0;
    let armorAtk  = 0;
    let armorDef  = 0;
    let armorCc   = 0;
    let armorMana = 0;
    
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
        const TypeKey = document.getElementById("TypeForm").TypeSelect.value
        const WeaponKey = document.getElementById("WeaponForm").WeaponSelect.value
        const ModKey = document.getElementById("ModForm").ModSelect.value
        let addonName = document.getElementById("AddonForm").AddonSelect.value
        let enchName = document.getElementById("EnchantForm").EnchantSelect.value
        let oeName = document.getElementById("OeForm").OeSelect.value
        const BsToggle = document.getElementById("BsCheck");
        const MsToggle = document.getElementById("MsCheck");
        const jsondata =
        (  TypeKey   === "none")         ? "none"
        : (TypeKey   === "AssaultRifle") ? _objAr
        : (TypeKey   === "SMG")          ? _objSmg
        : (TypeKey   === "Shotgun")      ? _objSmg
        : (TypeKey   === "LMG")          ? _objLmg
        : (TypeKey   === "SniperRifle")  ? _objSr
        : (TypeKey   === "Carbine")      ? _objCar
        : (TypeKey   === "Special")      ? _objExpl
        : (TypeKey   === "Staves")       ? _objExpl
        : (TypeKey   === "Secondary")    ? _objSec
        : (TypeKey   === "Melee")        ? _objMelee
        : "none";
    const jsondata2 = 
        (  TypeKey   === "none")         ? "none"
        : (WeaponKey === "graveless")    ? _objArp
        : (WeaponKey === "Helheim")      ? _objArp
        : (WeaponKey === "horizon")      ? _objArp
        : (WeaponKey === "thirdeye")     ? _objArp
        : (WeaponKey === 'Coldfang')     ? _objArp
        : (WeaponKey === 'minigun')      ? _objLmgp
        : (WeaponKey === 'awr')          ? _objLmgp
        : (TypeKey   === "AssaultRifle") ? _objArp
        : (TypeKey   === "SMG")          ? _objSmgp
        : (TypeKey   === "Shotgun")      ? _objSmgp
        : (TypeKey   === "LMG")          ? _objLmgp
        : (TypeKey   === "SniperRifle")  ? _objSrp
        : (TypeKey   === "Carbine")      ? _objCarp
        : (TypeKey   === "Special")      ? _objExplp
        : (TypeKey   === "Staves")       ? _objExplp
        : (TypeKey   === "Secondary")    ? _objSecp
        : (TypeKey   === "Melee")        ? _objMeleep
        : "none";
        if(TypeKey == "SMG") {BsLabel.style.display = "inline-block";}
        else {BsLabel.style.display = 'none';
            BsToggle.checked = false;};
        if (TypeKey == "LMG") {MsLabel.style.display = "inline-block";}
        else {MsLabel.style.display = 'none';
            MsToggle.checked = false};
        const bsDodge = (BsToggle.checked) ? 0.25 : 0
        const msDef   = (MsToggle.checked) ? 3    : 0
        let weaponDmg = 0;  
        let weaponHsBonus = 0;        
        let weaponCapa = 0; 
        let weaponRelDura = 0;
        let weaponRelStyle = 0;  
        let weaponRateKey = 0;      
        let weaponPellets = 0;   
        let weaponSprd = 0;       
        let weaponAdsSprd = 0;       
        let weaponCc = 0;      
        let weaponCd = 0;        
        let weaponAtt10m = 0;    
        let weaponAttMax = 0;    
        let weaponWt = 0;        
        let weaponExplDmg = 0;       
        let weaponExplRadius = 0;
        if (!(WeaponKey === "none" || jsondata == 'none')) {
            //リロード配列の処理
            if (typeof jsondata[WeaponKey]["Reload"] === 'undefined') {
                weaponRelStyle = 0
                weaponCapa = 0
                weaponRelDura = 0
            } else {
                if (typeof jsondata[WeaponKey]["Reload"]["Reload_Bullets_Individually"] === 'undefined') {
                    weaponRelStyle = 0
                    document.getElementById("DisplayReloadStyle").textContent = null
                } else if (jsondata[WeaponKey]["Reload"]["Reload_Bullets_Individually"] === true) {
                    weaponRelStyle = 1
                    document.getElementById("DisplayReloadStyle").textContent = ("/発")
                } else {
                    weaponRelStyle = 0
                    document.getElementById("DisplayReloadStyle").textContent = null
                }
                weaponCapa = jsondata[WeaponKey]["Reload"]["Reload_Amount"]
                weaponRelDura = jsondata[WeaponKey]["Reload"]["Reload_Duration"]
            };
            //セミ・バーストの処理
            const notFullauto = () => {
                if (typeof jsondata[WeaponKey]["Burstfire"] === 'undefined') {
                    weaponRateKey = 20 / jsondata[WeaponKey]["Shooting"]["Delay_Between_Shots"]
                } else if (jsondata[WeaponKey]["Burstfire"]["Enable"] === true) {
                    weaponRateKey = (20 / jsondata[WeaponKey]["Shooting"]["Delay_Between_Shots"]) * jsondata[WeaponKey]["Burstfire"]["Shots_Per_Burst"]
                } else {
                    weaponRateKey = 20 / jsondata[WeaponKey]["Shooting"]["Delay_Between_Shots"]
                }
            }
            //フルオートとか
            if (typeof jsondata[WeaponKey]["Fully_Automatic"] === "undefined") {
                notFullauto()
            } else if (jsondata[WeaponKey]["Fully_Automatic"]["Enable"] === true) {
                weaponRateKey = jsondata[WeaponKey]["Fully_Automatic"]["Fire_Rate"] + 4
            } else {
                notFullauto()
            }
            if (typeof jsondata[WeaponKey]["Sneak"] === "undefined") {
                weaponAdsSprd = 0
            } else if (jsondata[WeaponKey]["Sneak"]["Enable"] === true) {
                weaponAdsSprd = jsondata[WeaponKey]["Sneak"]["Zoom_Bullet_Spread"]
            } else {
                weaponAdsSprd = 0
            }
            //Crit
            if (typeof jsondata[WeaponKey]["Critical_Hits"] === "undefined") {
                weaponCc = 0
                weaponCd = 0
            } else if (jsondata[WeaponKey]["Critical_Hits"]["Enable"] === true) {
                weaponCc = jsondata[WeaponKey]["Critical_Hits"]["Chance"] / 100
                weaponCd = jsondata[WeaponKey]["Critical_Hits"]["Bonus_Damage"]
            } else {
                weaponCc = 0
                weaponCd = 0
            }
            //ExplDmg
            if (typeof jsondata[WeaponKey]["Explosions"] === "undefined") {
                weaponExplDmg = 0
                weaponExplRadius = 0
            } else if (jsondata[WeaponKey]["Explosions"]["Enable"] === true) {
                weaponExplDmg = jsondata[WeaponKey]["Explosions"]["Damage_Multiplier"]
                weaponExplRadius = jsondata[WeaponKey]["Explosions"]["Explosion_Radius"]
            } else {
                weaponExplDmg = 0
                weaponExplRadius = 0
            };
            if (typeof jsondata[WeaponKey]["Damage_Based_On_Flight_Time"] === "undefined") {
                weaponAtt10m = 0
                weaponAttMax = 0
            } else if (jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Enable"] === true) {
                if (jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Maximum_Damage"] > 0 && jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Bonus_Damage_Per_Tick"] > 0) {
                    weaponAtt10m = (jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Bonus_Damage_Per_Tick"] / (jsondata[WeaponKey]["Shooting"]["Projectile_Speed"] / 10)) * 10
                    weaponAttMax = jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Maximum_Damage"]
                } else if (jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Maximum_Damage"] < 0 && jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Bonus_Damage_Per_Tick"] < 0) {
                    weaponAtt10m = (jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Bonus_Damage_Per_Tick"] / (jsondata[WeaponKey]["Shooting"]["Projectile_Speed"] / 10)) * 10
                    weaponAttMax = jsondata[WeaponKey]["Damage_Based_On_Flight_Time"]["Maximum_Damage"]
                } else {
                    weaponAtt10m = 0
                    weaponAttMax = 0
                }
            } else {
                weaponAtt10m = 0
                weaponAttMax = 0
            }
            weaponHsBonus = typeof jsondata[WeaponKey]["Headshot"] === 'undefined'                      ? 0 : jsondata[WeaponKey]["Headshot"]["Bonus_Damage"]
            weaponDmg     = typeof jsondata[WeaponKey]["Shooting"]["Projectile_Damage"] === 'undefined' ? 0 : jsondata[WeaponKey]["Shooting"]["Projectile_Damage"]
            weaponSprd    = typeof jsondata[WeaponKey]["Shooting"]["Bullet_Spread"] === 'undefined'     ? 0 : jsondata[WeaponKey]["Shooting"]["Bullet_Spread"]
            weaponPellets = jsondata[WeaponKey]["Shooting"]["Projectile_Amount"]
            weaponWt      = jsondata2[WeaponKey]["itemHoldEffects"]["GunWeight"]
        };
        let modCapa = 0
        let modRelDura = 0
        let modWt = 0
        let modHsBonus = 0
        let modRate = 0
        let modSprd = 0
        let modDmg = 0
        let limModCapa = 0;
        let limModHsBonus = 0;
        let limModWt = 0;
        if (!(ModKey === "none" || WeaponKey === "none" || jsondata2 == 'none')) {
            let cspAry = null
            if (ModKey === "Sunfire Ⅲ"){modDmg = 3 * 0.77};
            for (const i in jsondata2[WeaponKey]["Attachments"]["AttachmentsAffect"]) {
                cspAry = jsondata2[WeaponKey]["Attachments"]["AttachmentsAffect"][i].split(":")
                if (cspAry[1] === ModKey && cspAry[0] === "CAPACITY")   {modCapa    = Number(cspAry[2])};
                if (cspAry[1] === ModKey && cspAry[0] === "RELOAD")     {modRelDura = Number(cspAry[2])};
                if (cspAry[1] === ModKey && cspAry[0] === "GUNWEIGHT")  {modWt      = Number(cspAry[2])};
                if (cspAry[1] === ModKey && cspAry[0] === "HEADSHOT")   {modHsBonus = Number(cspAry[2])};
                if (cspAry[1] === ModKey && cspAry[0] === "FIRERATE")   {modRate    = Number(cspAry[2])};
                if (cspAry[1] === ModKey && cspAry[0] === "PRESHOOT")   {modSprd    = Number(cspAry[2])};
                if (cspAry[1] === ModKey && cspAry[0] === "DAMAGE")     {modDmg     = Number(cspAry[2])};
            };
        };
        if (!(WeaponKey === "none" || jsondata2 == 'none')){
            if (enchName === "KnightMod"){
                let limCspAry = null
                for (const i in jsondata2[WeaponKey]["Attachments"]["AttachmentsAffect"]) {
                    limCspAry = jsondata2[WeaponKey]["Attachments"]["AttachmentsAffect"][i].split(":")
                    if (limCspAry[1] === "Knight Mod" && limCspAry[0] === "CAPACITY")  {limModCapa = Number(limCspAry[2])};
                };
            };
            if (oeName === "ChampionMod"){
                let limCspAry = null
                for (const i in jsondata2[WeaponKey]["Attachments"]["AttachmentsAffect"]) {
                    limCspAry = jsondata2[WeaponKey]["Attachments"]["AttachmentsAffect"][i].split(":")
                    if (limCspAry[1] === "Champion Mod" && limCspAry[0] === "GUNWEIGHT")  {limModWt = Number(limCspAry[2])};
                };
            };
            if (addonName === "EmperorMod"){
                let limCspAry = null
                for (const i in jsondata2[WeaponKey]["Attachments"]["AttachmentsAffect"]) {
                    limCspAry = jsondata2[WeaponKey]["Attachments"]["AttachmentsAffect"][i].split(":")
                    if (limCspAry[1] === "Emperor Mod" && limCspAry[0] === "CAPACITY")   {limModCapa    += Number(limCspAry[2])};
                    if (limCspAry[1] === "Emperor Mod" && limCspAry[0] === "GUNWEIGHT")  {limModWt      += Number(limCspAry[2])};
                    if (limCspAry[1] === "Emperor Mod" && limCspAry[0] === "HEADSHOT")   {limModHsBonus += Number(limCspAry[2])};
                };
            };
        };
        const weaponAveCrit = (weaponCc * weaponCd)
        if ( weaponRateKey === Infinity ) { weaponRateKey = 20; };
        const resultRate = Math.round((weaponRateKey + modRate) * Math.pow(10, 2)) / Math.pow(10, 2);
        const enchActiveRate = (resultRate === 0 || enchCoolDown === 0)
            ? 1 
            : 1 / (Math.ceil(enchCoolDown * resultRate));
        const oeActiveRate = (resultRate === 0 || oeCoolDown === 0)
            ? 1 
            : 1 / (Math.ceil(oeCoolDown * resultRate));
        const enchNwCheck  = document.getElementById("EnchantForm").EnchantSelect.value;
        const oeNwCheck    = document.getElementById("OeForm").OeSelect.value;
        const Accy1NwCheck = document.getElementById("Accy1Form").Accessory1Select.value;
        const Accy2NwCheck = document.getElementById("Accy2Form").Accessory2Select.value;
        const Accy3NwCheck = document.getElementById("Accy3Form").Accessory3Select.value;
        const icyNwDmg = (enchNwCheck === "NorthernWind" || oeNwCheck === "NorthernWind") ? 10 : 5;
        const icyAveDmgAccy1 = (Accy1NwCheck === "NecklaceOfIcyMoon")
            ? (resultRate === 0) 
                ? icyNwDmg * 0.55 
                : icyNwDmg * 0.55 * 1 / (Math.ceil(0.1 * resultRate))
            : 0
        const icyAveDmgAccy2 = (Accy2NwCheck === "NecklaceOfIcyMoon")
            ? (resultRate === 0) 
                ? icyNwDmg * 0.55 
                : icyNwDmg * 0.55 * 1 / (Math.ceil(0.1 * resultRate))
            : 0
        const icyAveDmgAccy3 = (Accy3NwCheck === "NecklaceOfIcyMoon")
            ? (resultRate === 0) 
                ? icyNwDmg * 0.55 
                : icyNwDmg * 0.55 * 1 / (Math.ceil(0.1 * resultRate))
            : 0
        const icyMaxDmgAccy1 = (Accy1NwCheck === "NecklaceOfIcyMoon") ? icyNwDmg : 0;
        const icyMaxDmgAccy2 = (Accy2NwCheck === "NecklaceOfIcyMoon") ? icyNwDmg : 0;
        const icyMaxDmgAccy3 = (Accy3NwCheck === "NecklaceOfIcyMoon") ? icyNwDmg : 0;
        const icyAveDmg = icyAveDmgAccy1 + icyAveDmgAccy2 + icyAveDmgAccy3;
        const icyMaxDmg = icyMaxDmgAccy1 + icyMaxDmgAccy2 + icyMaxDmgAccy3;
        CalcAE(weaponDmg + modDmg, weaponDmg + weaponHsBonus + modDmg + modHsBonus + limModHsBonus);
        const resultAveCritProb = Accessory[9] * ((Accessory[8] + armorCc) / 100) / 100 + 1;
        const resultMaxCritProb = Accessory[9] / 100 + 1;
        const resultAtt10m      = Math.round(weaponAtt10m * Math.pow(10, 2)) / Math.pow(10, 2)
        const resultAttMax      = Math.round(weaponAttMax * Math.pow(10, 2)) / Math.pow(10, 2)
        const resultAveDmg      = Math.round(((weaponDmg + modDmg + enchAveDmg * enchActiveRate + oeAveDmg * oeActiveRate + aeAveDmg + addonAveDmg + armorAtk + Elixir[0] + Accessory[1] + weaponAveCrit + icyAveDmg) * addonSsaDmgMag * resultAveCritProb) * Math.pow(10, 1)) / Math.pow(10, 1)
        const resultAveHsDmg    = Math.round(((weaponDmg + modDmg + enchAveDmg * enchActiveRate + oeAveDmg * oeActiveRate + aeAveDmg + addonAveDmg + armorAtk + Elixir[0] + Accessory[1] + weaponAveCrit + icyAveDmg + weaponHsBonus + modHsBonus + limModHsBonus + aeEodHsDmg) * addonSsaDmgMag * resultAveCritProb) * Math.pow(10, 1)) / Math.pow(10, 1)
        const resultMaxDmg      = Math.round(((weaponDmg + modDmg + enchMaxDmg + oeMaxDmg + aeMaxDmg + addonMaxDmg + armorAtk + Elixir[1] + Accessory[1] + weaponCd + icyMaxDmg) * addonSsaDmgMag * resultMaxCritProb) * Math.pow(10, 1)) / Math.pow(10, 1)
        const resultMaxHsDmg    = Math.round(((weaponDmg + modDmg + enchMaxDmg + oeMaxDmg + aeMaxDmg + addonMaxDmg + armorAtk + Elixir[1] + Accessory[1] + weaponCd + icyMaxDmg + weaponHsBonus + modHsBonus + limModHsBonus + aeEodHsDmg) * addonSsaDmgMag * resultMaxCritProb) * Math.pow(10, 1)) / Math.pow(10, 1)
        const resultCapa        = weaponCapa + modCapa + limModCapa + addonCapa
        const resultRelDura     = weaponRelDura + modRelDura + addonRelDura
        const resultDps         = Math.round((resultAveDmg * resultRate) * Math.pow(10, 1)) / Math.pow(10, 1)
        const resultSprd        = Math.round(Math.abs(weaponSprd - modSprd) * Math.pow(10, 2)) / Math.pow(10, 2)
        const resultAdsSprd     = Math.round(Math.abs(weaponAdsSprd - modSprd) * Math.pow(10, 2)) / Math.pow(10, 2)
        const resultWt          = Math.round(((0.2 + weaponWt + modWt + limModWt + addonWt + Elixir[2]) / 0.2) * Math.pow(10, 2)) / Math.pow(10, 2)
        const resultDura        = Math.round((resultCapa / resultRate) * Math.pow(10, 1)) / Math.pow(10, 1)
        const resultAddAveDmg   = Math.round(((modDmg + enchAveDmg * EnchActive[0] + oeAveDmg * oeActiveRate + aeAveDmg + addonAveDmg + weaponAveCrit) * addonSsaDmgMag) * Math.pow(10, 1)) / Math.pow(10, 1)
        const resultAddMaxDmg   = Math.round(((modDmg + enchMaxDmg + oeMaxDmg + aeMaxDmg + addonMaxDmg + weaponCd) * addonSsaDmgMag) * Math.pow(10, 1)) / Math.pow(10, 1)
        const resultAveDef      = Math.round((enchAveDef + oeAveDef + armorDef + msDef + Accessory[2]) * Math.pow(10, 1)) / Math.pow(10, 1)
        const resultMaxDef      = Math.round((enchMaxDef + oeMaxDef + armorDef + msDef + Accessory[2]) * Math.pow(10, 1)) / Math.pow(10, 1)
        const resultMana        = Math.round((2 + enchMana + oeMana + armorMana + Accessory[5]) * Math.pow(10, 1)) / Math.pow(10, 1)
        const resultDodge       = Math.round(((enchDodge + oeDodge + aeDodge + bsDodge + Elixir[4] + Accessory[6]) * 100) * Math.pow(10, 1)) / Math.pow(10, 1)
        const resultHp          = Math.round(20 + armorHp + Elixir[3] + Accessory[4]);
        const resultAveAtk      = Math.round(armorAtk + Elixir[0] + Accessory[1]);
        const resultMaxAtk      = Math.round(armorAtk + Elixir[1] + Accessory[1]);
        const resultPene        = Accessory[10]
        const resultShotDefProb = Accessory[3]
        const resultExplDefProb = Accessory[12]
        const resultAcc         = Accessory[11]
        const resultPfctDodge   = Accessory[7]
        const resultCc          = Accessory[8] + armorCc
        const resultCd          = Accessory[9]
        //0Lev 1Atk 2DefDmg 3ShotDefProb 4HP 5Mana 6Dodge 7PDodge 8CC 9CD 10pene 11Acc 12ExplDefProb
        //Result 0AveDmg 1AveHsDmg 2HiDmg 3HiHsDmg 4Capacity 5Reload 6Rate 7Dps 8Sprd 9Ads 10Wt
        //11Duration 12WpnCC 13WpnCD 14C10m 15Cmax 16ExplDmg 17ExplRadius 18AddAveDmg 19addHiDmg20AveDef 21HiDef
        //22Mana 23Dodge 24Hp 25AveAtk 26HiAtk 27pene 28ShotDefProb 29ExplDefProb 30Acc 31PDodge 32CC 33CD
        //DesktopDisplay
        document.getElementById("DisplayRate").textContent = (resultRate)
        document.getElementById("DisplayCapacity").textContent = (resultCapa)
        document.getElementById("DisplayReload").textContent = (resultRelDura)
        document.getElementById("DisplaySpread").textContent = (resultSprd)
        document.getElementById("DisplayAdsSpread").textContent = (resultAdsSprd)
        document.getElementById("DisplayChangeDmg10m").textContent = (resultAtt10m)
        document.getElementById("DisplayChangeDmgMax").textContent = (resultAttMax)
        document.getElementById("DisplayWeight").textContent = (resultWt)
        document.getElementById("DisplayAveDef").textContent = (resultAveDef)
        document.getElementById("DisplayHiDef").textContent = (resultMaxDef)
        document.getElementById("DisplayMana").textContent = (resultMana)
        document.getElementById("DisplayHp").textContent = (resultHp)
        document.getElementById("DisplayAveAtk").textContent = (resultAveAtk)
        document.getElementById("DisplayHiAtk").textContent = (resultMaxAtk)
        document.getElementById("DisplayPene").textContent = (resultPene)
        document.getElementById("DisplayShotDefProb").textContent = (resultShotDefProb)
        document.getElementById("DisplayExplDefProb").textContent = (resultExplDefProb)
        document.getElementById("DisplayAcc").textContent = (resultAcc)
        document.getElementById("DisplayPerfectDodge").textContent = (resultPfctDodge)
        document.getElementById("DisplayCritChance").textContent = (resultCc)
        document.getElementById("DisplayCritDmg").textContent = (resultCd)
        //MobileDisplay
        document.getElementById("MobileDisplayRate").textContent = (resultRate)
        document.getElementById("MobileDisplayCapacity").textContent = (resultCapa)
        document.getElementById("MobileDisplayReload").textContent = (resultRelDura)
        document.getElementById("MobileDisplaySpread").textContent = (resultSprd)
        document.getElementById("MobileDisplayAdsSpread").textContent = (resultAdsSprd)
        document.getElementById("MobileDisplayChangeDmg10m").textContent = (resultAtt10m)
        document.getElementById("MobileDisplayChangeDmgMax").textContent = (resultAttMax)
        document.getElementById("MobileDisplayWeight").textContent = (resultWt)
        document.getElementById("MobileDisplayAveDef").textContent = (resultAveDef)
        document.getElementById("MobileDisplayHiDef").textContent = (resultMaxDef)
        document.getElementById("MobileDisplayMana").textContent = (resultMana)
        document.getElementById("MobileDisplayHp").textContent = (resultHp)
        document.getElementById("MobileDisplayAveAtk").textContent = (resultAveAtk)
        document.getElementById("MobileDisplayHiAtk").textContent = (resultMaxAtk)
        document.getElementById("MobileDisplayPene").textContent = (resultPene)
        document.getElementById("MobileDisplayShotDefProb").textContent = (resultShotDefProb)
        document.getElementById("MobileDisplayExplDefProb").textContent = (resultExplDefProb)
        document.getElementById("MobileDisplayAcc").textContent = (resultAcc)
        document.getElementById("MobileDisplayPerfectDodge").textContent = (resultPfctDodge)
        document.getElementById("MobileDisplayCritChance").textContent = (resultCc)
        document.getElementById("MobileDisplayCritDmg").textContent = (resultCd)
        //if系
        document.getElementById("DisplayDuration").textContent = resultDura > 0 ? resultDura : 0
        document.getElementById("MobileDisplayDuration").textContent = resultDura > 0 ? resultDura : 0
        if (weaponExplDmg > 0) {
            document.getElementById("DisplayChangeDmgStyle").textContent = ('爆発dmg')
            document.getElementById("MobileDisplayChangeDmgStyle").textContent = ('爆発dmg')
            document.getElementById("DisplayChangeMaxStyle").textContent = ('爆発半径')
            document.getElementById("MobileDisplayChangeMaxStyle").textContent = ('爆発半径')
            document.getElementById("DisplayChangeDmg10m").textContent = (weaponExplDmg + '%')
            document.getElementById("MobileDisplayChangeDmg10m").textContent = (weaponExplDmg + '%')
            document.getElementById("DisplayChangeDmgMax").textContent = (weaponExplRadius)
            document.getElementById("MobileDisplayChangeDmgMax").textContent = (weaponExplRadius)
            document.getElementById("DisplayAddDmg").textContent = ("+" + resultAddAveDmg + "(" + resultAddMaxDmg + ")")
            document.getElementById("MobileDisplayAddDmg").textContent = ("+" + resultAddAveDmg + "(" + resultAddMaxDmg + ")")
        } else if (resultAtt10m > 0) {
            document.getElementById("DisplayChangeDmgStyle").textContent = ('10m増幅')
            document.getElementById("MobileDisplayChangeDmgStyle").textContent = ('10m増幅')
            document.getElementById("DisplayChangeMaxStyle").textContent = ('最大増幅量')
            document.getElementById("MobileDisplayChangeMaxStyle").textContent = ('最大増幅量')
            document.getElementById("DisplayChangeDmg10m").textContent = (resultAtt10m)
            document.getElementById("DisplayChangeDmgMax").textContent = (resultAttMax)
            document.getElementById("MobileDisplayChangeDmg10m").textContent = (resultAtt10m)
            document.getElementById("MobileDisplayChangeDmgMax").textContent = (resultAttMax)
            document.getElementById("DisplayAddDmg").textContent = null
            document.getElementById("MobileDisplayAddDmg").textContent = null
        } else {
            document.getElementById("DisplayChangeDmgStyle").textContent = ('10m減衰')
            document.getElementById("MobileDisplayChangeDmgStyle").textContent = ('10m減衰')
            document.getElementById("DisplayChangeMaxStyle").textContent = ('最大減衰量')
            document.getElementById("MobileDisplayChangeMaxStyle").textContent = ('最大減衰量')
            document.getElementById("DisplayChangeDmg10m").textContent = (resultAtt10m)
            document.getElementById("DisplayChangeDmgMax").textContent = (resultAttMax)
            document.getElementById("MobileDisplayChangeDmg10m").textContent = (resultAtt10m)
            document.getElementById("MobileDisplayChangeDmgMax").textContent = (resultAttMax)
            document.getElementById("DisplayAddDmg").textContent = null
            document.getElementById("MobileDisplayAddDmg").textContent = null
        };
        document.getElementById("DisplayPellets").textContent = weaponPellets > 1 ? "x" + weaponPellets : null;
        document.getElementById("MobileDisplayPellets").textContent = weaponPellets > 1 ? "x" + weaponPellets : null;
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
                document.getElementById("DisplayAverageDmg").textContent = (resultAveDmg)
                document.getElementById("DisplayAverageHsDmg").textContent = (resultAveHsDmg)
                document.getElementById("DisplayHighestDmg").textContent = (resultMaxDmg)
                document.getElementById("DisplayHighestHsDmg").textContent = (resultMaxHsDmg)
                document.getElementById("DisplayDps").textContent = (resultDps)
                document.getElementById("MobileDisplayAverageDmg").textContent = (resultAveDmg)
                document.getElementById("MobileDisplayAverageHsDmg").textContent = (resultAveHsDmg)
                document.getElementById("MobileDisplayHighestDmg").textContent = (resultMaxDmg)
                document.getElementById("MobileDisplayHighestHsDmg").textContent = (resultMaxHsDmg)
                document.getElementById("MobileDisplayDps").textContent = (resultDps)
            };
        } else {
            document.getElementById("DisplayAverageDmg").textContent = (resultAveDmg)
            document.getElementById("DisplayAverageHsDmg").textContent = (resultAveHsDmg)
            document.getElementById("DisplayHighestDmg").textContent = (resultMaxDmg)
            document.getElementById("DisplayHighestHsDmg").textContent = (resultMaxHsDmg)
            document.getElementById("DisplayDps").textContent = (resultDps)
            document.getElementById("MobileDisplayAverageDmg").textContent = (resultAveDmg)
            document.getElementById("MobileDisplayAverageHsDmg").textContent = (resultAveHsDmg)
            document.getElementById("MobileDisplayHighestDmg").textContent = (resultMaxDmg)
            document.getElementById("MobileDisplayHighestHsDmg").textContent = (resultMaxHsDmg)
            document.getElementById("MobileDisplayDps").textContent = (resultDps)
        }
        document.getElementById("DisplayDodge").textContent       = resultDodge <= 60 ? resultDodge : 60;
        document.getElementById("MobileDisplayDodge").textContent = resultDodge <= 60 ? resultDodge : 60;
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
        const enchLevelsCalc = (name, lv) => {
            const enchAssg = (i) => {
                enchAveDmg   = name[0] * name[1 + i];
                enchMaxDmg   = name[0];
                enchCoolDown = name[4];
                enchAveDef   = name[5 + i] * name[8 + i];
                enchMaxDef   = name[5 + i];
                enchMana     = name[11 + i];
                enchDodge    = name[14 + i];
            };
            if      (lv == "EnchLev1") {enchAssg(0)}
            else if (lv == "EnchLev2") {enchAssg(1)}
            else if (lv == "EnchLev3") {enchAssg(2)};
        };
        const oeLevelsCalc = (name, lv) => {
            const oeAssg = (i) => {
                oeAveDmg   = name[0] * name[1 + i];
                oeMaxDmg   = name[0];
                oeCoolDown = name[4];
                oeAveDef   = name[5 + i] * name[8 + i];
                oeMaxDef   = name[5 + i];
                oeMana     = name[11 + i];
                oeDodge    = name[14 + i];
            };
            if      (lv == "EnchLev1") {oeAssg(0)}
            else if (lv == "EnchLev2") {oeAssg(1)}
            else if (lv == "EnchLev3") {oeAssg(2)};
        };
        enchLevelsCalc(enchKeys[enchName], EnchLv)
        oeLevelsCalc(enchKeys[oeName],OeLv)
        console.log(enchAveDmg)
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
        aeAveDmg = aeKeys[aeName][0]
        aeMaxDmg = aeKeys[aeName][1]
        aeDodge = aeKeys[aeName][2]
        aeEodHsDmg = (aeName == "EchoOfDeath" && EoDHsDmg >= 50) ? EchoOfDeath[0] : 0;
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
        const addonAssg = (i) => {
            addonAveDmg    = addonKeys[addonName][i] * addonKeys[addonName][4]
            addonMaxDmg    = addonKeys[addonName][i]
            addonCapa      = addonKeys[addonName][5 + i]
            addonRelDura   = addonKeys[addonName][9 + i]
            addonWt        = addonKeys[addonName][13 + i]
            addonSsaDmgMag = addonKeys[addonName][17 + i]
        };
        if      (AddonLv == "AddonLev0") {addonAssg(0);} 
        else if (AddonLv == "AddonLev1") {addonAssg(1);}
        else if (AddonLv == "AddonLev2") {addonAssg(2);}
        else if (AddonLv == "AddonLev3") {addonAssg(3);};
        if (addonTextKeys[addonName] && AddonLv != "none") {
            if (AddonTableSwitch === 1) {
                tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch);
            };
            let TrElem = tableElem.tBodies[0].insertRow(enchTableSwitch + OeTableSwitch + AeTableSwitch);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            AddonTableSwitch = 1;
            NameElem.appendChild(document.createTextNode(addonTextKeys[addonName][0]));
            ProbElem.appendChild(document.createTextNode(addonTextKeys[addonName][addonTextLvKeys[AddonLv]]));
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
        let ArmorFullSet = [0, 0, 0, 0, 0, 0, 0, 0]
        if (ChestName === HandName && ChestName === BootsName) {ArmorFullSet = SetKeys[ChestName]};
        armorHp = ChestKeys[ChestName][0] + HandKeys[HandName][0] + BootsKeys[BootsName][0] + ArmorFullSet[0];
        armorAtk = ChestKeys[ChestName][1] + HandKeys[HandName][1] + BootsKeys[BootsName][1] + ArmorFullSet[1];
        armorDef = ChestKeys[ChestName][2] + HandKeys[HandName][2] + BootsKeys[BootsName][2] + ArmorFullSet[2];
        armorCc = ChestKeys[ChestName][3] + HandKeys[HandName][3] + BootsKeys[BootsName][3] + ArmorFullSet[3];
        armorMana = ChestKeys[ChestName][4] + HandKeys[HandName][4] + BootsKeys[BootsName][4] + ArmorFullSet[4];
        function ArmorEffectFunc0 (ArmorTextKey) {
            if (ArmorTableSwitch[0] === 1) {
                tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch);
            };
            let TrElem = tableElem.tBodies[0].insertRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            ArmorTableSwitch[0] = 1;
            NameElem.appendChild(document.createTextNode(ArmorTextKey[0]));
            ProbElem.appendChild(document.createTextNode(ArmorTextKey[1]));
        };
        function ArmorEffectFunc1 (ArmorTextKey) {
            if (ArmorTableSwitch[1] === 1) {
                tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0]);
            };
            let TrElem = tableElem.tBodies[0].insertRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0]);
            let NameElem = TrElem.insertCell(0);
            let ProbElem = TrElem.insertCell(1);
            ArmorTableSwitch[1] = 1;
            NameElem.appendChild(document.createTextNode(ArmorTextKey[0]));
            ProbElem.appendChild(document.createTextNode(ArmorTextKey[1]));
        };
        if (BootsName == 'Cleric') {ArmorEffectFunc0(CBootsText)}
        else if (BootsName == 'Pilgrim') {ArmorEffectFunc0(PBootsText)}
        else if (ArmorTableSwitch[0] === 1) {
            tableElem.tBodies[0].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch);
            ArmorTableSwitch[0] = 0;
        };
        if (ChestName === "Cleric" && ChestName === HandName && ChestName === BootsName) {
            ArmorEffectFunc1(CSetText);
        } else if (ChestName === "Fort") {
            ArmorEffectFunc1(FChestText);
        } else if (ArmorTableSwitch[1] === 1) {
            tableElem.tBodies[1].deleteRow(enchTableSwitch + OeTableSwitch + AeTableSwitch + AddonTableSwitch + ArmorTableSwitch[0]);
            ArmorTableSwitch[1] = 0;
        };
        render();
    };
    const CalcElixir = () => {
        const enchName = document.getElementById("EnchantForm").EnchantSelect.value
        const oeName = document.getElementById("OeForm").OeSelect.value
        let elixirName = document.getElementById("ElixirForm").ElixirSelect.value
        const EVoidToggle = document.getElementById("EVoidCheck");
        if (elixirName == 'EVoid') {
            EVoidLabel.style.display = 'inline-block';
        } else {
            EVoidLabel.style.display = 'none';
            EVoidToggle.checked = false;
        };
        if (elixirName == 'ECombust' && enchName === "Sunfire" || oeName === "Sunfire"){
            elixirName = elixirName + "2"
        } else if (elixirName === "EVoid" && EVoidToggle.checked) {
            elixirName = elixirName + "2"
        };
        Elixir[0] = elixirKeys[elixirName][0] * elixirKeys[elixirName][1];
        Elixir[1] = elixirKeys[elixirName][0];
        Elixir[2] = elixirKeys[elixirName][2];
        Elixir[3] = elixirKeys[elixirName][3];
        Elixir[4] = elixirKeys[elixirName][4];
        if (elixirName === "EWisdom") {
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