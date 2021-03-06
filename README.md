# react for px-coupon
## 目录结构

```bash
/build   # webpack编译配置
/dist   # 存放最终发布的代码
/server  # node端提供数据/接口转发/数据处理
/src    # 项目前端源码
/mockup  # 存放模拟数据
/tool  # fecs代码检查
package.json  # 项目依赖
route.js    # 前端路由配置
index.html   # 前端html公共模板
```

## build 

```bash
# install 所有依赖
npm install

# 编译生成生产环境最终代码 dist目录下（js、css压缩合并，html不压缩）
npm run build

# 编译生成开发环境代码（压缩js、css）
npm run start

# livereload热加载监听文件变化 
npm run watch 

### watch后访问地址(dist目录下html/xxx.html)
http://localhost:8889/index/index.html
```

## 访问方式

### 分别启动server端和client端
```bash
# 首先执行node app.js 启动node数据接口
node app.js
# 然后npm run watch 监听前端文件变化并且启动本地服务
npm run watch
```

### 同时启动server端和client端
```bash
# 改写app.js 加入webpack热启动代码，直接node app.js启动
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackDevConfig = require('./build/webpack.dev');

new WebpackDevServer(webpack(webpackDevConfig), {
    publicPath: webpackDevConfig.output.publicPath,
    hot: true,
    inline: true,
    compress: true,
    colors: true,
    contentBase: './dist',
    proxy: {
        '/data/*': {
            target: 'http://127.0.0.1:3000/',
            secure: false,
            host: '127.0.0.1:3000',
            changeOrigin: true
        }
    }
}).listen(8889);
```

## lint

### commit前执行pre-commit
在项目根目录下执行以下命令即可使用`pre-commit`钩子

```bash

    ln -sf ../../tool/gitHook/pre-commit.sh .git/hooks/pre-commit
    
    // MAC下需修改pre-commit的权限
    chmod +x .git/hooks/pre-commit
```

- 目前仅做`fecs`检查。
- 每次commit之前会运行`fecs`检查`src/`目录下的所有`.js`文件代码，没有任何**warning**时才能进入提交。
- 如果需要跳过检验，请为`git commit`添加参数`--no-verify`。

## 注意事项

- html打包后style路径会发现没有被替换，此处不必在意。需要写在style中的图片到时候都会被动态资源替换掉

