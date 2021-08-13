import React, {useContext, useEffect, useState} from 'react'
import { MojContext } from './Context';
import "../scss/index.scss"

const Artur = () => {
    const [ilosc, setIlosc] = useContext(MojContext);
    useEffect(() => {
        const wartosc = ilosc
    },[ilosc])
    return (<div style={{background: "#f9f9f9"}}></div>)

}

export default Artur;