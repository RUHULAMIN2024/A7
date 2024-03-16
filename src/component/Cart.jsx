
const Cart = ({recipe, handleCoock}) => {

    
    

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={recipe.recipe_image} alt="{recipe.recipe_name}" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipe.recipe_name}</h2>
                <p className="border-b-2 pb-6">{recipe.short_description}</p>
                
                <h3 className="font-semibold my-1 text-xl">Ingredients: {recipe.ingredients.length}</h3>

                
                    <ul className="border-b-2 ml-5 list-disc pb-5">
                        <li className="list-disc">{recipe.ingredients[0]}</li>
                        <li>{recipe.ingredients[1]}</li>
                        <li>{recipe.ingredients[2]}</li>
                    </ul>
                
                <div className="flex justify-between my-2">
                    <div className="flex space-x-2">
                        <p>{recipe.preparing_time}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p>{recipe.calories}</p>
                    </div>
                </div>
                
                <div className="card-actions">
                    <button onClick={()=>handleCoock(recipe)} className="btn bg-green-300 rounded-full hover">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;