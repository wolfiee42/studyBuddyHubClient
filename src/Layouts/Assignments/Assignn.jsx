const Assignn = ({ assignment }) => {
    const { thumbnailImageUrl, title, marks, difficultyLevel } = assignment
    return (
        <div className="card w-96 glass shadow-2xl">
            <figure><img src={thumbnailImageUrl} className="w-[390px] h-[242px]" alt="car!" /></figure>
            <div className="card-body">
                <h2><span className="font-semibold text-xl">Title: </span><span className="text-xl">{title}</span></h2>
                <p><span className="font-semibold">Difficulty: </span><span className="uppercase">{difficultyLevel}</span></p>
                <p><span className="font-semibold">Marks: </span>{marks}</p>
                <div className="flex justify-center gap-2 mt-5">
                    <button className="btn bg-yellow-400 hover:bg-yellow-500 hover:text-white">View Assignment</button>
                    <button className="btn bg-yellow-400 hover:bg-yellow-500 hover:text-white">Update Assignment</button>
                </div>
            </div>
        </div>
    );
};

export default Assignn;