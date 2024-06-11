import { Link } from 'react-router-dom'
import ResImg from "./ResImg"

export default function RecCard({recipe}) {
    return (
        <div className="rec-card">
            <ResImg src={recipe.img} pt="60%"/>
            <div className="rec-card-info">
                <img className="rec-creator-img" src={recipe.cookImg} alt=""/>
                <h3 className="rec-card-title">{recipe.name}</h3>
                <p className="rec-card-text">{recipe.desc}</p>
                <Link to={`/recipes/${recipe.id}`} className="view-rec-btn btn">
                    View Recipe
                </Link>
            </div>

        </div>
    )
}