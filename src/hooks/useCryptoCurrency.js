import React, {Fragment, useState} from 'react';
//import { render } from '@testing-library/react';
import styled from '@emotion/styled';

const LabelCrypto = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
`;

const SelectCrypto= styled.select`
    width: 100%;
    display: block;
    padding: 0.5rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.0rem;
`;
const UseCryptoCurrency = (label, cryptocurrencies) => {
    const [stateCurrency, updateState, updateCryptoState] = useState();
    const SelectCryptoCurrency = () => (
        <Fragment>
            <LabelCrypto>{label}</LabelCrypto>
            <SelectCrypto
            onChange = {e => updateState(e.target.value)}
            value = {stateCurrency}
            >
            <option>--Select cryptocurrency--</option>
                {Object.entries(cryptocurrencies).map(([key, value]) => {
                     return(<option key={key} type={value.CoinInfo.Id}>{value.CoinInfo.Name}</option>);
                })}
            </SelectCrypto>
        </Fragment>
    );
    return ([stateCurrency, SelectCryptoCurrency, updateCryptoState]);
}

export default UseCryptoCurrency;