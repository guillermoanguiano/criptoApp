import styled from "@emotion/styled"
import CriptopImg from './assets/img/imagen-criptos.png'
import Form from "./components/Form"
import { useEffect, useState } from "react"
import Resultado from "./components/Resultado"
import Spinner from './components/Spinner'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 3.1rem;
  font-weight: 700;
  font-size: 2.1rem;

  &::after {
    content: '';
    width: 6.25rem;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [ monedas, setMonedas ] = useState({})
  const [ result, setResult ] = useState({})
  const [ cargando, setCargando ] = useState(false)

  useEffect(() => {
    if ( Object.keys(monedas).length === 0 ) return



    const cotizarCrypto = async () => {
      setCargando(true)
      setResult({})
      const {moneda, crypto } = monedas
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`
      const resp = await fetch(url)
      const result = await resp.json()
      const data = result.DISPLAY[crypto][moneda]

      setResult(data)
      
      setCargando(false)

    }

    cotizarCrypto()
  }, [monedas])
  

  return (
    <Contenedor>
      <Imagen 
        src={CriptopImg}
        alt="Imagenes criptomonedas "
      />
      
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Form  
          setMonedas={setMonedas}
        />

        {cargando && <Spinner />}
        {result.PRICE && <Resultado result={result} />}
      </div>

    </Contenedor>
  )
}

export default App
