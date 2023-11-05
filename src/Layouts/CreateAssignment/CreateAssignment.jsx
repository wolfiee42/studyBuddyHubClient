import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="bg-base-200 py-10">
            <div className="max-w-7xl mx-auto">
                <div className="space-y-10">
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
                            <select className="select select-bordered w-full">
                                <option disabled selected>Pick one</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center items-start gap-10">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Marks</span>
                            </label>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Pick one</option>
                                <option>10</option>
                                <option>20</option>
                                <option>50</option>
                            </select>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered w-full" placeholder="Assignment Description"></textarea>
                        </div>
                    </div>
                    <button className="btn w-full bg-yellow-400 hover:bg-yellow-500 hover:text-white">Make Assignment</button>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignment;