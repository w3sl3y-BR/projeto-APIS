fetch('https://viacep.com.br/ws/08750260/json/').then (Response => {
    return Response.json()
}).then(corpo => {
    console.log(corpo)

})
