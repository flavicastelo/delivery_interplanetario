import React from "react";
import { ContainerTypeAddress } from "./styles";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function IconComponent({ type, size, decoration, align }) {
  return (
    <ContainerTypeAddress size={size}>
      <FaMapMarkerAlt />
    </ContainerTypeAddress>
  );

}
