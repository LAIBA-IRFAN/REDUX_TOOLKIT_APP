import React from "react"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteUser } from "./Store/Slices/UserSlice";

export const DisplayUser=()=>{

    const dispatch = useDispatch()

    const data = useSelector((state)=>{
        return state.users;
    })

    const RemoveUser=(index)=>{
        dispatch(DeleteUser(index))
    }

    return(
        <>
        {
            data.map((element,index)=>
                <>
                <li key={index} id={index} style={{listStyle:'none'}}>
                <p>{element}</p>
                 <IconButton onClick={()=>RemoveUser(index)}>
                 <DeleteIcon/>
                 </IconButton>
                 <br></br>
                </li>
                </>
            

            )
        }
        </>
    )
    
}