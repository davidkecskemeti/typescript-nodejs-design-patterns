import UserBuilder from "./userbuilder";

const builder = new UserBuilder()
  .withFirstName("david")
  .withLastName("k")
  .build();

console.log(builder);
