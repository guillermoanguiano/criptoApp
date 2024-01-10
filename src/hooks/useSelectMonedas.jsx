import styled from '@emotion/styled'
import React, { useState } from 'react'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-weight: 700;
    font-size: 1.5rem;
    font-family: 'Lato', sans-serif;
    margin: 15px 0;
`

const Select = styled.select`
    padding: 15px;
    width: 100%;
    border-radius: 0.75rem;
    font-size: 18px;
`

const useSelectMonedas = (label, options) => {

    const [state, setState] = useState('')

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>

            <Select
                value={state}
                onChange={ e => setState( e.target.value )}
            >
                <option value="">- Seleccione su moneda -</option>

                { options.map( option => (
                    <option 
                        key={option.id}
                        value={option.id}
                    >
                        {option.nombre}
                    </option>
                ))}
            </Select>
        </>
    )

  return [ state, SelectMonedas ]
}

export default useSelectMonedas