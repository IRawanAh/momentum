function wetherSuccess(response){
    console.log(response.data.main);
    $("h1").text(response.data.main.temp+"℃");
    $("img").attr("src","http://openweathermap.org/img/w/"+response.data.weather[0].icon+".png");
    const description = response.data.weather[0].description;
    $('body').append(`<h1>${description}</h1>`)
}

function wetherFail(error){
    console.log(error);
}


axios({
    method:'get',
    url:'https://api.openweathermap.org/data/2.5/weather?id=108410&units=metric&APPID=d51784a3c8c6dadeabb8b959c6ab2c40'
    })
    .then(wetherSuccess)
    .catch(wetherFail);
    