import React, { useEffect ,useState , useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state,actions) => {
  if(actions.type === 'USER_INPUT'){
    return{
      val : actions.val,
      isValid : actions.val.includes('@')
    };
  }
  if(actions.type==='USER_BLUR'){
    return {
      val : state.val,
      isValid : state.isValid
    }
  }
  return ({
    val : '',
    isValid : false
  })
}

const passwordReducer = (state , actions) =>{
  if(actions.type === 'USER_INPUT'){
    return{
      val : actions.val,
      isValid : actions.val.trim().length > 6
    };
  }
  if(actions.type==='USER_BLUR'){
    return {
      val : state.val,
      isValid : state.isValid
    }
  }
  return ({
    val : '',
    isValid : false
  })
} 

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    val:'',
    isValid : null
  });

  const [passwordState,dispatchPassword] = useReducer(passwordReducer,{
    val:'',
    isValid:null
  });
  
  const { isValid : emailIsValid } = emailState;
  const { isValid : passwordIsValid} = passwordState;

  useEffect(()=>{
    const invalideTimeout = setTimeout(()=>{
      console.log("checking");
      setFormIsValid(
        passwordIsValid && emailIsValid
      );
    },500);

    return ()=>{
      console.log("CLEANUP");
      clearTimeout(invalideTimeout);
    }

  },[passwordIsValid,emailIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value); 
    // setFormIsValid(
    //   enteredPassword.trim().length > 6 && enteredEmail.includes('@')
    // );
    dispatchEmail({
      type : 'USER_INPUT',
      val : event.target.value
    })

  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({
      type : 'USER_INPUT',
      val : event.target.value
    });

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.val.includes('@')
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({
      type : 'USER_BLUR'
    })
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({
      type : 'USER_BLUR'
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.val, passwordState.val);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.val}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.val}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
