/*
import { useFormContext } from "react-hook-form"
import FormActivity from "./FormActivity"

const StepThree = () => {

    const { register } = useFormContext()

    return (
        <>
            <FormActivity activity="Wjkbmdfa" activityKey={"walking"} options={["Slow", "Moderate", "Fast"]} />
            <FormActivity activity="Running" activityKey={"running"} options={["Slow", "Moderate", "Fast"]} />
            <FormActivity activity="Stulfaft Park" activityKey={"stulfaftPark"} options={["Slow", "Moderate", "Fast"]} />
            <label htmlFor="dogWalking" className="flex justify-between items-center mt-2 cursor-pointer border border-white p-2 rounded" >
                <p className="text-sm font-semibold" >Dog Walking</p>
                <div className="switch" >
                    <input type="checkbox" name="dogWalking" id="dogWalking" {...register("dogWalking")} />
                    <span className="slider" ></span>
                </div>
            </label>
        </>
    )
}

export default StepThree
*/
import { useFormContext } from "react-hook-form";
import FormActivity from "./FormActivity";
import { useState, useEffect } from "react";

const StepThree = () => {
    const { register, watch } = useFormContext();
    const [showWalkingOptions, setShowWalkingOptions] = useState(false);
    const [showRunningOptions, setShowRunningOptions] = useState(false);

    // Watching for changes in the "goes out for walks" question
    const goesOutForWalks = watch("goesOutForWalks");
    const goesOutForRuns = watch("goesOutForRuns");


    // Effect to set whether to show walking options based on the user's answer
    useEffect(() => {
        if(goesOutForWalks === 'yes') {
            setShowWalkingOptions(true);
        } else {
            setShowWalkingOptions(false);
        }
    }, [goesOutForWalks]);

    useEffect(() => {
        if(goesOutForRuns === 'yes'){
            setShowRunningOptions(true);
        } else {
            setShowRunningOptions(false);
        }
    }, [goesOutForRuns]);

    return (
        <>
            <label htmlFor="goesOutForWalks" className="flex justify-between items-center mt-2 cursor-pointer">
                <p className="text-sm font-semibold">Do you go out for walks?</p>
                <select className="flex flex-col gap-0.5 font-poppins relative rounded shadow-md border-white"
                    name="goesOutForWalks" id="goesOutForWalks" {...register("goesOutForWalks")}>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </label>
            {showWalkingOptions && (

                <FormActivity
                    activity="Which pace do you prefer?"
                    activityKey={"walking"}
                    options={["Slow", "Moderate", "Fast"]}
                />
            )}
            {/* ... other activities */}
            <label htmlFor="goesOutForRuns" className="flex justify-between items-center mt-2 cursor-pointer">
                <p className="text-sm font-semibold">Do you run?</p>
                <select className="flex flex-col gap-0.5 font-poppins relative rounded shadow-md border-white" name="goesOutForRuns" id="goesOutForRuns" {...register("goesOutForRuns")}>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </label>
            {showRunningOptions && (

                <FormActivity
                    activity="Which pace do you prefer?"
                    activityKey={"running"}
                    options={["Slow", "Moderate", "Fast"]}
                />
            )}
            <label htmlFor="dogWalking" className="flex justify-between items-center mt-2 cursor-pointer border border-white p-2 rounded" >
                <p className="text-sm font-semibold" >Do you often walk dogs?</p>
                <div className="switch" >
                    <input type="checkbox" name="dogWalking" id="dogWalking" {...register("dogWalking")} />
                    <span className="slider" ></span>
                </div>
            </label>
        </>
    )
}

export default StepThree;
