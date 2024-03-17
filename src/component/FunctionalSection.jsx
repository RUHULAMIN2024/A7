
import { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart";
import SideBar from "./SideBar";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



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
            toast("Wow cook added!");
        }
        else{
            toast.warn("Alredy cooked!");
        }  

    }
    
   

    return (
        <div className="flex flex-col md:flex-row justify-between mb-20 gap-8">
            <div className="md:w-2/3 rounded-2xl border grid md:grid-cols-2  gap-5">
                {
                    recipe.map((r,i)=>(
                    <Cart handleCoock={handleCoock} key={i} recipe={r}></Cart>
                    ))
                }
                
            </div>
            <SideBar setCart={setCart} cart={cart}></SideBar>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default FunctionalSection;