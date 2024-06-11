import React, { useState, useEffect } from 'react';
import Icon from "@mui/material/Icon"
import RecCard from "./RecipeCard"
import { useRecipes } from './RecipesContext';

export default function Recipes() {
    const defaultSearches  = ['Pizza', 'Rice', 'Fries', 'Steak', 'Lamb', 'Salad', 'Cake', 'Chicken']
    const {recipes, trendingRecipes } = useRecipes();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchQuery2, setSearchQuery2] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);
    const [previousSearches, setPreviousSearches] = useState(defaultSearches);
    const [sortOrder, setSortOrder] = useState(''); // '', 'difficulty', 'alphabetical'
    const [categoryFilter, setCategoryFilter] = useState('');

    useEffect(() => {
        let updatedRecipes = [...recipes];

        if (searchQuery !== '') {
            const query = searchQuery.toLowerCase();
            updatedRecipes = updatedRecipes.filter(recipe => recipe.name.toLowerCase().includes(query));
        }

        if (searchQuery2 !== '') {
            const query2 = searchQuery2.toLowerCase();
            updatedRecipes = updatedRecipes.filter(recipe => recipe.ingredient_list.toLowerCase().includes(query2));
        }

        if (categoryFilter !== '') {
            const cquery = categoryFilter.toLowerCase();
            updatedRecipes = updatedRecipes.filter(recipe => recipe.taste.toLowerCase().includes(cquery));
        }

        if (sortOrder === 'difficulty') {
            updatedRecipes.sort((a, b) => a.difficulty - b.difficulty);
        } else if (sortOrder === 'alphabetical') {
            updatedRecipes.sort((a, b) => a.name.localeCompare(b.name));
        }

        setFilteredRecipes(updatedRecipes);
    }, [searchQuery, searchQuery2, sortOrder, categoryFilter, recipes]);

    // const handleSearchInputChange = (e) => {
    //     setSearchQuery(e.target.value);
    // };

    // const handleSearchClick = (search) => {
    //     setSearchQuery(search);
    // };

    // const handleSearchSubmit = () => {
    //     if (searchQuery && !previousSearches.includes(searchQuery)) {
    //         setPreviousSearches([searchQuery, ...previousSearches.slice(0, 7)]); // limit to last 8 searches
    //     }
    // };

    const handleSearchInputChange2 = (e) => {
        setSearchQuery2(e.target.value);
    };

    const handleSearchClick2 = (search) => {
        setSearchQuery2(search);
    };

    const handleSearchSubmit2 = () => {
        if (searchQuery2 && !previousSearches.includes(searchQuery2)) {
            setPreviousSearches([searchQuery2, ...previousSearches.slice(0, 7)]); // limit to last 8 searches
        }
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
    };

    return (
        <div>
            {/* Sec 1 */}
            <div className="history section">
                <h2>Previous Searches</h2>
                <div className="hist-cont">
                    {previousSearches.map((search, index) => (
                        <div key={index} style={{animationDelay: index*.1 + "s"}} className="search-items" onClick={() => handleSearchClick2(search)}>
                            {search}    
                        </div>
                    ))}
                </div>
                <div className="searchfiltsort">
                    <div className="controls">
                        <div className="selects">
                            <select className="each" onChange={handleSortChange} value={sortOrder}>
                                <option value="">Sort By</option>
                                <option value="difficulty">Difficulty(Easiest to Hardest)</option>
                                <option value="alphabetical">Alphabetical (A-Z)</option>
                            </select>
                            <select className="each" onChange={handleCategoryChange} value={categoryFilter}>
                                <option value="">Filter by Category</option>
                                <option value="Italian">Italian</option>
                                <option value="Asian">Asian</option>
                                <option value="American">American</option>
                                <option value="Korean">Korean</option>
                                <option value="Indonesian">Indonesian</option>
                                <option value="Western">Western</option>
                            </select>
                        </div>
                        <input type="text" placeholder="Search..." value={searchQuery2} onChange={handleSearchInputChange2}/>
                        <button className="btn" onClick={handleSearchSubmit2}>
                            <Icon className="searchicon">search</Icon>
                        </button>
                    </div>
                </div>
            </div>

            {/* Sec 2 */}
            <div className="recipes-cont">
                {filteredRecipes.map((recipe, index) => (
                    <RecCard key={index} recipe={recipe}/>
                ))}
            </div>
        </div>
    )
}