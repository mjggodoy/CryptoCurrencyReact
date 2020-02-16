import React, {useEffect, useState} from 'react';
import { render } from '@testing-library/react';
import { format } from 'util';
import styled from '@emotion/styled';
import UseCurrency from './../hooks/useCurrency';
import UseCryptoCurrency from './../hooks/useCryptoCurrency';
import axios from 'axios';
import Error from './../Components/Error';
import Analysis from './Analysis';

const ButtonInput = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`;

const Form = ({saveCurrencyApp, saveCryptocurrencyApp}) => {

    const [cryptoCurrencylist, saveCryptocurrency] = useState([]);
    const [error, saveError] = useState(false);

    const currencies = [
        {code: 'USD', name:'Dolar'}, 
        {code: 'EUR', name:'Euro'},
        {code: 'MXN', name:'Mexican dolar'}
    ];
    const [stateCurrency, SelectCurrency, updateState] = UseCurrency('Select currency', currencies);
    const [stateCrypto, SelectCryptoCurrency, updateCryptoState] = UseCryptoCurrency('Select cryptocurrency', cryptoCurrencylist);

    useEffect(() => {
        const apiRequest = async() => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const response = await axios.get(url);
            saveCryptocurrency(response.data.Data);
        }
        apiRequest();
    }, []);

    
    const analyzeCurrency = e => {
        e.preventDefault();
        var validation = false;
        if (stateCrypto === undefined || stateCurrency === undefined){
            validation = true;
        } 
        else {
            validation = false;
        }
        saveError(validation);
        saveCurrencyApp(stateCurrency);
        saveCryptocurrencyApp(stateCrypto);
    }

    return (
        <form
            onSubmit = {analyzeCurrency}
        >
        {error ? <Error message='All fields are mandatory to fill up'/> : ''}
            <SelectCurrency/>
            <br/>
            <SelectCryptoCurrency/>

            <ButtonInput type="submit" 
            value="Calculate"/>
        </form>
    );
}

export default Form;