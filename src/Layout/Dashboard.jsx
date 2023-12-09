import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Pages/hooks/useAuth";
import useAxiosSecure from "../Pages/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
// import useAdmin from "../Pages/hooks/useAdmin";



const Dashboard = () => {
    // const [cart] = useCart();
    const [userData, setUserData] = useState([])
    // const [isAdmin, setIsAdmin] = useState(false);
    // const [isHR, setIsHR] = useState(false);
    const { user } = useAuth()
    const email = user.email;
    console.log(email)


    //    const isAdmin = useAdmin()
    // TODO: get isAdmin value from the database
    const url = `https://assignment-12-server-side-psi.vercel.app/users?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])
    console.log(userData)
    const userRole = (userData[0]?.role)
    //   if(Admin === "Admin"){
    //     setIsAdmin(true)
    //   }
    console.log(userRole)

    // const isAdmin = true

    return (
        <div className="lg:flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#007bff] text-white">
                <ul className="menu p-4">
                    {userRole === 'Admin' && (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Employee List
                                </NavLink>
                            </li>
                        </>
                    )}
                    {userRole === 'HR' && (
                        <>
                            {/* <li>
                                <NavLink to="/dashboard/hrHome">
                                    <FaHome></FaHome>
                                    HR Home
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/dashboard/employeeList">
                                    <FaUsers></FaUsers>
                                    Employee List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/progress">
                                    <FaBarsProgress></FaBarsProgress>
                                    Progress</NavLink>
                            </li>
                        </>
                    )}
                    {userRole === 'Employee' && (
                        <>
                            {/* <li>
                                <NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                     Employee Home
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/dashboard/history">
                                    <FaCalendar></FaCalendar>
                                    Payment History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/worksheet">
                                    <FaShoppingCart></FaShoppingCart>
                                    WorkSheet
                                </NavLink>
                            </li>
                            {/* ... (other employee-specific navigation items) */}
                        </>
                    )}



                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact us</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;