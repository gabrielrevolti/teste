import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:5000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        });
        const data = await response.json();
        console.log(data.requisicao);
        console.log(data.message)
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <br />
                <label>
                    E-mail:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default App;
