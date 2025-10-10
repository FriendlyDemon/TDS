const API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "eA2jijSwnPHWaEpyXX7PyWvripVKC29s0rqsimln";

export async function getApodByDate(date: string) {
  const response = await fetch(`${API_URL}?api_key=${API_KEY}&date=${date}`);
  const data = await response.json();
  if (data.code) {
    throw new Error("Essa data não possui foto disponível");
  }
  return data;
}
