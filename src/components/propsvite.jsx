export default function Props({ person, fruits }) {
  return (
    <div>
      <h1>
      {person.title} {person.name} {person.message}
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
          ))}
          {fruits.map((fruit) =>(<li>{fruit}</li>))}
        
      </ul>
      </h1> 
    </div>
  );
}
