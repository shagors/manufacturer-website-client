import React from 'react';
import Footer from '../components/Footer';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, GgError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    useEffect( () => {
        if(token){
            navigate(from, {replace: true});
        }
    } , [token, from, navigate]);

    let signInError;

    if(loading || gLoading){
        return <Loading></Loading>
    }

    if(error || gError){
        signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };


    return (
        <div>
            <div className='lg:mx-20 flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label value="" className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("email", { 
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    } ,
                                    pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                } })}/>
                                <label value="" className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label value="" className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("password", { 
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    } ,
                                    minLength: {
                                    value: 6,
                                    message: 'Must Be 6 Characters or longer'
                                } })}/>
                                <label value="" className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {signInError}
                            <input className='btn w-full max-w-xs' type="submit" value='Login'/>
                        </form>
                        <p><small>New to Doctors Portal <Link className='text-primary' to='/signup'>Create New Account</Link></small></p>
                        <div className='divider'>OR</div>
                        <button onClick={() => signInWithGoogle()} className='btn btn-outline'>Continue with Google</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;