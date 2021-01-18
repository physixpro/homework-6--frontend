
import './App.css';
import UserBase from './components/UserBase';
import FetchUsers from './components/FetchUsers';
import DeleteUsers from './components/DeleteUsers';


function App() {
  return (
    <div className="App">
     <UserBase />
     <FetchUsers />
     <DeleteUsers />
    </div>
  );
}

export default App;
