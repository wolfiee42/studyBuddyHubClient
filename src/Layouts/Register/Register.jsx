import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {

    const { createUser, updateUser } = useAuth();

    const handleRegisterForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        // const user = { name, image, email, password };

        createUser(email, password)
            .then(result => {
                updateUser(name, image);
                console.log(result.user);
            })
            .catch(error => console.log(error.message))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <h1 className="text-5xl font-bold text-center mb-10 font-serif"><span className="text-yellow-400">Register</span> now!</h1>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/rvP3gfK/undraw-Sign-up-n6im-removebg-preview-removebg-preview.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegisterForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Image</span>
                                </label>
                                <input type="text" name="image" placeholder="imageURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn w-full bg-yellow-400 hover:bg-yellow-500 hover:text-white">Register</button>
                            </div>
                            <p className="text-xs">Already have an account? Please <Link className="text-yellow-500 hover:underline" to={'/login'}>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;