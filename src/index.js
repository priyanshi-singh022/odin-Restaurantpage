import "./styles.css";
import vegesImg from "./Images/pasta-spaghetti-vegetables-spices-isolated-white.jpg"
import tunadish from "./Images/tuna-salad.jpg"


// hero section 

const img = document.createElement("img");
img.src = vegesImg;
img.alt = "Veges";
img.classList.add("hero-img");
document.getElementById("hero-sec").prepend(img);




// menu 
const tunaimg = document.createElement("img");
tunaimg.src = tunadish;
tunaimg.alt = "Tuna dish";
tunaimg.classList.add("dish-img");
document.getElementById("Contact").prepend(tunaim);
