import { useState, useEffect } from "react";
import Header from "./components/Header";
import CalendarPicker from "./components/CalendarPicker";
import ApodCard from "./components/ApodCard";
import { getApodByDate } from "./api/nadaApi";

export default function App() {
  const [date, setDate] = useState("2024-10-01");
  const [apodDate, setApodData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getApodByDate(date);
        setApodData(data);
      } catch (e) {
        console.error(e);
        setApodData(null);
      }
    };
    fetchData();
  }, [date]);
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <Header />
      <CalendarPicker date={date} onDateChange={setDate} />
      <ApodCard data={apodDate} />
    </div>
  );
}
