import React, { useState } from 'react';

// Creamos contexto = estado global.
const ContextoTema = React.createContext();

const ProveedorTema = ({ children }) => {

    const [tema, cambiarTema] = useState(
        {
            alineado: 'center',
            fuente: 20
        }
    );


    const aumentarFuente = () => cambiarTema({ ...tema, fuente: tema.fuente + 1 });
    const disminuirFuente = () => cambiarTema({ ...tema, fuente: tema.fuente - 1 });

    const alineadoIzquierdo = () => cambiarTema({ ...tema, alineado: 'left'});
    const alineadoCentro = () => cambiarTema({ ...tema, alineado: 'center'});
    const alineadoDerecho = () => cambiarTema({ ...tema, alineado: 'right'});


    return (
        <ContextoTema.Provider
            value={
                {
                    tema,
                    aumentarFuente,
                    disminuirFuente,
                    alineadoIzquierdo,
                    alineadoCentro,
                    alineadoDerecho
                }
            }>
            {children}
        </ContextoTema.Provider>
    );
}

export { ContextoTema, ProveedorTema };