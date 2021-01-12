import React from 'react';
import { ContextoTema } from '../contextos/contextoTema';
import Controles from './Controles';

const Inicio = () => {
    return (
        <div>
            <h2>Pagina de Inicio</h2>
            <p>Esta es la pagina de nuestro sitio</p>
            <Controles />
        </div>
    );
}

export default Inicio;