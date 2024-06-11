// RecipesContext.js
import React, { createContext, useContext } from 'react';

const RecipesContext = createContext();

export const useRecipes = () => useContext(RecipesContext);

// #Semua foto di #drive(https://drive.google.com/drive/folders/18xwXLDxIYoTWGkNpX7IyLrOvW6y#ZYT1F?usp=drive_link)
export const RecipesProvider = ({ children }) => {
    const recipes = [ 
        {   
            id: 1,
            name: "Pizza", 
            img: "/img/gallery/img_1.jpg",
            cookImg: "/img/top-chiefs/img_1.jpg", 
            desc: "palabapakao",
            rcpLkCnt: 9,
            taste: "Europian Italian", 
            difficulty: 4,
            instructions: [{
                id: 1, 
                inst_t: "Prepare the Spice Paste: ",
                inst: "Using a food processor or mortar and pestle, grind lemongrass, shallots, garlic, galangal, and coriander into a smooth paste (or with some texture if needed)."
            }, {
                id: 2, 
                inst_t: "Marinate the Chicken: ",
                inst: "Heat 1 tablespoon oil in a large pot (medium heat). Add the spice paste, cook for 2-3 minutes (fragrant). Pour in coconut water, soy sauce, bay leaves, and coconut sugar. Simmer 2-3 minutes (dissolve sugar). Add chicken (coated in marinade), bring to a boil, then simmer 20-25 minutes (cooked through) or marinate 30 minutes-1 hour before simmering."
            }, {
                id: 3, 
                inst_t: "Fry the Chicken: ",
                inst: "While chicken simmers, heat oil in a large pot/wok for deep frying (350°F). Remove chicken, cool slightly, and dry on paper towels. Fry chicken pieces (in batches) until golden brown and crispy. Drain on paper towels (remove excess oil)."
            }, {
                id: 4, 
                inst_t: "Serve: ",
                inst: "Enjoy Kalasan fried chicken hot with your favorite accompaniments (fresh vegetables for dipping, spicy sambal, kecap manis)."
            }],
            ingredient_list: "Chicken, Coconut water, Lemongrass stalks, Shallots, Garlic, Galangal, Ground coriander, Soy sauce, Dried bay leaves, Coconut sugar, Salt, Black pepper, Vegetable Oil",
            ingredients: [{
                id: 1,
                cont: "2-3 lbs Chicken Drumsticks (or thighs)"
            }, {
                id: 2,
                cont: "24 oz Coconut Water + 2 tbsp extra"
            }, {
                id: 3,
                cont: "2 small Lemongrass Stalks, trimmed"
            }, {
                id: 4,
                cont: "3 Shallots, peeled"
            }, {
                id: 5,
                cont: "4 Cloves Garlic"
            }, {
                id: 6,
                cont: "1 inch Galangal, fresh (peeled and sliced)"
            }, {
                id: 7,
                cont: "1.5 tbsp Ground Coriander"
            }, {
                id: 8,
                cont: "¼ tsp Soy Sauce"
            }, {
                id: 9,
                cont: "5 Dried Bay Leaves"
            }, {
                id: 10,
                cont: "½ cup Coconut Sugar (or brown sugar)"
            }, {
                id: 11,
                cont: "¼ tsp Salt"
            }, {
                id: 12,
                cont: "¼ tsp Black Pepper"
            }, {
                id: 13,
                cont: "Vegetable Oil for frying (high smoke point)"
            }]
        }, 
        {
            id: 2,
            name: "Rice", 
            img: "/img/gallery/img_2.jpg",
            cookImg: "/img/top-chiefs/img_2.jpg", 
            desc: "palabapakao", 
            rcpLkCnt: 11,
            taste: "Asian", 
            difficulty: 1,
            instructions: [{
                id: 1, 
                inst_t: "Prepare the Spice Paste: ",
                inst: "Using a food processor or mortar and pestle, grind lemongrass, shallots, garlic, galangal, and coriander into a smooth paste (or with some texture if needed)."
            }, {
                id: 2, 
                inst_t: "Marinate the Chicken: ",
                inst: "Heat 1 tablespoon oil in a large pot (medium heat). Add the spice paste, cook for 2-3 minutes (fragrant). Pour in coconut water, soy sauce, bay leaves, and coconut sugar. Simmer 2-3 minutes (dissolve sugar). Add chicken (coated in marinade), bring to a boil, then simmer 20-25 minutes (cooked through) or marinate 30 minutes-1 hour before simmering."
            }, {
                id: 3, 
                inst_t: "Fry the Chicken: ",
                inst: "While chicken simmers, heat oil in a large pot/wok for deep frying (350°F). Remove chicken, cool slightly, and dry on paper towels. Fry chicken pieces (in batches) until golden brown and crispy. Drain on paper towels (remove excess oil)."
            }, {
                id: 4, 
                inst_t: "Serve: ",
                inst: "Enjoy Kalasan fried chicken hot with your favorite accompaniments (fresh vegetables for dipping, spicy sambal, kecap manis)."
            }],
            ingredient_list: "Chicken, Coconut water, Lemongrass stalks, Shallots, Garlic, Galangal, Ground coriander, Soy sauce, Dried bay leaves, Coconut sugar, Salt, Black pepper, Vegetable Oil",
            ingredients: [{
                id: 1,
                cont: "2-3 lbs Chicken Drumsticks (or thighs)"
            }, {
                id: 2,
                cont: "24 oz Coconut Water + 2 tbsp extra"
            }, {
                id: 3,
                cont: "2 small Lemongrass Stalks, trimmed"
            }, {
                id: 4,
                cont: "3 Shallots, peeled"
            }, {
                id: 5,
                cont: "4 Cloves Garlic"
            }, {
                id: 6,
                cont: "1 inch Galangal, fresh (peeled and sliced)"
            }, {
                id: 7,
                cont: "1.5 tbsp Ground Coriander"
            }, {
                id: 8,
                cont: "¼ tsp Soy Sauce"
            }, {
                id: 9,
                cont: "5 Dried Bay Leaves"
            }, {
                id: 10,
                cont: "½ cup Coconut Sugar (or brown sugar)"
            }, {
                id: 11,
                cont: "¼ tsp Salt"
            }, {
                id: 12,
                cont: "¼ tsp Black Pepper"
            }, {
                id: 13,
                cont: "Vegetable Oil for frying (high smoke point)"
            }]
        }, 
        {
            id: 3,
            name: "Korean BBQ", 
            img: "/img/gallery/img_3.jpg",
            cookImg: "/img/top-chiefs/img_1.jpg", 
            desc: "palabapakao", 
            rcpLkCnt: 15,
            taste: "Asian Korean", 
            difficulty: 3,
            instructions: [{
                id: 1, 
                inst_t: "Prepare the Spice Paste: ",
                inst: "Using a food processor or mortar and pestle, grind lemongrass, shallots, garlic, galangal, and coriander into a smooth paste (or with some texture if needed)."
            }, {
                id: 2, 
                inst_t: "Marinate the Chicken: ",
                inst: "Heat 1 tablespoon oil in a large pot (medium heat). Add the spice paste, cook for 2-3 minutes (fragrant). Pour in coconut water, soy sauce, bay leaves, and coconut sugar. Simmer 2-3 minutes (dissolve sugar). Add chicken (coated in marinade), bring to a boil, then simmer 20-25 minutes (cooked through) or marinate 30 minutes-1 hour before simmering."
            }, {
                id: 3, 
                inst_t: "Fry the Chicken: ",
                inst: "While chicken simmers, heat oil in a large pot/wok for deep frying (350°F). Remove chicken, cool slightly, and dry on paper towels. Fry chicken pieces (in batches) until golden brown and crispy. Drain on paper towels (remove excess oil)."
            }, {
                id: 4, 
                inst_t: "Serve: ",
                inst: "Enjoy Kalasan fried chicken hot with your favorite accompaniments (fresh vegetables for dipping, spicy sambal, kecap manis)."
            }],
            ingredient_list: "Chicken, Coconut water, Lemongrass stalks, Shallots, Garlic, Galangal, Ground coriander, Soy sauce, Dried bay leaves, Coconut sugar, Salt, Black pepper, Vegetable Oil",
            ingredients: [{
                id: 1,
                cont: "2-3 lbs Chicken Drumsticks (or thighs)"
            }, {
                id: 2,
                cont: "24 oz Coconut Water + 2 tbsp extra"
            }, {
                id: 3,
                cont: "2 small Lemongrass Stalks, trimmed"
            }, {
                id: 4,
                cont: "3 Shallots, peeled"
            }, {
                id: 5,
                cont: "4 Cloves Garlic"
            }, {
                id: 6,
                cont: "1 inch Galangal, fresh (peeled and sliced)"
            }, {
                id: 7,
                cont: "1.5 tbsp Ground Coriander"
            }, {
                id: 8,
                cont: "¼ tsp Soy Sauce"
            }, {
                id: 9,
                cont: "5 Dried Bay Leaves"
            }, {
                id: 10,
                cont: "½ cup Coconut Sugar (or brown sugar)"
            }, {
                id: 11,
                cont: "¼ tsp Salt"
            }, {
                id: 12,
                cont: "¼ tsp Black Pepper"
            }, {
                id: 13,
                cont: "Vegetable Oil for frying (high smoke point)"
            }]
        }, 
        {
            id: 4, 
            name: "Spaghetti", 
            img: "/img/gallery/img_4.jpg",
            cookImg: "/img/top-chiefs/img_3.jpg", 
            desc: "palabapakao", 
            rcpLkCnt: 18,
            taste: "Europian Italian", 
            difficulty: 4,
            instructions: [{
                id: 1, 
                inst_t: "Prepare the Spice Paste: ",
                inst: "Using a food processor or mortar and pestle, grind lemongrass, shallots, garlic, galangal, and coriander into a smooth paste (or with some texture if needed)."
            }, {
                id: 2, 
                inst_t: "Marinate the Chicken: ",
                inst: "Heat 1 tablespoon oil in a large pot (medium heat). Add the spice paste, cook for 2-3 minutes (fragrant). Pour in coconut water, soy sauce, bay leaves, and coconut sugar. Simmer 2-3 minutes (dissolve sugar). Add chicken (coated in marinade), bring to a boil, then simmer 20-25 minutes (cooked through) or marinate 30 minutes-1 hour before simmering."
            }, {
                id: 3, 
                inst_t: "Fry the Chicken: ",
                inst: "While chicken simmers, heat oil in a large pot/wok for deep frying (350°F). Remove chicken, cool slightly, and dry on paper towels. Fry chicken pieces (in batches) until golden brown and crispy. Drain on paper towels (remove excess oil)."
            }, {
                id: 4, 
                inst_t: "Serve: ",
                inst: "Enjoy Kalasan fried chicken hot with your favorite accompaniments (fresh vegetables for dipping, spicy sambal, kecap manis)."
            }],
            ingredient_list: "Chicken, Coconut water, Lemongrass stalks, Shallots, Garlic, Galangal, Ground coriander, Soy sauce, Dried bay leaves, Coconut sugar, Salt, Black pepper, Vegetable Oil",
            ingredients: [{
                id: 1,
                cont: "2-3 lbs Chicken Drumsticks (or thighs)"
            }, {
                id: 2,
                cont: "24 oz Coconut Water + 2 tbsp extra"
            }, {
                id: 3,
                cont: "2 small Lemongrass Stalks, trimmed"
            }, {
                id: 4,
                cont: "3 Shallots, peeled"
            }, {
                id: 5,
                cont: "4 Cloves Garlic"
            }, {
                id: 6,
                cont: "1 inch Galangal, fresh (peeled and sliced)"
            }, {
                id: 7,
                cont: "1.5 tbsp Ground Coriander"
            }, {
                id: 8,
                cont: "¼ tsp Soy Sauce"
            }, {
                id: 9,
                cont: "5 Dried Bay Leaves"
            }, {
                id: 10,
                cont: "½ cup Coconut Sugar (or brown sugar)"
            }, {
                id: 11,
                cont: "¼ tsp Salt"
            }, {
                id: 12,
                cont: "¼ tsp Black Pepper"
            }, {
                id: 13,
                cont: "Vegetable Oil for frying (high smoke point)"
            }]
        }, 
        {
            id: 5,
            name: "Burger", 
            img: "/img/gallery/img_5.jpg",
            cookImg: "/img/top-chiefs/img_2.jpg", 
            desc: "palabapakao",
            rcpLkCnt: 20,
            taste: "Western American", 
            difficulty: 3,
            instructions: [{
                id: 1, 
                inst_t: "Prepare the Spice Paste: ",
                inst: "Using a food processor or mortar and pestle, grind lemongrass, shallots, garlic, galangal, and coriander into a smooth paste (or with some texture if needed)."
            }, {
                id: 2, 
                inst_t: "Marinate the Chicken: ",
                inst: "Heat 1 tablespoon oil in a large pot (medium heat). Add the spice paste, cook for 2-3 minutes (fragrant). Pour in coconut water, soy sauce, bay leaves, and coconut sugar. Simmer 2-3 minutes (dissolve sugar). Add chicken (coated in marinade), bring to a boil, then simmer 20-25 minutes (cooked through) or marinate 30 minutes-1 hour before simmering."
            }, {
                id: 3, 
                inst_t: "Fry the Chicken: ",
                inst: "While chicken simmers, heat oil in a large pot/wok for deep frying (350°F). Remove chicken, cool slightly, and dry on paper towels. Fry chicken pieces (in batches) until golden brown and crispy. Drain on paper towels (remove excess oil)."
            }, {
                id: 4, 
                inst_t: "Serve: ",
                inst: "Enjoy Kalasan fried chicken hot with your favorite accompaniments (fresh vegetables for dipping, spicy sambal, kecap manis)."
            }],
            ingredient_list: "Chicken, Coconut water, Lemongrass stalks, Shallots, Garlic, Galangal, Ground coriander, Soy sauce, Dried bay leaves, Coconut sugar, Salt, Black pepper, Vegetable Oil",
            ingredients: [{
                id: 1,
                cont: "2-3 lbs Chicken Drumsticks (or thighs)"
            }, {
                id: 2,
                cont: "24 oz Coconut Water + 2 tbsp extra"
            }, {
                id: 3,
                cont: "2 small Lemongrass Stalks, trimmed"
            }, {
                id: 4,
                cont: "3 Shallots, peeled"
            }, {
                id: 5,
                cont: "4 Cloves Garlic"
            }, {
                id: 6,
                cont: "1 inch Galangal, fresh (peeled and sliced)"
            }, {
                id: 7,
                cont: "1.5 tbsp Ground Coriander"
            }, {
                id: 8,
                cont: "¼ tsp Soy Sauce"
            }, {
                id: 9,
                cont: "5 Dried Bay Leaves"
            }, {
                id: 10,
                cont: "½ cup Coconut Sugar (or brown sugar)"
            }, {
                id: 11,
                cont: "¼ tsp Salt"
            }, {
                id: 12,
                cont: "¼ tsp Black Pepper"
            }, {
                id: 13,
                cont: "Vegetable Oil for frying (high smoke point)"
            }]
        }, 
        {
            id: 6,
            name: "Fried Rice", 
            img: "/img/gallery/img_6.jpg",
            cookImg: "/img/top-chiefs/img_4.jpg", 
            desc: "palabapakao",
            rcpLkCnt: 7,
            taste:"Asian Malaysian", 
            difficulty: 3,
            instructions: [{
                id: 1, 
                inst_t: "Prepare the Spice Paste: ",
                inst: "Using a food processor or mortar and pestle, grind lemongrass, shallots, garlic, galangal, and coriander into a smooth paste (or with some texture if needed)."
            }, {
                id: 2, 
                inst_t: "Marinate the Chicken: ",
                inst: "Heat 1 tablespoon oil in a large pot (medium heat). Add the spice paste, cook for 2-3 minutes (fragrant). Pour in coconut water, soy sauce, bay leaves, and coconut sugar. Simmer 2-3 minutes (dissolve sugar). Add chicken (coated in marinade), bring to a boil, then simmer 20-25 minutes (cooked through) or marinate 30 minutes-1 hour before simmering."
            }, {
                id: 3, 
                inst_t: "Fry the Chicken: ",
                inst: "While chicken simmers, heat oil in a large pot/wok for deep frying (350°F). Remove chicken, cool slightly, and dry on paper towels. Fry chicken pieces (in batches) until golden brown and crispy. Drain on paper towels (remove excess oil)."
            }, {
                id: 4, 
                inst_t: "Serve: ",
                inst: "Enjoy Kalasan fried chicken hot with your favorite accompaniments (fresh vegetables for dipping, spicy sambal, kecap manis)."
            }],
            ingredient_list: "Chicken, Coconut water, Lemongrass stalks, Shallots, Garlic, Galangal, Ground coriander, Soy sauce, Dried bay leaves, Coconut sugar, Salt, Black pepper, Vegetable Oil",
            ingredients: [{
                id: 1,
                cont: "2-3 lbs Chicken Drumsticks (or thighs)"
            }, {
                id: 2,
                cont: "24 oz Coconut Water + 2 tbsp extra"
            }, {
                id: 3,
                cont: "2 small Lemongrass Stalks, trimmed"
            }, {
                id: 4,
                cont: "3 Shallots, peeled"
            }, {
                id: 5,
                cont: "4 Cloves Garlic"
            }, {
                id: 6,
                cont: "1 inch Galangal, fresh (peeled and sliced)"
            }, {
                id: 7,
                cont: "1.5 tbsp Ground Coriander"
            }, {
                id: 8,
                cont: "¼ tsp Soy Sauce"
            }, {
                id: 9,
                cont: "5 Dried Bay Leaves"
            }, {
                id: 10,
                cont: "½ cup Coconut Sugar (or brown sugar)"
            }, {
                id: 11,
                cont: "¼ tsp Salt"
            }, {
                id: 12,
                cont: "¼ tsp Black Pepper"
            }, {
                id: 13,
                cont: "Vegetable Oil for frying (high smoke point)"
            }]
        }, 
        {
            id: 7,
            name: "Kalasan Chicken", 
            img: "/img/gallery/img_7.jpg",
            cookImg: "/img/top-chiefs/img_4.jpg", 
            desc: "Kalasan chicken, also known as Ayam Goreng Kalasan, is a delicious Indonesian dish originating from the Kalasan area near Yogyakarta, Indonesia.", 
            rcpLkCnt: 10,
            taste: "Asian Indonesian", 
            difficulty: 3,
            instructions: [{
                id: 1, 
                inst_t: "Prepare the Spice Paste: ",
                inst: "Using a food processor or mortar and pestle, grind lemongrass, shallots, garlic, galangal, and coriander into a smooth paste (or with some texture if needed)."
            }, {
                id: 2, 
                inst_t: "Marinate the Chicken: ",
                inst: "Heat 1 tablespoon oil in a large pot (medium heat). Add the spice paste, cook for 2-3 minutes (fragrant). Pour in coconut water, soy sauce, bay leaves, and coconut sugar. Simmer 2-3 minutes (dissolve sugar). Add chicken (coated in marinade), bring to a boil, then simmer 20-25 minutes (cooked through) or marinate 30 minutes-1 hour before simmering."
            }, {
                id: 3, 
                inst_t: "Fry the Chicken: ",
                inst: "While chicken simmers, heat oil in a large pot/wok for deep frying (350°F). Remove chicken, cool slightly, and dry on paper towels. Fry chicken pieces (in batches) until golden brown and crispy. Drain on paper towels (remove excess oil)."
            }, {
                id: 4, 
                inst_t: "Serve: ",
                inst: "Enjoy Kalasan fried chicken hot with your favorite accompaniments (fresh vegetables for dipping, spicy sambal, kecap manis)."
            }],
            ingredient_list: "Chicken, Coconut water, Lemongrass stalks, Shallots, Garlic, Galangal, Ground coriander, Soy sauce, Dried bay leaves, Coconut sugar, Salt, Black pepper, Vegetable Oil",
            ingredients: [{
                id: 1,
                cont: "2-3 lbs Chicken Drumsticks (or thighs)"
            }, {
                id: 2,
                cont: "24 oz Coconut Water + 2 tbsp extra"
            }, {
                id: 3,
                cont: "2 small Lemongrass Stalks, trimmed"
            }, {
                id: 4,
                cont: "3 Shallots, peeled"
            }, {
                id: 5,
                cont: "4 Cloves Garlic"
            }, {
                id: 6,
                cont: "1 inch Galangal, fresh (peeled and sliced)"
            }, {
                id: 7,
                cont: "1.5 tbsp Ground Coriander"
            }, {
                id: 8,
                cont: "¼ tsp Soy Sauce"
            }, {
                id: 9,
                cont: "5 Dried Bay Leaves"
            }, {
                id: 10,
                cont: "½ cup Coconut Sugar (or brown sugar)"
            }, {
                id: 11,
                cont: "¼ tsp Salt"
            }, {
                id: 12,
                cont: "¼ tsp Black Pepper"
            }, {
                id: 13,
                cont: "Vegetable Oil for frying (high smoke point)"
            }]
        }, 
        {
            id: 8,
            name: "Bibimbap", 
            img: "/img/gallery/img_8.jpg",
            cookImg: "/img/top-chiefs/img_5.jpg", 
            desc: "palabapakao",
            rcpLkCnt: 12,
            taste: "Asian Korean", 
            difficulty: 3,
            instructions: [{
                id: 1, 
                inst_t: "Prepare the Spice Paste: ",
                inst: "Using a food processor or mortar and pestle, grind lemongrass, shallots, garlic, galangal, and coriander into a smooth paste (or with some texture if needed)."
            }, {
                id: 2, 
                inst_t: "Marinate the Chicken: ",
                inst: "Heat 1 tablespoon oil in a large pot (medium heat). Add the spice paste, cook for 2-3 minutes (fragrant). Pour in coconut water, soy sauce, bay leaves, and coconut sugar. Simmer 2-3 minutes (dissolve sugar). Add chicken (coated in marinade), bring to a boil, then simmer 20-25 minutes (cooked through) or marinate 30 minutes-1 hour before simmering."
            }, {
                id: 3, 
                inst_t: "Fry the Chicken: ",
                inst: "While chicken simmers, heat oil in a large pot/wok for deep frying (350°F). Remove chicken, cool slightly, and dry on paper towels. Fry chicken pieces (in batches) until golden brown and crispy. Drain on paper towels (remove excess oil)."
            }, {
                id: 4, 
                inst_t: "Serve: ",
                inst: "Enjoy Kalasan fried chicken hot with your favorite accompaniments (fresh vegetables for dipping, spicy sambal, kecap manis)."
            }],
            ingredient_list: "Chicken, Coconut water, Lemongrass stalks, Shallots, Garlic, Galangal, Ground coriander, Soy sauce, Dried bay leaves, Coconut sugar, Salt, Black pepper, Vegetable Oil",
            ingredients: [{
                id: 1,
                cont: "2-3 lbs Chicken Drumsticks (or thighs)"
            }, {
                id: 2,
                cont: "24 oz Coconut Water + 2 tbsp extra"
            }, {
                id: 3,
                cont: "2 small Lemongrass Stalks, trimmed"
            }, {
                id: 4,
                cont: "3 Shallots, peeled"
            }, {
                id: 5,
                cont: "4 Cloves Garlic"
            }, {
                id: 6,
                cont: "1 inch Galangal, fresh (peeled and sliced)"
            }, {
                id: 7,
                cont: "1.5 tbsp Ground Coriander"
            }, {
                id: 8,
                cont: "¼ tsp Soy Sauce"
            }, {
                id: 9,
                cont: "5 Dried Bay Leaves"
            }, {
                id: 10,
                cont: "½ cup Coconut Sugar (or brown sugar)"
            }, {
                id: 11,
                cont: "¼ tsp Salt"
            }, {
                id: 12,
                cont: "¼ tsp Black Pepper"
            }, {
                id: 13,
                cont: "Vegetable Oil for frying (high smoke point)"
            }]
        }, 
        {
            id: 9,
            name: "Steak", 
            img: "/img/gallery/img_9.jpg",
            cookImg: "/img/top-chiefs/img_6.jpg", 
            desc: "palabapakao",
            rcpLkCnt: 14,
            taste: "Western", 
            difficulty: 3,
            instructions: [{
                id: 1, 
                inst_t: "Prepare the Spice Paste: ",
                inst: "Using a food processor or mortar and pestle, grind lemongrass, shallots, garlic, galangal, and coriander into a smooth paste (or with some texture if needed)."
            }, {
                id: 2, 
                inst_t: "Marinate the Chicken: ",
                inst: "Heat 1 tablespoon oil in a large pot (medium heat). Add the spice paste, cook for 2-3 minutes (fragrant). Pour in coconut water, soy sauce, bay leaves, and coconut sugar. Simmer 2-3 minutes (dissolve sugar). Add chicken (coated in marinade), bring to a boil, then simmer 20-25 minutes (cooked through) or marinate 30 minutes-1 hour before simmering."
            }, {
                id: 3, 
                inst_t: "Fry the Chicken: ",
                inst: "While chicken simmers, heat oil in a large pot/wok for deep frying (350°F). Remove chicken, cool slightly, and dry on paper towels. Fry chicken pieces (in batches) until golden brown and crispy. Drain on paper towels (remove excess oil)."
            }, {
                id: 4, 
                inst_t: "Serve: ",
                inst: "Enjoy Kalasan fried chicken hot with your favorite accompaniments (fresh vegetables for dipping, spicy sambal, kecap manis)."
            }],
            ingredient_list: "Chicken, Coconut water, Lemongrass stalks, Shallots, Garlic, Galangal, Ground coriander, Soy sauce, Dried bay leaves, Coconut sugar, Salt, Black pepper, Vegetable Oil",
            ingredients: [{
                id: 1,
                cont: "2-3 lbs Chicken Drumsticks (or thighs)"
            }, {
                id: 2,
                cont: "24 oz Coconut Water + 2 tbsp extra"
            }, {
                id: 3,
                cont: "2 small Lemongrass Stalks, trimmed"
            }, {
                id: 4,
                cont: "3 Shallots, peeled"
            }, {
                id: 5,
                cont: "4 Cloves Garlic"
            }, {
                id: 6,
                cont: "1 inch Galangal, fresh (peeled and sliced)"
            }, {
                id: 7,
                cont: "1.5 tbsp Ground Coriander"
            }, {
                id: 8,
                cont: "¼ tsp Soy Sauce"
            }, {
                id: 9,
                cont: "5 Dried Bay Leaves"
            }, {
                id: 10,
                cont: "½ cup Coconut Sugar (or brown sugar)"
            }, {
                id: 11,
                cont: "¼ tsp Salt"
            }, {
                id: 12,
                cont: "¼ tsp Black Pepper"
            }, {
                id: 13,
                cont: "Vegetable Oil for frying (high smoke point)"
            }]
        }, 
        {
            id: 10,
            name: "Betutu Gilimanuk Chicken",
            img: "/img/gallery/C1.jpg",
            cookImg: "C1",
            desc: "Chicken Betutu is a traditional Balinese dish known for its rich and aromatic flavors. This dish is a staple in Balinese cuisine and is often served during ceremonial and festive occasions.",
            rcpLkCnt: 90,
            taste: "Asian Indonesian",
            difficulty: 5,
            instructions: [{
                id: 1,
                inst_t: "Clean the Chicken: ",
                inst: "Wash the chicken under running water until it is completely clean then drain until the water is dry."
            }, {
                id: 2,
                inst_t: "Ground Spices: ",
                inst: "Blend or coarsely chop the shallots, garlic and red chillies."
            }, {
                id: 3,
                inst_t: "Ground Spices: ",
                inst: "Finely grind turmeric, ginger, galangal, 1 stalk of lemongrass, candlenut, pepper, coriander, shrimp paste, salt and brown sugar."
            }, {
                id: 4,
                inst_t: "Begin Cooking: ",
                inst: "Saute the ground spices until fragrant and cooked. Add bay leaves, 2 stalks of lemongrass, stir until wilted. Add the coarsely ground spices, stir until cooked."
            }, {
                id: 5,
                inst_t: "Cook the Chicken: ",
                inst: "Add water then add the whole chicken. Cook over low heat for approximately 90 minutes until then remaining cooking water has reduced to around 200ml and the chicken is tender. "
            }, {
                id: 6,
                inst_t: "Serve: ",
                inst: "Serve the Betutu chicken along with accompaniments. "
            }],
            ingredient_list: "Chicken, Lemongrass stalks, Bay leaves, Red onions, Garlic, Chilies, Candlenuts, Ginger, Turmeric, Galangal, Kencur, Pepper, Coriander, Salt, Brown sugar, Shrimp paste",
            ingredients: [{
                id: 1,
                cont: "1 kg Whole Chicken"
            }, {
                id: 2,
                cont: "3 Lemongrass Stalks, bruised"
            }, {
                id: 3,
                cont: "4 Bay Leaves"
            }, {
                id: 4,
                cont: "15 Red Onions"
            }, {
                id: 5,
                cont: "7 Cloves of Garlic"
            }, {
                id: 6,
                cont: "2 Large Chilies"
            }, {
                id: 7,
                cont: "13 Curly Red Chilies"
            }, {
                id: 8,
                cont: "4 Candlenuts"
            }, {
                id: 9,
                cont: "3 cm Ginger"
            }, {
                id: 10,
                cont: "3 cm Turmeric"
            }, {
                id: 11,
                cont: "3 cm Galangal"
            }, {
                id: 12,
                cont: "3 cm Kencur"
            }, {
                id: 13,
                cont: "1 tsp Pepper"
            }, {
                id: 14,
                cont: "1 tsp Coriander"
            }, {
                id: 15,
                cont: "1 tbsp Salt"
            }, {
                id: 16,
                cont: "10 gr Brown Sugar"
            }, {
                id: 17,
                cont: "1 tsp Shrimp Paste"
            }]
        },
        {
            id: 11,
            name: "Coriander Fried Chicken",
            img: "/img/gallery/C2.webp",
            cookImg: "C2",
            desc: "Coriander Fried Chicken is a flavorful dish that combines the aromatic essence of coriander with the crispy, savory delight of fried chicken. This dish is popular in various cuisines, including Asian and Latin American, and can be prepared in different styles.",
            rcpLkCnt: 69,
            taste: "Asian American",
            difficulty: 3,
            instructions: [{
                id: 1,
                inst_t: "Clean the Chicken: ",
                inst: "Wash the chicken thoroughly"
            }, {
                id: 2,
                inst_t: "Ground Spices: ",
                inst: "Puree the shallots and garlic. Then, pour over the chicken"
            }, {
                id: 3,
                inst_t: "Seasonings: ",
                inst: "Add cornstarch, starch, salt, pepper, and other seasonings"
            }, {
                id: 4,
                inst_t: "Fry:",
                inst: "Fry in hot oil, drain, then fry again for approximately 3 minutes."
            }],
            ingredient_list: "Chicken, Thighs, Onions, Shallots, Garlic, Galangal, Coriander, cornstarch, Chicken stock, Salt, Black pepper, Vegetable Oil",
            ingredients: [{
                id: 1,
                cont: "5 pcs Chicken Drumsticks (or thighs)"
            }, {
                id: 2,
                cont: "6 Cloves Garlic"
            }, {
                id: 3,
                cont: "6 Red Onions or Shallots"
            }, {
                id: 4,
                cont: "40 ml Water (to grind the onions)"
            }, {
                id: 5,
                cont: "3 tsp  Ground Coriander"
            }, {
                id: 6,
                cont: "2 tsp Cornstarch"
            }, {
                id: 7,
                cont: "1 tsp Chicken Royco"
            }, {
                id: 8,
                cont: "1/2 tsp Salt"
            }, {
                id: 9,
                cont: "½ tsp Pepper"
            }]
        }, 
        {
            id: 12,
            name: "Chicken Soto",
            img: "/img/gallery/C3.webp",
            cookImg: "C3",
            desc: "Chicken Soto, also known as Soto Ayam, is a traditional Indonesian soup that is widely enjoyed across the archipelago. It is known for its rich and aromatic broth, tender chicken, and a variety of fresh and flavorful accompaniments.",
            rcpLkCnt: 110,
            taste: "Asian Indonesian",
            difficulty: 2,
            instructions: [{
                id: 1,
                inst_t: "Boil main ingredients: ",
                inst: "Boil all of the chickens, lemongrass, lime leaves, white cabbage, and chili peppers on one pan."
            }, {
                id: 2,
                inst_t: "Seasonings ",
                inst: "Add the seasonings to taste."
            }, {
                id: 3,
                inst_t: "Serve: ",
                inst: "Add fried onions on top and serve the Chicken Soto with rice or noodles"
            }],


            ingredient_list: "Chicken, Thighs, Soto, Lemongrass, Lime Leaves, White Cabbage, Chilli Pepper",
            ingredients: [{
                id: 1,
                cont: "600 - 1000 gram Boneless Chicken"
            }, {
                id: 2,
                cont: "2 Lemongrass Stalks"
            }, {
                id: 3,
                cont: "10 Crushed Lime Leaves"
            }, {
                id: 4,
                cont: "Fried Onions"
            }, {
                id: 5,
                cont: "1 pack Soto Ayam Seasoning"
            }, {
                id: 6,
                cont: "¼ White Cabbage"
            }, {
                id: 7,
                cont: "1 - 2 pcs Chili Peppers"
            }]
        },
        {
            id: 13,
            name: "Crispy Baked Drumstick",
            img: "/img/gallery/C4.jpg",
            cookImg: "C4",
            desc: "Crispy baked drumsticks are a delicious and healthier alternative to fried chicken drumsticks, offering a satisfying crunch and tender, juicy meat. This dish is popular for its ease of preparation and flavorful results, making it a favorite for family dinners and gatherings.",
            rcpLkCnt: 69,
            taste: "American",
            difficulty: 2,
            instructions: [{
                id: 1,
                inst_t: "Making the Drumsticks: ",
                inst: "Mix the drumsticks and all the ingredients in a bowl. Prepare the greased tray using butter, arrange the drumsticks in the middle of the tray. "
            }, {
                id: 2,
                inst_t: "Making the Potato: ",
                inst: "Use the remaining seasoning in the bowl to mix with the sliced potato, arrange in the corner of the tray. "
            }, {
                id: 3,
                inst_t: "Serve: ",
                inst: "Crispy baked drumsticks are ready to serve accompanied by the pickle and ranch or salad. "
            }],
            ingredient_list: "Chicken Drumsticks, Potatoes, Garlic Salt, All Purpose Seasoning, Paprika Powder, Olive Oil",
            ingredients: [{
                id: 1,
                cont: "10-12 Chicken Drumsticks"
            }, {
                id: 2,
                cont: "3 Potatoes"
            }, {
                id: 3,
                cont: "1.5 tsp Garlic Salt"
            }, {
                id: 4,
                cont: "1 tsp All Purpose Seasoning"
            }, {
                id: 5,
                cont: "3 tsp Paprika Powder"
            }, {
                id: 6,
                cont: "3 tbsp Olive Oil"
            }]
        },
        {
            id: 14,
            name: "Seaweed Chicken Soup",
            img: "/img/gallery/C5.webp",
            cookImg: "C5",
            desc: "Seaweed Chicken Soup is a nutritious and flavorful dish that combines the umami richness of seaweed with the comforting and savory taste of chicken soup. This soup is popular in various Asian cuisines, particularly in Chinese, Korean, and Japanese cooking",
            rcpLkCnt: 203,
            taste: "Asian Chinese Korean Japanese",
            difficulty: 2,
            instructions: [{
                id: 1,
                inst_t: "Prepare the Chicken: ",
                inst: "Dice and boil the chicken; once the chicken is ready, add the garlic and black pepper paste (you can grate the garlic also), salt, and diced carrot."
            }, {
                id: 2,
                inst_t: "Prepare the Soup: ",
                inst: "When the carrot is ready, add the diced tofu, and seaweed. While waiting for the soup tobe ready, prepare the beans. Soak it in hot water for 5 minutes, then strain it using a sieve under cold running water."
            }, {
                id: 3,
                inst_t: "Serve: ",
                inst: "Prepare the bowl, put the ready beans thread, and ass the soup for serving. Enjoy the soup while it is hot or warm."
            }],


            ingredient_list: "Chicken, Seaweed, Silken Tofu, Tofu, Garlic, Carrot, Bean Vermicelli, Bean Thread, Salt, Black pepper",
            ingredients: [{
                id: 1,
                cont: "200 gr Boneless Chicken"
            }, {
                id: 2,
                cont: "3 Cloves Garlic"
            }, {
                id: 3,
                cont: "2 pkt Seaweed"
            }, {
                id: 4,
                cont: "1 pack Silken Tofu"
            }, {
                id: 5,
                cont: "1.5 tsp Salt"
            }, {
                id: 6,
                cont: "1 tsp Black Pepper"
            }, {
                id: 7,
                cont: "150 gr Beans Vermicelli/ Beans Thread"
            }, {
                id: 8,
                cont: "1 pcs Carrot"
            }, {
                id: 9,
                cont: "7 cup Water"
            }]
        },
        {
            id: 15,
            name: "Chicken Opor",
            img: "/img/gallery/C6.webp",
            cookImg: "C6",
            desc: "Chicken Opor, also known as Opor Ayam, is a traditional Indonesian dish that is particularly popular in Central Java and throughout the archipelago. This dish features chicken cooked in a rich, aromatic, and creamy coconut milk sauce. It is often enjoyed during special occasions and festive celebrations, including Eid al-Fitr.",
            rcpLkCnt: 1010,
            taste: "Asian Indonesian",
            difficulty: 4,
            instructions: [{
                id: 1,
                inst_t: "Prepare the Paste: ",
                inst: "Peel and wash the onion and garlic. Slice the onion and grate the garlic (Use a mortar to make the garlic paste with other ingredients including black pepper, cumin, and coriander seeds). "
            }, {
                id: 2,
                inst_t: "Begin Cooking: ",
                inst: "Prepare the saucepan, heat it, add the oil, saute the onion until golden brown. Add the garlic, black pepper , coriander, cumin, turmeric powder (or the garlic paste), salt and sugar. Keep sauteing for 2-3 minutes. "
            }, {
                id: 3,
                inst_t: "Cook the Chicken: ",
                inst: "Add the lemongrass, bay leaves, galangal, ginger, and lime leaves. Continue sauteing for 2-3 minutes. Then add the chicken and 3 cups of water, boiled eggs, close the lid and wait until the chicken is cooked. "
            }, {
                id: 4,
                inst_t: "Complete the Soup: ",
                inst: "Once the chicken is cooked, add the coconut milk. Gently stir the yellow soup until the soup is boiled. "
            }, {
                id: 5,
                inst_t: "Serve: ",
                inst: "Chicken Opor is ready to serve accompanied with rice and sambal to add the spicy taste. "
            }],
            ingredient_list: "Chicken, Coconut water, Eggs, Onion, Garlic, Black Pepper Powder, Coriander Powder, Cumin Powder, Salt, Lemongrass, Bay Leaves, Turmeric Powder, Sugar, Oil, Ginger, Galangal, Lime Leaves",
            ingredients: [{
                id: 1,
                cont: "500-600 gr Chicken"
            }, {
                id: 2,
                cont: "5 Eggs, boiled"
            }, {
                id: 3,
                cont: "2 cans Coconut Milk"
            }, {
                id: 4,
                cont: "1 Onion"
            }, {
                id: 5,
                cont: "5 cloves of Garlic"
            }, {
                id: 6,
                cont: "1.5 tsp Black Pepper Powder"
            }, {
                id: 7,
                cont: "1.5 tsp Coriander Powder"
            }, {
                id: 8,
                cont: "1 tsp Cumin Powder"
            }, {
                id: 9,
                cont: "1.5-2 tsp Salt"
            }, {
                id: 10,
                cont: "1 Lemongrass"
            }, {
                id: 11,
                cont: "3 Bay Leaves"
            }, {
                id: 12,
                cont: "1.5 tsp Turmeric Powder"
            }, {
                id: 13,
                cont: "¼ tsp Sugar"
            }, {
                id: 14,
                cont: "3 tbsp Oil"
            }, {
                id: 15,
                cont: "2 cm Ginger"
            }, {
                id: 16,
                cont: "2 cm Galangal"
            }, {
                id: 17,
                cont: "3-4 Lime Leaves"
            }]
        },
        {
            id: 16,
            name: "Red-Cooked Chicken",
            img: "/img/gallery/C7.webp",
            cookImg: "C7",
            desc: "Red-Cooked Chicken, also known as Hongshao Ji (红烧鸡) in Chinese, is a classic dish in Chinese cuisine, particularly popular in Shanghai and throughout the eastern provinces. This dish is renowned for its rich, savory-sweet flavor and the beautiful reddish-brown hue imparted by soy sauce and caramelized sugar. ",
            rcpLkCnt: 1010,
            taste: "Indonesian",
            difficulty: 4,
            instructions: [{
                id: 1,
                inst_t: "Prepare and fry the chicken: ",
                inst: "Rub the chicken with turmeric and salt. Fried, not too dry, Lift and toss."
            }, {
                id: 2,
                inst_t: "Saute the ingredients: ",
                inst: "Heat a little oil from the chicken frying oil earlier… saute the ingredients until it smells good. Add ground chili. Wait until the oil breaks."
            }, {
                id: 3,
                inst_t: "Seasoning: ",
                inst: "Add chili sauce, sugar, and salt."
            }, {
                id: 4,
                inst_t: "Finishing and Serve:",
                inst: "Add large onions and tomatoes. Add the chicken, Stir well until the tomatoes and onions wilt. Lift and serve."
            }],
            ingredient_list: "Chicken, Onion, Turmeric, Chili, Garlic, Chili sauce, Tomato, Tomato sauce, Salt",
            ingredients: [{
                id: 1,
                cont: "1 Large Onion"
            }, {
                id: 2,
                cont: "3 cloves Garlic"
            }, {
                id: 3,
                cont: "5 pcs Chicken thighs"
            }, {
                id: 4,
                cont: "Turmeric powder"
            }, {
                id: 5,
                cont: "2 tsp Crushed chili"
            }, {
                id: 6,
                cont: "2 tsp Chili sauce or tomato sauce"
            }, {
                id: 7,
                cont: "1 tsp Salt"
            }, {
                id: 8,
                cont: "1 tsp Sugar"
            }, {
                id: 9,
                cont: "1 Tomato, cut into small pieces"
            }]
        },
        {
            id: 17,
            name: "Chicken Garang Asem",
            img: "/img/gallery/C8.webp",
            cookImg: "C8",
            desc: "-",
            rcpLkCnt: 100,
            taste: "Indonesian",
            difficulty: 4,
            instructions: [{
                id: 1,
                inst_t: "Prepare the Chicken: ",
                inst: "Cut the chicken into pieces according to taste, then boil briefly with bay leaves and add a little salt. Set aside for approximately 10 minutes. "
            }, {
                id: 2,
                inst_t: "Prepare the Spices: ",
                inst: "Saute sliced spices (garlic, shallots, curly red chili peppers, tomatoes), add laurel, lemongrass, galangal, ginger and cayenne peppers"
            }, {
                id: 3,
                inst_t: "Cook the Chicken: ",
                inst: "Add the chicken and add enough water, add salt and mushroom stock then wait until cooked. Once cooked, reduce the heat then add the coconut milk and cover with banana leaves on top. Wait about 2 minutes, then turn off the heat. "
            }, {
                id: 4,
                inst_t: "Serve: ",
                inst: "Arrange the banana leaves in a pan then pour the cooked tamarind into it. "
            }],
            ingredient_list: "Chicken, Bay Leaves, Ginger, Lemongrass, Galangal, Salt, Mushroom Broth, Garlic, Red Onion, Tomatoes, Red Chili Pepper",
            ingredients: [{
                id: 1,
                cont: "1 Whole Chicken"
            }, {
                id: 2,
                cont: "2 Bay Leaves"
            }, {
                id: 3,
                cont: "1 segment Ginger, crushed"
            }, {
                id: 4,
                cont: "2 stalks Lemongrass, crushed"
            }, {
                id: 5,
                cont: "1 segment Galangal"
            }, {
                id: 6,
                cont: "2 tbsp Salt"
            }, {
                id: 7,
                cont: "Mushroom Broth"
            }, {
                id: 8,
                cont: "5 pieces of Garlic"
            }, {
                id: 9,
                cont: "5 Red Onions"
            }, {
                id: 10,
                cont: "2 Medium-sized Tomatoes"
            }, {
                id: 11,
                cont: "6 Curly Red Chili Peppers"
            }]
        },
        {
            id: 18,
            name: "Beef Slice Teriyaki",
            img: "/img/gallery/B1.webp",
            cookImg: "B1",
            desc: "-",
            rcpLkCnt: 250,
            taste: "Asian",
            difficulty: 2,
            instructions: [{
                id: 1,
                inst_t: "Marinate the Beef: ",
                inst: "Wash beef and onion thoroughly then cut into slices, and mince the garlic. Marinate the beef slices for a minimum of 30 minutes in the refrigerator using a closed container. "
            }, {
                id: 2,
                inst_t: "Begin Cooking: ",
                inst: "Saute the garlic and onion until soft. Add the marinated beef slices. Turn over so it cooks evenly. Cook over medium heat and don’t cook for too long so that the meat doesn’t get tough."
            }, {
                id: 3,
                inst_t: "Serve: ",
                inst: "Beef teriyaki slices are ready to be served."
            }],
            ingredient_list: "Beef, Onion, Garlic, Oyster Sauce, Sweet Soy Sauce, Soy Sauce, Sesame Oil, Black Pepper, Cooking Oil",
            ingredients: [{
                id: 1,
                cont: "200 gr Beef, slices"
            }, {
                id: 2,
                cont: "1 Onion"
            }, {
                id: 3,
                cont: "1 clove Garlic"
            }, {
                id: 4,
                cont: "Cooking Oil/Margarine"
            }, {
                id: 5,
                cont: "1 tbsp Oyster Sauce"
            }, {
                id: 6,
                cont: "4 tbsp Sweet Soy Sauce"
            }, {
                id: 7,
                cont: "1 tbsp Soy Sauce"
            }, {
                id: 8,
                cont: "1 tbsp Sesame Oil"
            }, {
                id: 9,
                cont: "1 tsp Black Pepper"
            }]
        }


    ].sort(() => Math.random() - 0.5);

    const trendingRecipes = [...recipes].sort((a, b) => b.rcpLkCnt - a.rcpLkCnt).slice(0, 5);

    return (
        <RecipesContext.Provider value={{recipes, trendingRecipes}}>
            {children}
        </RecipesContext.Provider>
    );
};
