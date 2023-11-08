import PropTypes from 'prop-types';


const Allsubmitt = ({ submitt, handlePending }) => {
    const { _id, title, thumbnailImageUrl, marks, status } = submitt.data;


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
                    {   status === "confirm" ? <span className="font-bold">Checked</span> :
                        <button onClick={() => handlePending(_id)} className="btn w-1/2 bg-red-500 hover:bg-red-400 hover:text-white">Confirm</button>}
                </div>
            </div>
        </div>
    );
}

Allsubmitt.propTypes = {
    submitt: PropTypes.object,
    handlePending: PropTypes.func,
}

export default Allsubmitt;