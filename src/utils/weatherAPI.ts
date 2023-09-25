export const fetchWeather = async (url: string) => {
    const diffKelvin = 273.15;
    try {
        const response = await fetch(url);
        
        
        if (!response.ok) {
            const responseError = await response.json(); // Extraer el cuerpo JSON de la respuesta
            const errorMessage = responseError.message;
            throw new Error(`${errorMessage}`);
        }
        const data = await response.json();
        const data_format = {
            name: data.name,
            temp: parseFloat((data.main.temp - diffKelvin).toFixed(1)),
            humidity: data.main.humidity,
            description: data.weather[0].description,
            linkIcon: data.weather[0].icon,
        };

        return{
            dataWeather: data_format,
            isLoading: false,
            error: null,
        };
    } catch (err: any) {
        return{
            dataWeather: null,
            isLoading: false,
            error: `There's been a problem ${err.message}`,
        };
    }
};