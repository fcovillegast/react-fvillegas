import './App.css'
import Top from "./components/top/Top.jsx";
import LeftBar from "./components/left_bar/LeftBar.jsx";
import Main from "./components/main/Main.jsx";

function App() {
  return (
      <>
          <Top/>

          <div className="container-fluid">
              <div className="row">

                  <LeftBar/>

                  <Main/>

              </div>
          </div>

      </>
  )
}

export default App
