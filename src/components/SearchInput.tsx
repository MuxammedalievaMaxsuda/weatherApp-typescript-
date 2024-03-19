import { BiSearch } from "react-icons/bi"

type SearchInputType={
    value: string | null
    setCountry: any
    getDataWeather: any
}
const SearchInput = (props: SearchInputType) => {

    function handleInputChange(e:React.ChangeEvent<HTMLInputElement>):void{
        props.setCountry(e.target.value)
    }
    function handleButtonSubmit(){
        props.getDataWeather(props.value)
    }

    return (
        <div className="relative mt-[20px]">
            <input required onChange={handleInputChange} className=" w-full py-[7px] shadow-sm pl-[35px] pr-[10px] rounded-full border-[1px] border-gray-200 outline-none" type="search" placeholder="Search country" />
            <div className="absolute top-[10px] left-2 text-[20px] text-gray-600">
                <BiSearch />
            </div>
            <button onClick={handleButtonSubmit} className="text-[16px] absolute top-1 right-1 py-1 px-2 bg-blue-800 text-white rounded-full hover:bg-blue-600 active:scale-[0.97]">Search</button>
        </div>
    )
}

export default SearchInput