import React, {useState, useEffect, useRef} from 'react'
import DefaultPage from "./pages/DefaultPage";
import FunPage from "./pages/FunPage";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import axios from 'axios'
import './App.css';
import PrimeReact from 'primereact/api';
import { Button } from 'primereact/button';

PrimeReact.ripple = true;

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [counter, setCounter] = useState('');

  const flag = useRef(true);

  useEffect(() => {
    if (flag.current) {
      flag.current = false;
      const counterValue = localStorage.getItem('counter');
      if (counterValue) {
        axios
          .get('https://rapi.gvasilopoulos.xyz/read')
          .then(res => {
            setCounter(res.data.data); // Access the 'data' field of the response
            localStorage.setItem('counter', res.data.data); // Store only the 'data' field
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Handle the error (e.g., show an error message to the user)
          });
      } else {
        axios
          .get('https://rapi.gvasilopoulos.xyz/write')
          .then(res => {
            setCounter(res.data.data); // Access the 'data' field of the response
            localStorage.setItem('counter', res.data.data); // Store only the 'data' field
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Handle the error (e.g., show an error message to the user)
          });
      }
    }
  }, []);

  return (
    <div className="app">
      {/*<Button id="toggle" label={toggle ? "Boring Version" : "Fun Version"} onClick={() => setToggle(!toggle)}/>*/}
      <Button id="counter" label={`Visitors: ${counter}`} />
      {/*{toggle ? <FunPage/> : <DefaultPage/>}*/}
      <DefaultPage />
    </div>
  );
};

export default App;
