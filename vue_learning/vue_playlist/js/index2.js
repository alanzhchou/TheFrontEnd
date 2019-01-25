var app = new Vue({
    el: "#binding",
    data: {
        name: "",
        age: 20,
        a: 0,
        b: 0,
    },
    methods:{
        logName:function(){
            // console.log(this.$refs.name.value);
            this.name = this.$refs.name.value;
        },
        logAge:function(){
            // console.log(this.$refs.age.value);
            this.age = this.$refs.age.value;
        },
        // addToA:function(){
        //     console.log("addToA");
        //     return this.age + this.a;
        // },
        // addToB:function(){
        //     console.log("addToB");
        //     return this.age + this.b;
        // }
    },
    computed:{
        addToA:function(){
            console.log("addToA");
            return this.age + this.a;
        },
        addToB:function(){
            console.log("addToB");
            return this.age + this.b;
        }
    }
});