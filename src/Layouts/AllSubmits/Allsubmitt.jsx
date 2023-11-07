

const Allsubmitt = ({ submitt }) => {
    const {  title, thumbnailImageUrl, marks } = submitt.data;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={thumbnailImageUrl} className="w-[424px]" alt="Album" /></figure>
            <div className="card-body flex-col">
                <div className="flex-grow">
                    <h2 className="text-xl font-bold mb-7 font-mono">{title}</h2>
                    <p className="text-lg font-semibold">Submitted PDF: <a className="hover:underline" href="">{submitt.pdfFile}</a></p>
                    <p className="text-lg font-semibold">Status: <span className="text-yellow-500 "> Pending...</span></p>
                    <p className="font-semibold">Note: {submitt.impNote}</p>
                    <p className="font-semibold">Marks: {marks}</p>
                    <p className="font-semibold">Obtained Marks: {marks}</p>
                </div>

                <div className="flex justify-around">
                    <button className="btn w-full bg-yellow-400 hover:bg-yellow-500 hover:text-white">mark</button>
                </div>
            </div>
        </div>
    );
}
export default Allsubmitt;