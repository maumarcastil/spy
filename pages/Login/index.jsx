import Head from 'next/head';


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
                            <label for="username" class="block text-lg font-medium ">Username</label>
                            <input type="text" name="username" id="username" autocomplete="given-name" class="border border-gray-300 w-full p-2 rounded text-lg outline-none" />
                        </div>

                        <div>
                            <label for="password" class="block text-lg font-medium ">Password</label>
                            <input type="password" name="password" id="password" autocomplete="given-name" class="border border-gray-300 w-full p-2 rounded text-lg outline-none" />
                        </div>

                        <div>
                            <button type="submit" className="w-full p-2 rounded text-lg font-semibold outline-none bg-primary text-white cursor-pointer">Ingresar</button>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
}

export default Login;
