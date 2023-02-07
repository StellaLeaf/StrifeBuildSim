//Result[0Av,1AvHs,2Hi,3HiHs,4Cap,5Relo,6Rate,7Dps,8Sprd,9Ads,10Wt,11Dura,12CrAv,13CrHi,14C10m,15CMax]
let Result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// //Weapon[0Dmg,1HsB,2Cap,3Relo,4RlSt,5Rate,6Plet,7Sprd,8Ads,9Wt]
let Weapon = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//Mod[0Dmg,1HsB,2Cap,3Relo,4Rate,5Sprd,6MoWt]
let Mod = [0, 0, 0, 0, 0, 0, 0, 0];
//Ench[0Av,1Hi,2OeAv,3OeHi]
let Ench = [0, 0, 0, 0];
//AE[0Av,1Hi]
let Ae = [0, 0];
//Addon[0Av,1Hi,2Cap,3Relo,4Wt]
let Addon = [0, 0, 0, 0, 0]
//Enchデータ
const SfAverageDmg = [2.01, 2.16, 2, 31]
const SfHighestDmg = 3
const DpAverageDmg = [1.4, 1.6, 1.8]
const DpHighestDmg = 4;
const SlAverageDmg = [0.8, 1.0, 1.2]
const SlHighestDmg = 2;
//AEデータ
const BcDmg = 7;
const EoDmg = 6;
const McDmg = 1;
const CfDmg = 4;
const SdAverageDmg = 1;
const SdHighestDmg = 20;
//Addonデータ
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