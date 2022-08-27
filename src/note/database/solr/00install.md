---
title: 安装配置
date: 2022-08-25
category: solr

---

## 安装

### Docker 版本

https://hub.docker.com/_/solr

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

security.json
以下为 root:123456 的配置示例
```json
{
  "authentication": {
    "blockUnknown": true,
    "class": "solr.BasicAuthPlugin",
    "credentials": {
      "root": "Z5dtYJIw3ADbjHRCJb+GQnlJb0Z6LKGth3/qky2oxOM= X6XSApBJQh2zebpPKjP8h4fPVJcDc7sKfadfdNRGghQ="
    },
    "realm": "My Solr users",
    "forwardCredentials": false
  },
  "authorization": {
    "class": "solr.RuleBasedAuthorizationPlugin",
    "permissions": [
      {
        "name": "security-edit",
        "role": "admin"
      }
    ],
    "user-role": {
      "root": "admin"
    }
  }
}
```

### 中文分词器配置

## 使用

### 常用命令

1. 创建 Solr 实例
   `docker exec -it {container_id} solr create_core -c {instance_solr}`
2. 

