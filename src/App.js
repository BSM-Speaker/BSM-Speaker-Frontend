import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Nav from './component/Nav';
import StyledClubList from './component/ClubList'
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <div className='content'>
        <StyledClubList />
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
