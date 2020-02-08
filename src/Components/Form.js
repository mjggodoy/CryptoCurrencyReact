import React, {useEffect, useState} from 'react';
import { render } from '@testing-library/react';
import { format } from 'util';
import styled from '@emotion/styled';
import UseCurrency from './../hooks/useCurrency';
import UseCryptoCurrency from './../hooks/useCryptoCurrency';
import axios from 'axios';

const Button = styled.input`
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

const Form = () => {

    const [cryptoCurrencylist, saveCryptocurrency] = useState([]);
    const currencies = [
        {code: 'USD', name:'Dolar'}, 
        {code: 'EUR', name:'Euro'},
        {code: 'MXN', name:'Mexican dolar'}
    ];
    const [state, SelectCurrency, updateState] = UseCurrency('Select currency', currencies);
    const [stateCrypto, SelectCryptoCurrency, updateCryptoState] = UseCryptoCurrency('Select cryptocurrency', cryptoCurrencylist);

    useEffect(() => {
        const apiRequest = async() => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            console.log(url);
            const response = await axios.get(url);
            saveCryptocurrency(response.data.Data);
        }
        apiRequest();
    }, []);

    return(
        <form>
            <SelectCurrency/>
            <br/>
            <SelectCryptoCurrency/>

            <Button type="submit" value="calculate"></Button>
        </form>
    );
}

export default Form;