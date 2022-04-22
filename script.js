const app = new Vue({
    el: '#app',
    data: {
        oggetti: [
            {
                text: 'Comprare il latte',
                done: false,
            },
            {
                text: 'Stendere la lavatrice',
                done: false,
            },
            {
                text: 'Pulire la camera',
                done: false,
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
                check: true,
            }
            this.oggetti.push(newObj)
        }
    }
})

//Stampare all'interno di una lista, un item per ogni todo e se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

//BONUS 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)