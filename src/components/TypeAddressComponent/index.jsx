import React from "react";
import { ContainerTypeAddress, TypeAddressText } from "./styles";
import { IoEarthSharp } from "react-icons/io5";
import { TbBrandPlanetscale } from "react-icons/tb";

export default function TypeAddress({ type, size, decoration, align }) {
  return (
    <ContainerTypeAddress size={size}>
      {type ? < IoEarthSharp /> : <TbBrandPlanetscale />}
      <TypeAddressText  size={size} decoration={decoration} align={align}>
        {type ? 'Terra' : 'Marte'}
      </TypeAddressText>
    </ContainerTypeAddress>
  );

}
