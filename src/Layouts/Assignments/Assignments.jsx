import { useEffect, useState } from "react";
import axiosSecure from "../../hooks/useAxiosSecure"
import Assignn from "./Assignn";
import { useLoaderData } from "react-router-dom";

const Assignments = () => {
    const [assign, setAssign] = useState([]);
    const [diffLevel, setDiffLevel] = useState("");
    console.log(diffLevel);
    const { assignment } = useLoaderData();
    const [itemPerPage, setItemPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(0)

    const numberOfPages = Math.ceil(assignment / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);

    const handleSelectBtn = e => {
        const valuee = parseInt(e.target.value);
        setItemPerPage(valuee);
        setCurrentPage(0);
    }

    const handledifficulty = e => {
        e.preventDefault();
        const selectedDifficultyLevel = e.target.value;
        setDiffLevel(selectedDifficultyLevel)
    }
    const handlePrevBtn = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextBtn = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    // useEffect(()=>{
    //     axiosSecure.get(`/assignment?diffLevel=${diffLevel}`)
    //     .then(res=>{
    //         const filterAssignment = res.data;
    //         console.log(filterAssignment);
    //     })
    // },[diffLevel])

    useEffect(() => {
        axiosSecure.get(`/assignment?page=${currentPage}&size=${itemPerPage}`)
            .then(res => {
                const allAssignments = res.data;
                setAssign(allAssignments)
            })
            .catch(error => console.log(error.message))
    }, [currentPage, itemPerPage])
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

                    <div className="grid grid-cols-1 lg:grid-cols-3 my-16 gap-8">
                        {
                            assign.map(assignment => <Assignn assignment={assignment} key={assignment._id}></Assignn>)
                        }
                    </div>
                    <div className="">
                        <div className="inline">
                            <button className="btn mr-5 my-10 btn-warning" onClick={handlePrevBtn}>Prev</button>
                            {
                                pages.map(page => <button onClick={() => setCurrentPage(page)} className="btn mr-5 my-10 btn-warning" key={page}>{page + 1}</button>)
                            }
                            <button  className="btn mr-5 my-10 btn-warning" onClick={handleNextBtn}>Next</button>
                        </div>
                        <select onChange={handleSelectBtn} value={itemPerPage}>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assignments;