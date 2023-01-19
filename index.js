//Result[0Av,1AvHs,2Hi,3HiHs,4Cap,5Relo,6Rate,7Dps,8Sprd,9Ads,10Wt,11Dura,12CrAv,13CrHi,14C10m,15CMax]
var Result = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//Weapon[0Dmg,1HsB,2Cap,3Relo,4RlSt,5Rate,6Plet,7Sprd,8Ads,9Wt]
var Weapon = [0,0,0,0,0,0,0,0,0,0];
//Mod[0Dmg,1HsB,2Cap,3Relo,4Rate,5Sprd,6Wt]
var Mod = [0,0,0,0,0,0,0];
//Ench[0Av,1Hi,2OeAv,3OeHi]
var Ench = [0,0,0,0];
//AE[0Av,1Hi]
var Ae = [0,0];
//Addon[0Av,1Hi,2Cap,3Relo,4Wt]
var Addon = [0,0,0,0,0]

//計算
function ResultCalc(){
  Result[0] = Math.round( (Weapon[0] + Mod[0] + Ench[0] + Ench[2] + Ae[0] + Addon[0] + Result[12]) * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
  Result[1] = Math.round( (Weapon[0] + Mod[0] + Ench[0] + Ench[2] + Ae[0] + Addon[0] + Result[12] + Weapon[1] + Mod[1]) * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
  Result[2] = Math.round( (Weapon[0] + Mod[0] + Ench[1] + Ench[3] + Ae[1] + Addon[1] + Result[13]) * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
  Result[3] = Math.round( (Weapon[0] + Mod[0] + Ench[1] + Ench[3] + Ae[1] + Addon[1] + Result[13] + Weapon[1] + Mod[1]) * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
  Result[4] = Weapon[2] + Mod[2] + Addon[2];
  Result[5] = Weapon[3] + Mod[3] + Addon[3];
  Result[6] = Weapon[5] + Mod[4];
  Result[7] = Math.round( (Result[0] * Result[6]) * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 );
  Result[8] = Math.round(Math.abs(Weapon[7] + Mod[5]) * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 );
  Result[9] = Math.round(Math.abs(Weapon[8] + Mod[5]) * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 );
  Result[10] = Math.round( ((0.2 + Weapon[9] + Mod[6] + Addon[4])/0.2) * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 ) ;
  Result[11] = Math.round((Result[4]/Result[6])*Math.pow( 10, 1 ))/Math.pow( 10, 1 );
  document.getElementById('DisplayAverageDmg').textContent = (Result[0]);
  document.getElementById('DisplayAverageHsDmg').textContent = (Result[1]);
  document.getElementById('DisplayHighestDmg').textContent = (Result[2]);
  document.getElementById('DisplayHighestHsDmg').textContent = (Result[3]);
  document.getElementById('DisplayRate').textContent = (Result[6]);
  document.getElementById('DisplayCapacity').textContent = (Result[4]);
  document.getElementById('DisplayReload').textContent = (Result[5]);
  document.getElementById('DisplaySpread').textContent = (Result[8]);
  document.getElementById('DisplayAdsSpread').textContent = (Result[9]);
  document.getElementById('DisplayDps').textContent = (Result[7]);
  document.getElementById('DisplayChangeDmg10m').textContent = (Result[14]);
  document.getElementById('DisplayChangeDmgMax').textContent = (Result[15]);
  document.getElementById('DisplayWeight').textContent = (Result[10]);
  if(Result[11] > 0){
  document.getElementById('DisplayDuration').textContent = (Result[11]);
  }else{
  document.getElementById('DisplayDuration').textContent = 0;
  };
  if(Weapon[6] > 1){
  document.getElementById('DisplayPellets').textContent = ('x'+Weapon[6])
  }else{
    document.getElementById('DisplayPellets').textContent=(null)
  };
  if(Weapon[4] != 0){
    document.getElementById('DisplayReloadStyle').textContent=('/発')
  }else{
    document.getElementById('DisplayReloadStyle').textContent=(null)
  }
};
function WeaponMod(){
  var WeaponSelect2 = document.getElementById('WeaponForm').WeaponSelect.value;
  var ModSelect2 = document.getElementById('ModForm').ModSelect.value;
  switch (WeaponSelect2) {
    case 'Serenity Auto Rifle':
      Weapon[0] = SerenityCs[0];
      Weapon[1] = SerenityCs[1];
      Weapon[2] = SerenityCs[2];
      Weapon[3] = SerenityCs[3];
      Weapon[4] = SerenityCs[4];
      Weapon[5] = SerenityCs[5];
      Weapon[6] = SerenityCs[6];
      Weapon[7] = SerenityCs[7];
      Weapon[8] = SerenityCs[8];
      Result[12] = (SerenityCs[9]*SerenityCs[10]);
      Result[13] = SerenityCs[10];
      Result[14] = SerenityCs[11];
      Result[15] = SerenityCs[12];
      Weapon[9] = SerenityCs[13];
      switch (ModSelect2){
        case 'Monarch':
          Mod[0] = SerenityCsp[0];
          Mod[1] = 0;
          Mod[2] = 0;
          Mod[3] = 0;
          Mod[4] = SerenityCsp[1];
          Mod[5] = SerenityCsp[2];
          Mod[6] = 0;
          break;
        case 'Emperor':
          Mod[1] = SerenityCsp[3];
          Mod[2] = SerenityCsp[4];
          Mod[3] = 0;
          Mod[4] = 0;
          Mod[5] = 0;
          Mod[6] = SerenityCsp[5];
          break;
        case 'Warlord':
          Mod[0] = 0;
          Mod[1] = 0;
          Mod[2] = SerenityCsp[6];
          Mod[3] = SerenityCsp[7];
          Mod[4] = 0;
          Mod[5] = 0;
          Mod[6] = 0;
          break;
      };
      break;
    case 'F44 Dominance':
      Weapon[0] = DominanceCs[0];
      Weapon[1] = DominanceCs[1];
      Weapon[2] = DominanceCs[2];
      Weapon[3] = DominanceCs[3];
      Weapon[4] = DominanceCs[4];
      Weapon[5] = DominanceCs[5];
      Weapon[6] = DominanceCs[6];
      Weapon[7] = DominanceCs[7];
      Weapon[8] = DominanceCs[8];
      Result[12] = (DominanceCs[9]*DominanceCs[10]);
      Result[13] = DominanceCs[10];
      Result[14] = DominanceCs[11];
      Result[15] = DominanceCs[12];
      Weapon[9] = DominanceCs[13];
      switch (ModSelect2){
        case 'Monarch':
          Mod[0] = DominanceCsp[0];
          Mod[1] = 0;
          Mod[2] = 0;
          Mod[3] = 0;
          Mod[4] = DominanceCsp[1];
          Mod[5] = DominanceCsp[2];
          Mod[6] = 0;
          break;
        case 'Emperor':
          Mod[1] = DominanceCsp[3];
          Mod[2] = DominanceCsp[4];
          Mod[3] = 0;
          Mod[4] = 0;
          Mod[5] = 0;
          Mod[6] = DominanceCsp[5];
          break;
        case 'Warlord':
          Mod[0] = 0;
          Mod[1] = 0;
          Mod[2] = DominanceCsp[6];
          Mod[3] = DominanceCsp[7];
          Mod[4] = 0;
          Mod[5] = 0;
          Mod[6] = 0;
          break;
      };
      break;
    case 'Warmonger':
      Weapon[0] = WarmongerCs[0];
      Weapon[1] = WarmongerCs[1];
      Weapon[2] = WarmongerCs[2];
      Weapon[3] = WarmongerCs[3];
      Weapon[4] = WarmongerCs[4];
      Weapon[5] = WarmongerCs[5];
      Weapon[6] = WarmongerCs[6];
      Weapon[7] = WarmongerCs[7];
      Weapon[8] = WarmongerCs[8];
      Result[12] = (WarmongerCs[9]*WarmongerCs[10]);
      Result[13] = WarmongerCs[10];
      Result[14] = WarmongerCs[11];
      Result[15] = WarmongerCs[12];
      Weapon[9] = WarmongerCs[13];
      switch (ModSelect2){
        case 'Monarch':
          Mod[0] = WarmongerCsp[0];
          Mod[1] = 0;
          Mod[2] = 0;
          Mod[3] = 0;
          Mod[4] = WarmongerCsp[1];
          Mod[5] = WarmongerCsp[2];
          Mod[6] = 0;
          break;
        case 'Emperor':
          Mod[1] = WarmongerCsp[3];
          Mod[2] = WarmongerCsp[4];
          Mod[3] = 0;
          Mod[4] = 0;
          Mod[5] = 0;
          Mod[6] = WarmongerCsp[5];
          break;
        case 'Warlord':
          Mod[0] = 0;
          Mod[1] = 0;
          Mod[2] = WarmongerCsp[6];
          Mod[3] = WarmongerCsp[7];
          Mod[4] = 0;
          Mod[5] = 0;
          Mod[6] = 0;
          break;
      };
      break;
    case 'WOUND Auto Rifle':
      Weapon[0] = WoundCs[0];
      Weapon[1] = WoundCs[1];
      Weapon[2] = WoundCs[2];
      Weapon[3] = WoundCs[3];
      Weapon[4] = WoundCs[4];
      Weapon[5] = WoundCs[5];
      Weapon[6] = WoundCs[6];
      Weapon[7] = WoundCs[7];
      Weapon[8] = WoundCs[8];
      Result[12] = (WoundCs[9]*WoundCs[10]);
      Result[13] = WoundCs[10];
      Result[14] = WoundCs[11];
      Result[15] = WoundCs[12];
      Weapon[9] = WoundCs[13];
      switch (ModSelect2){
        case 'Monarch':
          Mod[0] = WoundCsp[0];
          Mod[1] = 0;
          Mod[2] = 0;
          Mod[3] = 0;
          Mod[4] = WoundCsp[1];
          Mod[5] = WoundCsp[2];
          Mod[6] = 0;
          break;
        case 'Emperor':
          Mod[1] = WoundCsp[3];
          Mod[2] = WoundCsp[4];
          Mod[3] = 0;
          Mod[4] = 0;
          Mod[5] = 0;
          Mod[6] = WoundCsp[5];
          break;
        case 'Warlord':
          Mod[0] = 0;
          Mod[1] = 0;
          Mod[2] = WoundCsp[6];
          Mod[3] = WoundCsp[7];
          Mod[4] = 0;
          Mod[5] = 0;
          Mod[6] = 0;
          break;
      };
      break;
    case 'AVG Auto Rifle':
      Weapon[0] = AvgCs[0];
      Weapon[1] = AvgCs[1];
      Weapon[2] = AvgCs[2];
      Weapon[3] = AvgCs[3];
      Weapon[4] = AvgCs[4];
      Weapon[5] = AvgCs[5];
      Weapon[6] = AvgCs[6];
      Weapon[7] = AvgCs[7];
      Weapon[8] = AvgCs[8];
      Result[12] = (AvgCs[9]*AvgCs[10]);
      Result[13] = AvgCs[10];
      Result[14] = AvgCs[11];
      Result[15] = AvgCs[12];
      Weapon[9] = AvgCs[13];
      switch (ModSelect2){
        case 'Monarch':
          Mod[0] = AvgCsp[0];
          Mod[1] = 0;
          Mod[2] = 0;
          Mod[3] = 0;
          Mod[4] = AvgCsp[1];
          Mod[5] = AvgCsp[2];
          Mod[6] = 0;
          break;
        case 'Emperor':
          Mod[1] = AvgCsp[3];
          Mod[2] = AvgCsp[4];
          Mod[3] = 0;
          Mod[4] = 0;
          Mod[5] = 0;
          Mod[6] = AvgCsp[5];
          break;
        case 'Warlord':
          Mod[0] = 0;
          Mod[1] = 0;
          Mod[2] = AvgCsp[6];
          Mod[3] = AvgCsp[7];
          Mod[4] = 0;
          Mod[5] = 0;
          Mod[6] = 0;
          break;
      };
      break;
    default:
      Weapon[0] = 0;
      Weapon[1] = 0;
      Weapon[2] = 0;
      Weapon[3] = 0;
      Weapon[4] = 0;
      Weapon[5] = 0;
      Weapon[6] = 0;
      Weapon[7] = 0;
      Weapon[8] = 0;
      Result[11] = 0;
      Result[12] = 0;
      Result[13] = 0;
      Result[14] = 0;
      Result[15] = 0;
      Weapon[9] = 0;
      Mod[1] = 0;
      Mod[0] = 0;
      Mod[5] = 0;
      Mod[4] = 0;
      Mod[2] = 0;
      Mod[3] = 0;
      Mod[6] = 0;
      break;
  };
};


//武器データ
//Cs[0Dmg,1HsBonus,2Capacity,3Reload,4ReloadStyle,5Rate,6pellets,7Spread,8ADS,9CritPer,10CritDmg,11Change10m,12MaxChange,13Weight]
const SerenityCs = [13,4,32,50,0,15,1,0.6,0.15,0,0,-0.89,-6,0];
const DominanceCs = [9,1,25,60,0,20,1,0.8,0.1,0,0,-0.98,-3,0];
const WarmongerCs = [8,7,28,50,0,10,1,0.25,0,0.25,6,0,0,0];
const WoundCs = [11,4,20,50,0,8,1,0.55,0.2,0.3,8,0,0,0];
const AvgCs = [16,4,25,50,1,12,1,0.6,0.1,0.3,3,-0.95,-6,0];
//Csp[0MonaDmg,1MonaRate,2MonaSpread,3EmpHs,4EmpCapacity,5EmpWeight,6WlCapacity,7WlReload]
const SerenityCsp = [2,2,-0.3,3,10,0.015,20,-30];
const DominanceCsp = [2,0,-0.3,3,10,0.015,20,-30];
const WarmongerCsp = [2,2,0,6,10,0.015,20,-30];
const WoundCsp = [3,2,-0.3,4,10,0.015,20,-30];
const AvgCsp = [2,2,-0.3,3,10,0.015,20,-30];

//トリガー
document.getElementById('WeaponForm').onchange = function() {
  WeaponMod();
  ResultCalc();
};
document.getElementById('ModForm').onchange = function() {
  WeaponMod();
  ResultCalc();
};

//Enchデータ
const SfAverageDmg =[2.01,2.16,2,31]
const SfHighestDmg = 3
const DpAverageDmg =[1.4,1.6,1.8]
const DpHighestDmg = 4;
const SlAverageDmg = [0.8,1.0,1.2]
const SlHighestDmg = 2;

//エンチャダメージ処理
document.getElementById('EnchantForm').onchange = function() {
    switch (document.getElementById('EnchantForm').EnchantSelect.value) {
      case 'Sunfire':
        switch (document.getElementById('EnchantForm').EnchantLevSelect.value) {
          case 'EnchLev1':
            Ench[0] = SfAverageDmg[0];
            Ench[1] = SfHighestDmg;
            break;
          case 'EnchLev2':
            Ench[0] = SfAverageDmg[1];
            Ench[1] = SfHighestDmg;
            break;
          case 'EnchLev3':
            Ench[0] = SfAverageDmg[2];
            Ench[1] = SfHighestDmg;
            break;
          default:
            Ench[0] = 0;
            Ench[1] = 0;
            break;
        };
        break;
      case 'DemonPower':
        switch (document.getElementById('EnchantForm').EnchantLevSelect.value) {
          case 'EnchLev1':
            Ench[0] = DpAverageDmg[0];
            Ench[1] = DpHighestDmg;
            break;
          case 'EnchLev2':
            Ench[0] = DpAverageDmg[1];
            Ench[1] = DpHighestDmg;
            break;
          case 'EnchLev3':
            Ench[0] = DpAverageDmg[2];
            Ench[1] = DpHighestDmg;
            break;
          default:
            Ench[0] = 0;
            Ench[1] = 0;
            break;
        };
        break;
      case 'SiphonLife':
        switch (document.getElementById('EnchantForm').EnchantLevSelect.value) {
          case 'EnchLev1':
            Ench[0] = SlAverageDmg[0];
            Ench[1] = SlHighestDmg;
            break;
          case 'EnchLev2':
            Ench[0] = SlAverageDmg[1];
            Ench[1] = SlHighestDmg;
            break;
          case 'EnchLev3':
            Ench[0] = SlAverageDmg[2];
            Ench[1] = SlHighestDmg;
            break;
          default:
            Ench[0] = 0;
            Ench[1] = 0;
            break;
        };
        break;
      default:
        Ench[0] = 0;
        Ench[1] = 0;
        break;
    };
    ResultCalc();
};

//OEダメージ処理
document.getElementById('OeForm').onchange = function() {
  switch (document.getElementById('OeForm').OeSelect.value) {
    case 'OeSunfire':
      switch (document.getElementById('OeForm').OeLevSelect.value) {
          case 'OeLev1':
            Ench[2] = SfAverageDmg[0];
            Ench[3] = SfHighestDmg;
            break;
          case 'OeLev2':
            Ench[2] = SfAverageDmg[1];
            Ench[3] = SfHighestDmg;
            break;
          case 'OeLev3':
            Ench[2] = SfAverageDmg[2];
            Ench[3] = SfHighestDmg;
            break;
          default:
            Ench[2] = 0;
            Ench[3] = 0;
            break;
      };
      break;
    case 'OeDemonPower':
      switch (document.getElementById('OeForm').OeLevSelect.value) {
          case 'OeLev1':
            Ench[2] = DpAverageDmg[0];
            Ench[3] = DpHighestDmg;
            break;
          case 'OeLev2':
            Ench[2] = DpAverageDmg[1];
            Ench[3] = DpHighestDmg;
            break;
          case 'OeLev3':
            Ench[2] = DpAverageDmg[2];
            Ench[3] = DpHighestDmg;
            break;
          default:
            Ench[2] = 0;
            Ench[3] = 0;
            break;
      };
      break;
    case 'OeSiphonLife':
      switch (document.getElementById('OeForm').OeLevSelect.value) {
          case 'OeLev1':
            Ench[2] = SlAverageDmg[0];
            Ench[3] = SlHighestDmg;
            break;
          case 'OeLev2':
            Ench[2] = SlAverageDmg[1];
            Ench[3] = SlHighestDmg;
            break;
          case 'OeLev3':
            Ench[2] = SlAverageDmg[2];
            Ench[3] = SlHighestDmg;
            break;
          default:
            Ench[2] = 0;
            Ench[3] = 0;
            break;
      };
      break;
    default:
      Ench[2] = 0;
      Ench[3] = 0;
      break;
  };
  ResultCalc();
};

//AEデータ
const BcDmg = 7;
const EoDmg = 6;
const McDmg = 1;
const CfDmg = 4;
const SdAverageDmg = 1;
const SdHighestDmg = 20;

//AEダメージ処理
document.getElementById('AncientEnchantForm').onchange = function() {
    switch (document.getElementById('AncientEnchantForm').AncientEnchantSelect.value) {
      case 'Bloodcraze':
        Ae[0] = BcDmg;
        Ae[1] = BcDmg;
        break;
      case 'ElementalOverload':
        Ae[0] = EoDmg;
        Ae[1] = EoDmg;
        break;
      case 'Mastercrafted':
        Ae[0] = McDmg;
        Ae[1] = McDmg;
        break;
      case 'ConcentratedFire':
        Ae[0] = CfDmg;
        Ae[1] = CfDmg;
        break;
      case 'SuddenDeath':
        Ae[0] = SdAverageDmg;
        Ae[1] = SdHighestDmg;
      default:
        Ae[0] = 0;
        Ae[1] = 0;
        break;
    };
    ResultCalc();
};

//Addonデータ
const MpDmg =[0.25,0.5,1.0,1.5]
const HbAverageDmg =[0.4,0.8,1.2,1.6]
const HbHighestDmg =[2,4,6,8]
const EmCapacity =[2,4,6,10]
const QpReload =[-4,-8,-12,-16]
const LkWeight =[0.004,0.005,0.010,0.015]

//Addonダメージ処理
document.getElementById('AddonForm').onchange = function() {
  switch (document.getElementById('AddonForm').AddonSelect.value) {
    case 'ManaPowder':
      Addon[2] =0;
      Addon[3]=0;
      Addon[4]=0;
      switch (document.getElementById('AddonForm').AddonLevSelect.value) {
        case 'AddonLev0':
          Addon[0] = MpDmg[0];
          Addon[1] = MpDmg[0];
          break;
        case 'AddonLev1':
          Addon[0] = MpDmg[1];
          Addon[1] = MpDmg[1];
          break;
        case 'AddonLev2':
          Addon[0] = MpDmg[2];
          Addon[1] = MpDmg[2];
          break;
        case 'AddonLev3':
          Addon[0] = MpDmg[3];
          Addon[1] = MpDmg[3];
          break;
        default:
          Addon[0] = 0;
          Addon[1] = 0;
          break;
      };
      break;
    case 'HeavyBullets':
      Addon[2] = 0;
      Addon[3]=0;
      Addon[4]=0;
      switch (document.getElementById('AddonForm').AddonLevSelect.value) {
        case 'AddonLev0':
          Addon[0] = HbAverageDmg[0];
          Addon[1] = HbHighestDmg[0];
          break;
        case 'AddonLev1':
          Addon[0] = HbAverageDmg[1];
          Addon[1] = HbHighestDmg[1];
        case 'AddonLev2':
          Addon[0] = HbAverageDmg[2];
          Addon[1] = HbHighestDmg[2];
          break;
        case 'AddonLev3':
          Addon[0] = HbAverageDmg[3];
          Addon[1] = HbHighestDmg[3];
          break;
        default:
          Addon[0] = 0;
          Addon[1] = 0;
          break;
      };
    case 'ExtendedMagazine':
      Addon[0]=0;
      Addon[1]=0;
      Addon[3]=0;
      Addon[4]=0;
      switch (document.getElementById('AddonForm').AddonLevSelect.value) {
        case 'AddonLev0':
          Addon[2] = EmCapacity[0];
          break;
        case 'AddonLev1':
          Addon[2] = EmCapacity[1];
          break;
        case 'AddonLev2':
          Addon[2] = EmCapacity[2];
          break;
        case 'AddonLev3':
          Addon[2] = EmCapacity[3];
          break;
        default:
          Addon[2] = 0;
      };
      break;
    case 'QuickPull':
      Addon[0]=0;
      Addon[1]=0;
      Addon[3]=0;
      Addon[4]=0;
      switch (document.getElementById('AddonForm').AddonLevSelect.value) {
        case 'AddonLev0':
          Addonr = QpReload[0];
          break;
        case 'AddonLev1':
          Addon[3] = QpReload[1];
          break;
        case 'AddonLev2':
          Addon[3] = QpReload[2];
          break;
        case 'AddonLev3':
          Addon[3] = QpReload[3];
          break;
        default:
          Addon[3] = 0;
      };
      case 'LightweightKit':
      Addon[0]=0;
      Addon[1]=0;
      Addon[3]=0;
      switch (document.getElementById('AddonForm').AddonLevSelect.value) {
        case 'AddonLev0':
          Addon[4] = LkWeight[0];
          break;
        case 'AddonLev1':
          Addon[4] = LkWeight[1];
          break;
        case 'AddonLev2':
          Addon[4] = LkWeight[2];
          break;
        case 'AddonLev3':
          Addon[4] = LkWeight[3];
          break;
        default:
          Addon[4] = 0;
      };
      break;
    default:
      Addon[0] = 0;
      Addon[1] = 0;
      Addon[2] = 0;
      Addon[3]=0;
      Addon[4]=0;
      break;
  };
  ResultCalc();
};
