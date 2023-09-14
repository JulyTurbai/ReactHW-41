import './styles/common.scss'
import Header from './components/Header';
import Shop from './components/Shop';
import ModalWindow from './components/ModalWindow';



function App() {
  return (
    <div className="container">
      <Header />
      <ModalWindow/>
      <Shop />
    </div>
  );
}

export default App;
