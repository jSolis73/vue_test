let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello, world'
    }
})
let app2 = new Vue({
    el: '#app2',
    methods:{
        rename: function(){
            app.message='Goodbuy, world';
            app2.$refs.change.innerText = 'Попрощаться';
        }
    }
})