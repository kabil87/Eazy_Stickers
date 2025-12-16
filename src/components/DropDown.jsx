const DropDown = ({ label, options, selectedValue, handleSort }) => {
  return (
    <div className="mr-40">

      <label className="text-sm mr-2 dark:text-light">{label}</label>

      <select
        value={selectedValue}
        onChange={(e) => handleSort(e.target.value)}
        className="border border-gray-300 dark:text-light rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
      > 
        {options.map((optionVal, index) => {
          return (
            <option key={index} value={optionVal} className="text-black dark:bg-darkbg dark:text-light">
              {optionVal}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
