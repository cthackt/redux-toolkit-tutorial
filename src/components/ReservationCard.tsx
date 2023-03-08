import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customersSlice";

interface ReservationCardTypes {
   name: string,
   index: number
}

export default function ReservationCard({ name, index }: ReservationCardTypes) {
   
   const dispatch = useDispatch()
   
   return(
      <div className="reservation-card-container" onClick={() => { dispatch(removeReservation(index)); dispatch(addCustomer(name))}}>
         {name}
      </div>
   )
}