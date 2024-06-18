// RecipesContext.js
import React, { createContext, useContext } from 'react';

const RecipesContext = createContext();

export const useRecipes = () => useContext(RecipesContext);

// #Semua foto di #drive(https://drive.google.com/drive/folders/18xwXLDxIYoTWGkNpX7IyLrOvW6y#ZYT1F?usp=drive_link)
export const RecipesProvider = ({ children }) => {
    const recipes = [ 
        {
            "id": 1,
            "name": "Pizza",
            "img": "/img/gallery/img_1.jpg",
            "cookImg": "/img/tchefs/img_1.jpg",
            "desc": "Delicious Italian pizza with a crispy crust and flavorful toppings.",
            "rcpLkCnt": 9,
            "taste": "European Italian",
            "difficulty": 4,
            "instructions": [{
                "id": 1,
                "inst_t": "Prepare the Dough: ",
                "inst": "In a large bowl, combine flour, yeast, salt, and sugar. Gradually add warm water and olive oil, kneading until a smooth dough forms."
            }, {
                "id": 2,
                "inst_t": "Let the Dough Rise: ",
                "inst": "Cover the dough with a damp cloth and let it rise in a warm place for 1-2 hours, or until doubled in size."
            }, {
                "id": 3,
                "inst_t": "Prepare the Toppings: ",
                "inst": "Slice tomatoes, mozzarella, and any other desired toppings."
            }, {
                "id": 4,
                "inst_t": "Assemble and Bake: ",
                "inst": "Preheat the oven to 475°F (245°C). Roll out the dough on a floured surface, transfer to a pizza stone or baking sheet, and add toppings. Bake for 10-12 minutes, or until the crust is golden and the cheese is bubbly."
            }],
            "ingredient_list": "Flour, Yeast, Salt, Sugar, Warm Water, Olive Oil, Tomatoes, Mozzarella Cheese, Other Toppings",
            "ingredients": [{
                "id": 1,
                "cont": "3 1/2 cups Flour"
            }, {
                "id": 2,
                "cont": "2 tsp Yeast"
            }, {
                "id": 3,
                "cont": "1 tsp Salt"
            }, {
                "id": 4,
                "cont": "1 tsp Sugar"
            }, {
                "id": 5,
                "cont": "1 1/4 cups Warm Water"
            }, {
                "id": 6,
                "cont": "2 tbsp Olive Oil"
            }, {
                "id": 7,
                "cont": "2-3 Tomatoes"
            }, {
                "id": 8,
                "cont": "8 oz Mozzarella Cheese"
            }]
        },         
        {
            "id": 2,
            "name": "Rice",
            "img": "/img/gallery/rice.jpeg",
            "cookImg": "/img/tchefs/img_2.jpg",
            "desc": "Simple steamed white rice, a staple food in many cuisines.",
            "rcpLkCnt": 6,
            "taste": "Neutral",
            "difficulty": 1,
            "instructions": [{
                "id": 1,
                "inst_t": "Rinse the Rice: ",
                "inst": "Rinse the rice under cold water until the water runs clear."
            }, {
                "id": 2,
                "inst_t": "Cook the Rice: ",
                "inst": "In a pot, combine the rice with water in a 1:2 ratio. Bring to a boil, then reduce heat to low, cover, and simmer for 18-20 minutes."
            }, {
                "id": 3,
                "inst_t": "Fluff and Serve: ",
                "inst": "Remove from heat and let sit, covered, for 5 minutes. Fluff with a fork and serve."
            }],
            "ingredient_list": "Rice, Water, Salt (optional)",
            "ingredients": [{
                "id": 1,
                "cont": "1 cup Rice"
            }, {
                "id": 2,
                "cont": "2 cups Water"
            }, {
                "id": 3,
                "cont": "Pinch of Salt (optional)"
            }]
        },         
        {
            "id": 3,
            "name": "Korean BBQ",
            "img": "/img/gallery/img_3.jpg",
            "cookImg": "/img/tchefs/img_3.jpg",
            "desc": "Flavorful and tender grilled meats, a popular Korean dish.",
            "rcpLkCnt": 12,
            "taste": "Korean",
            "difficulty": 3,
            "instructions": [{
                "id": 1,
                "inst_t": "Prepare the Marinade: ",
                "inst": "In a bowl, combine soy sauce, sugar, sesame oil, garlic, and pepper."
            }, {
                "id": 2,
                "inst_t": "Marinate the Meat: ",
                "inst": "Add the meat to the marinade, ensuring it is well-coated. Cover and refrigerate for at least 2 hours."
            }, {
                "id": 3,
                "inst_t": "Grill the Meat: ",
                "inst": "Preheat the grill to medium-high heat. Grill the meat for 4-5 minutes per side, or until cooked to desired doneness."
            }, {
                "id": 4,
                "inst_t": "Serve: ",
                "inst": "Serve the grilled meat with rice, kimchi, and other side dishes."
            }],
            "ingredient_list": "Beef or Pork, Soy Sauce, Sugar, Sesame Oil, Garlic, Black Pepper",
            "ingredients": [{
                "id": 1,
                "cont": "2 lbs Beef or Pork (sliced thin)"
            }, {
                "id": 2,
                "cont": "1/2 cup Soy Sauce"
            }, {
                "id": 3,
                "cont": "1/4 cup Sugar"
            }, {
                "id": 4,
                "cont": "2 tbsp Sesame Oil"
            }, {
                "id": 5,
                "cont": "4 cloves Garlic (minced)"
            }, {
                "id": 6,
                "cont": "1/2 tsp Black Pepper"
            }]
        },         
        {
            "id": 4,
            "name": "Spaghetti",
            "img": "/img/gallery/img_4.jpg",
            "cookImg": "/img/tchefs/img_4.jpg",
            "desc": "Classic Italian spaghetti with marinara sauce.",
            "rcpLkCnt": 8,
            "taste": "European Italian",
            "difficulty": 2,
            "instructions": [{
                "id": 1,
                "inst_t": "Cook the Spaghetti: ",
                "inst": "In a large pot, bring water to a boil. Add salt and spaghetti. Cook until al dente, about 8-10 minutes."
            }, {
                "id": 2,
                "inst_t": "Prepare the Sauce: ",
                "inst": "In a pan, heat olive oil over medium heat. Add garlic and cook until fragrant. Add tomatoes, salt, and pepper. Simmer for 15-20 minutes."
            }, {
                "id": 3,
                "inst_t": "Combine and Serve: ",
                "inst": "Drain the spaghetti and add it to the sauce. Toss to coat. Serve with grated Parmesan cheese."
            }],
            "ingredient_list": "Spaghetti, Tomatoes, Olive Oil, Garlic, Salt, Black Pepper, Parmesan Cheese",
            "ingredients": [{
                "id": 1,
                "cont": "1 lb Spaghetti"
            }, {
                "id": 2,
                "cont": "4 Tomatoes (chopped)"
            }, {
                "id": 3,
                "cont": "2 tbsp Olive Oil"
            }, {
                "id": 4,
                "cont": "3 cloves Garlic (minced)"
            }, {
                "id": 5,
                "cont": "Salt to taste"
            }, {
                "id": 6,
                "cont": "Black Pepper to taste"
            }, {
                "id": 7,
                "cont": "Grated Parmesan Cheese for serving"
            }]
        },         
        {
            "id": 5,
            "name": "Burger",
            "img": "/img/gallery/img_5.jpg",
            "cookImg": "/img/tchefs/img_5.jpg",
            "desc": "Juicy beef burger with fresh lettuce, tomato, and cheese.",
            "rcpLkCnt": 15,
            "taste": "American",
            "difficulty": 2,
            "instructions": [{
                "id": 1,
                "inst_t": "Prepare the Patties: ",
                "inst": "In a bowl, mix ground beef, salt, and pepper. Form into patties."
            }, {
                "id": 2,
                "inst_t": "Cook the Patties: ",
                "inst": "Heat a skillet or grill over medium-high heat. Cook patties for 4-5 minutes per side, or until desired doneness."
            }, {
                "id": 3,
                "inst_t": "Assemble the Burger: ",
                "inst": "Toast the buns. Place lettuce, tomato, patty, and cheese on the bottom bun. Add condiments and top bun."
            }, {
                "id": 4,
                "inst_t": "Serve: ",
                "inst": "Serve with fries or a side salad."
            }],
            "ingredient_list": "Ground Beef, Salt, Black Pepper, Lettuce, Tomato, Cheese, Burger Buns, Condiments",
            "ingredients": [{
                "id": 1,
                "cont": "1 lb Ground Beef"
            }, {
                "id": 2,
                "cont": "Salt to taste"
            }, {
                "id": 3,
                "cont": "Black Pepper to taste"
            }, {
                "id": 4,
                "cont": "Lettuce Leaves"
            }, {
                "id": 5,
                "cont": "1 Tomato (sliced)"
            }, {
                "id": 6,
                "cont": "4 slices Cheese"
            }, {
                "id": 7,
                "cont": "4 Burger Buns"
            }, {
                "id": 8,
                "cont": "Condiments (ketchup, mustard, mayo)"
            }]
        },         
        {
            "id": 6,
            "name": "Fried Rice",
            "img": "/img/gallery/nasgor.jpg",
            "cookImg": "/img/tchefs/img_6.jpg",
            "desc": "Savory fried rice with vegetables and eggs.",
            "rcpLkCnt": 10,
            "taste": "Asian",
            "difficulty": 2,
            "instructions": [{
                "id": 1,
                "inst_t": "Prepare the Ingredients: ",
                "inst": "Chop vegetables and beat the eggs."
            }, {
                "id": 2,
                "inst_t": "Cook the Eggs: ",
                "inst": "In a large wok or skillet, heat oil and scramble the eggs. Remove and set aside."
            }, {
                "id": 3,
                "inst_t": "Stir-fry the Vegetables: ",
                "inst": "Add more oil to the wok, and stir-fry the vegetables until tender."
            }, {
                "id": 4,
                "inst_t": "Combine and Fry: ",
                "inst": "Add the cooked rice and eggs back into the wok. Stir-fry, adding soy sauce and seasoning to taste."
            }],
            "ingredient_list": "Cooked Rice, Eggs, Vegetables, Soy Sauce, Oil, Salt, Black Pepper",
            "ingredients": [{
                "id": 1,
                "cont": "3 cups Cooked Rice"
            }, {
                "id": 2,
                "cont": "2 Eggs"
            }, {
                "id": 3,
                "cont": "1 cup Mixed Vegetables (carrots, peas, corn)"
            }, {
                "id": 4,
                "cont": "2 tbsp Soy Sauce"
            }, {
                "id": 5,
                "cont": "2 tbsp Oil"
            }, {
                "id": 6,
                "cont": "Salt to taste"
            }, {
                "id": 7,
                "cont": "Black Pepper to taste"
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
            "id": 8,
            "name": "Bibimbap",
            "img": "/img/gallery/img_8.jpg",
            "cookImg": "/img/tchefs/img_7.jpg",
            "desc": "Traditional Korean mixed rice bowl with vegetables and beef.",
            "rcpLkCnt": 11,
            "taste": "Korean",
            "difficulty": 3,
            "instructions": [{
                "id": 1,
                "inst_t": "Prepare the Vegetables: ",
                "inst": "Julienne the carrots, zucchini, and mushrooms. Blanch spinach and bean sprouts."
            }, {
                "id": 2,
                "inst_t": "Cook the Beef: ",
                "inst": "Marinate the beef with soy sauce, sugar, garlic, and sesame oil. Cook in a skillet until browned."
            }, {
                "id": 3,
                "inst_t": "Assemble the Bowl: ",
                "inst": "Place cooked rice in a bowl. Arrange vegetables and beef on top. Add a fried egg and gochujang sauce."
            }, {
                "id": 4,
                "inst_t": "Serve: ",
                "inst": "Mix everything together before eating."
            }],
            "ingredient_list": "Rice, Beef, Carrots, Zucchini, Mushrooms, Spinach, Bean Sprouts, Egg, Gochujang Sauce, Soy Sauce, Sesame Oil, Garlic, Sugar",
            "ingredients": [{
                "id": 1,
                "cont": "2 cups Rice"
            }, {
                "id": 2,
                "cont": "200g Beef (sliced)"
            }, {
                "id": 3,
                "cont": "1 Carrot (julienned)"
            }, {
                "id": 4,
                "cont": "1 Zucchini (julienned)"
            }, {
                "id": 5,
                "cont": "1 cup Mushrooms (sliced)"
            }, {
                "id": 6,
                "cont": "1 cup Spinach (blanched)"
            }, {
                "id": 7,
                "cont": "1 cup Bean Sprouts (blanched)"
            }, {
                "id": 8,
                "cont": "1 Egg"
            }, {
                "id": 9,
                "cont": "2 tbsp Gochujang Sauce"
            }, {
                "id": 10,
                "cont": "2 tbsp Soy Sauce"
            }, {
                "id": 11,
                "cont": "1 tbsp Sesame Oil"
            }, {
                "id": 12,
                "cont": "2 cloves Garlic (minced)"
            }, {
                "id": 13,
                "cont": "1 tsp Sugar"
            }]
        },         
        {
            "id": 9,
            "name": "Steak",
            "img": "/img/gallery/img_9.jpg",
            "cookImg": "/img/tchefs/img_8.jpg",
            "desc": "Juicy and tender grilled steak, cooked to perfection.",
            "rcpLkCnt": 14,
            "taste": "American",
            "difficulty": 3,
            "instructions": [{
                "id": 1,
                "inst_t": "Season the Steak: ",
                "inst": "Generously season the steak with salt and black pepper on both sides."
            }, {
                "id": 2,
                "inst_t": "Preheat the Grill: ",
                "inst": "Preheat the grill to high heat. Brush the grates with oil."
            }, {
                "id": 3,
                "inst_t": "Cook the Steak: ",
                "inst": "Place the steak on the grill and cook for 4-5 minutes per side for medium-rare, or until desired doneness."
            }, {
                "id": 4,
                "inst_t": "Rest and Serve: ",
                "inst": "Remove the steak from the grill and let it rest for 5 minutes before slicing and serving."
            }],
            "ingredient_list": "Steak, Salt, Black Pepper, Oil",
            "ingredients": [{
                "id": 1,
                "cont": "1-2 lbs Steak (ribeye, sirloin, etc.)"
            }, {
                "id": 2,
                "cont": "Salt to taste"
            }, {
                "id": 3,
                "cont": "Black Pepper to taste"
            }, {
                "id": 4,
                "cont": "Oil for brushing"
            }]
        },         
        {
            id: 10,
            name: "Betutu Gilimanuk Chicken",
            img: "/img/gallery/C1.jpg",
            cookImg: "/img/tchefs/img_9.jpeg",
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
            cookImg: "/img/tchefs/img_1.jpg",
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
            cookImg: "/img/tchefs/img_10.jpg",
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
            cookImg: "/img/tchefs/img_10.jpg",
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
            cookImg: "/img/tchefs/img_10.jpg",
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
            cookImg: "/img/tchefs/img_10.jpg",
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
            cookImg: "/img/tchefs/img_2.jpg",
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
            cookImg: "/img/tchefs/img_10.jpg",
            desc: "Garang Asam Chicken is a traditional Indonesian dish known for its rich and flavorful taste. It hails from the island of Java and is particularly popular in Javanese cuisine.",
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
            cookImg: "/img/tchefs/img_9.jpeg",
            desc: "Beef Slice Teriyaki is a popular Japanese dish known for its savory and slightly sweet flavor profile. It's a versatile dish that can be served as a main course or part of a larger meal.",
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
        },
        {
            id: 19,
            name: "Black Pepper Beef",
            img: "/img/gallery/B2.webp",
            cookImg: "/img/tchefs/img_9.jpeg",
            desc: "Black Pepper Beef is a popular dish in Chinese cuisine, renowned for its robust flavors and aromatic spice. This stir-fried dish typically features tender beef slices coated in a savory black pepper sauce, complemented by a variety of colorful vegetables.",
            rcpLkCnt: 80,
            taste: "Chinese Asian",
            difficulty: 2,
            instructions: [{
                id: 1,
                inst_t: "Prepare the Ingredients: ",
                inst: "Cut beef into cubes, ginger cut into pieces. Cut the onions lengthwise. Green onions cut obliquely. Coarsely ground pepper."
            }, {
                id: 2,
                inst_t: "Marinate the Beef: ",
                inst: "Marinate the meat with tapioca flour, 1 tablespoon of pepper, oyster sauce and soy sauce."
            }, {
                id: 3,
                inst_t: "Cook the Beef: ",
                inst: "Fry the ginger and 1 tablespoon of black pepper in sesame oil, after the ginger has wilted, add the marinated meat. Then fry for 5 minutes. Then add thick sweet soy sauce, and add 5 tablespoons of water, mix well. Cook for another 5 minutes."
            }, {
                id: 4,
                inst_t: "Serve: ",
                inst: "The meat is now ready and served."
            }],
            ingredient_list: "Beef, Black Pepper, Ginger, Onion, Leek, Sesame Oil, Oyster Sauce, Soy Sauce, Sweet Soy Sauce, Tapioca Flour",
            ingredients: [{
                id: 1,
                cont: "500 gr Wagyu Beef"
            }, {
                id: 2,
                cont: "2 tbsp Black Pepper"
            }, {
                id: 3,
                cont: "1 thumb of young Ginger"
            }, {
                id: 4,
                cont: "½ Dutch Onion"
            }, {
                id: 5,
                cont: "1 stalk Leek"
            }, {
                id: 6,
                cont: "5 tbsp Sesame Oil"
            }, {
                id: 7,
                cont: "1 tbsp Oyster Sauce"
            }, {
                id: 8,
                cont: "1 tbsp Soy Sauce"
            }, {
                id: 9,
                cont: "1 tbsp Sweet Thick Soy Sauce"
            }, {
                id: 10,
                cont: "1 tsp Tapioca Flour"
            }, {
                id: 11,
                cont: "5 tbsp Water"
            }]
        },
        {
            id: 20,
            name: "Beef Rib Soup",
            img: "/img/gallery/B3.webp",
            cookImg: "/img/tchefs/img_3.jpg",
            desc: "-",
            rcpLkCnt: 90,
            taste: "-",
            difficulty: 4,
            instructions: [{
                id: 1,
                inst_t: "Prepare the Ribs: ",
                inst: "Boil enough water, boil the ribs for 5 minutes, drain the water (the first boil is to remove blood and excess fat). Boil the ribs again in 1.5 liters of water until cooked and soft (using low heat until the ribs are tender). "
            }, {
                id: 2,
                inst_t: "Begin Cooking: ",
                inst: "Heat a pan, saute the onions with margarine until fragrant and caramelized. Add the ground spices, stir-fry briefly, then add the cinnamon, cloves, cardamom and lawang flowers. Saute until fragrant and cooked. "
            }, {
                id: 3,
                inst_t: "Cook the Ribs: ",
                inst: "Add the cooked stir-fry spices to the boiled ribs that are already soft (add boiled water if you feel the water is not enough). Add carrots, potatoes, salt, sugar and stock powder. Stir well, cook until carrots and potatoes are cooked. Turn off the stove, add the chopped spring onions and stir well. "
            }, {
                id: 4,
                inst_t: "Serve: ",
                inst: "Beef rib soup is ready to be served. "
            }],
            ingredient_list: "Beef Ribs, Carrot, Potato, Onion, Cinnamon Stick, Cardamom, Star Anise, Spring Onion, Salt, Sugar, Stock Powder, Margarine, Red Onion, Garlic, Ground Pepper, Ground Nutmeg",
            ingredients: [{
                id: 1,
                cont: "500 gr Beef Ribs"
            }, {
                id: 2,
                cont: "1 Carrot, cut into pieces"
            }, {
                id: 3,
                cont: "1 Potato, cut into pieces"
            }, {
                id: 4,
                cont: "½ Onion, cut into large cubes"
            }, {
                id: 5,
                cont: "1 Cinnamon Stick"
            }, {
                id: 6,
                cont: "4 grains of Cloves"
            }, {
                id: 7,
                cont: "2 grains of Cardamom"
            }, {
                id: 8,
                cont: "1 Star Anise"
            }, {
                id: 9,
                cont: "2 Spring Onions"
            }, {
                id: 10,
                cont: "Salt"
            }, {
                id: 11,
                cont: "Sugar"
            }, {
                id: 12,
                cont: "Stock Powder"
            }, {
                id: 13,
                cont: "Margarine"
            }, {
                id: 14,
                cont: "8 cloves of Red Onions"
            }, {
                id: 15,
                cont: "4 cloves of Garlic"
            }, {
                id: 16,
                cont: "1 tbsp Ground Pepper"
            }, {
                id: 17,
                cont: "¼ tsp Ground Nutmeg"
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
