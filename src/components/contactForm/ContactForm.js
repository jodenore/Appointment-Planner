import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  let regex = "((+44(s(0)s|s0s|s)?)|0)7d{3}(s)?d{6}";
  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={"Name"}
        required
      ></input>

      <input
        type={"tel"}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder={"Phone Number"}
        pattern={regex}
        required
      ></input>

      <input
        type={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"Email"}
        required
      ></input>
      <input type="submit" value={"Submit Contact"} />
    </form>
  );
};
