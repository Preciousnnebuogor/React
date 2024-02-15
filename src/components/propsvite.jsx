export default function Props({ person }) {
  return (
    <div>
      <h1>{person.title} {person.name} {person.message}</h1>
    </div>
  );
}
