import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContex";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((res) => console.log(res.user))
      .catch((error) => console.error(error));
  };

  return (
    <div
      className="hero min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      {/* form */}
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Plase login to get access.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleOnSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <div className="flex justify-between">
                <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    New Here?
                  </Link>
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
