import styled from "@emotion/styled"

const Resultados = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    width: 120px;
    display: block;
`

const Texto = styled.p`
    font-size: 18px;

    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 1.5rem;

    span{
        font-weight: 700;
    }
`

const Resultado = ({result}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result

  return (
    <Resultados>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen del cripto que ha sido seleccionado" />
    
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Resultados>
  )
}

export default Resultado