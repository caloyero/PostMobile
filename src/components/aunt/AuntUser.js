import React, { createContext, useReducer, useState } from "react";
import { set } from "react-hook-form";


export const UserContext = createContext();
import { userInto } from "../Users/LoginScreen";

const initialState = {
    id: 3,
    email: '',
    password: '',
}

const reducer = (state, accion) => {
    console.log(accion)
    switch (accion.type) {
        case 'logeado':
            return {
                state,
                id: accion.id,
                email: state.email,
                password: state.password
            }
            break;

        default:
            break;
    }
    return state;
}

const UserProvider = ({ children }) => {
    const [me, setMe] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState)
    //setMe(userInto);
    /* useEffect(()=>{
        setMe(JSON.parse(userInfo))
    }) */
    //setMe(JSON.parse(userInfo))
    return (
        <UserContext.Provider value={{ id: state.id, email: state.email, password: state.password, dispatch }} >
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;