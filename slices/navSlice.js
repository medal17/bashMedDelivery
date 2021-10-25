import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers : {
        setOrigin:(state, action)=>{
            state.origin =action.payload;
        },
        setDestination:(state, action) => {
            state.origin = action.payload;
        },
        setTravelInfo: (state, action) => {
            state.travelTimeInfo = action.payload;
        }
    }
});

export const {setOrigin, setDestination, setTravelInfo} = navSlice.actions;

//Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const travelTimeInfo = (state) => state.nav.travelTimeInfo;

export default navSlice.reducer;