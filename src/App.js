import logo from './logo.svg';
import './App.css';
import Child1 from "./components/child1.jsx"
import Child2 from "./components/Child2.jsx"
function App() {
  return (
    <div style={{display:"flex"}} className="App">
      <div style={{width:"50%",padding:"20px"}}>
        <Child1 image="https://www.filmibeat.com/img/popcorn/profile_photos/prabhas-20190905143045-4221.jpg" name="prabhas" age="32" location="bangaluru" organisation="masai school" />
      </div>
      <div >
        <Child2  />
      </div>
    </div>
  );
}

export default App;

