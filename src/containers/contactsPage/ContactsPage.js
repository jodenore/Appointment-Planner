import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    const info = {
      name: name,
      phone: phone,
      email: email,
    };
    if (!duplicate) {
      props.addContact(info);
      setName("");
      setPhone("");
      setEmail("");
    } else {
      e.preventDefault();
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  const contacts = props.contacts;
  useEffect(() => {
    const found = contacts.some((el) => el.name === name);
    if (found) {
      alert("This name is taken");
      setDuplicate((prev) => (prev = true));
    }
  }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>

      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={props.contacts} />
      </section>
    </div>
  );
};
