import React, { useState } from 'react';

function Home(){
    const [counter, setCounter] = useState(0); // iniciamos o contador com 0

    const handleClick = () => {
        setCounter(counter + 1); // toda vez que clicar no botão, incrementa o contador em 1
    }

    return (
        <div>
            <p>Contador: {counter}</p> {/* exibe o valor do contador */}
            <button onClick={handleClick}>Adicionar</button> {/* chama a função handleClick quando o botão é clicado */}
        </div>
    );
}

export default Home;
