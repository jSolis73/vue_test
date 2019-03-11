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
let app3 = new Vue({
    template: '<h2>From template</h2>'
})
app3.$mount('#app3')