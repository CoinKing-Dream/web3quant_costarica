import { useDispatch } from "react-redux";
import { updateSearchModal } from "../store/generalSlice";

const SearchModal = () => {
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
          ></span>
          <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-lg w-full">
            <div className="flex flex-row justify-around items-center px-3 w-full py-2">
              <input
                type="text"
                placeholder="Search..."
                className="px-6 py-2 border-2 rounded-lg w-[90%] focus:border-neutral-400"
              ></input>
              <div className="flex flex-row-reverse">
                <button
                  type="button"
                  className="text-black mt-3 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => dispatch(updateSearchModal(false))}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
