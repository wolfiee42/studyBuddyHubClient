import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth"
import Swal from 'sweetalert2'



const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [marks, setmarks] = useState("");
    const [diffLevel, setDiffLevel] = useState("");

    const { user } = useAuth();
    const userr = user?.email


    const handleSelectChange = e => {
        e.preventDefault();
        const selectedvalue = e.target.value;
        setmarks(selectedvalue);
    }

    const handledifficulty = e => {
        e.preventDefault();
        const selectedDifficultyLevel = e.target.value;
        setDiffLevel(selectedDifficultyLevel)
    }


    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const desc = form.desc.value;

        const createdAssignment = { title, desc, marks, image, diffLevel, startDate, userr }
        axiosSecure.post('/assignment', createdAssignment)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Assignment Created.",
                        icon: "success"
                    });
                }
            })


        form.reset()

    }


    return (
        <div className="bg-base-200 py-10">
            <div className="max-w-7xl mx-auto">
                <form onSubmit={handleForm} className="space-y-10">
                    <h2 className="font-bold text-4xl my-10 font-serif">Create <span className="text-yellow-400">Assignment</span></h2>
                    <div className="flex justify-center items-center gap-10">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Assignment Title" className="input input-bordered w-full" />

                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Thumbnail</span>
                            </label>
                            <input type="text" name="image" placeholder="Thumbnail URL" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-10">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Due Date</span>
                            </label>
                            <DatePicker placeholder="Type here" className="input input-bordered w-full" selected={startDate} onChange={(date) => setStartDate(date)} />

                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Difficulty Level</span>
                            </label>
                            <select className="select select-bordered w-full" onChange={handledifficulty}>
                                <option disabled selected>Pick one</option>
                                <option value='Easy'>Easy</option>
                                <option value='Medium'>Medium</option>
                                <option value='Hard'>Hard</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center items-start gap-10">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Marks</span>
                            </label>
                            <select className="select select-bordered w-full" onChange={handleSelectChange} >
                                <option disabled selected>Pick one</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="desc" className="textarea textarea-bordered w-full" placeholder="Assignment Description"></textarea>
                        </div>
                    </div>
                    <button className="btn w-full bg-yellow-400 hover:bg-yellow-500 hover:text-white">Make Assignment</button>
                </form>
            </div>
        </div>
    );
};

export default CreateAssignment;