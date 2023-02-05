import React from "react";

export default function Notify() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open large modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                
                <div className="w-full p-3 mt-8 bg-white rounded flex">
                    <div className="w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center">
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00059 3.01934C9.56659 1.61334 11.9866 1.66 13.4953 3.17134C15.0033 4.68334 15.0553 7.09133 13.6526 8.662L7.99926 14.3233L2.34726 8.662C0.944589 7.09133 0.997256 4.67934 2.50459 3.17134C4.01459 1.662 6.42992 1.61134 8.00059 3.01934Z" fill="#EF4444" />
                        </svg>
                    </div>
                    <div className="pl-3">
                        <p className="text-sm leading-none">
                            <span className="text-indigo-700">James Doe</span> favourited an <span className="text-indigo-700">item</span>
                        </p>
                        <p className="text-xs leading-3 pt-1 text-gray-500">2 hours ago</p>
                    </div>
                </div>
                <div className="w-full p-3 mt-4 bg-white rounded shadow flex flex-shrink-0">
                    <div className="w-8 h-8 border rounded-full border-gray-200 flex flex-shrink-0 items-center justify-center">
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33325 14.6667C1.33325 13.2522 1.89516 11.8956 2.89535 10.8954C3.89554 9.89523 5.2521 9.33333 6.66659 9.33333C8.08107 9.33333 9.43763 9.89523 10.4378 10.8954C11.438 11.8956 11.9999 13.2522 11.9999 14.6667H1.33325ZM6.66659 8.66666C4.45659 8.66666 2.66659 6.87666 2.66659 4.66666C2.66659 2.45666 4.45659 0.666664 6.66659 0.666664C8.87659 0.666664 10.6666 2.45666 10.6666 4.66666C10.6666 6.87666 8.87659 8.66666 6.66659 8.66666ZM11.5753 10.1553C12.595 10.4174 13.5061 10.9946 14.1788 11.8046C14.8515 12.6145 15.2515 13.6161 15.3219 14.6667H13.3333C13.3333 12.9267 12.6666 11.3427 11.5753 10.1553ZM10.2266 8.638C10.7852 8.13831 11.232 7.52622 11.5376 6.84183C11.8432 6.15743 12.0008 5.41619 11.9999 4.66666C12.0013 3.75564 11.7683 2.85958 11.3233 2.06466C12.0783 2.21639 12.7576 2.62491 13.2456 3.2208C13.7335 3.81668 14.0001 4.56315 13.9999 5.33333C14.0001 5.80831 13.8987 6.27784 13.7027 6.71045C13.5066 7.14306 13.2203 7.52876 12.863 7.84169C12.5056 8.15463 12.0856 8.38757 11.6309 8.52491C11.1762 8.66224 10.6974 8.7008 10.2266 8.638Z" fill="#047857" />
                        </svg>
                    </div>
                    <div className="pl-3 w-full">
                        <div className="flex items-center justify-between w-full">
                            <p className="text-sm leading-none">
                                <span className="text-indigo-700">Sash</span> added you to the group: <span className="text-indigo-700">UX Designers</span>
                            </p>
                            <div className="cursor-pointer">
                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 3.5L3.5 10.5" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.5 3.5L10.5 10.5" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-xs leading-3 pt-1 text-gray-500">2 hours ago</p>
                    </div>
                </div>
                <div className="w-full p-3 mt-4 bg-white rounded flex">
                    <div className="w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center">
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.30325 12.6667L1.33325 15V2.66667C1.33325 2.48986 1.40349 2.32029 1.52851 2.19526C1.65354 2.07024 1.82311 2 1.99992 2H13.9999C14.1767 2 14.3463 2.07024 14.4713 2.19526C14.5963 2.32029 14.6666 2.48986 14.6666 2.66667V12C14.6666 12.1768 14.5963 12.3464 14.4713 12.4714C14.3463 12.5964 14.1767 12.6667 13.9999 12.6667H4.30325ZM5.33325 6.66667V8H10.6666V6.66667H5.33325Z" fill="#4338CA" />
                        </svg>
                    </div>
                    <div className="pl-3">
                        <p className="text-sm leading-none">
                            <span className="text-indigo-700">Sarah</span> posted in the thread: <span className="text-indigo-700">Update gone wrong</span>
                        </p>
                        <p className="text-xs leading-3 pt-1 text-gray-500">2 hours ago</p>
                    </div>
                </div>
                <div className="w-full p-3 mt-4 bg-red-100 rounded flex items-center">
                    <div className="w-8 h-8 border rounded-full border-red-200 flex items-center flex-shrink-0 justify-center">
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2V14C14 14.1768 13.9298 14.3464 13.8047 14.4714C13.6797 14.5964 13.5101 14.6667 13.3333 14.6667H2.66667C2.48986 14.6667 2.32029 14.5964 2.19526 14.4714C2.07024 14.3464 2 14.1768 2 14V2C2 1.82319 2.07024 1.65362 2.19526 1.5286C2.32029 1.40357 2.48986 1.33334 2.66667 1.33334H13.3333C13.5101 1.33334 13.6797 1.40357 13.8047 1.5286C13.9298 1.65362 14 1.82319 14 2ZM3.33333 10.6667V13.3333H12.6667V10.6667H3.33333ZM10 11.3333H11.3333V12.6667H10V11.3333Z" fill="#B91C1C" />
                        </svg>
                    </div>
                    <div className="pl-3 w-full flex items-center justify-between">
                        <p className="text-sm leading-none text-red-700">Low on storage: 2.5/32gb remaining</p>
                        <p className="text-xs leading-3 cursor-pointer underline text-right text-red-700">Manage</p>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}