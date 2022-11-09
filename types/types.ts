import React from "react";
import { Interface } from "readline";

export interface IChildren {
  children: React.ReactNode;
}

// export interface INav {
//   id: string;
//   title: string;
//   path: string;
// }

interface IUserAddress {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IUserAddress;
}

export interface IPost {
  id: number,
  title: string,
  body: string,
}