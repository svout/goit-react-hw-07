import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux /contactsOps";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);



  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Phonebook</h1>
      <div className="mb-6 space-y-4">
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
}

export default App;
