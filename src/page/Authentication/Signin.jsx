import { useContext, useState } from 'react';
import './Authentication.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';


const Signin = () => {

    // Auth Context
    const { signinUser, googleSignin, githubSignin } = useContext(AuthContext)

    // custom Hooks
    useTitle('Signin')

    // All state are here
    const [error, setError] = useState('')

    // use navigate for rerender private page
    const navigate = useNavigate()

    // Location state
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    // Handler Signin
    const handlerSignin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signinUser(email, password)
            .then(() => {
                setError("")
                form.reset()
                navigate(from, { replace: true })
                toast.success('Successfully Signin!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
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
    }

    //  handlerGoogleSignin 
    const handlerGoogleSignin = () => {

        googleSignin()
            .then(() => {

                toast.success('Successfully Signin!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate(from, { replace: true })

            })
            .catch(err => {
                setError(err.code.slice(5, (err.code.length)))
            })
    }

    // Handler Github Signin
    const handlerGithubSignin = () => {
        githubSignin()
            .then(() => {

                toast.success('Successfully Signin!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate(from, { replace: true })

            })
            .catch(err => {
                setError(err.code.slice(5, (err.code.length)))
            })
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
                            <h3 className='text-2xl text-center font-semibold pb-3'>Sign-in</h3>
                            <form onSubmit={handlerSignin}>

                                <input type="email" className='w-full p-3 border-b-2 border-black border-opacity-40 font-bold bg-transparent focus:outline-none' placeholder='Email' name='email' required />

                                <input type="password" className='w-full my-3 p-3 border-b-2 border-black border-opacity-40 font-bold bg-transparent focus:outline-none' placeholder='Password' name='password' required />

                                <button className='bg-gradient-to-r from-gd-first to-gd-second w-full rounded-lg py-2 shadow-lg shadow-gd-second text-white font-bold text-xl my-5'>Submit</button>

                            </form>

                            <div className='flex justify-center items-center gap-5 text-3xl my-5'>
                                <button onClick={handlerGoogleSignin}>
                                    <FaGoogle className='text-red'></FaGoogle>
                                </button>
                                <button onClick={handlerGithubSignin}>
                                    <FaGithub></FaGithub>
                                </button>
                            </div>

                            <p className='text-center'>Do not have an account..? Please <Link to="/auth/signup" className='font-bold' state={location.state}>signup</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;