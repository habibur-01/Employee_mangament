import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUserCog } from "react-icons/fa";
import Swal from 'sweetalert2';

const Users = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users/admin', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-tok')}`
                }
            });
            return res.data;
        }
    })

    const handleDeleteEmployee = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, fired him!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`users/admin/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.acknowledged === true) {
                            refetch()
                            Swal.fire({
                                title: "Fired!",
                                text: "Your employee has been fired.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    const handleMakeHR = (user) => {
        axiosSecure.patch(`users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0)
                    refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is HR Now!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div>
            <p>Total Employee: {users.length}</p>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Make HR</th>
                                <th>Fire</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, index) => <tr key={user._id} className={`${user.role === 'Admin' ? 'hidden' : 'visible'}`}>
                                    <th>{index + 1}</th>
                                    <td >{user.name}</td>
                                    <td>{user.designition}</td>
                                    <td>
                                        {
                                            user?.role === "Employee" ? <button className='btn btn-primary btn-xs' onClick={() => handleMakeHR(user)}>< FaUserCog size={20}/></button> : <button className='btn btn-ghost bt-sm'> HR</button>
                                        }
                                    </td>
                                    <td>
                                        <button className='btn btn-circle' onClick={() => handleDeleteEmployee(user._id)}>
                                            {
                                                user?.isFired === true ? 'Fired' : < FaTrashAlt size={20} />
                                            }
                                        </button>
                                    </td>
                                </tr>)
                            }
                            {/* row 3 */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;