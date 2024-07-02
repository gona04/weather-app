# Weather App

This project is a weather application built with React that consumes the Open Weather API to provide current weather reports in Celsius for any selected city. It includes a backend component for storing user data, which is implemented with Express and deployed using Firebase Cloud Functions.

## Features

- **Responsive Design**: The front-end design is fully responsive, ensuring a seamless experience across various devices.
- **Accessibility**: Accessibility best practices are implemented to provide an inclusive user experience.
- **User Location Tracking**: The application tracks the user's location using geolocation to automatically display the weather details for their current location.
- **Data Storage**: Upon loading, the app saves the user's IP address, country, and city to a database.
- **City Weather Search**: Users can search for and view weather information for any city.

## Deployment

- **Front-end**: Deployed on Firebase and uses GitHub Actions for continuous integration and deployment (CI/CD).
  - [Deployed Front-end](https://weather-app-44bc2.web.app/)
- **Backend**: Deployed on Firebase Cloud Functions, with the database hosted on Azure MySQL.
  - [Deployed Backend](https://us-central1-weather-app-44bc2.cloudfunctions.net/weather_api/api/user-details)

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/gona04/weather-app.git
