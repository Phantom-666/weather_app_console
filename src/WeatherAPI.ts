import axios from "axios"

class WeatherAPI {
  private apiKey: string

  private cities = ["Moscow", "Paris", "Rome", "Tokyo", "Istanbul"]

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  public getAvalCities = () => {
    return this.cities
  }

  private getApi = () =>
    `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}`

  public getByCityName = async (name: string) => {
    const fullRequest = this.getApi() + `&q=${name}`

    const response = await axios.get(fullRequest)

    const current = response.data.current

    console.log(
      `On the date ${current.last_updated} in ${name} temperature is ${current.temp_c}°C`
    )
  }
}

export { WeatherAPI }
