import {Card} from './components/Card'
import { Drawer } from './components/Drawer';
import { Header } from './components/Header';

function App() {
  return (
    <div className="wrapper">
      <Drawer/>
          <Header/>
      <div className='content p-40'>
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search__box">
            <img src='/img/search-icon.svg' alt="search" width={14} height={14}/>
            <input/>
          </div>
          </div>
        <ul className="d-flex">
          <Card/>
            </ul>
          </div>
    </div>
  );
}

export default App;
