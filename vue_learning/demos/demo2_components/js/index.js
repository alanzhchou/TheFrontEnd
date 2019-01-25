Vue.component("greeting",{
    template: 
    `
    <p> hello! {{ name }} 大家好 这是Vue组件初识 
        <button @click=changeName>
            改名    
        </button> 
    </p>
    `,
    data:function(){
        return {
            name: "Alan",
        }
    },
    methods:{
        changeName:function(){
            this.name = "Chou";
        }
    },
})

new Vue({
    el: "#vue-app-one",
});

new Vue({
    el: "#vue-app-two",
});