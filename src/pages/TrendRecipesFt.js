import { Link } from 'react-router-dom'

export default function trendRec({recipe}){
    return (
        <div className="trend-card">
            <div className="tc-img">
                <img src={recipe.img} alt=""></img>
            </div>
            <div className="tc-info">
                <h3 className="recipeTitle">{recipe.name}</h3>
                <p className="recipeLkCnt">Likes: <b>{recipe.rcpLkCnt}</b></p>
                <p className="recipeTaste">Cuisine: <b>{recipe.taste}</b></p>
                <Link to={`/recipes/${recipe.id}`} className="view-rec-btn btn">
                    View Recipe
                </Link>
            </div>
        </div>
    )
}