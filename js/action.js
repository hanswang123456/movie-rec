const button = document.querySelector("#but");

button.addEventListener("click", ()=>{
    //alert('Hey you changed me!');
    const endPoint="https://api.themoviedb.org/3/movie/now_playing?api_key=e50c14a9f7c1c52eb84b4f59e3feacdc&language=en-US&page=1";
    
    fetch(endPoint)
    .then(res=>{ //create a funciton res can be anyword, is for response. res represents object that was returned form the api
        //this pulls out the json data from the response object
        res.json()
        .then(data=>{ //funtion holds the object
            const main = document.querySelector("main")

            for(let i=0; i<data.results.length; i++){
                //use += to show every one, otherwise only one is shown
                main.innerHTML+=data.results[i].title + "<br>"; //results is an array
                main.innerHTML+=data.results[i].overview + "<br>";
                //dynamiclly create elements in JS. This is a node
                const dynamicallyCreateImg = document.createElement("img");
                //the address needed to add to src, otherwise the picture will not be shown
                const baseURL="https://image.tmdb.org/t/p/w185_and_h278_bestv2";
                //set attribtes to images created, <img src="posterpath">

                dynamicallyCreateImg.setAttribute("src", baseURL + data.results[i].poster_path)

                main.appendChild(dynamicallyCreateImg);
                main.innerHTML+="<br><br>"
            }
        })
    })

})

//after ?, it is a query string, two variables
//endpoint: http://api.weatherstack.com/current?access_key=5864423429395c953b5df36decb4c9bc&query=New York
//endpoint for movie:https://api.themoviedb.org/3/movie/now_playing?api_key=e50c14a9f7c1c52eb84b4f59e3feacdc&language=en-US&page=1
//need name, overview, and release