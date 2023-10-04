import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    
    function update() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('resize', update);
    };
  }, []); 

  return (
    <>
      <h1 style={{textAlign: 'center'}}>{width} x {height} px</h1>
    </>
  );
}

export default App;
