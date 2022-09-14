---
title: 常用命令
date: 2022-09-04
category: maven

---

## 常用命令

* 创建 maven 工程

  `mvn archetype:generate`
  
* 清理操作

  `mvn clean` 删除 target 编译信息

* 编译操作

  `mvn compile` 主程序编译，编译结果在 target/classes

  `mvn test-compile` 测试程序编译，编译结果在 target/test-classes

* 测试操作

  `mvn test` 执行所有的测试用例，测试报告存放在 target/surefire-reports

* 打包操作

  `mvn package` 根据 pom.xml 里配置信息生成 jar 或 war

* 安装操作

  `mvn install` 将打好的包存入指定 maven 仓库

* 查看工程依赖

  `mvn dependency:list` 查看工程依赖列表

  `mvn dependency:tree` 查看工程依赖结构

* 创建 maven web 工程

  `mvn archetype:generate -DarchetypeGroupId=org.apache.maven.archetypes -DarchetypeArtifactId=maven-archetype-webapp -DarchetypeVersion=1.4`

