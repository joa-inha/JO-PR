
import Header from './Header';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Notice from './Notice';
import Board from './Board';
import Schedule from './Schedule';

function App() {
  return (
    // 테스트를 위한 임의 주소 변경 notice -> posts
    // 테스트를 위한 임의 주소 변경 board -> albums
    <>
      <Header/>

      <Switch>
        <Route path= "/" component = {Home} exact/>
        <Route path= "/about" component = {About}/>
        <Route path= "/notice" component = {Notice}/>
        <Route path= "/board" component = {Board}/>
        <Route path= "/schedule" component = {Schedule}/>
      </Switch>
        
      <Footer/>
    </>
  );
}

export default App;
