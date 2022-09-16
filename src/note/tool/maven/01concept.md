---
title: 坐标
date: 2022-09-04
category: maven
---

## 坐标

Maven 中通过 xml 形式的坐标来指定需要引用的 jar 包和相关依赖

通过 `gruopId artifactId version` 三个坐标可以定位一个依赖

### 标签内容

* `modelVersion` ：表示 pom.xml 文件内容的版本，一般为 4.0.0
* `groupId` ：表示公司或组织开发的某个项目
* `artifactId` ：模块工程名称
* `version` ：模板版本
* `packaging` ：当前模块打包方式
  * jar 表示生成 jar包
  * war 表示生成war包
  * pom 表示此模块是用来管理其它模块的，例如父工程
* `properties` ：定义的属性值，可以自定义添加属性
  * `project.build.sorceEncoding` ：maven 在构建过程中读取源码时所用的字符集，通常为 UTF-8
* `dependencies` ：配置模块的依赖信息
  * `dependency` ：配置具体的依赖信息
    * `scope` ：配置当前依赖作用的范围，默认为 `compile` 
      * compile ：作用于全局，会导致依赖传递
      * test ：作用于 test 阶段，不会依赖传递；例如 JUnit
      * provided ：作用于编译、测试阶段，不会依赖传递；例如 servlet-api，运行时 tomcat 容易已经提供，不需要再次引用
      * runtime ：作用于运行、测试阶段，在编译代码时无效，会导致依赖传递；例如 JDBC，在代码编译时只需要 JDK 的 JDBC 接口，只有运行时才需要具体的 JDBC 驱动
      * system ：
      * import ：
    * `exclusions` ：依赖排除
      * `exclusion` ：通过指定 groupId 和 artifactId 排除依赖，防止依赖冲突
    * `optional` ：

