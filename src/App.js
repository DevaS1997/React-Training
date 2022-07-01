import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import SearchFilter from './SearchFilter';
import Registration from './Registration';
import Quiz from './Quiz';
import Todo from './Todo';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import ContactList from './ContactList';
import ShoppingList from './ShoppingList';
import Quotes from './Quotes';
import NotesApp from './NotesApp';

function App() {
  return (
    <div className='h-100'>
      {/* <Counter />    */}
      {/* <SearchFilter /> */}
      {/* <Registration /> */}
      {/* <Quiz /> */}
      {/* <Todo /> */}
      {/* <ContactList /> */}
      {/* <ShoppingList /> */}
      {/* <Quotes /> */}
      <NotesApp />
      {/* <div className='container h-100'>
        <div className="d-flex justify-content-center h-100">
          <div className="col-lg-2 align-self-center text-start">
            <LoginButton />
            <LogoutButton />
            <Profile />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
