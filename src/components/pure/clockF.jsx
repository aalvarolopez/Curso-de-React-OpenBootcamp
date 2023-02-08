import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const ClockF = () => {

    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Álvaro',
        apellidos: 'Álvaro López'
    };

    const [state, setState] = useState(initialState);

    const tick = () => {
        setState((state) => {
            let edad = state.edad + 1;
            return {
                ...state,
                fecha: new Date(),
                edad
            }
        });
    }


    useEffect(() => {
        const timerID = setInterval(
            () => tick(), 1000
        )
        return () => {
            clearInterval(timerID);
        };
    }, [state]);

    return (
        <div>
            <h2>
                Hora Actual:
                { state.fecha.toLocaleTimeString() }
            </h2>
            <h3>{ state.nombre} {state.apellidos}</h3>
            <h1>Edad: { state.edad }</h1>
        </div>
    );
};


export default ClockF;
