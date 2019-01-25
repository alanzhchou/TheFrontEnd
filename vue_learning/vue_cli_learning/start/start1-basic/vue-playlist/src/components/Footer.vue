<template>
    <footer>
        <p>
            {{ copyright }}
        </p>
        <h5 @click="changeSubTitle"> {{ subTitle }} </h5>
    </footer>
</template>

<script>
export default {
    name: 'app-footer',
    props:{
        subTitle:{
            type: String,
        }
    },
    data(){
        return {
            copyright: 'Copyright 2018 Vue Demo',
        };
    },
    methods:{
        changeSubTitle(){
            this.subTitle = "New SubTitle";
        }
    }
}
</script>

<style scoped>
footer{
    background: #222;
    padding: 6px;
}
p{
    color: lightgreen;
    text-align: center;
}
h5{
    color: wheat;
    text-align: center;
}
</style>
