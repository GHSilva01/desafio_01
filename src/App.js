import logo from './logo.svg';
import './App.css';
import {hash, apikey, apiMarvel} from './services/api/marvel';
import Rotas from './routes';

function App() {
  
  apiMarvel.get('characters', {params:{apikey, hash, ts:'1'}}).then((res)=>{
    console.log(res)

  }
  )

  return (
      <Rotas/>
  );
}
export default App;
