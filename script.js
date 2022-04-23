const app = new Vue({
    el: '#app',
    data: {
        oggetti: [
            {
                text: 'Comprare il latte',
                check: true,
            },
            {
                text: 'Stendere la lavatrice',
                check: false,
            },
            {
                text: 'Pulire la camera',
                check: false,
            }
        ],
        nuovoObj: ''
    },
    methods: {
        remove(i){
            this.oggetti.splice(i, 1)
        },
        add(){
            const newObj = {
                text: this.nuovoObj, 
                check: false,
            }
            this.oggetti.push(newObj)
        }
    }
})