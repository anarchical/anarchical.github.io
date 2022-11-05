---
title: 配置
date: 2022-11-05
category: ubuntu

---

## 开启root权限

1. 设置root密码，需牢记

   `sudo passwd root`

2. 修改 50-ubuntu.conf 文件

   `sudo gedit /usr/share/lightdm/lightdm.conf.d/50-ubuntu.conf`

   ```shell
   # 文件末尾新增
   greeter-show-manual-login=true
   all-guest=false
   ```

3. 修改 gdm-autologin 文件

   `sudo gedit /etc/pam.d/gdm-autologin`

   ```shell
   # 注释掉以下内容
   # auth required pam_succeed_if.so user != root quiet_success
   ```

4. 修改 gdm-password 文件

   `sudo gedit /etc/pam.d/gdm-password`

   ```shell
   # 注释掉以下内容
   # auth required pam_succeed_if.so user != root quiet_success
   ```

5. 修改 /root/.profile 文件

   `sudo gedit /root/.profile`

   ```shell
   # 修改 mesg n 2> /dev/null || true 为以下内容
   #mesg n 2> /dev/null || true
   tty -s && mesg n || true
   ```

6. 重启系统，以root用户登录即可



## 阿里源下载配置

ubuntu阿里源地址：[https://developer.aliyun.com/mirror/ubuntu](https://developer.aliyun.com/mirror/ubuntu)

1. 备份原来的配置文件

   `cp /etc/apt/sources.list /etc/apt/sources.list.bak`

2. 替换 sources.list 内容

   `gedit /etc/apt/sources.list`

   ```shell
   #替换以下内容，以ubuntu20.4为例子，其它的版本参照阿里源官网地址
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



## 安装VM-Tools

1. 如果使用的是VMware虚拟机，建议安装

   `apt-get install -y open-vm-tools`

   `apt-get install -y open-vm-tools-desktop`

   

## 开启SSH连接服务

1. 安装 ssh-server

   `apt-get install -y openssh-server`

2. 修改 sshd_config 文件

   `vim /etc/ssh/sshd_config`

   ```shell
   # 修改 #PermitRootLogin prohibit-password 为以下内容
   PermitRootLogin yes
   ```

3. 重启ssh服务

   `service ssh restart`

## 配置静态网络

1. 安装 net-tools，用于查看网络信息

   `apt-get install -y net-tools`

2. 使用 `ifconfig` 查看网卡名称

3. 配置 01-network-manager-all.yaml 文件

   `vim /etc/netplan/01-network-manager-all.yaml`

   ```yaml
   network:
     ethernets:
       ens33:
         dhcp4: false
         addresses: [192.168.58.10/24]
         gateway4: 192.168.58.2
         nameservers:
           addresses: [192.168.58.2]
     version: 2
     renderer: NetworkManager
   ```

4. 重启网卡服务

   `netplan apply`

   







