import { IUserDetails } from "../model/userDetails";
//const user_details_localhost = "http://localhost:5002/api/user-details";
// const userDetails_server = "http://localhost:5001/weather-app-44bc2/us-central1/weather_api/api/user-details";

const userDetailsAPI = "https://us-central1-weather-app-44bc2.cloudfunctions.net/weather_api/api/user-details";

export const getUserIPAddress = (): Promise<{ ip: string }> => {
    console.log('Method called');
    return fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            console.log('IP Address:', data.ip);
            return data;
        })
        .catch(error => {
            console.error('Error fetching IP location:', error);
            throw error;
        });
};

// Function to get current location
export const getCurrentLocation = (): Promise<GeolocationPosition> =>
    new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

export const saveUserDetails = async (userDetails: IUserDetails): Promise<void> => {
    try {
        const response = await fetch(userDetailsAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails),
        });

        if (!response.ok) {
            throw new Error('Failed to save user details');
        }
    } catch (error) {
        console.error('Error saving user details:', error);
        throw error;
    }
};