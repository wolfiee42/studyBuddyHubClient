import { Link, useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const { _id, description, difficultyLevel, dueDate, marks, thumbnailImageUrl, title } = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-around gap-10 my-10">
                <div>
                    <img className="rounded-xl w-[700px]" src={thumbnailImageUrl} alt="" />
                </div>
                <div className="flex flex-col justify-between">
                    <div className="space-y-3">
                        <h2 className="text-3xl mb-10 font-serif font-semibold">Title: {title}</h2>
                        <p className="text-xl font-medium"> <span className="text-yellow-500"> Description: </span> {description}</p>
                        <p className="text-xl font-medium"> <span className="text-yellow-500"> Difficulty: </span> <span className="uppercase">{difficultyLevel}</span></p>
                        <p className="text-xl font-medium"> <span className="text-yellow-500"> Marks: </span> {marks}</p>
                        <p className="text-xl font-medium"> <span className="text-yellow-500"> Due Date: </span> {dueDate}</p>
                    </div>
                    <Link to={`/submit/${_id}`} className="btn w-full bg-yellow-400 hover:bg-yellow-500 hover:text-white">Take Assignment</Link>
                </div>
            </div>
        </div >
    );
};

export default ViewDetails;