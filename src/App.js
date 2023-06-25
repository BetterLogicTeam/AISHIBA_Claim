import logo from './logo.svg';
import './App.css';
import Claim_header from './Components/Claim_header/Claim_header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Claim_hero from './Components/Claim_hero/Claim_hero';
import Claim_footer from './Components/Claim_footer/Claim_footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Claim_header />
      <Claim_hero />
      <Claim_footer />
    </div>
  );
}

export default App;
