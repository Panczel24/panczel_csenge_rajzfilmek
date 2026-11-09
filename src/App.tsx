import { useEffect, useState } from 'react'

import './App.css'
import type { RajzfilmType } from './types/rajzfilmType'
import { RajzfilmLista } from './components/Rajzfilmlista';
import { RajzfilmKartya } from './components/Rajzfilm';

function App() {
  const [rajzfilm, setRajzfilm] = useState<RajzfilmType[]>([]);


  const json = "/rajzfilmek.json";

  useEffect(() => {
    async function fetchRajzfilm() {
      try {
        const response = await fetch(json);
        const data = await response.json();
        setRajzfilm(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRajzfilm();
  }, [])

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Rajzcímek</h1>
      <h3>statisztikák</h3>
      <RajzfilmLista rajzfilmek={rajzfilm}></RajzfilmLista>
      <h3>Rajzfilmek</h3>
      {/* <RajzfilmKartya rajzfilmek={rajzfilm}/> */}
      {rajzfilm.map((rajzfilm) => (
        <RajzfilmKartya key={rajzfilm.id} rajzfilmek={rajzfilm} />
      ))}

    </>
  )
}

export default App
