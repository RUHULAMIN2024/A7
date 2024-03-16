import { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart";
import SideBar from "./SideBar";



const FunctionalSection = () => {

    const [recipe, setRecipe]=useState([])
    const [cart, setCart]=useState([])
    useEffect(()=>{
        fetch("./recipe.json")
            .then(res=>res.json())
            .then(data=>setRecipe(data))
    },[])

    const handleCoock=(recipe)=>{
        const isExist= cart.find(item=>item.recipe_id==recipe.recipe_id)
        if(!isExist){
            setCart([...cart,recipe])
        }
        else{
            alert("hi")
        }
        

    }
    console.log(cart)

    return (
        <div className="flex justify-between gap-8">
            <div className="w-2/3 rounded-2xl border grid grid-cols-2  gap-5">
                {
                    recipe.map((r,i)=><Cart handleCoock={handleCoock} key={i} recipe={r}></Cart>)
                }
                
            </div>
            <SideBar setCart={setCart} cart={cart}></SideBar>
        </div>
    );
};

export default FunctionalSection;