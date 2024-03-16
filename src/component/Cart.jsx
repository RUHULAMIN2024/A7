
const Cart = ({recipe, handleCoock}) => {

    
    

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={recipe.recipe_image} alt="{recipe.recipe_name}" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipe.recipe_name}</h2>
                <p>{recipe.short_description}</p>
                <div className="divider"></div>
                
          
                <div className="divider"></div>
                <div className="card-actions">
                    <button onClick={()=>handleCoock(recipe)} className="btn bg-green-300 rounded-full hover">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;