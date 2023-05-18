import './Authentication.css'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div id="auth-page-banner" className='grid grid-cols-3'>
            <div></div>
            <div></div>
            <div className='my-32 '>
                <div className='bg-rose w-8/12 rounded-lg'>
                    <div className='bg-red bg-opacity-20 p-5 rounded-lg'>
                        <div>
                            <h3 className='text-3xl text-center custom-font pb-8'>Please SignUp</h3>
                            <form >

                                <input type="text" className='w-full p-3 border-b-2 border-black border-opacity-40 font-bold bg-transparent focus:outline-none my-3' placeholder='Name' name='name' required />

                                <input type="email" className='w-full p-3 border-b-2 border-black border-opacity-40 font-bold bg-transparent focus:outline-none' placeholder='Email' required />

                                <input type="password" className='w-full my-3 p-3 border-b-2 border-black border-opacity-40 font-bold bg-transparent focus:outline-none' placeholder='Password' required />

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