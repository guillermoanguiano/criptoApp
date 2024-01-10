import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/datos"
import { useEffect, useState } from "react"
import Error from "./Error"

const InputSubmit = styled.input`
    /* all: unset; */

    color: #FFF;
    background-color: #8084ff;
    padding: 0.7rem;
    width: 100%;
    border: none;
    border-radius: 1rem;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    margin-top: 30px;

    &:hover {
        opacity: 0.92;
        transform: scale(1.01);
        background-color: #7A7DFE;
    }
`

//! Me gusto el styled components, pero pienso que sigue siendo mejor opcion usar tailwindCSS de calle, pero me gusto al punto que lo consideraria usar por encima de un archivo css normal EN OCACIONES. 

const Form = ({setMonedas}) => {

    const [ crytos, setCryptos ] = useState([])

    const [ moneda, SelectMoneda ] = useSelectMonedas('Elige tu Moneda', monedas)
    const [ crypto, SelectCrypto ] = useSelectMonedas('Elige tu Moneda', crytos)

    const [ error , setError ] = useState(false)


    //! Al crear nuestro hook ya podemos tener un state donde almacenemos el value, entonces este hook sirve para crear un label con un select personalizables y ademas para almacenar el value de eso mismo sin tener que hardcodear todo. Me gusto bastante, puede llegar a tener buen uso!

    useEffect( () => {
        const consultarAPI = async() => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
            const resp = await fetch(url)
            const result = await resp.json()

            const arrayCrypto = await result.Data.map( crypto => {
                const objeto = {
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName
                }
                return objeto
            })

            setCryptos(arrayCrypto)
        }

        consultarAPI()
    },[])


    const handleSubmit = (e) => {
        e.preventDefault()
        if ( [moneda, crypto].includes('') ) {
            setError(true)
            return
        }

        setError(false)
        
        setMonedas({
            moneda,
            crypto
        })

    }
    

  return (
    <form
        onSubmit={handleSubmit}
    >
        { error && <Error>Todos los campos son obligatorios!!</Error>}
        <SelectMoneda />
        <SelectCrypto />

        <InputSubmit 
            type="submit" 
            value="Cotizar" 
        />
    </form>
  )
}

export default Form