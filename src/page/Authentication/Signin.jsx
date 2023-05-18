import { useContext, useState } from 'react';
import './Authentication.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Signin = () => {

    // Auth Context
    const { signinUser } = useContext(AuthContext)

    // All state are here
    const [error, setError] = useState('')

    // Handler Signin
    const handlerSignin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signinUser(email, password)
            .then(userCredential => {
                setError("")
                form.reset()
            })
            .catch(e => {
                setError('')
                const errorMessage = e.code.slice(5, (e.code.length))

                if (errorMessage == 'missing-password') {
                    form.password.focus()
                    setError(errorMessage)
                    return

                } else if (errorMessage == 'wrong-password') {
                    form.password.focus()
                    setError(errorMessage)
                    return

                }
                setError(errorMessage)
                form.email.focus()
            })

        console.log(email, password);
    }

    return (
        <div id="auth-page-banner" className='grid grid-cols-3'>
            <div></div>
            <div></div>
            <div className='my-32 '>
                {
                    error && <span className='bg-red bg-opacity-30 mb-5 block text-white p-5 rounded-lg w-8/12 font-bold text-center'>{error}</span>
                }
                <div className='bg-rose w-8/12 rounded-lg'>
                    <div className='bg-red bg-opacity-20 p-5 rounded-lg'>
                        <div>
                            <h3 className='text-3xl text-center custom-font pb-8'>Please SignIn</h3>
                            <form onSubmit={handlerSignin}>

                                <input type="email" className='w-full p-3 border-b-2 border-black border-opacity-40 font-bold bg-transparent focus:outline-none' placeholder='Email' name='email' required />

                                <input type="password" className='w-full my-3 p-3 border-b-2 border-black border-opacity-40 font-bold bg-transparent focus:outline-none' placeholder='Password' name='password' required />

                                <button className='bg-gradient-to-r from-gd-first to-gd-second w-full rounded-lg py-2 shadow-lg shadow-gd-second text-white font-bold text-xl my-5'>Submit</button>

                                <span className='text-center'>Do not have an account..? Please <Link to="/signup" className='font-bold'>signup</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;