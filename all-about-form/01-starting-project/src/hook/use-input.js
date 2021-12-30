import { useReducer } from "react";

const intialInputReducer = {
    value : '',
    isTouched : false
}

const inputUseReducer = (states, actions) => {
    if(actions.type==='VALUE'){
        return {
            value : actions.value,
            isTouched : states.isTouched
        }
    }
    if(actions.type ==='TOUCH'){
        return {
            value : states.value,
            isTouched : true
        }
    }
    if(actions.type==='RESET'){
        return intialInputReducer;
    }
    return intialInputReducer;
}

const useInput = (validate) => { 

    const [inputState, dispatch] = useReducer(inputUseReducer,intialInputReducer);
    const valueIsValid = validate(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const onChangeHandler = (event) => {
        dispatch({type : 'VALUE' , value : event.target.value})
    }

    const onBlurHandler = (event) => {
        dispatch({type : 'TOUCH'});
    }

    const reset = () => {
        dispatch({type : 'RESET'});
    }
    return({
        value : inputState.value,
        valueIsValid,
        hasError,
        onBlurHandler,
        onChangeHandler,
        reset
    })

}

export default useInput;