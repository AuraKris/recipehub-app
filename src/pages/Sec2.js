import { React } from "react";
import { useNavigate } from "react-router-dom";
export default function Sec2(){
    const navigate = useNavigate();
    const listOfWords = [
        "Skill-Building Resources", 
        "Chef Tips and Tricks",  
        "Interactive Cooking Classes",  
        "Ingredient Insights",
        "Community Support", 
    ]
    const handleSignupClick = () => {
        navigate('/joinus');
    };

    return(
        <div className="section sec2">
            <div className="columns img">
                <img src={`${process.env.PUBLIC_URL}//img/gallery/C1.jpg`} alt=""/>
            </div>
            <div className="columns typog">
                <h1 className="title">Improve Your Cooking Skills</h1>
                { listOfWords.map((item, index) => (
                    <p className="word-item" key={index}>{item}</p>
                ))}
                <button className="btn" onClick={handleSignupClick}>Signup Now</button>
            </div>
        </div>
    )
}