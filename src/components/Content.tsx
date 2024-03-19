import { CgSpinner } from "react-icons/cg"; 
import { BsCompassFill, BsFillCloudFog2Fill } from "react-icons/bs"
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa"
import { GiDrop } from "react-icons/gi"
import { WeatherTypes } from "../interfaces/WeatherTypes"
import IconImage from "./iconImage"

type ContentTypes = {
    data: WeatherTypes | null
    isLoading: boolean
}
const Content = (props: ContentTypes) => {

    return (
        <>
            {
                props.isLoading ?
                    <div className="p-[15px]  h-[300px] justify-center items-center rounded-md bg-white mt-6 flex flex-col gap-6">
                        <div className="text-[40px] text-indigo-900 flex gap-2 items-center">
                            <CgSpinner className="animate-spin"/>
                           <span className="text-[20px]"> Loading...</span>
                        </div>
                    </div>
                    :
                    <>
                        {props.data ?
                            <div className="p-[15px] rounded-md bg-white mt-6 flex flex-col gap-6">
                                <h4 className="text-[20px] text-gray-500">Current weather</h4>
                                <hr />
                                <div className="flex justify-between xs:flex-col md:flex-row gap-2">
                                    <div className="flex-[1] flex flex-col gap-6 xs:justify-center xs:items-center md:justify-start md:items-start">
                                        <p className="text-blue-600 text-[18px] font-semibold">{props.data?.name}</p>
                                        <div className="flex  gap-4">
                                            <IconImage iconData={props.data?.weather[0].icon} />
                                            <p className="text-[70px] text-[#333] font-semibold">{props.data?.main.temp.toFixed()}°</p>
                                        </div>
                                        <p className="text-blue-500 font-[500] text-[20px]">{props.data?.weather[0].description}</p>
                                    </div>
                                    <div className="flex-[1] flex flex-col gap-6 font-semibold">
                                        <div>
                                            <p className="text-[20px] font-semibold mb-2 text-gray-600">Feels like:  <span className="text-blue-400">{props.data?.main.feels_like}°</span></p>
                                            <div className="flex items-center gap-6">
                                                <div className="flex justify-center items-center gap-2 text-gray-600">
                                                    <FaLongArrowAltUp />
                                                    <span className="text-blue-400">{props.data?.main.temp_max}°</span>
                                                </div>
                                                <div className="flex justify-center gap-2 items-center text-gray-600">
                                                    <FaLongArrowAltDown />
                                                    <span className="text-blue-400">{props.data?.main.temp_min}°</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 border-t-[1px] pt-2">
                                            <div className="flex items-center gap-2 text-gray-600 text-[15px]">
                                                <GiDrop />
                                                <p>Humidity <span className="text-blue-500">{props.data?.main.humidity}%</span></p>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 text-[15px]">
                                                <BsFillCloudFog2Fill />
                                                <p>Wind <span className="text-blue-500">{props.data?.wind.speed}</span></p>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 text-[15px]">
                                                <BsCompassFill />
                                                <p>Pressure <span className="text-blue-500">{props.data?.main.pressure} mPa</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="font-ssemibold text-[20px] p-[15px]  h-[300px] rounded-md bg-white mt-6 flex flex-col gap-6">Not found!</div>}
                    </>
            }
        </>
    )
}

export default Content