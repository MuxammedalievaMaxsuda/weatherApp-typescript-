import { useEffect,useState } from 'react'
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";
import Content from "./components/Content";
import axios from 'axios'
import { WeatherTypes } from './interfaces/WeatherTypes';

function App() {
  const [data,setData]=useState<WeatherTypes | null>(null)
  const [isLoading, setIsLoading]=useState(false)
  const [country, setCountry]=useState<string | null>("Nukus")

  async function getDataWeather(country: string | null) {
    setIsLoading(true)
    await axios(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&APPID=a045a1a5356155dc5712ab1318762afa`)
      .then(res =>{
        setData(res.data)
        setIsLoading(false)
      })
      .catch(err =>{
        console.log(err)
        setData(null)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getDataWeather(country)
  }, [])

  return (
    <div className="min-h-[100vh] bg-blue-300 font-mont">
      <Container>
        <h1 className="text-[25px] text-white font-semibold">ReactWeather</h1>
        <SearchInput value={country} setCountry={setCountry} getDataWeather={getDataWeather}/>
        <Content data={data} isLoading={isLoading}/>
      </Container>
    </div>
  )
}

export default App
