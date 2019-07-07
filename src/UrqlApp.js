import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'urql'

const urqlColor = {
  color: '#7c90f4',
}

const WEATHER_QUERY = gql`
  query getWeather {
    location(place: "Hollywood Sign") {
      city
      country
      weather {
        summary
        temperature
      }
    }
  }
`

function UrqlApp() {
  const [{ fetching, data }] = useQuery({
    query: WEATHER_QUERY,
  })

  if (fetching) return <h2 style={urqlColor}>Fetching through URQL...</h2>
  const { location } = data
  const { weather } = location
  return (
    <div style={urqlColor}>
      <h1>Fetched through URQL:</h1>
      <h2>
        {location.city} - {location.country}
      </h2>
      <h3>
        {weather.summary} - {weather.temperature}
      </h3>
    </div>
  )
}

export default UrqlApp
