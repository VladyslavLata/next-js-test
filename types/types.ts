import React from "react";

export interface IChildren {
  children: React.ReactNode;
}

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