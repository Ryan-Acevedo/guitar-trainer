import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePracticePlan = () => {

    const navigate = useNavigate();

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [goal, setGoal] = useState("");
    const [errors, setErrors] = useState({});

    const startDateHandler = (e) => {
        setStartDate(e.target.value);
    }

    const endDateHandler = (e) => {
        setEndDate(e.target.value);
    }

    const goalHandler = (e) => {
        setGoal(e.target.value);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/practiceplan', {
            startDate,
            endDate,
            goal
            })
            .then(res => {
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }
    
    return (
        <>
        <nav className="d-flex align-items-center justify-content-between mb-4">
            <h1>Create a Practice Plan</h1>
            <Link className="btn btn-lg btn-warning" to={`/`}>Home</Link>
        </nav>
        <form className="fs-4 text-white" onSubmit={submitHandler}>
            {/* START DATE */}
            <label>Start Date:</label> {errors.startDate && <p className="d-inline ps-3 text-warning">{errors.startDate.message}</p>}
            <input className="form-control mb-2" type="date" value={startDate} onChange={startDateHandler}></input>
            {/* END DATE */}
            <label>End Date:</label> {errors.endDate && <p className="d-inline ps-3 text-warning">{errors.endDate.message}</p>}
            <input className="form-control mb-2" type="date" value={endDate} onChange={endDateHandler}></input>
            {/* GOAL */}
            <label>Goal:</label> {errors.goal && <p className="d-inline ps-3 text-warning">{errors.goal.message}</p>}
            <textarea className="form-control mb-2" type="text" value={goal} onChange={goalHandler}></textarea>
            {/* SUBMIT */}
            <button className="btn btn-lg btn-warning mt-4" type="submit">Submit</button>
        </form>
        </>
    )

}

export default CreatePracticePlan;
