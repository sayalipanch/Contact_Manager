import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Header } from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import Search from "./components/Search";
import "@ui5/webcomponents-icons/dist/customer.js";

const UserContext = createContext();

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const [temp, setTemp] = useState("");

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
    const p = contact.name;
    setTemp(p);
    console.log(p);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      // const p = contact.name;
      // let input = { name: p };
      // const conID = await fetch("http://localhost:4004/contacts/getID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(input),
      // });
      // conID.json().then((data) => {
      //   let di = data.value;
      //   console.log(di);
      // });

      return contact.id !== id;
    });
    const deleteHandler = contacts.filter(async (contact) => {
      const p = contact.name;
      let input = { name: p };
      const conID = await fetch("http://localhost:4004/contacts/getID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      conID.json().then((data) => {
        let di = data.value;
        console.log(di);
        fetch("http://localhost:4004/contacts/Contact/" + di, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }).then((res) => res);
      });
    });

    console.log(temp);
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // async function getContact (){
  //   const response = await fetch("http://localhost:4004/contact/Contact",{
  //       method:"GET",
  //       headers: {'Content-Type': 'application/json'},
  //     });
  //     const data = await response.json();
  //     console.log(data);

  //     // for (let i = 0; i < data.value.length; i++) {
  //     //   data.value[i].index = i;
  //     // }

  //     console.log(data.value[0].ID);
  //     return data;
  // }

  // getContact();

  return (
    <>
      <UserContext.Provider value={contacts}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <ContactList
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              }
            />
            <Route
              path="/add"
              element={<AddContact addContactHandler={addContactHandler} />}
            />

            <Route path="/search" element={<Search contacts={contacts} />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
