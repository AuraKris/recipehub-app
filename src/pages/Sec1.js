import { React } from "react";
import { useNavigate } from "react-router-dom";
import ResImg from "./ResImg";

export default function Sec1(){
    const navigate = useNavigate();
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg",
    ]
    const handleExploreClick = () => {
        navigate('/recipes');
    };
    return (
        <div className="section gal">
            <div className="columns">
                <h1 className="title">Welcome to RecipeHub</h1>
                <p className="desc typog">Welcome to RecipeHub, your gateway to a world of culinary delights! Whether you're a seasoned chef or a kitchen newbie, our app is designed to inspire and simplify your cooking journey. From mouthwatering mains to delectable desserts, you'll find a treasure trove of recipes crafted to satisfy every craving. Get ready to explore, cook, and create unforgettable meals right at your fingertips. Welcome aboard, and let's embark on a delicious adventure together!</p>
                <button className="btn" onClick={handleExploreClick}>Explore Now</button>
            </div>
            <div className="columns gallery">
                {images.map((src, index) => (
                    <ResImg key={index} src={src} pt={"90%"}/>
                ))}
            </div>
        </div>
    )
}