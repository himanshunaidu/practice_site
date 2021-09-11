// import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact/Contact";

function App() {
  const contacts = [
    {
      id: "e1",
      field: "Name",
      value: "Himanshu Naidu",
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      field: "Mobile No.",
      value: 9999999999,
    },
    {
      id: "e3",
      field: "DOB",
      value: new Date(1997, 0, 1).toLocaleString(),
    },
  ];

  return (
    <div className="App">
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            field={contact.field}
            value={contact.value}
          ></Contact>
        );
      })}
    </div>
  );
}

export default App;
