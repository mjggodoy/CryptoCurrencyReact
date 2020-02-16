import React, {useState, useEffect} from 'react';
import './App.css';
import styled from '@emotion/styled';
import cyptocurrency from './images/cryptomonedas.png';
import Form from './Components/Form'
import axios from 'axios';
import Analysis from './Components/Analysis'
const Container = styled.div`

max-width: 900px;
margin: 0 auto;
@media (min-width:992px) {
  display:grid;
  grid-template-columns: repeat(2,1fr);
  column-gap: 2rem;
}
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 2px;
    background-color: #dbde1b;
    display: block;
  }
`;

function App() {
  const [currency, saveCurrencyApp] = useState('');
  const [crypto, saveCryptoCurrencyApp] = useState('');
  const [analysisCurrency, saveAnalysisCurrency] = useState({});

  useEffect(() => {
    const apiRequest = async() => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
        const response = await axios.get(url).
        then(response => {
          const equivalent = response.data.RAW[crypto][currency];
          saveAnalysisCurrency(equivalent);
        })
        .catch(error => {
          console.log(error);
        });   
    }
    if (!(currency === '') || !(crypto === '')) {
      apiRequest();
    }
  }, [currency, crypto]);

  return (
    <Container>
      <div>
        <Image
        src= {cyptocurrency}
        alt= "crytocurrency image"
        />
      </div>
      <div>
        <Heading>Cryptocurrency analysis</Heading>
        <Form saveCurrencyApp={saveCurrencyApp} saveCryptocurrencyApp={saveCryptoCurrencyApp} />
        <Analysis analysisCurrency = {analysisCurrency} />
      </div>
    </Container>
  );
}

export default App;
