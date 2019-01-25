var app = new Vue({
    el: "#vueApp",
    data:{
        changeColor: false,
        changeLength: false,
    },
    methods:{

    },
    computed:{
        compClasses:function(){
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength,
            }
        }
    },
});