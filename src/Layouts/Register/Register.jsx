
const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <h1 className="text-5xl font-bold text-center mb-10">Register now!</h1>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/rvP3gfK/undraw-Sign-up-n6im-removebg-preview-removebg-preview.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn w-full bg-yellow-400 hover:bg-yellow-500 hover:text-white">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;