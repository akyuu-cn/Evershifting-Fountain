---
title: PotatoCraftCommunity - 帮助文档
date: 2021-04-18 0:18:15
index_img: /assets/pcc_help/cover.png
categories: "光辉"
tags:
 - Minecraft
---
# PotatoCraftCommunity
<font size=5>**欢迎来到PCC！**  </font>
<font size=4>这是一个完全社区~~指我自己~~运营的白名单服务器。  
由于教程过长，所以写了这份**帮助文档**。</font>  
***
<font size=5>目录</font>
- [/pc_stuck](#/pc_stuck)
- [/sf guide](#/sf_guide)
- [/pc_afk 与 /pc_back](#/pc_afk_与_/pc_back)
- [/pc_jukebox](#/pc_jukebox)
- [/pc_startbackup](#/pc_startbackup)
- [/pc_sfunlock](#/pc_sfunlock)
- [容器整理](#容器整理)
- [方块信息查询](#方块信息查询)
- [一些材质包](#一些材质包)
- [插件 - Brewery](#插件_-_Brewery)
- [插件 - SFCalc](#插件_-_SFCalc)
- [插件 - Imagemap](#插件_-_Imagemap)
- [插件 - Inventory Rollback](#插件_-_Inventory_Rollback)
- [插件 - AllMusic](#插件_-_AllMusic)
- [PCC服务端向所有人开放！](#PCC服务端向所有人开放！)
***
<span id="/pc_stuck"></span>
### /pc_stuck
回到世界**出生点**，如果你卡在什么地方了的话。  
***
<span id="/sf_guide"></span>
### /sf guide
获取一本**粘液科技手册**！  
***
<span id="/pc_afk_与_/pc_back"></span>
### /pc_afk 与 /pc_back
**/pc_afk**：传送到afk维度。  
**/pc_back**：返回afk前的位置。  
***
<span id="/pc_jukebox"></span>
### /pc_jukebox
打开**红石音乐盒**界面。  
如果你有**nbs**或者**midi**文件，可以发给我进行添加。  
***
<span id="/pc_startbackup"></span>
### /pc_startbackup
启动一次**手动备份**。  
如果你要干什么**危险的事情**的话。  
***
<span id="/pc_sfunlock"></span>
### /pc_sfunlock
解锁粘液科技的**所有研究**。
由于经验解锁过于浪费时间和肝，我们决定直接开放这个功能。
***
<span id="容器整理"></span>
### 容器整理
在容器的空格中**shift+右键**更改整理触发方式。  
在容器的空格中**shift+左键**更改容器整理依据。  

***
<span id="方块信息查询"></span>
### 方块信息查询
手持**木棍**对方块右击可查看信息。  
支持粘液科技的单方块。  
***
<span id="一些材质包"></span>
### 一些材质包
**强烈推荐**，提高SF插件、红石音乐的体验。 [Onedrive](https://1drv.ms/u/s!AqOs8f_MzRh_lArD9J7Z3txY4nc9?e=ypBUD5) 或 [蓝奏云](https://lanzoui.com/imWx4o8ip5a)
***
<span id="插件_-_Brewery"></span>
### 插件 - Brewery
添加了**酿酒系统**，玩法较复杂，可自行查阅[官方wiki](https://github.com/DieReicheErethons/Brewery/wiki)。
~~好孩子不能喝酒哦（~~

***
<span id="插件_-_SFCalc"></span>

### 插件 - SFCalc
用于计算**SF4物品合成**所需材料总和。
用法： **/sfcalc calc [物品]**
提示： 如果你找不到**物品的英文名**，可以使用 **/sf give [你的ID]** 并使用**tab补全**或**直接输入关键词搜索**。

***

<span id="插件_-_Imagemap"></span>

### 插件 - Imagemap

自动生成**地图画**并放置在世界中。
1. 裁剪图片：长度、宽度设置为**128的倍数**，每128x128会被生成为一张地图。
`例如：一张256x128的图片会在游戏内转换为长2格、宽1格的地图墙`
2. 上传到图床：比如 [imgtu](https://imgtu.com/) 。
3. 从图床获取链接：以**上面的图床**为例，复制这个链接即可**（可以检查结尾是否为.jpg/.png）**。
![获取链接](/assets/pcc_help/imgurl.png)
4. 游戏内下载图片：执行 **/imagemap download [名称] [图片URL链接]**
5. 放置地图画：执行 **/imagemap list** ，并**鼠标点击**右方的**Place**，**右击**墙面的**左上角**即可。
提示： 地图画需要**手动清理**，建议放之前检查一遍。

***

<span id="插件_-_Inventory_Rollback"></span>

### 插件 - Inventory Rollback

自动备份**玩家信息**（物品栏、血量、经验、末影箱等），并在**意外发生时**进行恢复。
会在四种情况下触发备份：
   - 玩家死亡
   - 玩家加入游戏
   - 玩家退出游戏
   - 玩家切换世界

你也可以使用 **/ir forcebackup [玩家]** 强制备份这个玩家的信息。  
如果要进行**回滚**（恢复玩家信息），输入 **/ir restore [玩家]** 打开GUI进行恢复操作。

***

<span id="插件_-_AllMusic"></span>

### 插件 - AllMusic

在游戏内通过**网易云音乐**点歌，安装了mod的玩家都可以收听。
点歌： **/music [音乐URL]**
切换界面显示： **/pcc_allmusic_hud**
切换歌词显示（默认隐藏）： **/music hud enable lyric**
停止接受点歌推送： **/music nomusic**
下载mod：[Fabric](https://wwe.lanzoui.com/iTIWNqqbp8b) [Forge](https://wwe.lanzoui.com/iaK6zqqbp9c)
在**游戏音量设置**中可以调整音量。

***

<span id="PCC服务端向所有人开放！"></span>

### PCC服务端向所有人开放！

你可以在 [这里](https://wwe.lanzoui.com/iSlnsqq8muh) 下载PCC的服务端插件，我们完全允许**任何人**用这个服务端开设服务器。请注意，Slimefun4及其**多数**拓展已汉化，**部分来自我自己，也有部分来自其他的汉化者。**因此无法注明汉化者，请见谅。

***