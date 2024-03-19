type IconDataType={
    iconData: string | undefined
}
const IconImage = (props:IconDataType) => {

  return (
    <img src={`https://openweathermap.org/img/wn/${props.iconData}@2x.png`} className="max-w-[150px] max-h-[150px] min-w-[100px] min-h-[100px] object-cover" alt="" />
  )
}

export default IconImage