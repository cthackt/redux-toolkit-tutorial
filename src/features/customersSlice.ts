import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { startTransition } from "react";
import reservationSlice from "./reservationSlice";

interface CustomerState {
   value: string[]
}

const initialState: CustomerState = {
   value: []
}

export const customersSlice = createSlice({
   name: "customers",
   initialState,
   reducers: {
      addCustomer: (state, action: PayloadAction<string>) => {
         state.value.push(action.payload)
      }
   }
})

export const { addCustomer } = customersSlice.actions
export default customersSlice.reducer