class Fetches {
  'use strict';
  #_responseObjs;
  //@param array urls [path1] | [path1,path2] | ...
  jsonObjs(urls) {
      return new Promise((resolve) => {
          (async () => {
              try {
                  const fetchUrlPromises = urls.map(
                      url => fetch(url,{method:'GET'})
                          .then(response => {
                              if (response.ok) {
                                  return response.json();
                              }
                              throw new Error('Network response was not ok');
                          })
                  );
                  this.#_responseObjs = await Promise.all(fetchUrlPromises);
                  resolve();
              } catch (error) {
                  console.error(error);
              }
          })();
      }).then(() => {
          return this.#_responseObjs;    //urlsと同じ数の配列が返る [objs1] | [objs1,objs2] | ...
      });
  }
}
const _path1 = '1_AR.json';
const _path2 = '3_SMG.json';
const _path3 = '5_SR.json';
let jsondata;
let _obj2;
let _obj3;
function makeObj(){
  (new Fetches()).jsonObjs([_path1,_path2,_path3])
      .then((res) => {
          [jsondata,_obj2,_obj3] = res;
          render();
      });
};
function render() {
    let WeaponKey =document.getElementById('WeaponForm').WeaponSelect.value
    let WeaponReloadStyle = 0;
    let WeaponRateKey = 0;
    let WeaponAdsKey = 0;
    let WeaponCcKey = 0;
    let WeaponCdKey = 0;
    let WeaponC10mKey = 0;
    let WeaponCmaxKey = 0;
    let WeaponDmg = 0;
    let WeaponHsBonus = 0;
    let WeaponReloadAmount =0;
    let WeaponReloadDuration = 0;
    let WeaponPellets = 0;
    let WeaponSpread = 0;
    if(WeaponKey==='none'){
    }else{
    if(typeof jsondata[WeaponKey]['Reload']['Reload_Bullets_Individually']==='undefined'){
      WeaponReloadStyle = 0;
    }else if(jsondata[WeaponKey]['Reload']['Reload_Bullets_Individually'] === 'true'){
      WeaponReloadStyle = 1;
    }else{
      WeaponReloadStyle = 0;
    };

    if(jsondata[WeaponKey]['Fully_Automatic']['Enable'] = 'true'){
      WeaponRateKey = jsondata[WeaponKey]['Fully_Automatic']['Fire_Rate']+4
    }else if(jsondata[WeaponKey]['Burstfire']['Enable'] = 'true'){
      WeaponRateKey = (20/jsondata[WeaponKey]['Shooting']['Delay_Between_Shots'])*jsondata[WeaponKey]['Burstfire']['Shots_Per_Burst']
    }else if(jsondata[WeaponKey]['Shooting']['Delay_Between_Shots']){
      WeaponRateKey = 20/jsondata[WeaponKey]['Shooting']['Delay_Between_Shots']
    }else{
      WeaponRateKey = 0;
    };

    if(typeof jsondata[WeaponKey]['Sneak']==='undefined'){
      WeaponAdsKey = 0;
    }else if(jsondata[WeaponKey]['Sneak']['Enable'] = 'true'){
      WeaponAdsKey = jsondata[WeaponKey]['Sneak']['Zoom_Bullet_Spread'];
    }else{
      WeaponAdsKey = 0;
    };

    if(typeof jsondata[WeaponKey]['Critical_Hits']==='undefined'){
      WeaponCcKey = 0;
      WeaponCdKey = 0;
    }else if(jsondata[WeaponKey]['Critical_Hits']['Enable'] = 'true'){
      WeaponCcKey = jsondata[WeaponKey]['Critical_Hits']['Chance']/100;
      WeaponCdKey = jsondata[WeaponKey]['Critical_Hits']['Bonus_Damage'];
    }else{
      WeaponCcKey = 0;
      WeaponCdKey = 0;
    };

    if(typeof jsondata[WeaponKey]['Damage_Based_On_Flight_Time'] ==='undefined'){
      WeaponC10mKey = 0;
      WeaponCmaxKey = 0;
    }else if(jsondata[WeaponKey]['Damage_Based_On_Flight_Time']['Enable'] = 'true'){
      if(jsondata[WeaponKey]['Damage_Based_On_Flight_Time']['Minimum_Damage']>0&&jsondata[WeaponKey]['Damage_Based_On_Flight_Time']['Bonus_Damage_Per_Tick']>0){
      WeaponC10mKey = (jsondata[WeaponKey]['Damage_Based_On_Flight_Time']['Bonus_Damage_Per_Tick']/(jsondata[WeaponKey]['Shooting']['Projectile_Speed']/10))*10;
      WeaponCmaxKey = jsondata[WeaponKey]['Damage_Based_On_Flight_Time']['Minimum_Damage'];
      }else if(jsondata[WeaponKey]['Damage_Based_On_Flight_Time']['Minimum_Damage']<0&&jsondata[WeaponKey]['Damage_Based_On_Flight_Time']['Bonus_Damage_Per_Tick']<0){
        WeaponC10mKey = (jsondata[WeaponKey]['Damage_Based_On_Flight_Time']['Bonus_Damage_Per_Tick']/(jsondata[WeaponKey]['Shooting']['Projectile_Speed']/10))*10;
        WeaponCmaxKey = jsondata[WeaponKey]['Damage_Based_On_Flight_Time']['Minimum_Damage'];
      }else{
        WeaponC10mKey = 0;
        WeaponCmaxKey = 0;
      };

    }else{
      WeaponC10mKey = 0;
      WeaponCmaxKey = 0;
    };
    WeaponDmg = jsondata[WeaponKey]['Shooting']['Projectile_Damage'];
    WeaponHsBonus = jsondata[WeaponKey]['Headshot']['Bonus_Damage'];
    WeaponReloadAmount =jsondata[WeaponKey]['Reload']['Reload_Amount'];
    WeaponReloadDuration = jsondata[WeaponKey]['Reload']['Reload_Duration']
    WeaponPellets = jsondata[WeaponKey]['Shooting']['Projectile_Amount'];
    WeaponSpread = jsondata[WeaponKey]['Shooting']['Bullet_Spread'];
  };
    const WeaponCs =[
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
      WeaponCmaxKey
    ];
  Weapon[0] = WeaponCs[0];
  Weapon[1] = WeaponCs[1];
  Weapon[2] = WeaponCs[2];
  Weapon[3] = WeaponCs[3];
  Weapon[4] = WeaponCs[4];
  Weapon[5] = WeaponCs[5];
  Weapon[6] = WeaponCs[6];
  Weapon[7] = WeaponCs[7];
  Weapon[8] = WeaponCs[8];
  Result[12] = (WeaponCs[9]*WeaponCs[10]);
  Result[13] = WeaponCs[10];
  Result[14] = WeaponCs[11];
  Result[15] = WeaponCs[12];
  Weapon[9] = WeaponCs[13];
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
  Result[10] = Math.round( ((0.2 + Mod[6] + Addon[4])/0.2) * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 ) ;
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
}
//武器選択モジュール
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
  "Melee"
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
  {category:'SniperRifle', name:'Barnett the Deathbringer', value:'Barnett'},
  {category:'SniperRifle', name:'Car98k', value:'car98k'},
  {category:'SniperRifle', name:'Coldfang DMR', value:'Coldfang'},
  {category:'SniperRifle', name:'Colubrid .75 CAL', value:'colubrid'},
  {category:'SniperRifle', name:"Devil's Whisper", value:'devilswhisper'},
  {category:'SniperRifle', name:'EFX Photon Compressor', value:'photon'},
  {category:'SniperRifle', name:'Endseeker', value:'endseeker'},
  {category:'SniperRifle', name:'ENT Sniper Rifle', value:'ent'},
  {category:'SniperRifle', name:'Flying Serpent', value:'flyingserpent'},
  {category:'SniperRifle', name:'Graveless DMR', value:'graveless'},
  {category:'SniperRifle', name:'Helheim DMR', value:'Helheim'},
  {category:'SniperRifle', name:'Horizon Rifle', value:'horizon'},
  {category:'SniperRifle', name:'Hunting Rifle', value:'chunt'},
  {category:'SniperRifle', name:'Ironbark Sniper Rifle', value:'ironbark'},
  {category:'SniperRifle', name:'Knightfall', value:'Knightfall'},
  {category:'SniperRifle', name:'Lisrithe, Life and the Eternal Rest', value:'Lisrithe'},
  {category:'SniperRifle', name:"Lisrithe's Wish", value:'Lis2'},
  {category:'SniperRifle', name:'M850 Smogg Sniper Rifle', value:'smog'},
  {category:'SniperRifle', name:'Mark-7 EBR', value:'mark7'},
  {category:'SniperRifle', name:'Mellowwood', value:'mellowwood'},
  {category:'SniperRifle', name:'Minerva Anti-Matter Rifle', value:'minerva'},
  {category:'SniperRifle', name:'Moon Night', value:'moonnight'},
  {category:'SniperRifle', name:'Phobia SR-22', value:'phobia'},
  {category:'SniperRifle', name:'Pierce Sniper Rifle', value:'pierce'},
  {category:'SniperRifle', name:'PMG HékateⅡ', value:'hekate'},
  {category:'SniperRifle', name:'Rabbit Silencer', value:'Rabbitsilencer'},
  {category:'SniperRifle', name:'RSK Sniper Rifle', value:'rsk'},
  {category:'SniperRifle', name:'Shadowvein', value:'shadowvein'},
  {category:'SniperRifle', name:'Skullcrusher', value:'skullcrusher'},
  {category:'SniperRifle', name:'Skullcrusher QD', value:'cu_skullcrusher'},
  {category:'SniperRifle', name:"Syndra's Bow", value:'syndra'},
  {category:'SniperRifle', name:'The Zomzeozy', value:'zom'},
  {category:'SniperRifle', name:'Third Eye DMR', value:'thirdeye'},
  {category:'SniperRifle', name:'Trueflight Bow', value:'true'},
  {category:'SniperRifle', name:'UDED Rail Rifle', value:'uded'},
  {category:'SniperRifle', name:'Wingmen', value:'wingmen'},
  {category:'Carbine', name:'Bayou Short Rifle', value:'Bayou'},
  {category:'Carbine', name:'Bayou Short Rifle[アタッチメント]', value:'Bayou_at'},
  {category:'Carbine', name:'CARB-7', value:'carb7'},
  {category:'Carbine', name:'CARB-7[アタッチメント]', value:'carb7_at'},
  {category:'Carbine', name:'Chimaera CQB', value:'Chimaera'},
  {category:'Carbine', name:'Chimaera CQB[アタッチメント]', value:'Chimaera_at'},
  {category:'Carbine', name:'ECR-11 Carbine', value:'ecr11'},
  {category:'Carbine', name:'ECR-11 Carbine[アタッチメント]', value:'carb7_at'},
  {category:'Carbine', name:'Fiendsbreath Carbine', value:'fiendsbreath'},
  {category:'Carbine', name:'Fiendsbreath Carbine[アタッチメント]', value:'fiend_st'},
  {category:'Carbine', name:'Gritt Carbine', value:'Gritt'},
  {category:'Carbine', name:'Gritt Carbine[アタッチメント]', value:'Gritt_at'},
  {category:'Carbine', name:'Hellhound Short Rifle', value:'hellhound'},
  {category:'Carbine', name:'Hellhound Short Rifle[アタッチメント]', value:'hell_at'},
  {category:'Carbine', name:'Maelstrom Carbine', value:'Maelstrom'},
  {category:'Carbine', name:'Maelstrom Carbine[アタッチメント]', value:'maelstrom_at'},
  {category:'Carbine', name:'Maelstrom CQB', value:'cu_Maelstrom'},
  {category:'Carbine', name:'Maelstrom CQB[アタッチメント]', value:'cu_maelstrom_at'},
  {category:'Carbine', name:'Shepherd 055', value:'Shepherd'},
  {category:'Carbine', name:'Shepherd 055[アタッチメント]', value:'Shepherd_at'},
  {category:'Carbine', name:'Varg G5', value:'Varg'},
  {category:'Carbine', name:'Varg G5[アタッチメント]', value:'Varg_at'},
  {category:'Special', name:'AWR Gatling Laser', value:'awr'},
  {category:'Special', name:'Brugo Homing Missile', value:'Brugo'},
  {category:'Special', name:'F52 Ifrit Pigcooker', value:'ifrit'},
  {category:'Special', name:'F60 Ignis Firestarter', value:'ignis'},
  {category:'Special', name:'GL3 Handy Mortar', value:'mortar'},
  {category:'Special', name:'GL90 Warbringer', value:'warbringer'},
  {category:'Special', name:'GL 88 Carpet Bomber', value:'carpet'},
  {category:'Special', name:'Golembreaker', value:'golembreaker'},
  {category:'Special', name:'Hi-K0 Launcher', value:'hikolaunch'},
  {category:'Special', name:'Hi-K0 Launcher[Stardust]', value:'2hikolaunch'},
  {category:'Special', name:'Hi-K0 Launcher 2021', value:'hiko2021'},
  {category:'Special', name:'HLL Magic Launcher', value:'HLL'},
  {category:'Special', name:'Jikill Sonic Launcher', value:'jikill'},
  {category:'Special', name:'Kali Magic Launcher', value:'kali'},
  {category:'Special', name:'Keg Bomb', value:'keg'},
  {category:'Special', name:'Kerkox Mana Scroller', value:'Kerkox'},
  {category:'Special', name:'Love Launcher', value:'love'},
  {category:'Special', name:'MK20 Mana Waster', value:'minigun'},
  {category:'Special', name:'PKB-8004', value:'pkb'},
  {category:'Special', name:'Princess Crossbow', value:'princess'},
  {category:'Special', name:'Ragnis Rocket Launcher', value:'ragnis'},
  {category:'Special', name:"Rania's Chocolate Javelin", value:'javelin2'},
  {category:'Special', name:"Rania's Crossbow", value:'Rania'},
  {category:'Special', name:"Rania's Javelin", value:'javelin'},
  {category:'Special', name:'Rubber Shuriken', value:'rubbershuriken'},
  {category:'Special', name:'S.O.L Rocket Launcher', value:'sol'},
  {category:'Special', name:'Spear of Judgement', value:'judgementspear'},
  {category:'Special', name:'T-X01 Anti-matter Missile', value:'antitank'},
  {category:'Special', name:'T-X Homing Nuke', value:'TX'},
  {category:'Special', name:'Tempest Grenade Launcher', value:'tempest'},
  {category:'Special', name:'The Bazooka', value:'cbazooka'},
  {category:'Special', name:'The Deathmachine', value:'deathmachine'},
  {category:'Special', name:'The Eliminator', value:'eliminator'},
  {category:'Special', name:'TN-43 Remote TNT', value:'remote'},
  {category:'Special', name:'Trauma', value:'trauma'},
  {category:'Special', name:'Tigerhorse', value:'cu_trauma'},
  {category:'Special', name:'TX-500 Amber Cannon[直進]', value:'amber'},
  {category:'Special', name:'TX-500 Amber Cannon[ホーミング]', value:'amber2'},
  {category:'Special', name:'Vateth Homing Missile', value:'Vateth'},
  {category:'Special', name:"Vely's Party Cracker", value:'Velys'},
  {category:'Staves', name:'Âconi, Fifth Element of the Arctic', value:'lame'},
  {category:'Staves', name:"Âconi's Wistfulness", value:'lame21'},
  {category:'Staves', name:'Arcane Bomb', value:'lame22'},
  {category:'Staves', name:"Arcane Bomb", value:'arcaneexplosion'},
  {category:'Staves', name:"Breir's Javelin", value:'breir'},
  {category:'Staves', name:'Enchanted Rod', value:'enchantedrod'},
  {category:'Staves', name:'Flame Rod', value:'flamerod'},
  {category:'Staves', name:'Grim Reaper', value:'grimreaper'},
  {category:'Staves', name:'Ice Rod', value:'icerod'},
  {category:'Staves', name:'Kyugetu', value:'kyugetu'},
  {category:'Staves', name:'Nahhra, Devourer of Worlds', value:'Nahhra'},
  {category:'Staves', name:'Phantom Bolt', value:'Phantom'},
  {category:'Staves', name:'Pumpkin Wand', value:'pumpkinwand'},
  {category:'Staves', name:'Shadow Bolt', value:'cu_Phantom'},
  {category:'Staves', name:'Rod', value:'rod'},
  {category:'Staves', name:'Staff of Barrage', value:'sob'},
  {category:'Staves', name:'Staff of Cursing', value:'soc'},
  {category:'Staves', name:'Staff of Eda', value:'eda'},
  {category:'Staves', name:'Staff of Elna', value:'soe'},
  {category:'Staves', name:'Staff of Glorious', value:'sog'},
  {category:'Staves', name:'Staff of Release', value:'sor'},
  {category:'Staves', name:'Staff of Sorrow', value:'sorrow'},
  {category:'Staves', name:'Staff of Spirit', value:'sos'},
  {category:'Staves', name:'Staff of Vesta', value:'Vesta'},
  {category:'Staves', name:'Staff of Zisca', value:'Zisca'},
  {category:'Staves', name:'Worldender', value:'worldender'},
  {category:'Staves', name:'Yuki Kaze', value:'yuki'},
  {category:'Secondary', name:'Alien Phaser', value:'alienpistol'},
  {category:'Secondary', name:'Alpha Phaser', value:'alphaphaser'},
  {category:'Secondary', name:'Arda Sure Shot', value:'arda'},
  {category:'Secondary', name:'Aries', value:'aries'},
  {category:'Secondary', name:'Arizona', value:'arizona'},
  {category:'Secondary', name:'Beta Phaser', value:'betaphaser'},
  {category:'Secondary', name:'Book of Mother Earth', value:'bookofmother'},
  {category:'Secondary', name:'Desert Falcon', value:'desertfalcon'},
  {category:'Secondary', name:'Desertdog MMG', value:'Desertdog'},
  {category:'Secondary', name:'Desolation', value:'deso'},
  {category:'Secondary', name:'Eclipse', value:'Eclipse'},
  {category:'Secondary', name:'Forty Three Pistol', value:'43'},
  {category:'Secondary', name:'G7 Self Defence', value:'g7'},
  {category:'Secondary', name:"Gadrec's Sawed-off", value:'gadrec'},
  {category:'Secondary', name:'GL1 Grenade Shooter', value:'GL1'},
  {category:'Secondary', name:'GL4 Compact Launcher', value:'GL4'},
  {category:'Secondary', name:'GL99 Micro Missile Launcher', value:'gl99'},
  {category:'Secondary', name:'Golden One', value:'goldenone'},
  {category:'Secondary', name:'Golden TK[通常]', value:'goldtk'},
  {category:'Secondary', name:'Golden TK[サイレンサー]', value:'goldtk2'},
  {category:'Secondary', name:'Golden West', value:'gold'},
  {category:'Secondary', name:'Golden West 2022', value:'gold2'},
  {category:'Secondary', name:'H1 Goblin Hunter', value:'goblin'},
  {category:'Secondary', name:"Harden's Blunderbuss", value:'Harden'},
  {category:'Secondary', name:'Joker', value:'joker'},
  {category:'Secondary', name:'Karc-8', value:'Karc'},
  {category:'Secondary', name:'Limewillow', value:'limewillow'},
  {category:'Secondary', name:'Lonewolf', value:'lonewolf'},
  {category:'Secondary', name:'Loveling♥', value:'lovelove'},
  {category:'Secondary', name:'M-P4 Battlecraft Pistol', value:'battlecraft'},
  {category:'Secondary', name:'Modernbick Shotgun', value:'modern'},
  {category:'Secondary', name:'Moria Nagan', value:'morianagan'},
  {category:'Secondary', name:'N1 Hidden Gun', value:'hiddengun'},
  {category:'Secondary', name:'Old West', value:'oldwest'},
  {category:'Secondary', name:'Old West Fanning Shot', value:'oldf'},
  {category:'Secondary', name:'Old West Triple Action', value:'old3'},
  {category:'Secondary', name:'P5 Auto Pistol', value:'p5'},
  {category:'Secondary', name:'P77 Quad Action', value:'quadaction'},
  {category:'Secondary', name:'P-20 Stormcaller', value:'stormcaller'},
  {category:'Secondary', name:'PocketCannon', value:'pocketcannon'},
  {category:'Secondary', name:'Quickcleave', value:'Quickcleave'},
  {category:'Secondary', name:'Red Mongoose', value:'redmongoose'},
  {category:'Secondary', name:'Silver Old West', value:'olds'},
  {category:'Secondary', name:'Sixfinger', value:'sixfinger'},
  {category:'Secondary', name:'Sling Shot', value:'demonpower'},
  {category:'Secondary', name:'TC5 Magicka', value:'tc5'},
  {category:'Secondary', name:'The Etna', value:'etna'},
  {category:'Secondary', name:'UZH Portable SMG', value:'uzh'},
  {category:'Secondary', name:'Vunnaq', value:'vunna'},
  {category:'Secondary', name:'Vunnaq Fullauto', value:'vunnaf'},
  {category:'Secondary', name:'Wandrak Hand Cannon', value:'wardrak'},
  {category:'Secondary', name:'Water Pistol', value:'waterpistol'},
  {category:'Secondary', name:"Wildville ‘75", value:'Wildville'},
  {category:'Secondary', name:'', value:'thetester'},
  {category:'Secondary', name:'', value:'thetester2'},
  {category:'Melee', name:'Aodhlugh, Creator of Volcanoes', value:'Aodhlugh'},
  {category:'Melee', name:"Az'gan, The matter of darkness[近接]", value:'azz'},
  {category:'Melee', name:"Az'gan, The matter of darkness[射撃]", value:'azz_at'},
  {category:'Melee', name:'Bloody Axe', value:'bloodyaxe'},
  {category:'Melee', name:'Broken Dahlia', value:'dahlia'},
  {category:'Melee', name:'Cultist Knife', value:'cultist'},
  {category:'Melee', name:'Gravity Axe', value:'gravity'},
  {category:'Melee', name:'kanabou', value:'kanabou'},
  {category:'Melee', name:'Manablade', value:'manablade'},
  {category:'Melee', name:'Mine Uchi', value:'mineuchi'},
  {category:'Melee', name:'Ninja Kunai', value:'kunai'},
  {category:'Melee', name:'Nyr, Thunderblade of Oath Keeper', value:'Nyr'},
  {category:'Melee', name:'SA-SA', value:'sasa'},
  {category:'Melee', name:'Shadowfang', value:'Shadowfang'},
  {category:'Melee', name:'StarBlade', value:'starblade'},
  {category:'Melee', name:'Sword of Faith', value:'swordoffaith'},
  {category:'Melee', name:'The Brute', value:'Brute'},
  {category:'Melee', name:'The Punisher', value:'punisher'},
  {category:'Melee', name:'Valhalla', value:'Valhalla'},
  {category:'Melee', name:'Warblade of Thanatos', value:'thanatos'},
  {category:'Melee', name:'Windsong Polearm', value:'Windsong'},
  {category:'Melee', name:"Witch's Broom", value:'broom'},
  {category:'Melee', name:"Xeg'then, Initiator of Sundown", value:'xeg'},
  {category:'Melee', name:'Zan Getsu', value:'zangetsu'}
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
  firstSelect.setAttribute('value','none');
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
  makeObj();
};
document.getElementById('WeaponForm').onchange = function() {
  makeObj();
};
document.getElementById('ModForm').onchange = function() {
  makeObj();
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
    makeObj();
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
  makeObj();
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
    makeObj();
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
  makeObj();
};