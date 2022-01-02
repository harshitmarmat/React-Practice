import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(state => state.auth.isAuth);
  
  return (
    <div>
      <Header/>
      {!isAuth ?<Auth />:<UserProfile/>}
      <Counter />
    </div>
  );
}

export default App;
