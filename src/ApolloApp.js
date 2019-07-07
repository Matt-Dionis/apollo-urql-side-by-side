import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from '@apollo/react-hooks'

const apolloColor = {
  color: '#f25cc1',
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

function ApolloApp() {
  const { loading, data } = useQuery(WEATHER_QUERY)

  if (loading) return <h2 style={apolloColor}>Fetching through Apollo...</h2>
  const { location } = data
  const { weather } = location
  return (
    <div style={apolloColor}>
      <h1>Fetched through Apollo:</h1>
      <h2>
        {location.city} - {location.country}
      </h2>
      <h3>
        {weather.summary} - {weather.temperature}
      </h3>
    </div>
  )
}

export default ApolloApp
