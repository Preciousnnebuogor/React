import Props from "./propsvite";

export default function HomeProps() {
    const fruits = ["apple", "orange", "pawpaw", "mango"]
  const person = {
    name: "peter",
    message: "i am collect",
    title: "Mr",
  };
  return (
    <div>
      <Props person={person} fruits={fruits} />
    </div>
  );
}
