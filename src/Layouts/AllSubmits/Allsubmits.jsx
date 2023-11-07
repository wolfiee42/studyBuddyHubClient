import { useEffect, useState } from "react";
import Allsubmitt from "./Allsubmitt";

const Allsubmits = () => {
    const [submitted, setSubmitted] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/submittedAssign')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSubmitted(data)
            })
    }, [])
    return (
        <div className="bg-base-200">
            <div className="max-w-7xl mx-auto space-y-10 py-20">
                <h2 className="text-4xl font-serif font-bold">All <span className="text-yellow-400">Submits</span></h2>
                {submitted.length}
                {
                    submitted.map(submitt => <Allsubmitt key={submitt._id} submitt={submitt}></Allsubmitt>)
                }
            </div>
        </div>
    );
};

export default Allsubmits;