import { ToastContainer, toast } from "react-toastify";
// import loginbg from "../../assets/login.jpg"
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import regPagePic from "../../img/cat-3.jpg"
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";



const Registration = () => {
    const {createUser} = useContext(AuthContext)
    const [role, setRole ] = useState()
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    // console.log(role)


    const handleUserReg = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const photo = e.target.photo.value
        const designition =e.target.designition.value
        const salary = e.target.salary.value
        const bankAccount = e.target.account.value
        const userRole = role
        console.log(name,email,photo, userRole)

        if (!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
            return toast('Minimum six characters, at least one uppercase & special charecter')

        }

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            
            // Swal.fire({
            //     position: "center",
            //     icon: "success",
            //     title: "Registration Successfull",
            //     showConfirmButton: false,
            //     timer: 1500
            //   });
            updateProfile(result.user, {
                displayName: name,
                photoURL: photo
            })
            .then(() => {
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                    role: userRole,
                    designition: designition,
                    salary: salary ,
                    bankAccount: bankAccount,
                    isVerified: false

                }
                console.log(userInfo)
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if(res.data.insertedId){
                        // reset()
                        Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Registration Successfull",
                                showConfirmButton: false,
                                timer: 1500
                              });
                    }
                    navigate('/login')
                })
            })
        })
        .catch(error => {
            console.error(error)
            Swal.fire({
                position: "center",
                icon: "success",
                title: error,
                showConfirmButton: false,
                timer: 1500
              });
        })

        

    }

    const handleRole = (e) => {
         setRole(e.target.value)
    }

    const bg = {
        backgroundImage: `url(${regPagePic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }


    return (
        <div>

            <div className="w-full flex justify-center items-center  bg-[#2878EB]   bg-blend-soft-light min-h-screen" style={bg}  >
                <ToastContainer></ToastContainer>
                <Helmet>
                    <title>Stuudy Fair | Register</title>
                </Helmet>
                <div className="border lg:w-[40%] mt-10 backdrop-blur-lg bg-transparent rounded-tl-[50px] rounded-br-[50px] p-10">
                    <form className="card-body" onSubmit={handleUserReg}>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text text-white ">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Your Role</span>
                            </label>
                            <select defaultValue="default" className="py-3 px-3 rounded-lg" onChange={handleRole}>
                                <option disabled value="default">Select..</option>
                                <option disabled>Admin</option>
                                <option>Employee</option>
                                <option>HR</option>
                            </select>
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Designation</span>
                            </label>
                            <input type="text" placeholder="designition" name="designition" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Bank_account_no</span>
                            </label>
                            <input type="text" placeholder="acoount no" name="account" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Salary</span>
                            </label>
                            <input type="text" placeholder="your salary" name="salary" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                    </form>
                    <p className="text-white">Already have an account. Please <Link to="/login"><span className="font-semibold text-rose-500">Login</span></Link></p>
                </div>
            </div>

        </div>
    );
};

export default Registration;
