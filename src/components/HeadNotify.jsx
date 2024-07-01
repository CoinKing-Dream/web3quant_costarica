import { useSelector } from "react-redux";
import { dispatch } from "../store";
import { updateHeadNotify } from "../store/reducers/general";

const HeadNotify = () => {
    // const flagHeadNotify = useSelector(state => state.general.flagHeadNotify);

    return (
        <>
            <div className="bg-black text-white w-screen flex justify-center items-center h-12 relative">
              <span>Read FAQs on the About page before subscribing.</span>
              {/* <button className="absolute right-4" onClick={dispatch(updateHeadNotify(false))}>X</button> */}
            </div>
        </>
    )
}

export default HeadNotify;