import { React } from "react";
import { useNavigate } from "react-router-dom";
export default function Sec2(){
    const navigate = useNavigate();
    const listOfWords = [
        "Lorem 12345182973981723", 
        "Ipsum 1234591823891623",  
        "Dolor 1234591239813",  
        "Sit 12345o0123197",
        "Amet 1234512377", 
    ]
    const handleExploreClick = () => {
        navigate('/recipes');
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
                <button className="btn" onClick={handleExploreClick}>Signup Now</button>
            </div>
        </div>
    )
}