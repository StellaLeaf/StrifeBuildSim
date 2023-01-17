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
var WeaponPellets=0;
var WeaponReloadStyle=0;
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
  ResultRate = WeaponRate + ModRate;
  ResultCapacity = WeaponCapacity + ModCapacity + AddonCapacity;
  ResultReload = WeaponReload + ModReload + AddonReload;
  ResultDuration = Math.round( (ResultCapacity / ResultRate) * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
  ResultAverageDmg = Math.round( (WeaponDmg + ModDmg + EnchantAverageDmg + OeAverageDmg + AeDmg + AddonAverageDmg + CritAverageDmg) * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
  ResultAverageHsDmg = Math.round( (WeaponDmg + ModDmg + EnchantAverageDmg + OeAverageDmg + AeDmg + AddonAverageDmg + CritAverageDmg + WeaponHsBonus + ModHsBonus) * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
  ResultHighestDmg = Math.round( (WeaponDmg + ModDmg + EnchantHighestDmg + OeHighestDmg + AeDmg + AddonHighestDmg + CritHighestDmg) * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
  ResultHighestHsDmg = Math.round( (WeaponDmg + ModDmg + EnchantHighestDmg + OeHighestDmg + AeDmg + AddonHighestDmg + CritHighestDmg + WeaponHsBonus + ModHsBonus) * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;
  ResultWeight = (0.2 + WeaponWeight + ModWeight + AddonWeight)/0.2
  ResultWeight = Math.round( (ResultWeight) * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 ) ;
  ResultDps = Math.round( (ResultAverageDmg * ResultRate) * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 );
  ResultSpread = Math.round(Math.abs(WeaponSpread + ModSpread) * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 );
  ResultAdsSpread = Math.round(Math.abs(WeaponAdsSpread + ModSpread) * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 );
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
  if(WeaponPellets != 1){
  document.getElementById('DisplayPellets').textContent = ('x'+WeaponPellets)
  }else{
    document.getElementById('DisplayPellets').textContent=(null)
  };
  if(WeaponReloadStyle != 0){
    document.getElementById('DisplayReloadStyle').textContent=('/発')
  }else{
    document.getElementById('DisplayReloadStyle').textContent=(null)
  }
};


//武器データ
//Cs[0Dmg,1HsBonus,2Capacity,3Reload,4ReloadStyle,5Rate,6pellets,7Spread,8ADS,9CritPer,10CritHighestDmg,11ChangeDmg10m,12MaxChangeDmg,13Weight]
//Csp[0MonaDmg,1MonaRate,2MonaSpread,3EmpHs,4EmpCapacity,5EmpWeight,6WlCapacity,7WlReload]
const SerenityCs = [13,4,32,50,0,15,1,0.6,0.15,0,0,-0.89,-6,0];
const SerenityCsp = [2,2,-0.3,3,10,0.015,20,-30];
const DominanceCs = [9,1,25,60,0,20,1,0.8,0.1,0,0,-0.98,-3,0];
const DominanceCsp = [2,0,-0.3,3,10,0.015,20,-30];
const WarmongerCs = [8,7,28,50,0,10,1,0.25,0,0.25,6,0,0,0];
const WarmongerCsp = [2,2,0,6,10,0.015,20,-30];
const WoundCs = [11,4,20,50,0,8,0.3,0.55,0.2,0.3,8,0,0];
const WoundCsp = [3,2,-0.3,4,10,0.015,20,-30];
const AvgCs = [16,4,25,50,1,12,1,0.6,0.1,0.3,3,-0.95,-6,1];
const AvgCsp = [2,2,-0.3,3,10,0.015,20,-30];

//武器処理
document.getElementById('WeaponForm').onchange = function() {
  switch (document.getElementById('WeaponForm').WeaponSelect.value) {
    case 'Serenity Auto Rifle':
      WeaponDmg = SerenityCs[0];
      WeaponHsBonus = SerenityCs[1];
      WeaponCapacity = SerenityCs[2];
      WeaponReload = SerenityCs[3];
      WeaponReloadStyle=SerenityCs[4];
      WeaponRate = SerenityCs[5];
      WeaponPellets = SerenityCs[6];
      WeaponSpread = SerenityCs[7];
      WeaponAdsSpread = SerenityCs[8];
      CritAverageDmg = (SerenityCs[9]*SerenityCs[10]);
      CritHighestDmg = SerenityCs[10];
      ChangeDmg10m = SerenityCs[11];
      ChangeDmgMax = SerenityCs[12];
      WeaponWeight = SerenityCs[13];
      switch (document.getElementById('ModForm').ModSelect.value){
        case 'Monarch':
          ModDmg = SerenityCsp[0];
          ModRate = SerenityCsp[1];
          ModSpread = SerenityCsp[2];
          break;
        case 'Emperor':
          ModHsBonus = SerenityCsp[3];
          ModCapacity = SerenityCsp[4];
          ModWeight = SerenityCsp[5];
          break;
        case 'Warlord':
          ModCapacity = SerenityCsp[6];
          ModReload = SerenityCsp[7];
          break;
      };
      break;
    case 'F44 Dominance':
      WeaponDmg = DominanceCs[0];
      WeaponHsBonus = DominanceCs[1];
      WeaponCapacity = DominanceCs[2];
      WeaponReload = DominanceCs[3];
      WeaponReloadStyle=DominanceCs[4];
      WeaponRate = DominanceCs[5];
      WeaponPellets = DominanceCs[6];
      WeaponSpread = DominanceCs[7];
      WeaponAdsSpread = DominanceCs[8];
      CritAverageDmg = (DominanceCs[9]*DominanceCs[10]);
      CritHighestDmg = DominanceCs[10];
      ChangeDmg10m = DominanceCs[11];
      ChangeDmgMax = DominanceCs[12];
      WeaponWeight = DominanceCs[13];
      switch (document.getElementById('ModForm').ModSelect.value){
        case 'Monarch':
          ModDmg = DominanceCsp[0];
          ModRate = DominanceCsp[1];
          ModSpread = DominanceCsp[2];
          break;
        case 'Emperor':
          ModHsBonus = DominanceCsp[3];
          ModCapacity = DominanceCsp[4];
          ModWeight = DominanceCsp[5];
          break;
        case 'Warlord':
          ModCapacity = DominanceCsp[6];
          ModReload = DominanceCsp[7];
          break;
      };
      break;
    case 'Warmonger':
      WeaponDmg = WarmongerCs[0];
      WeaponHsBonus = WarmongerCs[1];
      WeaponCapacity = WarmongerCs[2];
      WeaponReload = WarmongerCs[3];
      WeaponReloadStyle=WarmongerCs[4];
      WeaponRate = WarmongerCs[5];
      WeaponPellets = WarmongerCs[6];
      WeaponSpread = WarmongerCs[7];
      WeaponAdsSpread = WarmongerCs[8];
      CritAverageDmg = (WarmongerCs[9]*WarmongerCs[10]);
      CritHighestDmg = WarmongerCs[10];
      ChangeDmg10m = WarmongerCs[11];
      ChangeDmgMax = WarmongerCs[12];
      WeaponWeight = WarmongerCs[13];
      switch (document.getElementById('ModForm').ModSelect.value){
        case 'Monarch':
          ModDmg = WarmongerCsp[0];
          ModRate = WarmongerCsp[1];
          ModSpread = WarmongerCsp[2];
          break;
        case 'Emperor':
          ModHsBonus = WarmongerCsp[3];
          ModCapacity = WarmongerCsp[4];
          ModWeight = WarmongerCsp[5];
          break;
        case 'Warlord':
          ModCapacity = WarmongerCsp[6];
          ModReload = WarmongerCsp[7];
          break;
      };
      break;
    case 'WOUND Auto Rifle':
      WeaponDmg = WoundCs[0];
      WeaponHsBonus = WoundCs[1];
      WeaponCapacity = WoundCs[2];
      WeaponReload = WoundCs[3];
      WeaponReloadStyle=WoundCs[4];
      WeaponRate = WoundCs[5];
      WeaponPellets = WoundCs[6];
      WeaponSpread = WoundCs[7];
      WeaponAdsSpread = WoundCs[8];
      CritAverageDmg = (WoundCs[9]*WoundCs[10]);
      CritHighestDmg = WoundCs[10];
      ChangeDmg10m = WoundCs[11];
      ChangeDmgMax = WoundCs[12];
      WeaponWeight = WoundCs[13];
      switch (document.getElementById('ModForm').ModSelect.value){
        case 'Monarch':
          ModDmg = WoundCsp[0];
          ModRate = WoundCsp[1];
          ModSpread = WoundCsp[2];
          break;
        case 'Emperor':
          ModHsBonus = WoundCsp[3];
          ModCapacity = WoundCsp[4];
          ModWeight = WoundCsp[5];
          break;
        case 'Warlord':
          ModCapacity = WoundCsp[6];
          ModReload = WoundCsp[7];
          break;
      };
      break;
    case 'AVG Auto Rifle':
      WeaponDmg = AvgCs[0];
      WeaponHsBonus = AvgCs[1];
      WeaponCapacity = AvgCs[2];
      WeaponReload = AvgCs[3];
      WeaponReloadStyle=AvgCs[4];
      WeaponRate = AvgCs[5];
      WeaponPellets = AvgCs[6];
      WeaponSpread = AvgCs[7];
      WeaponAdsSpread = AvgCs[8];
      CritAverageDmg = (AvgCs[9]*AvgCs[10]);
      CritHighestDmg = AvgCs[10];
      ChangeDmg10m = AvgCs[11];
      ChangeDmgMax = AvgCs[12];
      WeaponWeight = AvgCs[13];
      switch (document.getElementById('ModForm').ModSelect.value){
        case 'Monarch':
          ModDmg = AvgCsp[0];
          ModRate = AvgCsp[1];
          ModSpread = AvgCsp[2];
          break;
        case 'Emperor':
          ModHsBonus = AvgCsp[3];
          ModCapacity = AvgCsp[4];
          ModWeight = AvgCsp[5];
          break;
        case 'Warlord':
          ModCapacity = AvgCsp[6];
          ModReload = AvgCsp[7];
          break;
      };
      break;
    default:
      WeaponDmg = 0;
      WeaponHsBonus = 0;
      WeaponCapacity = 0;
      WeaponReload = 0;
      WeaponReloadStyle=0;
      WeaponRate = 0;
      WeaponPellets = 0;
      WeaponSpread = 0;
      WeaponAdsSpread = 0;
      CritAverageDmg = 0;
      CritHighestDmg = 0;
      ChangeDmg10m = 0;
      ChangeDmgMax = 0;
      WeaponWeight = 0;
      ModHsBonus = 0;
      ModDmg = 0;
      ModSpread = 0;
      WeaponRate = 0;
      ModRate = 0;
      ModCapacity = 0;
      ModReload = 0;
      ModWeight = 0;
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
          ModCapacity = SerenityCsp[6];
          ModReload = SerenityCsp[7];
          break;
        case 'F44 Dominance':
          ModCapacity = DominanceCsp[6];
          ModReload = DominanceCsp[7];
          break;
        case 'Warmonger':
          ModCapacity = WarmongerCsp[6];
          ModReload = WarmongerCsp[7];
          break;
        case 'WOUND Auto Rifle':
          ModCapacity = WoundCsp[6];
          ModReload = WoundCsp[7];
          break;
        case 'AVG Auto Rifle':
          ModCapacity = AvgCsp[6];
          ModReload = AvgCsp[7];
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
          ModHsBonus = SerenityCsp[3];
          ModCapacity = SerenityCsp[4];
          ModWeight = SerenityCsp[5];
          break;
        case 'F44 Dominance':
          ModHsBonus = DominanceCsp[3];
          ModCapacity = DominanceCsp[4];
          ModWeight = SerenityCsp[5];
          break;
        case 'Warmonger':
          ModHsBonus = WarmongerCsp[3];
          ModCapacity = WarmongerCsp[4];
          ModWeight = WarmongerCsp[5];
          break;
        case 'WOUND Auto Rifle':
          ModHsBonus = WoundCsp[3];
          ModCapacity = WoundCsp[4];
          ModWeight = WoundCsp[5];
          break;
        case 'AVG Auto Rifle':
          ModHsBonus = AvgCsp[3];
          ModCapacity = AvgCsp[4];
          ModWeight = AvgCsp[5];
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
          ModRate = SerenityCsp[1];
          ModSpread = SerenityCsp[2];
          break;
        case 'F44 Dominance':
          ModDmg = DominanceCsp[0];
          ModRate = DominanceCsp[1];
          ModSpread = DominanceCsp[2];
          break;
        case 'Warmonger':
          ModDmg = WarmongerCsp[0];
          ModRate = WarmongerCsp[1];
          ModSpread = WarmongerCsp[2];
          break;
        case 'WOUND Auto Rifle':
          ModDmg = WoundCsp[0];
          ModRate = WoundCsp[1];
          ModSpread = WoundCsp[2];
          break;
        case 'AVG Auto Rifle':
          ModDmg = AvgCsp[0];
          ModRate = AvgCsp[1];
          ModSpread = AvgCsp[2];
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
