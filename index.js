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
    case 'Serenity':
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
      Weapon[9] = SerenityCsp[8];
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
    case 'Dominance':
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
      Weapon[9] = DominanceCsp[8];
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
    case 'warmonger':
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
      Weapon[9] = WarmongerCsp[8];
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
    case 'wound':
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
    case 'avg':
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
const WeaponTypes=[
  "AssaultRifle",
  "SMG",
  "Shotgun",
  "LMG",
  "SniperRifle",
  "Carbine",
  "Special",
  "Staves",
  "Secondary",
  "Staves",
  "その他"
]
const WeaponList = [
  {category:'AssaultRifle', name:'A-12 Plastic Rifle', value:'weird'},
  {category:'AssaultRifle', name:'AK Rifle', value:'cak'},
  {category:'AssaultRifle', name:'AVG Auto Rifle', value:'avg'},
  {category:'AssaultRifle', name:'Cilzret Fullauto', value:'Cilzret'},
  {category:'AssaultRifle', name:'Divine Long Bow', value:'divine'},
  {category:'AssaultRifle', name:'F44 Dominance', value:'Dominance'},
  {category:'AssaultRifle', name:'FAZZI Automana', value:'fazzi'},
  {category:'AssaultRifle', name:'GEO Mana Rifle', value:'geo'},
  {category:'AssaultRifle', name:'Gerard Auto Rifle', value:'gerard'},
  {category:'AssaultRifle', name:'Golden AK[フルオート]', value:'goldak'},
  {category:'AssaultRifle', name:'Golden AK[セミオート]', value:'goldak2'},
  {category:'AssaultRifle', name:'GROUZA', value:'groza'},
  {category:'AssaultRifle', name:'Hamlock AR', value:'hemlock'},
  {category:'AssaultRifle', name:'Harbinger Auto Rifle', value:'harbinger'},
  {category:'AssaultRifle', name:'Hopekeeper', value:'hopekeeper'},
  {category:'AssaultRifle', name:'JAME Manaburst Rifle', value:'jame'},
  {category:'AssaultRifle', name:'Lexxi Burst Rifle', value:'lexxi'},
  {category:'AssaultRifle', name:'Luna Crossbow', value:'lunabow'},
  {category:'AssaultRifle', name:'M2002', value:'M2002'},
  {category:'AssaultRifle', name:'MDR', value:'MDR'},
  {category:'AssaultRifle', name:'MR-4 Smokey', value:'smokey'},
  {category:'AssaultRifle', name:'MR-4 Smokey EXT', value:'cu_smokey'},
  {category:'AssaultRifle', name:'MR-12 Automana', value:'automana'},
  {category:'AssaultRifle', name:'MR-52 Cyclone', value:'cyclone'},
  {category:'AssaultRifle', name:'MR-55 Stormfury', value:'stormfury'},
  {category:'AssaultRifle', name:'MR-89 Doubletail', value:'Doubletail'},
  {category:'AssaultRifle', name:'MR-94 Gargoyle', value:'gargoyle'},
  {category:'AssaultRifle', name:'MRC-1 Silvermist', value:'Silvermist'},
  {category:'AssaultRifle', name:'NURF Water Rifle', value:'waterar'},
  {category:'AssaultRifle', name:'Ouroboros AR', value:'ouro'},
  {category:'AssaultRifle', name:'Serenity Auto Rifle', value:'Serenity'},
  {category:'AssaultRifle', name:'Starfaller', value:'starfaller'},
  {category:'AssaultRifle', name:'The Shooting Star', value:'shootingstar'},
  {category:'AssaultRifle', name:'Twinvision Rifle', value:'twinvision'},
  {category:'AssaultRifle', name:'Type 89', value:'ctype'},
  {category:'AssaultRifle', name:'Tyrant Automana', value:'Tyrant'},
  {category:'AssaultRifle', name:'UDON-SKP Automana', value:'udon'},
  {category:'AssaultRifle', name:'VK-74 FLETLINE', value:'fletline'},
  {category:'AssaultRifle', name:'Warewolf AR', value:'warewolf'},
  {category:'AssaultRifle', name:'Warmonger', value:'warmonger'},
  {category:'AssaultRifle', name:'WOUND Auto Rifle', value:'wound'},
  {category:'AssaultRifle', name:'XR-4 Auto Rifle', value:'xr4'},
  {category:'SMG', name:'Anarchy', value:'anarchy'},
  {category:'SMG', name:'Brawler Burst PDW', value:'brawler'},
  {category:'SMG', name:'Brigit, the bringer of flame', value:'Brigit'},
  {category:'SMG', name:'Demonflare', value:'demonflare'},
  {category:'SMG', name:'Doorknocker', value:'door'},
  {category:'SMG', name:'Drumming Victory', value:'cu_victory'},
  {category:'SMG', name:'Envy', value:'Envy'},
  {category:'SMG', name:'FW-5 Azuris PDW', value:'azuris'},
  {category:'SMG', name:'Gabriel PDW', value:'Gabriel'},
  {category:'SMG', name:'GG36 SMG', value:'gg36'},
  {category:'SMG', name:'H.E.A.T 5', value:'heat5'},
  {category:'SMG', name:'Hystis 535', value:'Hystis'},
  {category:'SMG', name:'K92 Tiamat', value:'tiamat'},
  {category:'SMG', name:'K95 Basilisk', value:'Basilisk'},
  {category:'SMG', name:'Lynn SMG', value:'lynn'},
  {category:'SMG', name:'Nox SMG', value:'nox'},
  {category:'SMG', name:'P9000 Mana PDW', value:'P9000'},
  {category:'SMG', name:"PP90N1 Dummy's", value:'pp90n1'},
  {category:'SMG', name:"Rogue's Shooter", value:'rogues'},
  {category:'SMG', name:'Silent Treatment', value:'Silent'},
  {category:'SMG', name:'The Bumblebee', value:'bumblebee'},
  {category:'SMG', name:'Thousand Cut', value:'thousand'},
  {category:'SMG', name:'Type6 Hicycle PDW', value:'type6'},
  {category:'SMG', name:'Victory', value:'victory'},
  {category:'SMG', name:'VMT-2 Mice SMG', value:'vmt'},
  {category:'SMG', name:'Windmaker', value:'windmaker'},
  {category:'SMG', name:'X-1 Ammit', value:'Ammit'},
  {category:'SMG', name:'XS-5 Nether Beatle', value:'netherbeatle'},
  {category:'SMG', name:'XS-21 Pandora PDW', value:'pandora'},
  {category:'Shotgun', name:'AA122 Mana Shotgun', value:'aa12'},
  {category:'Shotgun', name:"Bazl's Blunderbuss", value:'bazl'},
  {category:'Shotgun', name:'Black Thunder', value:'blackThunder'},
  {category:'Shotgun', name:'Blondie[散弾]', value:'blond'},
  {category:'Shotgun', name:'Blondie[フラグ]', value:'blond2'},
  {category:'Shotgun', name:'Crescent of Asha', value:'Asha'},
  {category:'Shotgun', name:'Crimson', value:'Crimson'},
  {category:'Shotgun', name:'E420 Hydra', value:'Hydra'},
  {category:'Shotgun', name:'F-85 The Raven', value:'raven'},
  {category:'Shotgun', name:'Gauss Rifle', value:'cgauss'},
  {category:'Shotgun', name:"Ghahr's Shotgun", value:'Ghahr'},
  {category:'Shotgun', name:"Howard's Double Barrel", value:'howard'},
  {category:'Shotgun', name:'K-RAR Mana Splasher', value:'krar'},
  {category:'Shotgun', name:'LF-14 Auto Shotgun', value:'lf14'},
  {category:'Shotgun', name:'Lios Double Barrel', value:'lios'},
  {category:'Shotgun', name:"Lusha's Harp", value:'harp'},
  {category:'Shotgun', name:'M890 Beanshot', value:'m890'},
  {category:'Shotgun', name:'Ogrehunt', value:'ogrehunt'},
  {category:'Shotgun', name:'Ogrehunt Slug', value:'sogrehunt'},
  {category:'Shotgun', name:'OgreKiller', value:'cu_ogrehunt'},
  {category:'Shotgun', name:'Pianis Mana Splasher', value:'Pianis'},
  {category:'Shotgun', name:'Pianis Mana Splasher Slug', value:'sPianis'},
  {category:'Shotgun', name:'Sabertooth Shotgun', value:'sabertooth'},
  {category:'Shotgun', name:'SG80 Evicserate', value:'evis'},
  {category:'Shotgun', name:'Spacemaker', value:'spacemaker'},
  {category:'Shotgun', name:'STUD Shotgun', value:'stud'},
  {category:'Shotgun', name:'The 1980', value:'1990'},
  {category:'Shotgun', name:'The Extra', value:'extra'},
  {category:'Shotgun', name:'The Thunder', value:'Thunder'},
  {category:'Shotgun', name:'Troublemaker Shotgun', value:'trouble'},
  {category:'LMG', name:'Brutus MG', value:'Brutus'},
  {category:'LMG', name:'GILT Hypercycle LMG[高レート]', value:'gilt'},
  {category:'LMG', name:'GILT Hypercycle LMG[高精度]', value:'gilt2'},
  {category:'LMG', name:'Gorgon 114 LMG', value:'Gorgon'},
  {category:'LMG', name:'Life Barrage Wand', value:'lifebarrage'},
  {category:'LMG', name:'M666 Spatfire', value:'spit'},
  {category:'LMG', name:'M757 Cleaner LMG', value:'M757'},
  {category:'LMG', name:'M9190 Beehive', value:'bee'},
  {category:'LMG', name:'MG-80 Heavy Machinegun', value:'MG80'},
  {category:'LMG', name:'MK4 Machine Gun', value:'mk4'},
  {category:'LMG', name:'MK7 Baretooth', value:'baretooth'},
  {category:'LMG', name:'MK18 Leaf Cleaner', value:'leafcleaner'},
  {category:'LMG', name:'PBP-14', value:'PBP14'},
  {category:'LMG', name:'Silverstein MG', value:'silverstein'},
  {category:'LMG', name:'TT4 Nefaris LMG', value:'nefaris'},
  {category:'LMG', name:'TT4 Nefaris MMG', value:'cu_nefaris'},
  {category:'LMG', name:'	TT66 Doom LMG', value:'TT666'},
  {category:'LMG', name:'XL9 Mozer', value:'mozer'},
];
const categorySelect2 = document.getElementById('TypeSelect');
const subCategorySelect2 = document.getElementById('WeaponSelect');
WeaponTypes.forEach(category => {
  const option = document.createElement('option');
  option.textContent = category;

  categorySelect2.appendChild(option);    
});
categorySelect2.addEventListener('input', () => {

  // 小分類のプルダウンをリセット
  const options = document.querySelectorAll('#WeaponSelect > option');
  options.forEach(option => {
    option.remove();
  });

  // 小分類のプルダウンに「選択してください」を加える
  const firstSelect = document.createElement('option');
  firstSelect.textContent = '武器を選択してください';
  firstSelect.setAttribute('value',null);
  subCategorySelect2.appendChild(firstSelect);

  // 小分類を選択（クリック）できるようにする
  subCategorySelect2.disabled = false;

  // 大分類が選択されていない（「選択してください」になっている）とき、小分類を選択（クリック）できないようにする
  if (categorySelect2.value == 'blank') {
    subCategorySelect2.disabled = true;
    return;
  }
  // 大分類で選択されたカテゴリーと同じ小分類のみを、プルダウンの選択肢に設定する
  WeaponList.forEach(subCategory => {
    if (categorySelect2.value == subCategory.category) {
      const option = document.createElement('option');
      option.textContent = subCategory.name;
      option.setAttribute('value',subCategory.value)
      subCategorySelect2.appendChild(option);
    };
  });
});
//トリガー
document.getElementById('TypeForm').onchange = function() {
  WeaponMod();
  ResultCalc();
};
document.getElementById('WeaponForm').onchange = function() {
  WeaponMod();
  ResultCalc();
};
document.getElementById('ModForm').onchange = function() {
  WeaponMod();
  ResultCalc();
};
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