import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useDispatch } from "react-redux";
import { updateSubscribeModal } from "../store/generalSlice";

const SubscribeButton = ({ flag }) => {
  const dispatch = useDispatch();

  let className =
    "flex flex-row gap-2 justify-center rounded-full items-center text-white bg-[--ghost-accent-color] ";
  className +=
    flag == 0
      ? "px-8 py-3 text-xl fixed right-8 bottom-8"
      : "text-xs font-bold py-1 px-4";

  return (
    <div onClick={() => dispatch(updateSubscribeModal(true))}>
      {flag != 2 ? (
        <>
          <button className={className}>
            <div>
              {flag == 0 ? (
                <AccountCircleOutlinedIcon fontSize="large" />
              ) : (
                <EmailOutlinedIcon fontSize="small" />
              )}
            </div>
            <div>{flag == 0 ? "Subscribe" : "SUBSCRIBE"}</div>
          </button>
        </>
      ) : (
        <>
          <button className="bg-white gap-[100px] h-[50px] flex flex-row justify-between items-center rounded-lg px-3">
            <div className="flex flex-row gap-2 justify-center items-center">
              <EmailOutlinedIcon fontSize="small" color="disabled" />
              <div className="text-gray-400">jamie@example.com</div>
            </div>
            <div className="text-[--ghost-accent-color] font-medium text-sm">
              SUBSCRIBE
            </div>
          </button>
        </>
      )}
    </div>
  );
};

export default SubscribeButton;
