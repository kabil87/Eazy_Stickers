
const SearchBox = ({label, placeHolder, value, handleSearch}) => {

    return (

        <div>

            <label className="text-sm dark:text-light">{label}</label>

            <input onChange={(event) => handleSearch(event.target.value)} className=" w-36 ml-2 pl-1.5  dark:text-light focus:outline-none border border-gray-500    rounded-sm"  type="text" 
            placeholder={placeHolder} value={value} />

        </div>
    );
}

export default SearchBox;