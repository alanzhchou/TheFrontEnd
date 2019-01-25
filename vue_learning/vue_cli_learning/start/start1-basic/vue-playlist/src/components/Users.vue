<template>
  <div class="users">
      <ul>
        <li v-for="(user, index) in users" :key="index">
          <h2> {{ user.name }} </h2>
          <h3> {{ user.email }} </h3>
        </li>
      </ul>
      <button @click="deleteUser">删除用户</button>
  </div>
</template>

// 传值： string number boolean 值复制传递 改变一个其他不变
// 传引用 array object 改变一个地方的数据 所有对应地方都会改变

<script>
export default {
  name: 'Users',
  // props: ["users"],
  props:{
    users:{
      type: Array,
      required: true,
    }
  },
  data () {
      return{

      };
  },
  methods:{
    deleteUser:function(){
      this.users.pop();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>