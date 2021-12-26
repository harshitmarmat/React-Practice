import  React from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  
  const {
    enteredValue : nameInputValue,
    valueIsValid : nameInputIsInvalid,
    hasError : nameHasError,
    changeHandler : nameInputHandler,
    blurHandler : nameInputBlurHandler,
    reset : nameInputReset
  } = useInput(value => value.trim()!=='');

  const {
    enteredValue : emailInputValue,
    valueIsValid : emailInputIsInvalid,
    hasError : emailHasError,
    changeHandler : emailInputHandler,
    blurHandler : emailInputBlurHandler,
    reset : emailInputReset
  } = useInput(value => value.includes('@'))
 
  let formIsValid = false;

  if(nameInputIsInvalid && emailInputIsInvalid){
    console.log("okay");
    formIsValid =true;
  }

  const formSubmissionHandler= (event) => {
    event.preventDefault();

    if(!nameInputIsInvalid || !emailInputIsInvalid){
      return;
    }
    nameInputReset();
    emailInputReset();
  }

  const nameInputClass = nameHasError? 'form-control invalid' :'form-control';

  const emailInputClass = emailHasError? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input 
          value={nameInputValue} 
          onBlur={nameInputBlurHandler}
          onChange={nameInputHandler} 
          type='text' 
          id='name' 
        />
        {nameHasError && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>Your Email</label>
        <input 
          value={emailInputValue} 
          onBlur={emailInputBlurHandler}
          onChange={emailInputHandler} 
          type='email' 
          id='email' 
        />
        {emailHasError && <p className='error-text'>Enter valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;