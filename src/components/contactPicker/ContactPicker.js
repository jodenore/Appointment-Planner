import React from "react";

export const ContactPicker = (props) => {
  return (
    <select name="contacts" onChange={(e) => props.setContact(e.target.value)}>
      <option value={"No Name"}>Pick Contact</option>
      {props.contacts.map((contact, index) => {
        return (
          <option value={contact.name} key={index}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
