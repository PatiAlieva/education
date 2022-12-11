import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
//import {getHello, getSayPlay} from '../../template/testFunction'
import * as objFunc from '../../template/testFunction'

import '../../style/App.css';

function App() {
  // //деструктуризация
  // const {getHello, getSayPlay} = objFunc

  // //обычный способ
  // const testHello = objFunc.getHello
  // const testPlay = objFunc.getSayPlay
  // getHello()
  // // testHello()

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
