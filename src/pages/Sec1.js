import ResImg from "./ResImg";

export default function Sec1(){
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
    return (
        <div className="section gal">
            <div className="columns">
                <h1 className="title">Welcome to RecipeHub</h1>
                <p className="desc typog">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="/recipes">
                    <button className="btn">Explore Now</button>
                </a>
            </div>
            <div className="columns gallery">
                {images.map((src, index) => (
                    <ResImg key={index} src={src} pt={"90%"}/>
                ))}
            </div>
        </div>
    )
}