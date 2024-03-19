type ContainerProps={
    children: React.ReactNode
}

const Container = (props:ContainerProps) => {
  return (
    <div className="mx-auto xs:w-[90%] sm:w-[80%] md:w-[70%] py-[20px] max-w-[1200px]">
        {props.children}
    </div>
  )
}

export default Container