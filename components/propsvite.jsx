export default function Props({ person, fruits, collections }) {
  return (
    <div>
      <h1>
        {person.title} {person.name} {person.message}
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
          {fruits.map((fruit) => ( 
            <li>{fruit}</li>
          ))}
        </ul>
      </h1>
      <ul>
        {collections.map((collection) => (
          <li key={collection.name}>
            {collection.name} {collection.age} {collection.state}
          </li>
        ))}
      </ul>
    </div>
  );
}
