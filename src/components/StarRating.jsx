import { useState } from "react"; // Importing the useState hook from React to manage component state
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti"; 
 
const StarRating = ({ initialRating = 0 }) => {  //initialRating is the prop default value is 0

    const [rating, setRating] = useState(initialRating); // Using useState to create a state variable 'rating' initialized with 'initialRating'  Create a state called rating, and start it at whatever initialRating is.
    const fillStar = (star) => { //StarRating component → state → fillStar function → return
            setRating(star)
    }
   
    return (
        <span>          
            {[1, 2, 3, 4, 5].map((star) => // Mapping over an array of numbers from 1 to 5 to create star elements - Take the numbers 1 through 5 and do something once for each number.
                star <= rating // true of false "Is this star's number less than or equal to the current rating?"
                ? <TiStarFullOutline 
                    key={star} 
                    color="#cbb3ff"
                    onClick={() => fillStar(star)}
                    size={26}
                    style={{ marginLeft: "10px" }}
                 />
                : <TiStarOutline 
                    key={star} 
                    color="#cbb3ff" 
                    onClick={() => fillStar(star)}  
                    size={26}    
                    style={{ marginLeft: "10px" }}             
                />          
            )} 
       </span>
    )
}

export default StarRating; // Exporting the StarRating component as the default export of this module  

// The map goes through all 5 stars, checks if each star should be filled or outlined based on the current rating, and displays it on the page.
// Map goes through each star, and star <= rating checks true or false to decide if the star should be filled or outlined.

// The .map() goes through stars 1–5 and gives each star its number.
// When a star is clicked, fillStar receives that number.
// fillStar only changes rating to the clicked star's number.
// star <= rating then decides which stars display as filled or outlined.
//So the big thing to remember is: fillStar doesn't actually fill the stars. It only sets the rating number. The .map() + star <= rating decides which icon gets displayed.