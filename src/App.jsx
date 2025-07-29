import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import { MovieProvider } from "./contexts/MovieContext.jsx";
function App() {
  return (
   <MovieProvider>
     <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Favorites" element={<Favorites></Favorites>}>
        </Route>
      </Routes> 
    </main>
    </MovieProvider>
  );
}
export default App;
