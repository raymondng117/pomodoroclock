import AssembledTimer from "./AssembledTimer";

function App() {
  return (
    <div className="container" id="App" >

      {/* Main title */}
      <div className="row text-center">
        <div className="col-8 mx-auto mt-3">
          <div className="main-title display-1 ">25+5 clock</div>
        </div>
      </div>
      <AssembledTimer/>      
    </div>
  );
}

export default App;
