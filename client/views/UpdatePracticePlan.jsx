import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const UpdatePracticePlan = () => {
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [goal, setGoal] = useState("");
    const [completed, setCompleted] = useState(false)
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/practiceplan/${id}`)
            .then(res => {
                setStartDate(res.data.startDate);
                setEndDate(res.data.endDate);
                setGoal(res.data.goal);
                setCompleted(res.data.completed);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    // HANDLERS
    const startDateHandler = (e) => {
        setStartDate(e.target.value);
    }

    const endDateHandler = (e) => {
        setEndDate(e.target.value);
    }

    const goalHandler = (e) => {
        setGoal(e.target.value);
    }

    const completedHandler = () => {
        setCompleted(!completed);
    }

    // SUBMIT HANDLER
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/practiceplan/${id}`, {
            startDate,
            endDate,
            goal,
            completed
        })
        .then(res => {
            console.log(res);
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
            <h1>Update Practice Plan</h1>
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
            <textarea className="form-control mb-3" type="text" value={goal} onChange={goalHandler}></textarea>
            {/* COMPLETED? */}
            <div className="mt-4 mb-1">
                {completed?
                <input className="form-check-input" type="checkbox" checked onChange={completedHandler}></input> :
                <input className="form-check-input" type="checkbox" onChange={completedHandler}></input>
                }
                <label className="ps-3">Compelted?</label><br></br>
            </div>
            {/* SUBMIT */}
            <button className="btn btn-lg btn-warning mt-4" type="submit">Update</button>
        </form>
        </>
    )

}

export default UpdatePracticePlan;