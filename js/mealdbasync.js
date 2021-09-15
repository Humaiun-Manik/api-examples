const searchFood = async () => {
    const inputeField = document.getElementById('inpute-field');
    const inputeFieldText = inputeField.value;
    inputeField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputeFieldText}`
    /* 
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
     */
    const res = await fetch(url)
    const data = await res.json()
    displaySearchResult(data.meals);
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadMealDetial(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class ="card-body">
                <h5 class ="card-title">${meal.strMeal}</h5>
                <p class ="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
            `;
        searchResult.appendChild(div);
    });
}
const loadMealDetial = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    /* 
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetial(data.meals[0])) 
    */
    const res = await fetch(url)
    const data = await res.json()
    displayMealDetial(data.meals[0])
}
const displayMealDetial = meal => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    mealDetails.appendChild(div);
}