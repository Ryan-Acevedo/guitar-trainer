import { Router } from "express";

import { 
    createPracticePlan, 
    getAllPracticePlans, 
    getOnePracticePlan, 
    updatePracticePlan, 
    deletePracticePlan, 
} from "../controllers/practiceplan.controller.js";

const router = Router();

router.route("/practiceplan")
    .get(getAllPracticePlans)
    .post(createPracticePlan);

router.route("/practiceplan/:id")
    .get(getOnePracticePlan)
    .put(updatePracticePlan)
    .delete(deletePracticePlan);

export default router;