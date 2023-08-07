

function App() {
  let y =0
  const x = ()=> {console.log(++y);
  }
  return (
    <div className="App">
     <button onClick={x}></button>
    </div>
  );
}

export default App;
