import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

interface CustomerCardTypes {
   name: string,
}

export default function CustomerCard({ name }: CustomerCardTypes) {

   const [foodInput, setFoodInput] = useState('')
   const [food, setFood] = useState<Array<string>>([])

   const handleAddFood = () => {
      if (!foodInput) return;
      setFood(food => [...food, foodInput])
   }

   const dispatch = useDispatch()

   return (
      <div className="customer-food-card-container">
         <p>{name}</p>
         <div className="customer-foods-container">
            <div className="customer-food">
               {
                  food.map((name) => {
                     return (
                        <p>{name}</p>
                     )
                  })
               }
            </div>
            <div className="customer-food-input-container">
               <input value={foodInput} onChange={(e) => setFoodInput(e.target.value)} />
               <button onClick={handleAddFood}>Add</button>
            </div>
         </div>
      </div>
   )
}