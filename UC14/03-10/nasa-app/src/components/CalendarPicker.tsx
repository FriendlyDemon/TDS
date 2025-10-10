interface CalendarPickerProps {
  date: string;
  onDateChange: (newDate: string) => void;
}
export default function CalendarPicker({
  date,
  onDateChange,
}: CalendarPickerProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <input
        type="date"
        value={date}
        name="date"
        min="1995-06-16"
        max={new Date().toISOString().split("T")[0]}
        onChange={(e) => onDateChange(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
    </div>
  );
}
