// 模板 html 结构
<template>
  <div id="home">
    <h1>{{ title }}</h1>
    <app-header @subTitleChanged="updateSubTitle($event)" v-bind:subTitle="subTitle"></app-header>
    <users v-bind:users="users"></users> 
    <users v-bind:users="users"></users> 
    <app-footer v-bind:subTitle="subTitle"></app-footer>
  </div>
</template>

// 行为 处理逻辑 
<script>

import Header from './Header';
import Users from './Users';
import Footer from './Footer';

 
export default {
  name: 'Home',
  data(){
    return {
      title: "我的第一个vue cli脚手架项目",
      users:[
      ],
      subTitle: "subTitle",
    };
  },
  methods:{
    updateSubTitle:function(subtitle){
      this.subTitle = subtitle;
    }
    
  },
  // beforeCreate:function(){
  //   alert("组件实例化之前");
  // },
  created:function(){
    this.$http.get("http://jsonplaceholder.typicode.com/users")
      .then((data) => {
        // console.log(data);
        this.users = data.body;
      }).catch((err) => {
        
      });
    // alert("组件实例化之后 页面未渲染之前");
  },
  // beforeMount:function(){
  //   alert("组件挂载前 页面未渲染之前 但虚拟dom已经配置");
  // },
  // mounted:function(){
  //   alert("组件挂载后 页面渲染");
  // },
  // beforeUpdate:function(){
  //   alert("组件更新前 页面未渲染之前 但虚拟dom已经配置");
  // },
  // updated:function(){
  //   alert("组件更新 页面渲染");
  // },
  // beforeDestroy:function(){
  //   alert("组件销毁前");
  // },
  // destroyed:function(){
  //   alert("组件销毁");
  // },
  // 注册组件嵌套
  components:{
    'users': Users,
    'app-header': Header,
    'app-footer': Footer,
  },
}
</script>

// 样式
<style scoped>
h1{
  color: purple;
}
</style>
