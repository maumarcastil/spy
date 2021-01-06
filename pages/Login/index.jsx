import React, { useState } from 'react';
import Head from 'next/head';
import Error from "../../components/Error"


const Login = () => {

    const [info, setInfo] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState(false)

    const { username, password } = info;

    const handleChange = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        //validamos los datos
        if (username.trim() === "" || password.trim() === "") {
            setError(true);
            return;
        }
        setError(false);


    }


    return (
        <>
            <main className="container h-screen flex justify-center items-center">
                <div className="h-1/2 w-3/4 p-2">

                    <form onSubmit={handleSubmit}>
                        <div className="text-center ">
                            <label className="text-2xl font-bold">Login</label>
                        </div>

                        {error ? <Error message="Todos los campos son requeridos" /> : null}

                        <div className="mt-5 grid grid-rows-3 gap-5">
                            <div>
                                <label htmlFor="username" className="block text-lg font-medium ">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    onChange={handleChange}
                                    value={username}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-lg font-medium ">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={handleChange}
                                    value={password}
                                />
                            </div>

                            <div>
                                <button type="submit">Ingresar</button>
                            </div>
                        </div>
                    </form>
                </div>

            </main>
        </>
    );
}

export default Login;
