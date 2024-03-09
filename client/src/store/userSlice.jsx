import { createSlice } from "react-redux";

const userSlice =  createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {

    }
})

export const {  } = userSlice.actions;
export default userSlice.reducers;