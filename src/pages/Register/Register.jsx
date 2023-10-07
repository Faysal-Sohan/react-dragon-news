import { Link } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('photo')
        const email = form.get('email');
        const password = form.get('password');
        const accepted = form.get('terms');
        console.log(name, photoUrl, email, password, accepted)

        if (accepted) {
            createUser(email, password)
                .then(result => console.log(result))
                .catch(error => console.error(error))
        }

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-base-100 shadow-xl rounded-lg  lg:w-1/2 md:w-3/4 mx-auto py-2 mt-12">
                <h3 className="text-3xl font-bold text-center mt-7">Register Here</h3>
                <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="flex gap-2 mt-2 text-sm">
                        <input type="checkbox" name="terms" id="" />
                        <p>Accept our terms & conditions</p>
                    </div>
                    <div className="form-control mt-3">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="mt-2 text-sm">Already have an account? <Link to={'/login'} className="text-blue-500 font-medium">Login Now.</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;