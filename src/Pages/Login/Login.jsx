import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import loginPagePic from "../../img/page-header.jpg"
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const { userSignIn, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const bg = {
        backgroundImage: `url(${loginPagePic})`,
        backgroundSize: 'cover',
    }


    const handleUserLogIn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const userInfo = { email, password }
        console.log(userInfo)

        userSignIn(email, password)
            .then(user => {
                console.log(user)
                navigate(location?.state ? location.state : "/")
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You Are Successfully Loged In",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
            .catch(error => {
                console.log(error.message)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'user not valid',
                    showConfirmButton: false,
                    timer: 1500
                  });
            })

    }

    const handleGoogleSignin =()=> {
        signInWithGoogle()
        .then(result => {
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => {
            toast(error.message)
        })
    }


    return (
        <div className="flex justify-center bg-[#2878EB] bg-blend-soft-light items-center h-[700px]" style={bg}>
            <Helmet>
                <title>Study Fair | Login</title>
                
            </Helmet>
            <ToastContainer></ToastContainer>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleUserLogIn}>
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
                </form>
                <div className="px-8 mb-4">
                    <div>
                        <button className="w-full btn btn-primary" onClick={handleGoogleSignin}>Login with Gmail</button>
                    </div>
                    <p className="mt-3">Are you new here? Please <Link to="/register"><span className="text-rose-400">Registration</span></Link></p>
                </div>
            </div>

        </div>
    );
};

export default Login;