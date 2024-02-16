import Props from "./propsvite";

export default function HomeProps() {
  const fruits = ["apple", "orange", "pawpaw", "mango"];
  const person = {
    name: "peter",
    message: "i am collect",
    title: "Mr",
  };

  const collections = [
    { name: "angela", age: "22", state: "delta" },
    { name: "amaka", age: "23", state: "imo" },
    { name: "amadi", age: "24", state: "aba" },
    { name: "sophia", age: "25", state: "edo" },
  ];
  return (
    <div>
      <Props person={person} fruits={fruits} collections={collections} />
    </div>
  );
}
