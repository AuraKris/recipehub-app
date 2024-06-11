import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipes } from './RecipesContext';

export default function RecipePage({}){
    const { id } = useParams();
    const {recipes, trendingRecipes } = useRecipes();
    const recipe = recipes.find(r => r.id === parseInt(id));
    const [activeTab, setActiveTab] = useState("descriptions"); 

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return(
        <div className="recipe-page">
            <div>
                <h2>{recipe.name}</h2>
                <img src={recipe.img} alt={recipe.name} />
            </div>
            <div className="recipe-info">
                <button onClick={() => setActiveTab("descriptions")} className={activeTab === "descriptions" ? "recipe-btn active" : "recipe-btn"}>Descriptions</button>
                <button onClick={() => setActiveTab("instructions")} className={activeTab === "instructions" ? "recipe-btn active" : "recipe-btn"}>Instructions</button>
                <button onClick={() => setActiveTab("ingredients")} className={activeTab === "ingredients" ? "recipe-btn active" : "recipe-btn"}>Ingredients</button>
                {activeTab === "descriptions" && (
                    <div className="recipe-desc">
                        <p><b>Description:</b> {recipe.desc}</p>
                        <p><b>Likes:</b> {recipe.rcpLkCnt}</p>
                        <p><b>Cuisine:</b> {recipe.taste}</p>
                        <p><b>Difficulty Level [1-5]:</b> {recipe.difficulty}</p>
                    </div>
                )}
                {activeTab === "instructions" && (
                    <ol className="recipe-inst">
                        {recipe.instructions.map((instructions) => (
                            <li key={instructions.id}><span><b>{instructions.inst_t}</b>{instructions.inst}</span></li>
                        ))}
                    </ol>
                )}
                {activeTab === "ingredients" && (
                    <ul className="recipe-ingredient">
                        {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient.id}><span>{ingredient.cont}</span></li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    )
}