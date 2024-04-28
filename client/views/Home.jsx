import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Home = () => {
    
    const [practicePlans, setpracticePlans] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/practiceplan')
            .then((res) => {
                setpracticePlans(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/practiceplan/${id}`)
            .then((res) => {
                console.log(res.data);
                navigate(0);
            })
        }

    return (
        <>
        <nav className="d-flex align-items-center justify-content-between mb-4">
            <div>
                <h1>Welcome to Guitar Trainer!</h1>
                <h2 className="text-white fs-3">Create & update your practice plans below:</h2>
            </div>
            <Link className="btn btn-lg btn-warning" to={`/practice-options`}>Start Training!</Link>
        </nav>
        <table className="table table-dark table-striped table-hover table-bordered fs-4">
            <thead>
                <tr>
                    <th className="text-warning">Start Date</th>
                    <th className="text-warning">End Date</th>
                    <th className="text-warning">Goal</th>
                    <th className="text-warning">Completed</th>
                    <th className="text-warning">Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                practicePlans.map((practicePlan) => (
                <tr key={practicePlan._id}>
                    <td>{practicePlan.startDate}</td>
                    <td>{practicePlan.endDate}</td>
                    <td>{practicePlan.goal}</td>
                    <td>{practicePlan.completed? "Yes" : "No"}</td>
                    <td>
                        <Link className="btn btn-lg btn-warning p-1" to={`/practiceplan/${practicePlan._id}/update`}>Update</Link> | <button className="btn btn-lg btn-danger p-1" onClick={(e) => deleteHandler(practicePlan._id)}>Delete</button>
                    </td>
                </tr>
                ))
            }
            </tbody>
        </table>
        <Link className="btn btn-lg btn-warning mt-4" to={`/practiceplan/create`}>Create New Plan</Link>
        </>
    )
}

export default Home;