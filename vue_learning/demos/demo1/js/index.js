// http://owzbe53ov.bkt.clouddn.com/15_%E4%B9%A6%E5%90%A7%E4%B8%8B%E5%8D%88%E8%8C%B6.jpg

var app = new Vue({
    el: "#demo1",
    data:{
        health: 100,
        ended: false,
    },
    methods:{
        change:function(){
            this.health -= 10;
            if(this.health <= 0){
                this.ended = true;
            }
        },
        restart:function(){
            this.health = 100;
            this.ended = false;
        }        
    },
    computed:{

    },
});
