import {FaStar} from "react-icons/fa";
import {yellow} from "@mui/material/colors";


const StarsRating = (rating)=>{

        return (
            <div>
                {[...Array(5)].map((star,i)=>{
                    let ratingValue = i+1;
                    return(
                        <label>
                            <FaStar className="stars" color={ratingValue<=rating ? "yellow":"grey"}
                                    size={15}

                            />
                        </label>
                    )
                })}
            </div>
             )
    }

export {StarsRating};