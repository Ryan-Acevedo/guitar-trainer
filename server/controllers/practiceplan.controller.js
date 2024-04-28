import PracticePlan from "../models/practiceplan.model.js";

// CREATE
async function createPracticePlan(req, res) {
    try {
        const newPracticePlan = await PracticePlan.create(req.body);
        res.json(newPracticePlan);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// READ
async function getAllPracticePlans(req, res) {
    try {
        const allPracticePlans = await PracticePlan.find();
        res.json(allPracticePlans);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getOnePracticePlan(req, res) {
    try {
        const practicePlan = await PracticePlan.findById(req.params.id);
        res.json(practicePlan);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// UPDATE
async function updatePracticePlan(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedPracticePlan = await PracticePlan.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedPracticePlan);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// DELETE
async function deletePracticePlan(req, res) {
    try {
        const deletedPerson = await PracticePlan.findByIdAndDelete(req.params.id);
        res.json(deletedPerson);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export {
    createPracticePlan,
    getAllPracticePlans,
    getOnePracticePlan,
    updatePracticePlan,
    deletePracticePlan,
};
