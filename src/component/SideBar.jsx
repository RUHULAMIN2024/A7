import { useState } from "react";

const SideBar = ({cart,setCart}) => {

    const [cookingCart, setCookingCart]= useState([])
    const handleCooking=(id)=>{
        
        const newCookingCart= cart.filter(item=>item.recipe_id==id)
        setCookingCart([...cookingCart,newCookingCart[0]])
        const newCart= cart.filter(item=>item.recipe_id!=id)
        setCart(newCart)
    }
    

    return (
        <div className="rounded-2xl border">
                <div className="text-center border-b-2 pb-5 mt-5 font-semibold text-2xl">Want to cook: {cart.length}</div>
                
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            cart.map((item,i)=>(
                                <tr>
                                    <th>{i+1}</th>
                                    <td>{item.recipe_name}</td>
                                    <td>{item.preparing_time}</td>
                                    <td>{item.calories}</td>
                                    <td><button onClick={()=>handleCooking(item.recipe_id)} className="btn bg-green-300 rounded-full">Preparing</button></td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                <div className="text-center border-b-2 pb-5 mt-10 font-semibold text-2xl">Currently cooking: {cookingCart.length}</div>
                
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                        cookingCart.map((item,i)=>(

                            <tr>
                                <th>{i+1}</th>
                                <td>{item.recipe_name}</td>
                                <td>{item.preparing_time}</td>
                                <td>{item.calories}</td>
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
    );
};

export default SideBar;