import "../App.css";

//passing by children
const Container = (props) => {
  return <div className="container">{props.children}</div>;
};
export default Container;
