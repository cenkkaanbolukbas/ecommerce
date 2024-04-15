import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-5 p-5 flex items-center justify-end">
      <select
        onClick={(e) => setSort(e.target.value)}
        className="py-3 px-5 bg-gray-200"
        name=""
        id=""
      >
        <option disabled value="">
          SEÇİNİZ
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
