---
title: Ubuntu 配置
date: 2022-11-05
category: ubuntu

---

## 开启root权限

1. 设置root密码，需牢记

   `sudo passwd root`

2. 修改 50-ubuntu.conf 文件

   ```shell
   sudo gedit /usr/share/lightdm/lightdm.conf.d/50-ubuntu.conf
   
   # 文件末尾新增
   greeter-show-manual-login=true
   all-guest=false
   ```

3. 修改 gdm-autologin 文件

   ```shell
   sudo gedit /etc/pam.d/gdm-autologin
   
   # 注释掉以下内容
   # auth required pam_succeed_if.so user != root quiet_success
   ```

4. 修改 gdm-password 文件

   ```shell
   sudo gedit /etc/pam.d/gdm-password
   
   # 注释掉以下内容
   # auth required pam_succeed_if.so user != root quiet_success
   ```

5. 修改 /root/.profile 文件

   ```shell
   sudo gedit /root/.profile
   
   # 修改 mesg n 2> /dev/null || true 为以下内容
   #mesg n 2> /dev/null || true
   tty -s && mesg n || true
   ```

6. 重启系统，以root用户登录即可



## 阿里源下载配置

ubuntu阿里源地址：https://developer.aliyun.com/mirror/ubuntu

1. 备份原来的配置文件

   `cp /etc/apt/sources.list /etc/apt/sources.list.bak`

2. 替换 sources.list 内容

   ```shell
   gedit /etc/apt/sources.list
   
   #替换以下内容
   deb https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
   deb-src https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
   
   deb https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
   deb-src https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
   
   deb https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
   deb-src https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
   
   # deb https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
   # deb-src https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
   
   deb https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
   deb-src https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
   ```

3. 更新 apt 源和服务

   `apt-get update && apt-get upgrade -y`



## 开启SSH连接服务

1. 安装 ssh-server

   `apt-get install -y openssh-server`

2. 开启ssh服务

   `service ssh start`

   

## 配置静态网络

1. 安装 net-tools，用于查看网络信息

   `apt-get install -y net-tools`

2. 







