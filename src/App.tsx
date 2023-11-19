import Footer from "./Components/Footer/Footer"
import NavBar from "./Components/NavBar/NavBar"
import AppRoutes from "./routes/AppRoutes"
import {BrowserRouter as Router} from "react-router-dom"

//Notificaciones al usuario
import {ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <ToastContainer/>
    <Router>
      <NavBar/>
      <AppRoutes/>
      <Footer/>
    </Router>
    </>
  )
}

export default App