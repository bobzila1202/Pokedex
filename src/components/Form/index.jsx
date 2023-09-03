import React, { useState } from "react"


function PokeForm({setSubmitValue}) {
    const [inputText, setInputText] = useState('');
    

    function handleInput(e) {
        const button = e.target.parentNode.querySelector('button')
       
        setInputText(e.target.value)
        
        if (e.target.value === '') {
            button.setAttribute('disabled', true)
        } else {
            button.removeAttribute('disabled')
        }
    }


    function handleSubmit(e) {
        e.preventDefault()  
        setSubmitValue(inputText)
        setInputText('')
        
        e.target.querySelector('button').setAttribute('disabled', true)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={inputText} type="text"  placeholder="Pokemon name goes here" onChange={handleInput} id="pokeInput" />
            <button type="submit" id="btn" disabled>Search</button>
        </form>
    )
}

export default PokeForm


