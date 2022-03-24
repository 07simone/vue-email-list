 const app = new Vue(
    {
        el: "#app",
        data:{
            risultato: [],
        },
        methods:{
        },

        mounted(){
            const self = this;
                for(let i = 0; i < 10; i++){
                    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")           // quando risponderai allora mi andrai a eseguire la funzione qui sotto con argomento la risposta che hai appena ricevuto
                    .then(function (response){                                                      // response è un oggetto che ci da i dati la configurazione l'header e la richiesta 
                        const result = response.data.response; 
                        self.risultato.push(result);
                                                             //data è un oggetto formato da response e success
                    });
                }
                console.log(self.risultato)      
            
    
        }
    
    });
 

