//定義リスト
var ResultAverageDmg = 0;
var ResultAverageHsDmg = 0;
var ResultHighestDmg = 0;
var ResultHighestHsDmg = 0;
var ResultRate = 0;
var ResultDps = 0;
var ResultCapacity = 0;
var ResultReload = 0;
var ResultSpread = 0;
var ResultAdsSpread= 0;
var ResultDuration=0;
var ResultWeight =0;
var WeaponDmg = 0;
var WeaponHsBonus = 0;
var WeaponRate = 0;
var WeaponCapacity = 0;
var WeaponReload = 0;
var WeaponSpread = 0;
var WeaponAdsSpread = 0;
var WeaponWeight=0;
var ResultWeight=0;
var ModDmg = 0;
var ModHsBonus = 0;
var ModRate = 0;
var ModCapacity = 0;
var ModReload = 0;
var ModSpread = 0;
var ModWeight = 0;
var EnchantAverageDmg = 0;
var EnchantHighestDmg = 0;
var OeAverageDmg = 0;
var OeHighestDmg = 0;
var AeDmg = 0;
var AddonAverageDmg = 0;
var AddonHighestDmg = 0;
var AddonCapacity = 0;
var AddonReload = 0;
var AddonWeight = 0;
var CritAverageDmg = 0;
var CritHighestDmg = 0;
var ChangeDmg10m = 0;
var ChangeDmgMax = 0;

//最終計算関数
function ResultCalc(){
ResultAverageDmg = WeaponDmg + ModDmg + EnchantAverageDmg + OeAverageDmg + AeDmg + AddonAverageDmg + CritAverageDmg;
ResultAverageHsDmg = ResultAverageDmg + WeaponHsBonus + ModHsBonus;
ResultHighestDmg = WeaponDmg + ModDmg + EnchantHighestDmg + OeHighestDmg + AeDmg + AddonHighestDmg + CritHighestDmg;
ResultHighestHsDmg = ResultHighestDmg + WeaponHsBonus + ModHsBonus;
ResultWeight = 0.2 + WeaponWeight + ModWeight + AddonWeight;
ResultWeight = (ResultWeight/0.2);
ResultRate = WeaponRate + ModRate;
ResultCapacity = WeaponCapacity + ModCapacity + AddonCapacity;
ResultReload = WeaponReload + ModReload + AddonReload;
ResultDps = ResultAverageDmg * ResultRate;
ResultSpread = WeaponSpread + ModSpread;
ResultAdsSpread = WeaponAdsSpread + ModSpread;
ResultDuration = (ResultCapacity / ResultRate);
ResultDuration = Math.round( ResultDuration * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
ResultAverageDmg = Math.round( ResultAverageDmg * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
ResultAverageHsDmg = Math.round( ResultAverageHsDmg * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
ResultHighestDmg = Math.round( ResultHighestDmg * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
ResultHighestHsDmg = Math.round( ResultHighestHsDmg * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
ResultWeight = Math.round( ResultWeight * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 ) ;
ResultDps = Math.round( ResultDps * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 );
ResultSpread = Math.abs(ResultSpread);
ResultSpread = Math.round(ResultSpread * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 );
ResultAdsSpread = Math.abs(ResultAdsSpread);
ResultAdsSpread = Math.round(ResultAdsSpread * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 );
console.log('平均-最高-レート-DPS',ResultAverageDmg+'('+ResultAverageHsDmg+')',ResultHighestDmg+'('+ResultHighestHsDmg+')',ResultRate,ResultDps);
document.getElementById('DisplayAverageDmg').textContent = (ResultAverageDmg);
document.getElementById('DisplayAverageHsDmg').textContent = (ResultAverageHsDmg);
document.getElementById('DisplayHighestDmg').textContent = (ResultHighestDmg);
document.getElementById('DisplayHighestHsDmg').textContent = (ResultHighestHsDmg);
document.getElementById('DisplayRate').textContent = (ResultRate);
document.getElementById('DisplayCapacity').textContent = (ResultCapacity);
document.getElementById('DisplayReload').textContent = (ResultReload);
document.getElementById('DisplaySpread').textContent = (ResultSpread);
document.getElementById('DisplayAdsSpread').textContent = (ResultAdsSpread);
document.getElementById('DisplayDps').textContent = (ResultDps);
document.getElementById('DisplayChangeDmg10m').textContent = (ChangeDmg10m);
document.getElementById('DisplayChangeDmgMax').textContent = (ChangeDmgMax);
document.getElementById('DisplayDuration').textContent = (ResultDuration);
document.getElementById('DisplayWeight').textContent = (ResultWeight);
console.log(ResultWeight);
};


//武器データ
//Cs[0Dmg,1HsBonus,2Rate,3CritPer,4CritHighestDmg,5ChangeDmg10m,6MaxChangeDmg,7Capacity,8Reload,9Weight,10Spread,11ADS]
//Csp[0MonaDmg,1EmpHs,2MonaRate,3WlCapacity,4EmpCapacity,5WlReload,6MonaSpread,7EmpWeight]
const SerenityCs = [13,4,15,0,0,-0.89,-6,32,50,0,0.6,0.15];
const SerenityCsp = [2,3,2,20,10,-30,-0.3,0.015];
const DominanceCs = [9,1,20,0,0,-0.98,-3,25,60,0,0.8,0.1];
const DominanceCsp = [2,3,0,20,10,-30,-0.3,0.015];
const WarmongerCs = [8,7,10,0.25,6,0,0,28,50,0,0.25,0];
const WarmongerCsp = [2,6,2,20,10,-30,0,0.015];
const WoundCs = [11,4,8,0.3,8,0,0,20,50,0,0.55,0.2];
const WoundCsp = [3,4,2,20,10,-30,-0.3,0.015];
const AvgCs = [16,4,12,0.3,3,-0.95,-6,25,50,0,0.6,0.1];
const AvgCsp = [2,3,2,20,10,-30,-0.3,0.015];


//武器処理
document.getElementById('WeaponForm').onchange = function() {
  switch (document.getElementById('WeaponForm').WeaponSelect.value) {
    case 'Serenity Auto Rifle':
      WeaponDmg = SerenityCs[0];
      WeaponHsBonus = SerenityCs[1];
      WeaponRate = SerenityCs[2];
      WeaponCapacity = SerenityCs[7];
      WeaponReload = SerenityCs[8];
      WeaponSpread = SerenityCs[10];
      WeaponAdsSpread = SerenityCs[11];
      CritAverageDmg = (SerenityCs[3]*SerenityCs[4]);
      CritHighestDmg = SerenityCs[4];
      ChangeDmg10m = SerenityCs[5];
      ChangeDmgMax = SerenityCs[6];
      WeaponWeight = SerenityCs[9];
      switch (document.getElementById('ModForm').ModSelect.value){
        case 'Monarch':
          ModDmg = SerenityCsp[0];
          ModRate = SerenityCsp[2];
          ModSpread = SerenityCsp[6];
          break;
        case 'Emperor':
          ModHsBonus = SerenityCsp[1];
          ModCapacity = SerenityCsp[4];
          ModWeight = SerenityCsp[7];
          break;
        case 'Warlord':
          ModCapacity = SerenityCsp[3];
          ModReload = SerenityCsp[5];
          break;
      };
      break;
    case 'F44 Dominance':
      WeaponDmg = DominanceCs[0];
      WeaponHsBonus = DominanceCs[1];
      WeaponRate = DominanceCs[2];
      WeaponCapacity = DominanceCs[7];
      WeaponReload = DominanceCs[8];
      WeaponReload = DominanceCs[8];
      WeaponSpread = DominanceCs[10];
      WeaponAdsSpread = DominanceCs[11];
      CritAverageDmg = (DominanceCs[3]*DominanceCs[4]);
      CritHighestDmg = DominanceCs[4];
      ChangeDmg10m = DominanceCs[5];
      ChangeDmgMax = DominanceCs[6];
      WeaponWeight = DominanceCs[9];
      switch (document.getElementById('ModForm').ModSelect.value){
        case 'Monarch':
          ModDmg = DominanceCsp[0];
          ModRate = DominanceCsp[2];
          ModSpread = DominanceCsp[6];
          break;
        case 'Emperor':
          ModHsBonus = DominanceCsp[1];
          ModCapacity = DominanceCsp[4];
          ModWeight = DominanceCsp[7];
          break;
        case 'Warlord':
          ModCapacity = DominanceCsp[3];
          ModReload = DominanceCsp[5];
          break;
      };
      break;
    case 'Warmonger':
      WeaponDmg = WarmongerCs[0];
      WeaponHsBonus = WarmongerCs[1];
      WeaponRate = WarmongerCs[2];
      WeaponCapacity = WarmongerCs[7];
      WeaponReload = WarmongerCs[8];
      WeaponReload = WarmongerCs[8];
      WeaponSpread = WarmongerCs[10];
      WeaponAdsSpread = WarmongerCs[11];
      CritAverageDmg = (WarmongerCs[3]*WarmongerCs[4]);
      CritHighestDmg = WarmongerCs[4];
      ChangeDmg10m = WarmongerCs[5];
      ChangeDmgMax = WarmongerCs[6];
      WeaponWeight = WarmongerCs[9];
      switch (document.getElementById('ModForm').ModSelect.value){
        case 'Monarch':
          ModDmg = WarmongerCsp[0];
          ModRate = WarmongerCsp[2];
          ModSpread = WarmongerCsp[6];
          break;
        case 'Emperor':
          ModHsBonus = WarmongerCsp[1];
          ModCapacity = WarmongerCsp[4];
          ModWeight = WarmongerCsp[7];
          break;
        case 'Warlord':
          ModCapacity = WarmongerCsp[3];
          ModReload = WarmongerCsp[5];
          break;
      };
      break;
    case 'WOUND Auto Rifle':
      WeaponDmg = WoundCs[0];
      WeaponHsBonus = WoundCs[1];
      WeaponRate = WoundCs[2];
      WeaponCapacity = WoundCs[7];
      WeaponReload = WoundCs[8];
      WeaponReload = WoundCs[8];
      WeaponSpread = WoundCs[10];
      WeaponAdsSpread = WoundCs[11];
      CritAverageDmg = (WoundCs[3]*WoundCs[4]);
      CritHighestDmg = WoundCs[4];
      ChangeDmg10m = WoundCs[5];
      ChangeDmgMax = WoundCs[6];
      WeaponWeight = WoundCs[9];
      switch (document.getElementById('ModForm').ModSelect.value){
        case 'Monarch':
          ModDmg = WoundCsp[0];
          ModRate = WoundCsp[2];
          ModSpread = WoundCsp[6];
          break;
        case 'Emperor':
          ModHsBonus = WoundCsp[1];
          ModCapacity = WoundCsp[4];
          ModWeight=WoundCsp[7];
          break;
        case 'Warlord':
          ModCapacity = WoundCsp[3];
          ModReload = WoundCsp[5];
          break;
      };
      break;
    case 'AVG Auto Rifle':
      WeaponDmg = AvgCs[0];
      WeaponHsBonus = AvgCs[1];
      WeaponRate = AvgCs[2];
      WeaponCapacity = AvgCs[7];
      WeaponReload = AvgCs[8];
      WeaponSpread = AvgCs[10];
      WeaponAdsSpread = AvgCs[11];
      CritAverageDmg = (AvgCs[3]*AvgCs[4]);
      CritHighestDmg = AvgCs[4];
      ChangeDmg10m = AvgCs[5];
      ChangeDmgMax = AvgCs[6];
      WeaponWeight = AvgCs[9];
      switch (document.getElementById('ModForm').ModSelect.value){
        case 'Monarch':
          ModDmg = AvgCsp[0];
          ModRate = AvgCsp[2];
          ModSpread = AvgCsp[6];
          break;
        case 'Emperor':
          ModHsBonus = AvgCsp[1];
          ModCapacity = AvgCsp[4];
          ModWeight = AvgCsp[7];
          break;
        case 'Warlord':
          ModCapacity = AvgCsp[3];
          ModReload = AvgCsp[5];
          break;
      };
      break;
    default:
      WeaponDmg = 0;
      WeaponHsBonus = 0;
      WeaponCapacity = 0;
      WeaponReload = 0;
      WeaponSpread =0;
      WeaponAdsSpread = 0;
      WeaponWeight =0;
      ModHsBonus = 0;
      ModDmg = 0;
      ModSpread = 0;
      WeaponRate = 0;
      ModRate = 0;
      ModCapacity = 0;
      ModReload = 0;
      ModWeight = 0;
      CritAverageDmg = 0;
      CritHighestDmg = 0;
      ChangeDmg10m = 0;
      ChangeDmgMax = 0;
      break;
  };
  ResultCalc();
};


//Modダメージ処理
document.getElementById('ModForm').onchange = function() {
  switch (document.getElementById('ModForm').ModSelect.value) {
    case 'Warlord':
      ModDmg = 0;
      ModHsBonus = 0;
      ModRate = 0;
      ModSpread = 0;
      ModWeight=0;
      switch (document.getElementById('WeaponForm').WeaponSelect.value) {
        case 'Serenity Auto Rifle':
          ModCapacity = SerenityCsp[3];
          ModReload = SerenityCsp[5];
          break;
        case 'F44 Dominance':
          ModCapacity = DominanceCsp[3];
          ModReload = DominanceCsp[5];
          break;
        case 'Warmonger':
          ModCapacity = WarmongerCsp[3];
          ModReload = WarmongerCsp[5];
          break;
        case 'WOUND Auto Rifle':
          ModCapacity = WoundCsp[3];
          ModReload = WoundCsp[5];
          break;
        case 'AVG Auto Rifle':
          ModCapacity = AvgCsp[3];
          ModReload = AvgCsp[5];
          break;
        default:
          ModCapacity = 0;
          ModReload = 0;
          break;
      };
      break;
    case 'Emperor':
      ModDmg = 0;
      ModRate = 0;
      ModReload = 0;
      ModSpread =0;
      switch (document.getElementById('WeaponForm').WeaponSelect.value) {
        case 'Serenity Auto Rifle':
          ModHsBonus = SerenityCsp[1];
          ModCapacity = SerenityCsp[4];
          ModWeight = SerenityCsp[7];
          break;
        case 'F44 Dominance':
          ModHsBonus = DominanceCsp[1];
          ModCapacity = DominanceCsp[4];
          ModWeight = SerenityCsp[7];
          break;
        case 'Warmonger':
          ModHsBonus = WarmongerCsp[1];
          ModCapacity = WarmongerCsp[4];
          ModWeight = WarmongerCsp[7];
          break;
        case 'WOUND Auto Rifle':
          ModHsBonus = WoundCsp[1];
          ModCapacity = WoundCsp[4];
          ModWeight = WoundCsp[7];
          break;
        case 'AVG Auto Rifle':
          ModHsBonus = AvgCsp[1];
          ModCapacity = AvgCsp[4];
          ModWeight = AvgCsp[7];
          break;
        default:
          ModHsBonus = 0;
          ModCapacity = 0;
          ModWeight = 0;
          break;
      };
      break;
    case 'Monarch':
      ModHsBonus = 0;
      ModCapacity = 0;
      ModReload = 0;
      ModWeight=0;
      switch (document.getElementById('WeaponForm').WeaponSelect.value) {
        case 'Serenity Auto Rifle':
          ModDmg = SerenityCsp[0];
          ModRate = SerenityCsp[2];
          ModSpread = SerenityCsp[6];
          break;
        case 'F44 Dominance':
          ModDmg = DominanceCsp[0];
          ModRate = DominanceCsp[2];
          ModSpread = DominanceCsp[6];
          break;
        case 'Warmonger':
          ModDmg = WarmongerCsp[0];
          ModRate = WarmongerCsp[2];
          ModSpread = WarmongerCsp[6];
          break;
        case 'WOUND Auto Rifle':
          ModDmg = WoundCsp[0];
          ModRate = WoundCsp[2];
          ModSpread = WoundCsp[6];
          break;
        case 'AVG Auto Rifle':
          ModDmg = AvgCsp[0];
          ModRate = AvgCsp[2];
          ModSpread = AvgCsp[6];
          break;
        default:
          ModDmg = 0;
          ModRate = 0;
          ModSpread = 0;
          break;
      };
      break;
    default:
      ModDmg = 0;
      ModHsBonus = 0;
      ModRate = 0;
      ModCapacity = 0;
      ModReload = 0;
      ModSpread=0;
      ModWeight=0;
      break;
  };
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
            EnchantAverageDmg = SfAverageDmg[0];
            EnchantHighestDmg = SfHighestDmg;
            break;
          case 'EnchLev2':
            EnchantAverageDmg = SfAverageDmg[1];
            EnchantHighestDmg = SfHighestDmg;
            break;
          case 'EnchLev3':
            EnchantAverageDmg = SfAverageDmg[2];
            EnchantHighestDmg = SfHighestDmg;
            break;
          default:
            EnchantAverageDmg = 0;
            EnchantHighestDmg = 0;
            break;
        };
        break;
      case 'DemonPower':
        switch (document.getElementById('EnchantForm').EnchantLevSelect.value) {
          case 'EnchLev1':
            EnchantAverageDmg = DpAverageDmg[0];
            EnchantHighestDmg = DpHighestDmg;
            break;
          case 'EnchLev2':
            EnchantAverageDmg = DpAverageDmg[1];
            EnchantHighestDmg = DpHighestDmg;
            break;
          case 'EnchLev3':
            EnchantAverageDmg = DpAverageDmg[2];
            EnchantHighestDmg = DpHighestDmg;
            break;
          default:
            EnchantAverageDmg = 0;
            EnchantHighestDmg = 0;
            break;
        };
        break;
      case 'SiphonLife':
        switch (document.getElementById('EnchantForm').EnchantLevSelect.value) {
          case 'EnchLev1':
            EnchantAverageDmg = SlAverageDmg[0];
            EnchantHighestDmg = SlHighestDmg;
            break;
          case 'EnchLev2':
            EnchantAverageDmg = SlAverageDmg[1];
            EnchantHighestDmg = SlHighestDmg;
            break;
          case 'EnchLev3':
            EnchantAverageDmg = SlAverageDmg[2];
            EnchantHighestDmg = SlHighestDmg;
            break;
          default:
            EnchantAverageDmg = 0;
            EnchantHighestDmg = 0;
            break;
        };
        break;
      default:
        EnchantAverageDmg = 0;
        EnchantHighestDmg = 0;
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
            OeAverageDmg = SfAverageDmg[0];
            OeHighestDmg = SfHighestDmg;
            break;
          case 'OeLev2':
            OeAverageDmg = SfAverageDmg[1];
            OeHighestDmg = SfHighestDmg;
            break;
          case 'OeLev3':
            OeAverageDmg = SfAverageDmg[2];
            OeHighestDmg = SfHighestDmg;
            break;
          default:
            OeAverageDmg = 0;
            OeHighestDmg = 0;
            break;
      };
      break;
    case 'OeDemonPower':
      switch (document.getElementById('OeForm').OeLevSelect.value) {
          case 'OeLev1':
            OeAverageDmg = DpAverageDmg[0];
            OeHighestDmg = DpHighestDmg;
            break;
          case 'OeLev2':
            OeAverageDmg = DpAverageDmg[1];
            OeHighestDmg = DpHighestDmg;
            break;
          case 'OeLev3':
            OeAverageDmg = DpAverageDmg[2];
            OeHighestDmg = DpHighestDmg;
            break;
          default:
            OeAverageDmg = 0;
            OeHighestDmg = 0;
            break;
      };
      break;
    case 'OeSiphonLife':
      switch (document.getElementById('OeForm').OeLevSelect.value) {
          case 'OeLev1':
            OeAverageDmg = SlAverageDmg[0];
            OeHighestDmg = SlHighestDmg;
            break;
          case 'OeLev2':
            OeAverageDmg = SlAverageDmg[1];
            OeHighestDmg = SlHighestDmg;
            break;
          case 'OeLev3':
            OeAverageDmg = SlAverageDmg[2];
            OeHighestDmg = SlHighestDmg;
            break;
          default:
            OeAverageDmg = 0;
            OeHighestDmg = 0;
            break;
      };
      break;
    default:
      OeAverageDmg = 0;
      OeHighestDmg = 0;
      break;
  };
  ResultAverageDmg = WeaponDmg + ModDmg + EnchantAverageDmg + OeAverageDmg + AeDmg + AddonAverageDmg;
  ResultAverageHsDmg = WeaponDmg + WeaponHsBonus + ModDmg + ModHsBonus + EnchantAverageDmg + OeAverageDmg + AeDmg + AddonAverageDmg;
  ResultCalc();
};

//AEデータ
const BcDmg = 7;
const EoDmg = 6;
const McDmg = 1;

//AEダメージ処理
document.getElementById('AncientEnchantForm').onchange = function() {
    switch (document.getElementById('AncientEnchantForm').AncientEnchantSelect.value) {
      case 'Bloodcraze':
        AeDmg = BcDmg;
        break;
      case 'ElementalOverload':
        AeDmg = EoDmg;
        break;
      case 'Mastercrafted':
        AeDmg = McDmg;
        break;
      default:
        AeDmg = 0;
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

//エンチャダメージ処理
document.getElementById('AddonForm').onchange = function() {
  switch (document.getElementById('AddonForm').AddonSelect.value) {
    case 'ManaPowder':
      AddonCapacity =0;
      AddonReload=0;
      AddonWeight=0;
      switch (document.getElementById('AddonForm').AddonLevSelect.value) {
        case 'AddonLev0':
          AddonAverageDmg = MpDmg[0];
          AddonHighestDmg = MpDmg[0];
          break;
        case 'AddonLev1':
          AddonAverageDmg = MpDmg[1];
          AddonHighestDmg = MpDmg[1];
          break;
        case 'AddonLev2':
          AddonAverageDmg = MpDmg[2];
          AddonHighestDmg = MpDmg[2];
          break;
        case 'AddonLev3':
          AddonAverageDmg = MpDmg[3];
          AddonHighestDmg = MpDmg[3];
          break;
        default:
          AddonAverageDmg = 0;
          AddonHighestDmg = 0;
          break;
      };
      break;
    case 'HeavyBullets':
      AddonCapacity = 0;
      AddonReload=0;
      AddonWeight=0;
      switch (document.getElementById('AddonForm').AddonLevSelect.value) {
        case 'AddonLev0':
          AddonAverageDmg = HbAverageDmg[0];
          AddonHighestDmg = HbHighestDmg[0];
          break;
        case 'AddonLev1':
          AddonAverageDmg = HbAverageDmg[1];
          AddonHighestDmg = HbHighestDmg[1];
        case 'AddonLev2':
          AddonAverageDmg = HbAverageDmg[2];
          AddonHighestDmg = HbHighestDmg[2];
          break;
        case 'AddonLev3':
          AddonAverageDmg = HbAverageDmg[3];
          AddonHighestDmg = HbHighestDmg[3];
          break;
        default:
          AddonAverageDmg = 0;
          AddonHighestDmg = 0;
          break;
      };
    case 'ExtendedMagazine':
      AddonAverageDmg=0;
      AddonHighestDmg=0;
      AddonReload=0;
      AddonWeight=0;
      switch (document.getElementById('AddonForm').AddonLevSelect.value) {
        case 'AddonLev0':
          AddonCapacity = EmCapacity[0];
          break;
        case 'AddonLev1':
          AddonCapacity = EmCapacity[1];
          break;
        case 'AddonLev2':
          AddonCapacity = EmCapacity[2];
          break;
        case 'AddonLev3':
          AddonCapacity = EmCapacity[3];
          break;
        default:
          AddonCapacity = 0;
      };
      break;
    case 'QuickPull':
      AddonAverageDmg=0;
      AddonHighestDmg=0;
      AddonReload=0;
      AddonWeight=0;
      switch (document.getElementById('AddonForm').AddonLevSelect.value) {
        case 'AddonLev0':
          Addonr = QpReload[0];
          break;
        case 'AddonLev1':
          AddonReload = QpReload[1];
          break;
        case 'AddonLev2':
          AddonReload = QpReload[2];
          break;
        case 'AddonLev3':
          AddonReload = QpReload[3];
          break;
        default:
          AddonReload = 0;
      };
      case 'LightweightKit':
      AddonAverageDmg=0;
      AddonHighestDmg=0;
      AddonReload=0;
      switch (document.getElementById('AddonForm').AddonLevSelect.value) {
        case 'AddonLev0':
          AddonWeight = LkWeight[0];
          break;
        case 'AddonLev1':
          AddonWeight = LkWeight[1];
          break;
        case 'AddonLev2':
          AddonWeight = LkWeight[2];
          break;
        case 'AddonLev3':
          AddonWeight = LkWeight[3];
          break;
        default:
          AddonWeight = 0;
      };
      break;
    default:
      AddonAverageDmg = 0;
      AddonHighestDmg = 0;
      AddonCapacity = 0;
      AddonReload=0;
      AddonWeight=0;
      break;
  };
  ResultCalc();
};
