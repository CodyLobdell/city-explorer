import React from 'react';
import Card from 'react-bootstrap/Card';
import './Weather.css';

class Weather extends React.Component {

  render () {
    let daysForecast = this.props.forecasts.map((day, idx) => {
      return (
        <Card.Text key={day.date}>{day.date}: Low of {day.low} C°, high of {day.high} C° with {day.description.toLowerCase()}</Card.Text>
      )
    })

    return (
      <Card className="weatherCard">
        <Card.Body>
          <Card.Title>Weather Forecast</Card.Title>
            {daysForecast}
        </Card.Body>
      </Card>
    )
  }
}

export default Weather;