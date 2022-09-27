import NavbarMenu from './components/containers/navbar/index';
import './App.css';
import Rutas from './routes';


function App() {
  return (
    <div className="App">
      <>
        <NavbarMenu />
        <Rutas />
      </>
    </div>
  );
}

export default App;
