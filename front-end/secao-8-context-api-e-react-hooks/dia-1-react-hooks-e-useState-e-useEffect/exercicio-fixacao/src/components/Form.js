import React, { useState } from 'react';

function Form() {
    const [login, setLogin] = useState({
        name: '',
        age: '',
        city: '',
    });

    const [module, setModule] = useState();

    const handleChange = ({ target: { name, value } }) => {
        setLogin({
            ...login,
            [name]: value,
        });
    };

    return (
        <div>
            <form>
                <label htmlFor="name">
                    Nome Completo
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome Completo"
                        value={login.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="age">
                    Idade
                    <input
                        type="text"
                        name="age"
                        placeholder="idade"
                        value={login.age}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="city">
                    Cidade
                    <input
                        type="text"
                        name="city"
                        placeholder="cidade"
                        value={login.city}
                        onChange={handleChange}
                    />
                </label>
                <section>
                    <label htmlFor="fund">
                        Fundamentos
                        <input
                            id="fund"
                            type="radio"
                            value="fundamentos"
                            name="materias-trybe"
                            checked={module === 'fundamentos'}
                            onChange={({ target: { value } }) => setModule(value)}
                        />
                    </label>
                    <label htmlFor="frt">
                        Front-End
                        <input
                            id="frt"
                            type="radio"
                            value="front"
                            name="materias-trybe"
                            checked={module === 'front'}
                            onChange={({ target: { value } }) => setModule(value)}
                        />
                    </label>
                    <label htmlFor="bckd">
                        Back-End
                        <input
                            id="bckd"
                            type="radio"
                            value="back"
                            name="materias-trybe"
                            checked={module === 'back'}
                            onChange={({ target: { value } }) => setModule(value)}
                        />
                    </label>
                    <label htmlFor="cc">
                        Ciência da Computação
                        <input
                            id="cc"
                            type="radio"
                            value="ciencia"
                            name="materias-trybe"
                            checked={module === 'ciencia'}
                            onChange={({ target: { value } }) => setModule(value)}
                        />
                    </label>
                </section>
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    Enviar
                </button>
            </form>
        </div >

    )
}

export default Form;