import { useState } from "react";

const useInput = (validate) => {
    const [enteredValue , setEnteredValue] = useState('');
    const [IsTouched, setIsTouched] = useState(false);
    
    const valueIsValid = validate(enteredValue);
    const hasError  = !valueIsValid && IsTouched;
    

    const changeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const blurHandler = ( event ) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        enteredValue,
        valueIsValid,
        hasError,
        changeHandler,
        blurHandler,
        reset
    }

}

export default useInput;