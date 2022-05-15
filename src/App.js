import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login";
import DropFileInput from './component/dropFileInput';


function App() {
  // const onFileChange = (image) => {
  //   console.log(image);
  // }


  return (
    <div className="box">
      <h2 className="header">
        React drop files input
      </h2>
      <DropFileInput
        //onFileChange={(image) => onFileChange(image)}
      />
    </div>
  );
}

export default App;
