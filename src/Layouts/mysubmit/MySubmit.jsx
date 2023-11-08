import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Submittt from "./Submittt";
import Swal from 'sweetalert2'
import axiosSecure from "../../hooks/useAxiosSecure"

const MySubmit = () => {
    const { user } = useContext(AuthContext);
    const [submittion, setSubmissition] = useState([]);

    useEffect(() => {
        fetch(`https://study-buddy-hub-server-side.vercel.app/submittedAssign?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setSubmissition(data);
            })
    }, [user?.email])

    const handleDeletebtn = _id => {
        axiosSecure.delete(`/submittedAssign/${_id}`)
            .then(result => {
                if (result.data.acknowledged) {
                    Swal.fire({
                        title: "The Assignment have been deleted.",
                        icon: "error"
                    });
                }
                const remaining = submittion.filter(submit => submit._id !== _id)
                setSubmissition(remaining)
            })

    }

    return (
        <div className="bg-base-200">
            <div className="max-w-sm md:max-w-xl lg:max-w-7xl mx-auto space-y-10 py-20">
                <h2 className="text-4xl font-serif font-bold">My <span className="text-yellow-400">Submits</span></h2>
                {
                    submittion.map((submit, ind) => <Submittt key={ind} handleDeletebtn={handleDeletebtn} submit={submit}></Submittt>)
                }
            </div>
        </div>
    );
};

export default MySubmit;