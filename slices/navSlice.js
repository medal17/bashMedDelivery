import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null,
    user: {},
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers : {
        setOrigin:(state, action)=>{
            state.origin =action.payload;
        },
        setDestination:(state, action) => {
            state.destination = action.payload;
        },
        setTravelInfo: (state, action) => {
            state.travelTimeInfo = action.payload;
        },
        setUser:(state, action) => {
            state.user = action.payload;
            
        }
    }
});

export const {setOrigin, setUser, setDestination, setTravelInfo} = navSlice.actions;

//Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const travelTimeInfo = (state) => state.nav.travelTimeInfo;
export const selectUser = (state) => state.nav.user;

export default navSlice.reducer;