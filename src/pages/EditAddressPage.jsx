import React from "react";
import EditAddress from "../components/EditAddress";

export default function EditAddressPage({handleClick, type}) {
  return (
  <EditAddress handleClick={handleClick} type={type} />
  );
}