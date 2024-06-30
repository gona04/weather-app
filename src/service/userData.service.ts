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
