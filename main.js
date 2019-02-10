//Images
axios({
method:'get',
url:'https://api.unsplash.com/photos/random?client_id=479ce24bf5ea04e4f7c9d759d9842c7b4d0b113b022ce09a8444f39f6f3aa4d4'
})
.then(imageSuccess)
.catch(imageFail);

function imageSuccess(response){
    console.log(response.data.urls.regular);
    $("body").css('background-image', 'url("' +response.data.urls.regular + '")');
    }

function imageFail(error){
    console.log(error);
}



//Weather
axios({
    method:'get',
    url:'https://api.openweathermap.org/data/2.5/weather?id=108410&units=metric&APPID=d51784a3c8c6dadeabb8b959c6ab2c40'
    })
    .then(wetherSuccess)
    .catch(wetherFail);

    function wetherSuccess(response){
        console.log(response.data.main);
        $(".weather h2").text(response.data.main.temp+"℃");
        $(".weather img").attr("src","http://openweathermap.org/img/w/"+response.data.weather[0].icon+".png");
        $(".weather h4").text(response.data.name);

        const description = response.data.weather[0].description;
    }
    
    function wetherFail(error){
        console.log(error);
    }



//Qoutes
axios({
    method:'get',
    url:'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    })
    .then(success)
    .catch(fail);


    function fail(error){
        console.log(error);
    }
    function success(response){
        console.log(response.data.quoteText);
        // $('body').append(`<h2>${response.data.quoteAuthor}</h2>`)
        // $('body').append(`<h1>${response.data.quoteText}</h1>`)
        $(".qoute").text('"'+response.data.quoteText+'"');
        $(".author").text('_'+response.data.quoteAuthor);
    }
    

   $(".time h1").text(moment().format("h:mm A"));
   if(moment().format("A")=="AM"){
    $(".time h4").text("Good Morning"); 
   }else {
       if(parseInt(moment().format("h"))>5){
        $(".time h4").text("Good Night");  
       }
       else{
    $(".time h4").text("Good Afternoon");  }
   }