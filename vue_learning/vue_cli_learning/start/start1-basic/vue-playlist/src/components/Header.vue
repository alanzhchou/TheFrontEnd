<template>
    <header>
        <h1> {{ title }} </h1>
        <h5 @click="changeSubTitle"> {{ subTitle }} </h5>
    </header>
</template>

<script>
export default {
    name: 'app-header',
    props:{
        subTitle:{
            type: String,
        }
    },
    data(){
        return {
            title: 'Vue.js Demo',
        };
    },
    methods:{
        changeSubTitle(){
            // this.subTitle = "New SubTitle";
            this.$emit("subTitleChanged","子向父组件传值");
        }
    },
}
</script>

<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
h5{
    color: #222;
    text-align: center;
}
</style>
