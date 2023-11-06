import { useEffect, useState } from "react";
import axiosSecure from "../../hooks/useAxiosSecure"
import Assignn from "./Assignn";

const Assignments = () => {
    const [assign, setAssign] = useState([])
    useEffect(() => {
        axiosSecure.get('/assignment')
            .then(res => {
                const allAssignments = res.data;
                setAssign(allAssignments)
                console.log(allAssignments);
            })
            .catch(error => console.log(error.message))
    }, [])
    return (
        <div className=" bg-base-200">
            <div className="max-w-7xl mx-auto py-20">
                <div>
                    <h2 className="text-4xl font-serif font-bold my-5"><span className="text-yellow-400">All Assign</span>ments</h2>
                    <div className="grid grid-cols-3 gap-8">
                        {
                            assign.map(assignment => <Assignn assignment={assignment} key={assignment._id}></Assignn>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assignments;