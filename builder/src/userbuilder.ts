import User from "./user";

export default class UserBuilder {
  firstName = "";
  lastName = "";
  gender = "";
  age = 0;
  address = "";
  country = "";
  isAdmin = false;

  constructor() {}

  withFirstName(firstName: string): UserBuilder {
    this.firstName = firstName;
    return this;
  }

  withLastName(lastName: string): UserBuilder {
    this.lastName = lastName;
    return this;
  }

  withGender(gender: string): UserBuilder {
    this.gender = gender;
    return this;
  }

  withAge(age: number): UserBuilder {
    this.age = age;
    return this;
  }

  withAddress(address: string): UserBuilder {
    this.address = address;
    return this;
  }

  withCounrty(country: string): UserBuilder {
    this.country = country;
    return this;
  }

  withAdmin(admin: boolean): UserBuilder {
    this.isAdmin = admin;
    return this;
  }

  build(): User {
    return new User(this);
  }

  getAllValues() {
    return this;
  }
}
