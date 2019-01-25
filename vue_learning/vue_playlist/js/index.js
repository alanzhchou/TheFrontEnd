var app = new Vue({
    el: '#test',
    data: {
        name: '',
        age: '15',
        condition: true,
        todo_list:[
            { text: '我' },
            { text: '你' },
            { text: '他' },
        ],
        website: 'https://github.com/alanzhchou',
        website_tag: '<a href="https://github.com/alanzhchou" target="_blank">我的github 222</a>',
        canvas:{
            X:0,
            Y:0,
        },
        scroll:{
            scrollHeight:0,
            scrollTop:0,
        },
    },

    methods:{
        hello: function(){
            return "hello! " + this.name + " you are " + this.age;
        },
        change_name: function(){
            this.name = this.$refs.name_input.value;
        },
        change_age: function(){
            this.age = this.$refs.age_input.value;
        },
        add_age: function(num){
            this.age = (parseInt(this.age) + num).toString();
        },
        sub_age: function(num){
            this.age = (parseInt(this.age) - num).toString();
        },
        updateXY: function(event){
            // console.log(event);
            this.canvas.X = event.offsetX;
            this.canvas.Y = event.offsetY;
        },
        stopMoving:function(event){
            event.stopPropagation();
        },
        alertNew:function(){
            alert("hello");
        },
        updateScrollXY:function(event){
            // console.log(event); 
            this.scroll.scrollHeight = event.target.scrollHeight;
            this.scroll.scrollTop = event.target.scrollTop;
        },
        logName:function(){
            console.log("input name...");
        },
        logAge:function(){
            console.log("input age...");
        }
    }
});