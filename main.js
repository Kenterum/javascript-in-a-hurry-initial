
//semicolon is not an important thing 

// function testAlert(message) {

//         alert(message);

// }
//inside the console.log() "" or '' is acceptable 

//console.log('');
// console.log('Test Message to the console'); //Sends something to the console without alerting (Only for the developers)
// console.log(4 + 5);

// document.getElementById("greeting").innerHTML = "Hello World"
// document.getElementsByClassName("product-item");
// document.getElementsByClassName("product-item").innerHTML = "Testing"; // innerHTML won't work in classes

//document.getElementsByTagName

// document.get


// const customer = "Paul";
//when you are not going to reassign a value to a variable you should to use const  


// const customer = "Sara";
// let balance = 2000;

// // console.log("Hello, " +  customer);
// console.log("Hi, " + customer + ". Your balance is USD " + balance);


// balance = balance + 200;

// console.log("Hi, " + customer + ". Your new balance is USD " + balance);

// const customer_name = "Sara";
// let customer_balance = 2000;

// alert("The temperature outside is " + celsiusToFahr(temperature) + "°F." );

//let secondsCorrector = localTime.getSeconds();
    // if (secondsCorrector <= 9 && secondsCorrector >= 0)
    // {
    //     secondsCorrector = "0" + secondsCorrector;
    // }

// let animal = {"name": "dog", "color": "white"};

// for (let a in animal) {
//     console.log(a + ": " + animal[a]);
// };

/* for (let i in galleryImages) {
    console.log(galleryImages[i]);
} */

// galleryImages.forEach(function(image, index) {
//     console.log(image);
// });
// let lessons = [
//     {
//       id: "273",
//       title: "Variables",
//       length: 12
//     },
//     {
//      id: "295",
//      title: "Conditionals",
//      length: 12
//     },
//     {
//      id: "299",
//      title: "Functions",
//      length: 12
//     }
//     ]; 
    
//     // use this variable to add the lesson titles
//     let lessonTitles = [lessons.title];
    
//     // write your code below this line\
//     lessons.forEach(function(lesson){
//         lessonTitles.push(lesson.title)
//     });


//------------------------------------------------------------------//
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

let currentHour = new Date().getHours();
let greetingText;
if (currentHour < 12){
    greetingText = "Good Morning!"; 
} else if (currentHour < 19){
    greetingText = "Good Afternoon!"; 
}else if (currentHour < 24){
    greetingText = "Good Evening!"; 
} else { 
    greetingText = "Welcome!"; 
}


const weatherCondition = "sunny";
const userLocation = "Baku";
let temperature = 22.8673;


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



    //Local Time Section 
    setInterval(function(){
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
    },1000);


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
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }
];

let mainImage = document.querySelector("#gallery > img")
let thumbnails = document.querySelector("#gallery .thumbnails")

mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;
/* <img src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1" data-array-index="0" data-selected="true">
<img src="./assets/gallery/image2.jpg" alt="Thumbnail Image 2" data-array-index="1" data-selected="false">
<img src="./assets/gallery/image3.jpg" alt="Thumbnail Image 3" data-array-index="2" data-selected="false"></img> */
galleryImages.forEach(function(image,index){
let thumb = document.createElement("img");
thumb.src = image.src;
thumb.alt = image.alt;
thumb.dataset.arrayIndex = index;
thumb.dataset.selected = index === 0 ? true : false; 

thumb.addEventListener("click", function(e){
    let selectedIndex = e.target.dataset.arrayIndex;
    let selectedImage = galleryImages[selectedIndex];
    mainImage.src = selectedImage.src;
    mainImage.alt = selectedImage.alt;

    thumbnails.querySelectorAll("img").forEach(function(img){
        img.dataset.selected = false;
    });
    e.target.dataset.selected = true;
});

thumbnails.appendChild(thumb);

});
