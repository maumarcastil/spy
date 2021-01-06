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

                        <div className="mt-5 grid grid-rows-2 gap-5">
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
                                <button 
                                className="button animacion"
                                type="submit">Ingresar</button>
                            </div>

                            <div className="separator">
                                <span>Or</span>
                                <hr />
                            </div>

                            <div>
                                <button
                                    className="button bg-github animacion-github"
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    Ingresar
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
                <style jsx>{`
                    hr{
                        position: relative;
                        top: -9px;
                        z-index: 1;
                        margin: 0;
                        padding: 0;
                    }

                    span{
                        font-size: 14px;
                        background: #fff;
                        position: relative;
                        display: inline-block;
                        padding: 0 25px;
                        z-index: 2;
                        line-height: 1;
                    }

                `}</style>
            </main>
        </>
    );
}

export default Login;
