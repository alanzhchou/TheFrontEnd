// 模板 html 结构
<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
        <router-link to="/helloworld">Hello</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

// 行为 处理逻辑 
<script>
// import Home from './components/Home';

export default {
  name: 'App',
  data(){
    return {
    };
  },
  methods:{
    
  },
  // components:{
  //   'home':Home,
  // }
  // beforeCreate:function(){
  //   alert("组件实例化之前");
  // },
  // created:function(){
  //   alert("组件实例化之后 页面未渲染之前");
  // },
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
}
</script>

// 样式
<style scoped>
h1{
  color: purple;
}
</style>
