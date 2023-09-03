import React, { useState } from "react";
import { useAuth } from "../../contexts";
import { useNavigate } from "react-router-dom";


function Login() {
    const [inputValue, setInputValue] = useState("");
    const {setUser} = useAuth();
    const navigate = useNavigate();

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/")
        setUser(inputValue)
    }




    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput} value={inputValue} placeholder="username" autoComplete="off"/>
            <br />
            <input type="submit" />
        </form>
    )
}

export default Login