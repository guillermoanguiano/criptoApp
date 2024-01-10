import styled from "@emotion/styled"


const TextoError = styled.p`
    background-color: #B7322C;
    color: #FFF;
    padding: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <TextoError>{children}</TextoError>
  )
}

export default Error