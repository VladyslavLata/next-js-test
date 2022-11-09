import { FC } from "react";
import { IUser } from "../../types/types";
import { Title } from "../Title/Title";

interface IProps {
  contact: IUser,
}

export const ContactInfo: FC<IProps> = ({ contact }) => {
  const { name, email, address } = contact || {}
  const { street, city, zipcode, } = address || {}
  
  return (
    <>
      <Title tag="h2" text={name} />
      <p>Email: {email}</p>
      <p>Address: {street}, {city}, {zipcode }</p>
    </>
)
}