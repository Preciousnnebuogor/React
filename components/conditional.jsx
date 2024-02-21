export default function Conditional() {
  const display = false;

if (display) {
  return(
    <div>
      <p>this is the future</p>
    </div>
  );
} else {
  return (
    <div>
      <p>the future belongs to us</p>
    </div>
  );
  //  this is conditional rendering jsx
}

}
