import { useEffect, useState } from "react";
import Allsubmitt from "./Allsubmitt";

const Allsubmits = () => {
    const [submitted, setSubmitted] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/submittedAssign')
            .then(res => res.json())
            .then(data => {
                setSubmitted(data)
            })
    }, [])
    const handlePending = _id => {

        // axiosSecure.patch(`/submittedAssign/${_id}`, { status: 'confirm' })
        //     .then(res => {
        //         console.log(res.data);
        //         if (res.data.modifiedCount > 0) {
        //             const remaing = submitted.filter(submit => submit._id !== _id);
        //             const updated = submitted.find(submit => submit._id === _id);
        //             updated.status = "confirm";
        //             const newArr = [updated, ...remaing];
        //             setSubmitted(newArr)
        //         }
        //     })

        fetch(`http://localhost:5000/submittedAssign/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    const remaing = submitted.filter(submit => submit._id !== _id);
                    const updated = submitted.find(submit => submit._id === _id);
                    updated.status = "confirm";
                    const newArr = [updated, ...remaing];
                    setSubmitted(newArr)
                }
            })
    }
    return (
        <div className="bg-base-200">
            <div className="max-w-sm md:max-w-xl lg:max-w-7xl mx-auto space-y-10 py-20">
                <h2 className="text-4xl font-serif font-bold">All <span className="text-yellow-400">Submits</span></h2>
                {
                    submitted.map((submitt, ind) => <Allsubmitt handlePending={handlePending} key={ind} submitt={submitt}></Allsubmitt>)
                }
            </div>
        </div>
    );
};

export default Allsubmits;