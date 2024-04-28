import {model, Schema} from 'mongoose';

const PracticePlanSchema = new Schema(
    {
        startDate: {
            type: String,
            required: [true, "Start date is required!"]
        },
        endDate: {
            type: String,
            required: [true, "End date is required!"]
        },
        goal: {
            type: String,
            required: [true, "Goal is required!"]
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

const PracticePlan = model("PracticePlan", PracticePlanSchema);
export default PracticePlan;
