import { useEffect, useState } from "react";
import axiosSecure from "../../hooks/useAxiosSecure"
import Assignn from "./Assignn";

const Assignments = () => {
    const [assign, setAssign] = useState([]);
    const [diffLevel, setDiffLevel] = useState("");

    const handledifficulty = e => {
        e.preventDefault();
        const selectedDifficultyLevel = e.target.value;
        setDiffLevel(selectedDifficultyLevel)
    }

    // useEffect(()=>{
    //     axiosSecure.get(`/assignment?diffLevel=${diffLevel}`)
    //     .then(res=>{
    //         const filterAssignment = res.data;
    //         console.log(filterAssignment);
    //     })
    // },[diffLevel])

    useEffect(() => {
        axiosSecure.get('/assignment')
            .then(res => {
                const allAssignments = res.data;
                setAssign(allAssignments)
            })
            .catch(error => console.log(error.message))
    }, [])
    return (
        <div className=" bg-base-200">
            <div className="max-w-7xl mx-auto py-20">
                <div>
                    <div className="flex justify-between items-center my-10">
                        <h2 className="text-4xl font-serif font-bold "><span className="text-yellow-400">All Assign</span>ments</h2>
                        <div className="form-control w-[150px] max-w-xs">
                            <select className="select select-bordered" onChange={handledifficulty}>
                                <option disabled selected>Filter</option>
                                <option value='Easy'>Easy</option>
                                <option value='Medium'>Medium</option>
                                <option value='Hard'>Hard</option>
                            </select>
                        </div>
                    </div>

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