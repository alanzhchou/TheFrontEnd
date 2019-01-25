import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    // [vuex] Do not mutate vuex store state outside mutation handlers."
    // 生产环境不要用 会造成性能下降
    strict: true,

    //向state中添加响应式属性，最好不用
    //最好提前在state中初始化所有属性 ！！！！！
    // Vue.set(state.products[0],"id",0);
    // state.products.forEach(product =>{
    //     console.log(product);
    // });
    state:{
        products:[
            { name: "马云", price: "200" },
            { name: "马化腾", price: "140" },
            { name: "马冬梅", price: "20" },
            { name: "马蓉", price: "10" },
        ],
    },

    // getters 可用 this.$store.getters.getter_name 或者
    //              this.$store.getters["getter_name"] 访问
    // 模块化嵌套时可用 .namespace/getter_name 或者
    //                 ["namespace/getter_name"]  访问                 
    getters:{
        originProducts: (state) =>{
            return state.products;
        },
        saleProducts: (state) =>{
            let saleProducts = state.products.map(pruduct =>{
                return {
                    name: "**" + pruduct.name + "**",
                    price: pruduct.price/2,
                }
            });
            return saleProducts;
        },
    },

    // 大型工程时 可 将 mutation 独立成一个 js 文件包装所有同步处理方法
    // 并以 常量 来命名各个方法 

    // 事件同步触发
    mutations:{
        reducePrice: (state,payload) => {
                state.products.forEach(product =>{
                    product.price -= payload;
                });
        },
    },

    // 事件异步触发 完成后再冒泡事件
    actions:{
        // context 和 store 对象类似, 如可使用 context.state 查看状态
        reducePrice: (context,payload) =>{
            // console.log(context.state);
            // setTimeout(function(){
            //     context.commit("reducePrice",payload);
            // },2000);

            // 可以通过返回 Promise 对象来判断 action 是否成功执行
            // console.log(" Action Promise ");
            // var flag = false;
            return new Promise((resolve,reject)=>{
                setTimeout(function(){
                    context.commit("reducePrice",payload);
                    // flag = !flag;
                    // if(flag){
                    //     // if commit successful
                    //     resolve();
                    // }else{
                    //     // if commit failed
                    //     reject();
                    // }
                },2000);
            });
        },
    }
});