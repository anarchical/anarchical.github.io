---
title: 安装配置
date: 2022-08-25
category: solr

---

## 安装
### Docker 版本

1. 拉取镜像
   `docker pull solr:8.11.2`
2. 运行镜像，生成容器
   `docker run --name my-solr -d -p 8983:8983 solr:8.11.2`
3. 进入容器实例进行配置
   `docker exec -u root -it my-solr /bin/bash`

## 配置

### 配置用户名密码

https://solr.apache.org/guide/solr/latest/deployment-guide/basic-authentication-plugin.html

docker 容器中需要将 security.json 配置到 /var/solr/data/ 目录下

### 中文分词器配置

## 使用

### 常用命令

```shell

```

