export function FirstApp() {
  const newMessage = {
    message: "Hola",
    title: "Fernando",
  };
  const getGreeting = () => {
    return <p>Soy una función</p>;
  };
  return (
    <>
      <h1>{getGreeting()}</h1>
      <h1>{newMessage.title}</h1>
      <code>{JSON.stringify(newMessage)}</code>
      <p>Soy un subtítulo</p>
    </>
  );
}
