import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'




const Update = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [mark, setmarks] = useState("");
    const [diffLevel, setDiffLevel] = useState("");
    const data = useLoaderData();
    const { _id, title, thumbnailImageUrl, difficultyLevel, marks, description } = data
    const navigate = useNavigate()
    const handleSelectChange = e => {
        e.preventDefault();
        const selectedvalue = e.target.value;
        setmarks(selectedvalue);
    }

    const handledifficulty = e => {
        e.preventDefault();
        const selectedDifficultyLevel = e.target.value;
        setDiffLevel(selectedDifficultyLevel);
    }


    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const desc = form.desc.value;

        const updateAssignment = { title, desc, mark, image, diffLevel, startDate, }
        axiosSecure.put(`/assignment/${_id}`, updateAssignment)
            .then(res => {
                const success = res.data.acknowledged;

                if (success) {
                    Swal.fire({
                        title: "Assignment Updated",
                        icon: "success"
                    });
                }
                navigate(-1);
            })
            .catch(error => console.log(error.message))


    }



    return (
        <div className="bg-base-200 py-10">
            <div className="max-w-sm md:max-w-xl  lg:max-w-7xl mx-auto">
                <form onSubmit={handleForm} className="space-y-10">
                    <h2 className="font-bold text-4xl my-10 font-serif">Update <span className="text-yellow-400">Assignment</span></h2>
                    <div className="flex justify-center items-center gap-4 md:gap-10">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" defaultValue={title} name="title" placeholder="Assignment Title" className="input input-bordered w-full" />

                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Thumbnail</span>
                            </label>
                            <input type="text" defaultValue={thumbnailImageUrl} name="image" placeholder="Thumbnail URL" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4 md:gap-10">
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
                            <select defaultValue={difficultyLevel} className="select select-bordered w-full" onChange={handledifficulty}>
                                <option disabled selected>Pick one</option>
                                <option value='Easy'>Easy</option>
                                <option value='Medium'>Medium</option>
                                <option value='Hard'>Hard</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center items-start gap-4 md:gap-10">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Marks</span>
                            </label>
                            <select defaultValue={marks} className="select select-bordered w-full" onChange={handleSelectChange} >
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
                            <textarea defaultValue={description} name="desc" className="textarea textarea-bordered w-full" placeholder="Assignment Description"></textarea>
                        </div>
                    </div>
                    <button className="btn w-full bg-yellow-400 hover:bg-yellow-500 hover:text-white">Update Assignment</button>
                </form>
            </div>
        </div>
    );
};

export default Update;