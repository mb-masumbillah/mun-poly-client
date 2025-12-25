import { useState } from "react";
import * as XLSX from "xlsx";

const App = () => {
   const [students, setStudents] = useState([]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setStudents(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <>
      <input type="file" accept=".xlsx,.xls" onChange={handleFile} />

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Board</th>
          </tr>
        </thead>
        <tbody>
          {students.map((st, index) => (
            <tr key={index}>
              <td>{st.name}</td>
              <td>{st.roll}</td>
              <td>{st.board}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;