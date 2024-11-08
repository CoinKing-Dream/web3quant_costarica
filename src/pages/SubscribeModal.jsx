import { useDispatch } from "react-redux";
import { updateSubscribeModal } from "../store/generalSlice";

const SubscribeModal = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="fixed z-10 inset-0"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="block">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-60 transition-opacity"
            aria-hidden="true"
          ></div>
          <span
            className="inline-block align-middle h-screen"
            aria-hidden="true"
          >
            &#8203; asdf
          </span>
          <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-lg w-full">
            <div className="bg-white px-4 pt-5 pb-4">asdfasdfsdf</div>
            <div className="px-6 py-2 flex flex-row-reverse">
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => dispatch(updateSubscribeModal(false))}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeModal;
