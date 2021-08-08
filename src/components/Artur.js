import React, {useContext, useEffect, useState} from 'react'
import { MojContext } from './Context';
import "../scss/index.scss"

const Artur = () => {
    const [ilosc, setIlosc] = useContext(MojContext);
    useEffect(() => {
        const wartosc = ilosc
    },[ilosc])
    return (<div style={{background: "#f9f9f9"}}><h1 className="green">Jestem Artur a tutaj wyyswietlimy sobie liczbe wyjeta z kontekstu z innego komponentu</h1><p>{ilosc}</p></div>)

}

export default Artur;