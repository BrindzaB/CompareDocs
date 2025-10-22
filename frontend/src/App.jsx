import {Outlet} from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-darkgrey">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
