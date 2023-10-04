import React from "react";

function UserProfileTable() {
  return (
    <div className="flex items-center justify-cente dark:bg-slate-700">
      <div className="flex justify-center">
        <div className="overflow-auto lg:overflow-visible">
          <table className="table bg-slate-100 border-separate text-sm w-full">
            <tbody>
              <tr className="dark:bg-gray-800">
                <td className="pr-10">
                  <div className="flex align-items-center">
                    <div className="pr-5">
                      <img
                        className="rounded-full h-12 w-12 object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFMpqq_OM11NtcunpZrwWflGLvuS8D7mwmA&usqp=CAU"
                        alt="unsplash image"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="">Type</div>
                      <div className="text-gray-500">(SDE, ML...)</div>
                    </div>
                  </div>
                </td>
                <td className="pl-10">
                  <span className="bg-blue-200 text-stone-800 rounded-md p-2">
                    SDE
                  </span>
                </td>
              </tr>
              <tr className="dark:bg-gray-800">
                <td className="pr-10 pt-3">
                  <div className="flex align-items-center">
                    <div className="pr-5">
                      <img
                        className="rounded-full h-12 w-12 object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRg4QWhScG1fl5m7d0zJXQMyDq_c69-kNSiUGyziwJsCBcIzrEC5nbG-DCMUU8DhG2J70&usqp=CAU"
                        alt="unsplash image"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="">CPI</div>
                      <div className="text-gray-500">Cutoff</div>
                    </div>
                  </div>
                </td>
                <td className="pl-10 pt-3">
                  <span className="bg-red-300 text-stone-800 rounded-md p-2">
                    6.0
                  </span>
                </td>
              </tr>
              <tr className="dark:bg-gray-800">
                <td className="pr-10 pt-3">
                  <div className="flex align-items-center">
                    <div className="pr-5">
                      <img
                        className="rounded-full h-12 w-12 object-cover"
                        src="https://miro.medium.com/v2/resize:fit:1400/1*HUn4H_ieQDtWPV6V5kxrrg.jpeg"
                        alt="unsplash image"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="">Branch</div>
                      <div className="text-gray-500">opens for</div>
                    </div>
                  </div>
                </td>
                <td className="pl-10 pt-3">
                  <span className="bg-red-100 text-stone-800 rounded-md p-2">
                    Only Cs
                  </span>
                </td>
              </tr>
              <tr className="dark:bg-gray-800">
                <td className="pr-10 pt-3">
                  <div className="flex align-items-center">
                    <div className="pr-5">
                      <img
                        className="rounded-full h-12 w-12 object-cover"
                        src="https://www.mbaknol.com/wp-content/uploads/2013/07/Compensation-Meaning-Mbaknol.jpg.webp"
                        alt="unsplash image"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="">Compensation</div>
                      <div className="text-gray-500">lakhs</div>
                    </div>
                  </div>
                </td>
                <td className="pl-10 pt-3 sm:p-0">
                  <span className="bg-green-300 text-stone-800 rounded-md p-2 mb-2 sm:mb-0">
                    CTC: 16.0
                  </span>
                  <br className="block sm:hidden" />{" "}
                  {/* Line break on small screens */}
                  <span className="bg-green-200 text-stone-800 rounded-md p-2 ml-0 mt-2 sm:ml-5 sm:mt-0">
                    Gross: 14.0
                  </span>
                </td>
              </tr>
              <tr className="dark:bg-gray-800">
                <td className="pr-10 pt-3">
                  <div className="flex align-items-center">
                    <div className="pr-5">
                      <img
                        className="rounded-full h-12 w-12 object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-GZaQMrJNqV-2uuXWoltDpr5tlFJsagIVQ&usqp=CAU"
                        alt="unsplash image"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="">Interviews</div>
                      <div className="text-gray-500">Numbers</div>
                    </div>
                  </div>
                </td>
                <td className="pl-10 pt-3">
                  <span className="bg-orange-200 text-stone-800 rounded-md p-2">
                    6+
                  </span>
                </td>
              </tr>
              <tr className="dark:bg-gray-800">
                <td className="pr-10 pt-3">
                  <div className="flex align-items-center">
                    <div className="pr-5">
                      <img
                        className="rounded-full h-12 w-12 object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiBBYWvsdwacsZPX43FM7Eh5kIjQ-Y_hGXhg&usqp=CAU"
                        alt="unsplash image"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="">Test</div>
                      <div className="text-gray-500">types</div>
                    </div>
                  </div>
                </td>
                <td className="pl-10 pt-3">
                  <span className="bg-yellow-100 text-stone-800 rounded-md p-2">
                    Hello
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserProfileTable;
{
  /* <tr className="dark:bg-gray-800">
                <td className="p-3">
                  <div className="flex align-items-center">
                    <img
                      className="rounded-full h-12 w-12 object-cover"
                      src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                      alt="unsplash image"
                    />
                    <div className="ml-3">
                      <div className="">Type</div>
                      <div className="text-gray-500">(SDE, ML...)</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <span className="bg-blue-200 text-stone-800 rounded-md p-2">
                    SDE
                  </span>
                </td>
              </tr>

        
              <tr className="dark:bg-gray-800">
                <td className="p-3">
                  <div className="flex align-items-center">
                    <img
                      className="rounded-full h-12 w-12 object-cover"
                      src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                      alt="unsplash image"
                    />
                    <div className="ml-3">
                      <div className="">CPI</div>
                      <div className="text-gray-500">Cutoff</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <span className="bg-red-300 text-stone-800 rounded-md p-2">
                    6.0
                  </span>
                </td>
              </tr>
              <tr className="dark:bg-gray-800">
                <td className="p-3">
                  <div className="flex align-items-center">
                    <img
                      className="rounded-full h-12 w-12 object-cover"
                      src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                      alt="unsplash image"
                    />
                    <div className="ml-3">
                      <div className="">Branch</div>
                      <div className="text-gray-500">opens for</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <span className="bg-red-100 text-stone-800 rounded-md p-2">
                    Only Cs
                  </span>
                </td>
              </tr>
              <tr className="dark:bg-gray-800">
                <td className="p-3">
                  <div className="flex align-items-center">
                    <img
                      className="rounded-full h-12 w-12 object-cover"
                      src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                      alt="unsplash image"
                    />
                    <div className="ml-3">
                      <div className="">Compensation</div>
                      <div className="text-gray-500">lakhs</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <span className="bg-green-300 text-stone-800 rounded-md p-2">
                    CTC: 16.0
                  </span>
                  <span className="bg-green-200 text-stone-800 rounded-md p-2 ml-5">
                    Gross: 14.0
                  </span>
                </td>
              </tr>
              <tr className="dark:bg-gray-800">
                <td className="p-3">
                  <div className="flex align-items-center">
                    <img
                      className="rounded-full h-12 w-12 object-cover"
                      src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                      alt="unsplash image"
                    />
                    <div className="ml-3">
                      <div className="">Interviews</div>
                      <div className="text-gray-500">Numbers</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <span className="bg-orange-200 text-stone-800 rounded-md p-2">
                    6+
                  </span>
                </td>
              </tr>
              <tr className="dark:bg-gray-800">
                <td className="p-3">
                  <div className="flex align-items-center">
                    <img
                      className="rounded-full h-12 w-12 object-cover"
                      src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                      alt="unsplash image"
                    />
                    <div className="ml-3">
                      <div className="">Test</div>
                      <div className="text-gray-500">types</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <span className="bg-yellow-100 text-stone-800 rounded-md p-2">
                    Hello
                  </span>
                </td>
              </tr> */
}
