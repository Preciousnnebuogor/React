import Props from "./propsvite";

export default function HomeProps() {
  const person = {
    name: "peter",
    message: "i am collect",
    title: "Mr",
  };
  return (
    <div>
      <Props person={person} />
    </div>
  );
}
