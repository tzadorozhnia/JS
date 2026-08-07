let url = new URL("https://dummyjson.com/recipes");

let divWrap = document.createElement("div");
divWrap.classList.add("recipes-wrapper");

fetch(url)
    .then(response => response.json())
    .then(recipesObj => {

        for (let recipe of recipesObj.recipes) {

            let recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");


            let img = document.createElement("img");
            img.src = recipe.image;
            img.alt = recipe.name;


            let h2 = document.createElement("h2");
            h2.innerText = recipe.name;


            let info = document.createElement("p");
            info.innerText = `
Prep time: ${recipe.prepTimeMinutes} min
Cook time: ${recipe.cookTimeMinutes} min
Servings: ${recipe.servings}
Difficulty: ${recipe.difficulty}
Cuisine: ${recipe.cuisine}
Calories: ${recipe.caloriesPerServing}
Rating: ${recipe.rating}
Reviews: ${recipe.reviewCount}
User ID: ${recipe.userId}
Tags: ${recipe.tags.join(", ")}
Meal type: ${recipe.mealType.join(", ")}
`;


            let ingredientsTitle = document.createElement("h3");
            ingredientsTitle.innerText = "Ingredients";


            let ingredientsList = document.createElement("ul");

            for (let ingredient of recipe.ingredients) {
                let li = document.createElement("li");
                li.innerText = ingredient;
                ingredientsList.appendChild(li);
            }


            let instructionsTitle = document.createElement("h3");
            instructionsTitle.innerText = "Instructions";


            let instructionsList = document.createElement("ul");

            for (let instruction of recipe.instructions) {
                let li = document.createElement("li");
                li.innerText = instruction;
                instructionsList.appendChild(li);
            }


            recipeCard.append(
                img,
                h2,
                info,
                ingredientsTitle,
                ingredientsList,
                instructionsTitle,
                instructionsList
            );


            divWrap.appendChild(recipeCard);
        }

    });


document.body.appendChild(divWrap);