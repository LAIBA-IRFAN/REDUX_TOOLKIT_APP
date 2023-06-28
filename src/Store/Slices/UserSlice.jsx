import { createSlice } from "@reduxjs/toolkit";
import { DeleteAllUsers } from "../actions";

const userSlice = createSlice({
    name:'users',
    initialState:[],
    reducers:{
        AddUser(state,action){
            // console.log(action.payload)
            state.push(action.payload)
        },
        DeleteUser(state,action){
            state.splice(action.payload,1)
        },
        // DeleteAllUsers(state,action){
        //     // state.splice(0, state.length)
        //     return []
            
        // }
    },
        // extraReducers(builder){
        //     builder.addCase(userSlice.actions.DeleteAllUsers, ()=>{
        //         return []
        //     })
        // }

        extraReducers(builder){
            builder.addCase(DeleteAllUsers, ()=>{
                return []
            })
        }
        
})

export const {AddUser, DeleteUser, 
    // DeleteAllUsers
} = userSlice.actions;
export default userSlice.reducer;