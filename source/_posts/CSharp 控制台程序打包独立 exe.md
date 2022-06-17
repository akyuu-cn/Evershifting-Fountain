---
title: C#控制台程序打包独立exe
date: 2021-08-23 17:30:15
index_img: https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/210823_1/cover.png
categories: "发现"
tags:
 - 软件
 - 开发
 - C#
excerpt: 一个简单的C#控制台程序打包方法。
---


因为我有一个小项目，但编译出来发现有很多文件，太麻烦。所以我摸索了好久的单exe打包，但网上的方法不是不能用就是过时了。经过外网资料查阅，发现了这个最简单的方法。

右键项目，选择**发布**。

![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/210823_1/1.png)

完成初步配置来到这个界面，部署模式选择**依赖框架**，并选择运行平台后进行编译即可。

![](https://ltfjx-hexo-blog-1256621903.cos.ap-shanghai.myqcloud.com/blog_pic/210823_1/2.png)

把编译出来的exe复制到其他地方，可以独立运行，此时就可以发布了。

