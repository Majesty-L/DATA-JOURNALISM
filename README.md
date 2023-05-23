# data-journalism

## 准备工作
### 1、下载vscode
### 2、下载项目
### 3、下载node&npm
在 https://nodejs.org/download/release/v14.18.1/ 下载：

【window-64位】系统下载node-v14.18.1-x64.msi

【window-32位】系统下载node-v14.18.1-x86.msi

【mac】系统下载node-v14.18.1.pkg

## npm切换腾讯云镜像源
在控制台执行
```
npm config set registry https://mirrors.tencent.com/npm/
```

## 下载依赖
用vscode打开项目，打开终端，在根目录（即/data-journalism）执行
```
npm install
```

## 运行项目
执行
```
npm run serve
```
在 http://localhost:8080/ 查看页面