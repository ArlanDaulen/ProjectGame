import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private top100 = [
    {id: 1, name: "STALKER Clear Sky", url: "https://s1.torrents-igruha.org/uploads/posts/2020-05/1590357456__cover.jpg"},
    {id: 2, name: "Prey 2017 + Mooncrash", url: "https://s1.torrents-igruha.org/uploads/posts/2020-05/1590788788__cover.jpg"},
    {id: 3, name: "The Elder Scrolls 5 Skyrim Special Edition", url: "https://s1.torrents-igruha.org/uploads/posts/2020-05/1590797610__cover.jpg"},
    {id: 4, name: "Halo The Master Chief Collection", url: "https://s1.torrents-igruha.org/uploads/posts/2019-12/1575573327_2.jpg"},
    {id: 5, name: "Man of Medan", url: "https://s1.torrents-igruha.org/uploads/posts/2019-08/1567091246__cover.jpg"},
    {id: 6, name: "Batman Arkham City", url: "https://s1.torrents-igruha.org/uploads/posts/2015-10/1445370201_3728.png"},
    {id: 7, name: "Spec Ops The Line", url: "https://s1.torrents-igruha.org/uploads/posts/2015-10/1445362589_spec-ops-the-line-torrent-game-pc-download.jpg"},
    {id: 8, name: "The Evil Within 2", url: "https://s1.torrents-igruha.org/uploads/posts/2017-08/1501804752__cover.jpg"},
    {id: 9, name: "Half-Life 1", url: "https://s1.torrents-igruha.org/uploads/posts/2020-05/1589842330__cover.jpg"}
  ]
  private top50 = [
    {id: 1, name: "Batman Arkham Knight", url: "https://s1.torrents-igruha.org/uploads/posts/2015-05/1432029107_batman_arkham_knight-2479245.jpg"},
    {id: 2, name: "Dead Space 2", url: "https://s1.torrents-igruha.org/uploads/posts/2015-11/1446747448_dead-space-2_us_esrb_pc.jpg"},
    {id: 3, name: "Observation", url: "https://s1.torrents-igruha.org/uploads/posts/2019-05/1558450656__cover.jpg"},
    {id: 4, name: "Assassins Creed 2", url: "https://s1.torrents-igruha.org/uploads/posts/2020-06/1591106598__cover.jpg"},
    {id: 5, name: "Fallout 3", url: "https://s1.torrents-igruha.org/uploads/posts/2015-05/1431705828_fallout-3-game-of-the-year-edition-1.jpg"},
    {id: 6, name: "BioShock 2 Remastered", url: "https://s1.torrents-igruha.org/uploads/posts/2016-09/1474223628__cover.jpg"},
    {id: 7, name: "Far Cry 3 ", url: "https://s1.torrents-igruha.org/uploads/posts/2020-05/1590423364__cover.jpg"},
    {id: 8, name: "BioShock Infinite The Complete Edition", url: "https://s1.torrents-igruha.org/uploads/posts/2015-07/1436276345_bioshek.jpg"},
    {id: 9, name: "Heavy Rain", url: "https://s1.torrents-igruha.org/uploads/posts/2019-03/1553455002__cover.jpg"}
  ]
  private top20: any[] = [
    {id: 1, name: "Star Wars Jedi Fallen Order", url: "https://s1.torrents-igruha.org/uploads/posts/2019-09/1569491270__cover.jpg"},
    {id: 2, name: "Assassin's Creed 3", url: "https://s1.torrents-igruha.org/uploads/posts/2017-12/1514555669__cover.jpg"},
    {id: 3, name: "Mafia Definitive Edition", url: "https://s1.torrents-igruha.org/uploads/posts/2020-05/1589409570__cover.jpg"},
    {id: 4, name: "Still There", url: "https://s1.torrents-igruha.org/uploads/posts/2019-11/1574348481__cover.jpg"},
    {id: 5, name: "GTA 5 Online", url: "https://s1.torrents-igruha.org/uploads/posts/2020-05/1589567543_7ef9f3fd87aaa7714d900cbbf06377b5.jpg"},
    {id: 6, name: "Tell Me Why", url: "https://s1.torrents-igruha.org/uploads/posts/2019-11/1574504203_4.jpg"},
    {id: 7, name: "Fallout New Vegas", url: "https://s1.torrents-igruha.org/uploads/posts/2017-11/1512058608__cover.jpg"},
    {id: 8, name: "Need for Speed Most Wanted 2005", url: "https://s1.torrents-igruha.org/uploads/posts/2015-06/1435606324_black_edition.jpg"},
    {id: 9, name: "Control", url: "https://s1.torrents-igruha.org/uploads/posts/2020-03/1585267153__cover.jpg"}
  ]
  private survival: any[] = [
    {id: 1, name: "The Survivalists", url: "https://s1.torrents-igruha.org/uploads/posts/2020-02/1582390959__cover.jpg"},
    {id: 2, name: "Dead Age 2", url: "https://s1.torrents-igruha.org/uploads/posts/2020-02/1582551946__cover.jpg"},
    {id: 3, name: "Overland", url: "https://s1.torrents-igruha.org/uploads/posts/2019-09/1568981196__cover.jpg"},
    {id: 4, name: "Among Us", url: "https://s1.torrents-igruha.org/uploads/posts/2020-09/1600462510__cover.jpg"},
    {id: 5, name: "Raft", url: "https://s1.torrents-igruha.org/uploads/posts/2017-11/1510156926__cover.jpg"},
    {id: 6, name: "Project Zomboid", url: "https://s1.torrents-igruha.org/uploads/posts/2016-12/1482595470__cover.jpg"},
    {id: 7, name: "Outlast 2", url: "https://s1.torrents-igruha.org/uploads/posts/2016-10/1475690136__cover.jpg"},
    {id: 8, name: "The Long Dark", url: "https://s1.torrents-igruha.org/uploads/posts/2018-12/1545085601__cover.jpg"},
    {id: 9, name: "7 Days to Die", url: "https://s1.torrents-igruha.org/uploads/posts/2020-07/1593722089__cover.jpg"}
  ]
  private strategy: any[] = [
    {id: 1, name: "Desperados 3", url: "https://s1.torrents-igruha.org/uploads/posts/2020-06/1591050340__cover.jpg"},
    {id: 2, name: "Overland", url: "https://s1.torrents-igruha.org/uploads/posts/2019-09/1568981196__cover.jpg"},
    {id: 3, name: "Ghostrunner", url: "https://s1.torrents-igruha.org/uploads/posts/2020-10/1602108138__cover.jpg"},
    {id: 4, name: "The Solitaire Conspiracy", url: "https://s1.torrents-igruha.org/uploads/posts/2020-10/1601850080_8.jpg"},
    {id: 5, name: "RAID Shadow Legends", url: "https://s1.torrents-igruha.org/uploads/posts/2020-06/1593012893__1cover.jpg"},
    {id: 6, name: "World of Warships", url: "https://s1.torrents-igruha.org/uploads/posts/2019-09/1569491743_cover2.jpg"},
    {id: 7, name: "Ancestors Legacy", url: "https://s1.torrents-igruha.org/uploads/posts/2018-05/1527081374__cover.jpg"},
    {id: 8, name: "Grim Nights", url: "https://s1.torrents-igruha.org/uploads/posts/2019-11/1573219200_15.jpg"},
    {id: 9, name: "Battle Brothers Blazing Deserts", url: "https://s1.torrents-igruha.org/uploads/posts/2018-01/1517008444__cover.jpg"}
  ]
  private sport: any[] = [
    {id: 1, name: "RIDE 4", url: "https://s1.torrents-igruha.org/uploads/posts/2020-10/1602185534__cover.jpg"},
    {id: 2, name: "FIFA 21", url: "https://s1.torrents-igruha.org/uploads/posts/2020-10/1601896759__cover.jpg"},
    {id: 3, name: "Pro Gymnast", url: "https://s1.torrents-igruha.org/uploads/posts/2020-08/1597701799_20.jpg"},
    {id: 4, name: "NBA 2K21", url: "https://s1.torrents-igruha.org/uploads/posts/2020-09/1599160426__cover.jpg"},
    {id: 5, name: "The Climb", url: "https://s1.torrents-igruha.org/uploads/posts/2020-08/1598733119__cover.jpg"},
    {id: 6, name: "Street Power Football", url: "https://s1.torrents-igruha.org/uploads/posts/2020-06/1592955163_6.jpg"},
    {id: 7, name: "Bloody Rally Show", url: "https://s1.torrents-igruha.org/uploads/posts/2020-03/1584476565_8.jpg"},
    {id: 8, name: "Creed Rise to Glory", url: "https://s1.torrents-igruha.org/uploads/posts/2020-04/1586036302_15.jpg"},
    {id: 9, name: "rFactor 2", url: "https://s1.torrents-igruha.org/uploads/posts/2020-06/1591020176_5.jpg"}
  ]
  private rpg: any[] = [
    {id: 1, name: "The Revolt Awakening", url: "https://s1.torrents-igruha.org/uploads/posts/2020-10/1602184533__cover.jpg"},
    {id: 2, name: "Ikenfell", url: "https://s1.torrents-igruha.org/uploads/posts/2020-10/1602187773__cover.jpg"},
    {id: 3, name: "The Waylanders", url: "https://s1.torrents-igruha.org/uploads/posts/2020-07/1595940327__cover.jpg"},
    {id: 4, name: "Medieval Dynasty", url: "https://s1.torrents-igruha.org/uploads/posts/2020-09/1600349830_co1xuu.jpg"},
    {id: 5, name: "The Rule of Land Pioneers", url: "https://s1.torrents-igruha.org/uploads/posts/2020-09/1601116929_19.jpg"},
    {id: 6, name: "No Man's Sky", url: "https://s1.torrents-igruha.org/uploads/posts/2020-07/1595427097__cover.jpg"},
    {id: 7, name: "Chronicon", url: "https://s1.torrents-igruha.org/uploads/posts/2019-04/1556657121__cover.jpg"},
    {id: 8, name: "Remnant From the Ashes", url: "https://s1.torrents-igruha.org/uploads/posts/2018-07/1532339583__cover.jpg"},
    {id: 9, name: "Reigns", url: "https://s1.torrents-igruha.org/uploads/posts/2020-08/1598827413_5.jpg"}
  ]
  private fighting: any[] = [
    {id: 1, name: "Mortal Kombat 10", url: "https://s1.torrents-igruha.org/uploads/posts/2014-09/1412081341_82b88e61043b898ca895ea143f65fc6a.jpg"},
    {id: 2, name: "Dead or Alive 6", url: "https://s1.torrents-igruha.org/uploads/posts/2019-03/1551461817__cover.jpg"},
    {id: 3, name: "Them's Fightin' Herds", url: "https://s1.torrents-igruha.org/uploads/posts/2020-05/1588346993__cover.jpg"},
    {id: 4, name: "MMA Team Manager", url: "https://s1.torrents-igruha.org/uploads/posts/2020-08/1598387305_12.jpg"},
    {id: 5, name: "Injustice 2", url: "https://s1.torrents-igruha.org/uploads/posts/2018-07/1530623920__cover.jpg"},
    {id: 6, name: "Jump Force", url: "https://s1.torrents-igruha.org/uploads/posts/2019-02/1549975890__cover.jpg"},
    {id: 7, name: "WWE 2K20", url: "https://s1.torrents-igruha.org/uploads/posts/2019-10/1571766681__cover.jpg"},
    {id: 8, name: "Tekken 7", url: "https://s1.torrents-igruha.org/uploads/posts/2017-06/1496419751__cover.jpg"},
    {id: 9, name: "Kung Fu Panda Showdown of Legendary Legends", url: "https://s1.torrents-igruha.org/uploads/posts/2015-08/1440519157_panda.jpg"},
  ]
  private content: any[] = [
    {id: 1, name: 'World of Tanks', url: "https://s1.torrents-igruha.org/1499895408_mir-tankov.jpg"},
    {id: 2, name: 'Men Of War II Arena', url: "https://s1.torrents-igruha.org/uploads/posts/2020-09/1600445157_cover.jpg"},
    {id: 3, name: 'RAID Shadow Legends', url: "https://s1.torrents-igruha.org/uploads/posts/2020-06/1593012893__1cover.jpg"},
    {id: 4, name: 'War Thunder', url: "https://s1.torrents-igruha.org/1438963126_varhanter.jpg"},
    {id: 5, name: 'World Of Warships', url: "https://s1.torrents-igruha.org/uploads/posts/2019-09/1569491743_cover2.jpg"},
    {id: 6, name: 'War Face', url: "https://s1.torrents-igruha.org/pictures/1513359973_varfeys.jpg"},
    {id: 7, name: 'Crossout', url: "https://s1.torrents-igruha.org/uploads/posts/2017-11/1511904454_cover.jpg"},
    {id: 8, name: 'Fortnite', url: "https://s1.torrents-igruha.org/uploads/posts/2017-11/1511563953_fortnite-battle-royale.jpg"},
    {id: 9, name: 'Subsistence', url: "https://s1.torrents-igruha.org/uploads/posts/2020-06/1592736940__cover.jpg"},
    {id: 10, name: 'Last Wood', url: "https://s1.torrents-igruha.org/uploads/posts/2019-08/1567031142__cover.jpg"},
    {id: 11, name: 'Bermuda Lost Survival', url: "https://s1.torrents-igruha.org/uploads/posts/2017-08/1502031572__cover.jpg"},
    {id: 12, name: 'Project Cars 3', url: "https://s1.torrents-igruha.org/uploads/posts/2020-08/1598357709_packshot-9c90c7f35fb4cbd8490d4c332a2d2baf-1.jpg"}
  ]
  private adventure: any[] = [
    {id: 1, name: 'Caves of QUD', url: "https://s1.torrents-igruha.org/uploads/posts/2019-03/1551733242__cover.jpg"},
    {id: 2, name: 'Dark Light', url: "https://s1.torrents-igruha.org/uploads/posts/2020-06/1591656848_2.jpg"},
    {id: 3, name: 'Gordian Quest', url: "https://s1.torrents-igruha.org/uploads/posts/2019-11/1575060738_7.jpg"},
    {id: 4, name: 'A Short Hike', url: "https://s1.torrents-igruha.org/uploads/posts/2020-07/1593611619__cover.jpg"},
    {id: 5, name: "No Man's Sky", url: "https://s1.torrents-igruha.org/uploads/posts/2020-07/1595427097__cover.jpg"},
    {id: 6, name: 'Grounded', url: "https://s1.torrents-igruha.org/uploads/posts/2020-08/1596363751__cover.jpg"},
    {id: 7, name: 'Serious Sam 4', url: "https://s1.torrents-igruha.org/uploads/posts/2020-09/1600955954_ss4-1.jpg"},
    {id: 8, name: 'Prodeus', url: "https://s1.torrents-igruha.org/uploads/posts/2019-10/1571685001_4.jpg"},
    {id: 9, name: 'Inmost', url: "https://s1.torrents-igruha.org/uploads/posts/2019-04/1555763245__cover.jpg"}
  ]
  private action: any[] = [
    {id: 1, name: 'Left 4 Dead 2', url: "https://s1.torrents-igruha.org/uploads/posts/2019-04/1554900064__cover.jpg"},
    {id: 2, name: 'Dark Light', url: "https://s1.torrents-igruha.org/uploads/posts/2020-06/1591656848_2.jpg"},
    {id: 3, name: 'Uncertain Light At The End', url: "https://s1.torrents-igruha.org/uploads/posts/2020-10/1602186180__cover.jpg"},
    {id: 4, name: 'Outlast', url: "https://s1.torrents-igruha.org/uploads/posts/2018-11/1543583807__cover.jpg"},
    {id: 5, name: 'Prison Break The Conspiracy', url: "https://s1.torrents-igruha.org/uploads/posts/2020-10/1601844121_3.jpg"},
    {id: 6, name: 'Mafia 3 Definitive Edition', url: "https://s1.torrents-igruha.org/uploads/posts/2020-05/1589411155__cover.jpg"},
    {id: 7, name: 'Dreamscaper', url: "https://s1.torrents-igruha.org/uploads/posts/2020-02/1582575234__cover.jpg"},
    {id: 8, name: 'KINGDOMS', url: "https://s1.torrents-igruha.org/uploads/posts/2019-08/1566504546__cover.jpg"},
    {id: 9, name: 'Metro 2033', url: "https://s1.torrents-igruha.org/uploads/posts/2020-09/1600975113_2.jpg"}
  ]
  private horror: any[] = [
    {id: 1, name: "Chernobylite", url: "https://s1.torrents-igruha.org/uploads/posts/2019-10/1571314054__cover.jpg"},
    {id: 2, name: "Don't Starve + Hamlet", url: "https://s1.torrents-igruha.org/uploads/posts/2018-11/1542820105__cover.jpg"},
    {id: 3, name: "Resident Evil 3 Remake", url: "https://s1.torrents-igruha.org/uploads/posts/2019-12/1576880150_9.jpg"},
    {id: 4, name: "The Dreamcatcher", url: "https://s1.torrents-igruha.org/uploads/posts/2020-08/1598390261_6.jpg"},
    {id: 5, name: "Golden Light", url: "https://s1.torrents-igruha.org/uploads/posts/2020-08/1598220756_6.jpg"},
    {id: 6, name: "Resident Evil 5 Gold Edition", url: "https://s1.torrents-igruha.org/uploads/posts/2015-11/1448701067_re5_gold_edition.jpg"},
    {id: 8, name: "Hellpoint", url: "https://s1.torrents-igruha.org/uploads/posts/2020-07/1596138987__cover.jpg"},
    {id: 9, name: "The Light", url: "https://s1.torrents-igruha.org/uploads/posts/2020-06/1591392384_5.jpg"},
    {id: 9, name: "ZAAM", url: "https://s1.torrents-igruha.org/uploads/posts/2020-08/1596915024_8.jpg"}
  ]
  private shooting: any[] = [
    {id: 1, name: "State of Decay 2", url: "https://s1.torrents-igruha.org/uploads/posts/2020-03/1584205290__cover.jpg"},
    {id: 2, name: "Control", url: "https://s1.torrents-igruha.org/uploads/posts/2020-03/1585267153__cover.jpg"},
    {id: 3, name: "Mafia 2", url: "https://s1.torrents-igruha.org/uploads/posts/2020-05/1588985284__cover.jpg"},
    {id: 4, name: "GTA 5", url: "https://s1.torrents-igruha.org/uploads/posts/2020-05/1589567543_7ef9f3fd87aaa7714d900cbbf06377b5.jpg"},
    {id: 5, name: "Read Dead Redemption 2", url: "https://s1.torrents-igruha.org/uploads/posts/2019-10/1570374038__cover.jpg"},
    {id: 6, name: "Just Cause 4", url: "https://s1.torrents-igruha.org/uploads/posts/2018-12/1543863264__cover.jpg"},
    {id: 7, name: "Ghost Recon Breakpoint", url: "https://s1.torrents-igruha.org/uploads/posts/2019-05/1557795382_wizardimg.jpg"},
    {id: 8, name: "Watch Dogs", url: "https://s1.torrents-igruha.org/uploads/posts/2020-05/1589634162_try_h5f7rd.jpeg"},
    {id: 9, name: "Crossout", url: "https://s1.torrents-igruha.org/uploads/posts/2017-11/1511904454_cover.jpg"}
  ]
  private race: any[] = [
    {id: 1, name: "Art of rally", url: "https://s1.torrents-igruha.org/uploads/posts/2020-06/1592931947_3.jpg"},
    {id: 2, name: "Project Cars 3", url: "https://s1.torrents-igruha.org/uploads/posts/2020-08/1598357709_packshot-9c90c7f35fb4cbd8490d4c332a2d2baf-1.jpg"},
    {id: 3, name: "Inertial drift", url: "https://s1.torrents-igruha.org/uploads/posts/2020-09/1599165717__cover.jpg"},
    {id: 4, name: "WRC 9", url: "https://s1.torrents-igruha.org/uploads/posts/2020-09/1599218364__cover.jpg"},
    {id: 5, name: "Assetto Corsa Competizione", url: "https://s1.torrents-igruha.org/uploads/posts/2019-05/1559215977__cover.jpg"},
    {id: 6, name: "Torque Drift", url: "https://s1.torrents-igruha.org/uploads/posts/2020-09/1599247230__cover.jpg"},
    {id: 7, name: "Need for Speed Heat", url: "https://s1.torrents-igruha.org/uploads/posts/2019-08/1565875894__cover.jpg"},
    {id: 8, name: "Fast & Furious Crossroads", url: "https://s1.torrents-igruha.org/uploads/posts/2020-08/1596791087__cover.jpg"},
    {id: 9, name: "Lost Wing", url: "https://s1.torrents-igruha.org/uploads/posts/2020-07/1596019039_32.jpg"},
  ]

  adventuref(){
    return this.adventure
  }

  racef(){
    return this.race
  }

  horrorf(){
    return this.horror
  }

  shootingf(){
    return this.shooting
  }

  survivalf(){
    return this.survival
  }

  top20f(){
    return this.top20
  }

  top50f(){
    return this.top50
  }

  top100f(){
    return this.top100
  }

  actionf(){
    return this.action
  }

  fightingf(){
    return this.fighting
  }

  rpgf(){
    return this.rpg
  }

  sportf(){
    return this.sport
  }

  strategyf(){
    return this.strategy
  }

  mainf(){
    return this.content
  }

  constructor() { }
}
