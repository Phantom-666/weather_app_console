import { WeatherAPI } from "./WeatherAPI"
import { apiKey } from "./config"
import readline from "readline/promises"

const run = async () => {
  const w = new WeatherAPI(apiKey)

  const cities = w.getAvalCities()

  console.log("Cities that available")

  cities.map((c, i) => {
    console.log(`${i + 1}. ${c}`)
  })

  console.log()

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const index = Number(await rl.question("Choose one : "))

  rl.close()

  await w.getByCityName(cities[index - 1])
}

run()
