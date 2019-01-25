const goods = require ("./data/goods.json");
const ratings = require ("./data/ratings.json");
const seller = require ("./data/seller.json");

module.exports = {
    baseUrl: '/', //根路径
    outputDir: 'dist', //构建输出目录
    assetsDir: 'assets', //静态资源目录
    lintOnSave: false, //是否开启 eslint 检测 true false 'error'
    devServer: {
        open: true, //开启服务时 是否自动打开启动页
        host: 'localhost',
        port: 8081,
        https: false, //无证书 会造成浏览器警告
        hotOnly: false, // ------------表示热更新安装的插件
        proxy:{
            //配置跨域
            'api':{
                target: 'http://localhost:5000/api/',
                ws: true,
                changeOrigin: true,
                pathRewrite:{
                    '^/api': '',
                },
            },
        },
        before(app){
            //http://localhost:8081/api/goods
            app.get("/api/goods",(req,res) =>{
                res.json(goods);
            });
            app.get("/api/ratings",(req,res) =>{
                res.json(ratings);
            });
            app.get("/api/seller",(req,res) =>{
                res.json(seller);
            });
        }
    },

}