import React, {Fragment, useState} from 'react';
//import { render } from '@testing-library/react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 0.5rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.0rem;
`;
const UseCurrency = (label, currencies) => {
    const [stateCurrency, updateState] = useState();
    const SelectCurrency = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
            onChange = {e => updateState(e.target.value)}
            value = {stateCurrency}
            >
            <option>--Select currency--</option>
                {Object.entries(currencies).map(([key, value]) => {
                    return(<option key={key} type={value.code} value={value.code}>{value.name}</option>);
                })}
            </Select>
        </Fragment>
    );
    return ([stateCurrency, SelectCurrency, updateState]);
}

export default UseCurrency;