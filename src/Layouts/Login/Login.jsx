import { Link } from "react-router-dom";

const Login = () => {

    const handleloginform = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = { email, password };
        console.log(user);
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <h1 className="text-5xl font-bold font-serif text-center mb-10"><span className="text-yellow-400">Login</span> now!</h1>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/ryMfKhb/undraw-Login-re-4vu2-1-removebg-preview.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleloginform} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn w-full bg-yellow-400 hover:bg-yellow-500 hover:text-white">Login</button>
                            </div>
                            <p className="text-xs">New into this website? Please <Link className="text-yellow-500 hover:underline" to={'/register'}>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;