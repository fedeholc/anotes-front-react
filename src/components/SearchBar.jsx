import { SetNotesFilterContext } from "../NotesContext";
import { useContext } from "react";
import "./SearchBar.css";
import { Input } from "antd";

export default function SearchBar() {
  const { Search } = Input;

  const setNotesFilter = useContext(SetNotesFilterContext);

  function handleChange(e) {
    setNotesFilter((prev) => {
      return { ...prev, text: e.target.value };
    });
  }

  return (
    <div>
      <Search
        placeholder="Buscar..."
        allowClear
        onChange={handleChange}
        style={{
          width: "200px",
        }}
      />
    </div>
  );
}
