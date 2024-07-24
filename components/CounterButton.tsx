export default function CounterButton({ ...props }) {
  return (
    <button className="btn" type="button" onClick={props.onClick}>
      {props.logo}
    </button>
  );
}
