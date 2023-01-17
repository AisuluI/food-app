import React from "react";
import MediaCard from "./MediaCard";

const AllRecipes = ({data}) =>{
    console.log(data)
    return(
        <>
        <h2>All Recipes</h2>
                <div className='all'>     
{data.map(({recipe})=>{
    return <MediaCard label={recipe.label} image={recipe.image} healthLabels={recipe.healthLabels
    } cuisineType={recipe.cuisineType} dishType={recipe.dishType} ingredientLines={recipe.ingredientLines} />
})}
        </div>
        </>

    )
}

export default AllRecipes;