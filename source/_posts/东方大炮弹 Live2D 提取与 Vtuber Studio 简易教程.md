---
title: 东方大炮弹 Live2D 提取与 VTube Studio 简易教程
date: 2022-06-17 16:00:15
index_img: https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171630300.jpg
banner_img: https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171830583.jpg
categories: "探索"
tags:
 - 东方Project
 - Live2D
 - VTube Studio
excerpt: 分享来自 twitter @firubiii 的东方CB Live2D 模型提取。我对所有模型进行了配置和修改，且可以用于 Vtuber Studio 面部捕捉。
---
# Live2D 文件下载
来自 twitter @firubiii 的原帖地址：[https://twitter.com/firubiii/status/1219505315894517760](https://twitter.com/firubiii/status/1219505315894517760)  
修改好的模型：[https://wwt.lanzoul.com/itkZN06jwzle](https://wwt.lanzoul.com/itkZN06jwzle) 
{% note info %}
修改过的模型缩略图来自 THBWiki。
{% endnote %} 
{% note warning %}
注意：请不要将这些模型用于商业用途。所有的版权均属于游戏开发商，在此仅作分享。
{% endnote %}
# 使用说明
## 1. 获取 VTube Studio
### Windows
Steam 免费获取：[https://store.steampowered.com/app/1325860/VTube_Studio/](https://store.steampowered.com/app/1325860/VTube_Studio/)
### Android & iOS
在 Google Play & Appstore 免费获取。
{% note info %}
Android & iOS 端与 Windows 端的免费版均有一些限制。Windows 端面部捕捉会显示水印（但可以用 obs 等工具对捕捉画面进行裁剪，不影响画面效果），Android & iOS 端则会有与电脑串流的限制。且手机端面部捕捉效果不如电脑端，建议直接使用电脑摄像头捕捉 + 渲染。
{% endnote %}

## 2. 导入模型
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171701322.png)
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171702398.png)
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171702389.png)
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171702258.png)
## 3. 设置面部捕捉
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171705031.png)
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171706910.png)
配置完就可以通过你的面部来控制人物了。这里还有很多可调的参数，可以自行研究。
## 4. 打开风的物理效果
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171706116.png)
## 5. 播放动作
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171707413.png)
![这套模型的动画都是统一的，可以自己尝试一下每个动画](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171707768.png)
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171708122.png)
![按下设置的快捷键后人物就会做出动作啦](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171708532.png)
## 6. 输出画面到虚拟摄像头 / OBS
### 虚拟摄像头（建议新手使用）
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171716839.png)
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171724921.png)
### OBS
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171722593.png)
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171722503.png)
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171722056.png)
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171722155.png)
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171722295.png)
![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/220617_1/202206171722871.png)
# 常见问题
### Q：手部模型重叠？
A：清添加并触发一个动作，或者也可以只保留上半身。
### Q：性能问题？
A：降低画面分辨率和帧数、面部识别帧数、摄像头分辨率等。
### Q：面捕不够细致？
A：在面部捕捉设置中将 `摄像头输入模式` 改为 `手动模式（B）` 。
### Q：其他问题？
A：在下面留言或者问百度。
