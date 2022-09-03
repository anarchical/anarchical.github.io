---
title: Maven 安装
date: 2022-09-03
category: maven

---

## 安装

> 下载地址：https://maven.apache.org/download.cgi



## 配置

### 配置环境变量

1. 系统变量新建 `MAVEN_HOME` 指向 maven 的安装目录
2. 系统变量 Path 里编辑新建 `%MAVEN_HOME%\bin`

> 控制台执行 `mvn -v` 查看 maven 版本，确认环境变量是否配置成功

### 配置settings.xml

文件路径一般在 conf 目录下

#### 配置本地仓库

```xml
<localRepository>F:\maven\repo386</localRepository>
```

#### 配置阿里云maven源

由于官方 maven 仓库建立在国外，一般使用阿里云 maven 仓库进行访问

https://developer.aliyun.com/mvn/guide

```xml
<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```

