import useInput from "../hook/use-input";

const BasicForm = (props) => {
  const {
    enteredValue : enteredFirstName,
    valueIsValid : firstNameIsValid,
    hasError : firstNameError,
    onBlurHandler : firstNameBlur,
    onChangeHandler : firstNameHandler,
    reset : firstNameReset
  } = useInput(value=>value.trim()!=='')


  const {
    enteredValue : enteredLastName,
    valueIsValid : lastNameIsValid,
    hasError : lastNameError,
    onBlurHandler : lastNameBlur,
    onChangeHandler : lastNameHandler,
    reset : lastNameReset
  } = useInput(value=>value.trim()!=='')

  const {
    enteredValue : enteredEmail,
    valueIsValid : emailIsValid,
    hasError : emailError,
    onBlurHandler : emailBlur,
    onChangeHandler : emailHandler,
    reset : emailReset
  } = useInput(value=>value.includes('@'))

  let formIsValid = false;
  if(firstNameIsValid && lastNameIsValid && emailIsValid){
    formIsValid = true;
  }

  const submitFormHandler = (event) =>{ 
    event.preventDefault();
    console.log(enteredFirstName);
    firstNameReset();
    lastNameReset();
    emailReset();
  }
  const firstNameClass = firstNameError?'form-control invalid' : 'form-control'
  const lastNameClass = lastNameError?'form-control invalid' : 'form-control'
  const emailClass = emailError?'form-control invalid' : 'form-control'
  
  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={firstNameClass}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name'
            onChange={firstNameHandler}
            onBlur={firstNameBlur}
            value={enteredFirstName}
          />
        {firstNameError && <p className="error-text">First name cannot be empty</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={lastNameHandler}
            onBlur={lastNameBlur}
            value={enteredLastName}
          />
        {lastNameError && <p className="error-text">Last name cannot be empty</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='name' 
          onChange={emailHandler}
          onBlur={emailBlur}
          value={enteredEmail}  
        />
        {emailError && <p className="error-text">Enters a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled= {!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;