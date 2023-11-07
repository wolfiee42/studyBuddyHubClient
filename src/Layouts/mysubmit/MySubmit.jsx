import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Submittt from "./Submittt";


const MySubmit = () => {
    const { user } = useContext(AuthContext);
    const [submittion, setSubmissition] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/submittedAssign?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setSubmissition(data);
            })
    }, [user?.email])



    return (
        <div className="bg-base-200">
            <div className="max-w-7xl mx-auto space-y-10 py-20">
                <h2 className="text-4xl font-serif font-bold">My <span className="text-yellow-400">Submits</span></h2>
                {
                    submittion.map((submit, ind) => <Submittt key={ind} submit={submit}></Submittt>)
                }
            </div>
        </div>
    );
};

export default MySubmit;