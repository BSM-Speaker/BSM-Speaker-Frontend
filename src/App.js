import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Nav from './component/Nav';
import StyledClubList from './component/ClubList'
function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <StyledClubList>

      </StyledClubList>
    </div>
  );
}

export default App;
