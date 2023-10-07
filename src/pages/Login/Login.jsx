import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const location = useLocation();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    console.log(location)

    const handleSignIn = e => {
        e.preventDefault();
        const form  = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        signIn(email, password)
        .then(result => {
            console.log(result);
            location?.state ? navigate(location.state) : navigate('/')
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-base-100 shadow-xl rounded-lg  lg:w-1/2 md:w-3/4 mx-auto py-2 mt-12">
                <h3 className="text-3xl font-bold text-center mt-7">Login Now</h3>
                <form className="card-body" onSubmit={handleSignIn}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="mt-2 text-sm">Do not have an account? <Link to={'/register'} className="text-blue-500 font-medium">Register here.</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;