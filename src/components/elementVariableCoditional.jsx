export default function Message() {
  let message;
  const display = false;
  if (display) {
    message = <h1> this is using element variable</h1>;
  } else {
    message = <h1>this is using null</h1>;
  }
  return message
}
// this is using conditional rendering using element variable// 