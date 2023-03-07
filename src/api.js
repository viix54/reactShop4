import API_URL from "./config";

const getMealById = async(mealName) =>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${mealName}&app_id=9fbbcae7&app_key=31c96232b9409c63fd8fc1e7f221cc86
    `)
    return response.json();
};

const getAllCategories = async()=>{
    const response = await fetch(API_URL+'categories.php');
    return await response.json();
};

const getFilteredCategory = async(catName)=>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${catName}&app_id=9fbbcae7&app_key=31c96232b9409c63fd8fc1e7f221cc86`)
    return await response.json();
}

export {getMealById,getAllCategories,getFilteredCategory}