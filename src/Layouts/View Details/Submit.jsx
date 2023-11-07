import { useLoaderData } from "react-router-dom";
import axiosSecure from "../../hooks/useAxiosSecure";

const Submit = () => {
    const data = useLoaderData();
    console.log(data);

    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const pdfFile = form.pdfFile.value;
        const impNote = form.impNote.value;
        const information = { pdfFile, impNote, data }

        axiosSecure.post('/submittedAssign', information)
        .then(res=>console.log(res.data))

    }


    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif font-bold my-10 text-center">Your Submittion</h2>
            <form onSubmit={handleForm} className="flex flex-col items-center justify-center my-10 space-y-5">
                <input name="pdfFile" type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" />
                <textarea name="impNote" placeholder="Bio" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
                <button className="btn w-[320px] bg-yellow-400 hover:bg-yellow-500 hover:text-white">Submit</button>
            </form>
        </div>
    );
};

export default Submit;