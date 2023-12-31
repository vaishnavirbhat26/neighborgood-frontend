import FormActivity from "./FormActivity"
import { useFormContext } from "react-hook-form"

const StepFour = () => {

    const {register} = useFormContext()

    return (
        <>
            <label htmlFor="gardening" className="flex justify-between items-center mt-2 cursor-pointer border border-white p-2 rounded" >
                <p className="text-sm font-semibold" >Are you into Gardening?</p>
                <div className="switch" >
                    <input type="checkbox" name="gardening" id="gardening" {...register("gardening")} />
                    <span className="slider" ></span>
                </div>
            </label>
            <FormActivity activity="Swimming" activityKey={"swimming"} options={["Backyard", "Public Pool", "Health Club Pool"]} />
            <FormActivity activity="Quick Coffee / Tea Breaks" activityKey={"coffeeTea"} options={["My place", "Your Place"]} />
        </>
    )
}

export default StepFour;
