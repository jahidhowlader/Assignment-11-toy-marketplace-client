import { useContext, useState } from 'react';
import './Authentication.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider'

const Signup = () => {

    // AuthContext
    const { createUser } = useContext(AuthContext)

    // All State are here
    const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')

    // Validation State
    const [error, setError] = useState('')

    // Handler Signup
    const handlerSignup = event => {
        
        event.preventDefault()

        const form = event.target
        const nameInput = form.name.value
        const emailInput = form.email.value
        const passwordInput = form.password.value
        const photoUrlInput = form.photoUrl.value

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
            form.email.focus()
            return setError('Invaild Email Address')
        } else {
            setError('')
        }

        if (passwordInput.length < 6) {
            form.password.focus()
            return setError('Password will be minimum 6 characters')

        } else if (!/(?=.*[A-Z])(?=.*[a-z])/.test(passwordInput) || !(/(?=.*\d)/.test(passwordInput))) {
            form.password.focus()
            return setError('Password will be 1 number, 1 capital and 1 smaller character')

        } else {
            setError('')
        }
        console.log(nameInput, emailInput, passwordInput, photoUrlInput);

        createUser(emailInput, passwordInput)
            .then(userCredential => {
                console.log(userCredential.user);

                setError("")
                form.reset()
            })
            .catch(err => {
                const errorMessage = err.code.slice(5, (err.code.length))
                setError(errorMessage)
                if (errorMessage == 'email-already-in-use') {
                    form.email.focus()
                    setError(err.code.slice(5, (err.code.length)))
                }

                setError(err.code)
                console.log(err.code);
                console.log(err.message);
                console.log(error);
            })


    }



    return (
        <div id="auth-page-banner" className='grid grid-cols-3'>
            <div></div>
            <div></div>
            <div className='my-32 '>
                {
                    error && <span className='bg-red bg-opacity-30 block text-white p-5 rounded-lg w-8/12 font-bold text-center'>{error}</span>
                }
                <div className={`bg-rose w-8/12 rounded-lg ${error ? 'mt-5' : ''}`}>
                    <div className='bg-red bg-opacity-20 p-5 rounded-lg'>
                        <div>
                            <h3 className='text-3xl text-center custom-font pb-8'>Please SignUp</h3>
                            <form onSubmit={handlerSignup} >

                                <input type="text" className='w-full p-3 border-b-2 border-black border-opacity-40 font-bold bg-transparent focus:outline-none my-3' placeholder='Name' name='name' required />

                                <input type="email" className={`w-full p-3 border-b-2 border-black border-opacity-40 font-bold bg-transparent focus:outline-none `} placeholder='Email' name='email' required />

                                <input type="password" className='w-full my-3 p-3 border-b-2 border-black border-opacity-40 font-bold bg-transparent focus:outline-none' placeholder='Password' name='password' required />

                                <input type="text" className='w-full p-3 border-b-2 border-black border-opacity-40 font-bold bg-transparent focus:outline-none' placeholder='PhotoUrl' name='photoUrl' />

                                <button className='bg-gradient-to-r from-gd-first to-gd-second w-full rounded-lg py-2 shadow-lg shadow-gd-second text-white font-bold text-xl my-5'>Submit</button>

                                <span className='text-center'>You have already an account..? Please <Link to="/signin" className='font-bold'>signin</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;