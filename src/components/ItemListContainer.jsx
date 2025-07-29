import "./components.css";

function WelcomeText(props) {
  return (
    <main className='div-main'>
      <div>
        <p>{props.texto}</p>
      </div>
    </main>
  );
}

export default WelcomeText;
