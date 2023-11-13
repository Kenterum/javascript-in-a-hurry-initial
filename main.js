document.querySelector("#open-nav-menu").addEventListener("click", function (params){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});
document.querySelector("#close-nav-menu").addEventListener("click", function (params){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

//Greeting Section

function celsiusToFahr(temperature){
    let fahr = (temperature * 9/5) + 32;
    return fahr;    
}


const greetingText = "Good Morning!";
const weatherCondition = "sunny";
const userLocation = "Baku";
let temperature = 22.8673;

// alert("The temperature outside is " + celsiusToFahr(temperature) + "°F." );

let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`;
let fahreinheitText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;    


document.querySelector(".weather-group").addEventListener("click", function(e){
    
    if (e.target.id == "celsius"){
        document.querySelector("p#weather").innerHTML = celsiusText;    
    } else if (e.target.id == "fahr"){
        document.querySelector("p#weather").innerHTML = fahreinheitText;    
    } 
});


//let secondsCorrector = localTime.getSeconds();
    // if (secondsCorrector <= 9 && secondsCorrector >= 0)
    // {
    //     secondsCorrector = "0" + secondsCorrector;
    // }

    //Local Time Section 
    setInterval(function(){
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
    },1000);


// let animal = {"name": "dog", "color": "white"};

// for (let a in animal) {
//     console.log(a + ": " + animal[a]);
// };

//Gallery Section 
const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image4.jpg",
        alt: "Thumbnail Image 4"
    }
];

/* for (let i in galleryImages) {
    console.log(galleryImages[i]);
} */

// galleryImages.forEach(function(image, index) {
//     console.log(image);
// });
let lessons = [
    {
      id: "273",
      title: "Variables",
      length: 12
    },
    {
     id: "295",
     title: "Conditionals",
     length: 12
    },
    {
     id: "299",
     title: "Functions",
     length: 12
    }
    ]; 
    
    // use this variable to add the lesson titles
    let lessonTitles = [];
    
    // write your code below this line\
    lessons.forEach(function(title){
        console.log(title);
    });
    
    