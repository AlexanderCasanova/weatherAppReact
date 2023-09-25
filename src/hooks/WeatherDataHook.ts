import { useEffect, useState } from "react";
import IdataWeather from "./../interfaces/IdataWeather";
import { fetchWeather } from "../utils/weatherAPI";

export const dataHook = (url: string) => {
  const [state, setState] = useState<{
    dataWeather: IdataWeather | null;
    isLoading: boolean;
    error: string | null;
  }>({
    dataWeather: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeather(url);
        setState(data);
      } catch (error:any) {
        setState({
          dataWeather: null,
          isLoading: false,
          error: `Ocurrió un problema: ${error.message}`,
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
};
