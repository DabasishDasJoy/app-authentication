import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContex";

const Register = () => {
  const { createUser, signIn, singInWithGoogle } = useContext(AuthContext);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => console.error(error));
  };

  const handleSingInWithGoogle = () => {
    singInWithGoogle()
      .then((result) => console.log(result.user))
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
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">Plase Register to get access.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleOnSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="form-control mt-6">
            <button
              onClick={handleSingInWithGoogle}
              className="btn btn-primary"
            >
              Sign In with GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
