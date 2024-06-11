import { useRecipes } from "./RecipesContext"
import TrendRec from "./TrendRecipesFt"

export default function Sec4(){
    const {recipes, trendingRecipes } = useRecipes()
    return (
        <div className="section trend">
            <h1>Trending Recipes</h1>
            <div className="trend-cont">
                {trendingRecipes.map((recipe, index) => <TrendRec key={index} recipe={recipe} />)}
            </div>
        </div>
    )
}