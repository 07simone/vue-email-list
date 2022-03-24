const app = new Vue(
    {
        el: "app",
        data:{},
        methods:{},
    }
);
for(let i = 0; i < 10; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")           // quando risponderai allora mi andrai a eseguire la funzione qui sotto con argomento la risposta che hai appena ricevuto
    .then(function (response){                      
        const result = response;
        console.log(result.data.response)                                       //data è un oggetto formato da response e success
    })
}
