import Head from 'next/head';
import { colors } from "../../styles/theme";


const Login = () => {
    return (
        <>
            <main className="container h-screen flex justify-center items-center">
                <div className="h-1/2 w-3/4 p-2">

                    <div className="text-center ">
                        <label className="text-2xl font-bold">Login</label>
                    </div>
                    <br />
                    <div className="grid grid-rows-3 gap-5">
                        <div>
                            <label htmlFor="username" class="block text-lg font-medium ">Username</label>
                            <input type="text" name="username" id="username" autocomplete="given-name" class="border border-gray-300 w-full p-2 rounded text-lg outline-none" />
                        </div>

                        <div>
                            <label htmlFor="password" class="block text-lg font-medium ">Password</label>
                            <input type="password" name="password" id="password" autocomplete="given-name" class="border border-gray-300 w-full p-2 rounded text-lg outline-none" />
                        </div>

                        <div>
                            <button type="submit" className="w-full p-2 rounded text-lg font-semibold outline-none cursor-pointer|| border border-gray-300 shadow-lg">Ingresar</button>
                        </div>
                    </div>
                </div>

            </main>

            <style jsx>{`
                button {
                    background-color: ${colors.primary};
                    color: white;
                    transition: background-color .5s;
                    outline: none;
                }
                button:hover {
                        color: ${colors.primary};
                        background-color: white;
                }

                button:focus {
                        color: ${colors.primary};
                        background-color: white;
                }

            `}</style>



        </>
    );
}

export default Login;
