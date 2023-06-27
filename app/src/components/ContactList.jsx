import React, { useContext, createContext } from "react";
import { Title} from "@ui5/webcomponents-react";
import { ContactCard } from "./ContactCard";

const ContactList = (props) => {
  console.log(props);


async function getContact (){
  const response = await fetch("http://localhost:4004/contacts/Contact",{
      method:"GET",
      headers: {'Content-Type': 'application/json'},
    });
    const data = await response.json();
    // console.log(data);
    // for (let i = 0; i < data.value.length; i++) {
    //   data.value[i].index = i;
    // }

    // console.log(data.value[0].ID);
    return data;
}   

// getContact();
 
  const deleteConactHandler = async (id) => {
    props.getContactId(id);
    const data = getContact();
    console.log(data)

    // let input = {name: data.name}

    // const conID = await fetch("http://localhost:4004/contacts/getID",{
    //   method:"POST",
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(input)
    // })
    // const dim = conID.json();
    // console.log(dim);   
    
    // fetch("http://localhost:4004/contacts/Contact/" + dim, {
    // method: "DELETE",
    // headers: {'Content-Type': 'application/json'},
    // }).then(res => res);
    alert("Contact is Deleted!")
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      
      />
    );
  });
  return (
    <><Title style={{fontSize:"20px", marginLeft:"30px"}}>Contact List</Title>
    <hr style={{marginLeft:"30px"}} />
    <br />{renderContactList}</>
  );
};

export default ContactList;
