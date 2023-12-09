import { useState } from "react";
import useAxiosSecure, { axiosSecure } from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";


const WorkSheet = () => {
    const { user } = useAuth()
    const email = user.email
    const [task, setTask] = useState('')
    

    
    
    

    const handleWorkSheet = (e) => {
        e.preventDefault();
        const taskType = task;
        const workHour = e.target.workshour.value;
        const date = e.target.date.value;
        const user = email
        // console.log(taskType, workHour, date)
        const taskInfo = { taskType, workHour, date, email }
        console.log(taskInfo)

        axiosSecure.post('/tasksheet', taskInfo)
            .then(function (response) {
                console.log(response);
                toast('successful')
            })
            .catch(function (error) {
                console.log(error);
                toast(error)
            })
    }

    const handleWork = (e) => {
        setTask(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="">
                <p className="text-xl">Submit Your Task:</p>
                <form className=" lg:flex gap-6" onSubmit={handleWorkSheet}>
                    <div>
                        <select defaultValue="default" className="py-3 px-3 input input-bordered rounded-lg" onChange={handleWork}>
                            <option disabled value="default">Select..</option>
                            <option >Sales</option>
                            <option>Support</option>
                            <option>Content</option>
                            <option>Paper Work</option>
                        </select>
                    </div>
                    <div className="">

                        <input type="number" name="workshour" placeholder="works hour" className="input input-bordered" required />
                    </div>
                    <div className=''>

                        <input type="date" name="date" placeholder="" className="input input-bordered" required />

                    </div>
                    <div className=" ">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div className="mt-20">
                <p className="mb-4">Submitted Task</p>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Task Type</th>
                                <th>Works Hour</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default WorkSheet;