import { useState } from "react";

const useInput = (validate) => { 
    const [enteredValue , setEnteredValue] = useState('');
    const [isTouched , setIsTouched]  = useState(false);

    const valueIsValid = validate(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const onChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const onBlurHandler = (event) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }
    return({
        enteredValue,
        valueIsValid,
        hasError,
        onBlurHandler,
        onChangeHandler,
        reset
    })

}

export default useInput;