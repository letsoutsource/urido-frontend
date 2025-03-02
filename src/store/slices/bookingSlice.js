const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    bookingData :null
}
const bookingSlice = createSlice({
    name:"booking",
    initialState,
    reducers:{
        setBookingData:(state,action)=>{
            state.bookingData = action.payload
        }
    }
})
export const {setBookingData} = bookingSlice.actions
export default bookingSlice.reducer