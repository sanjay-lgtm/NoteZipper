import "./App.css";
import Footer from "./Component/Footer.jsx/Footer";
import Header from "./Component/Header.jsx/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./Screens/MyNotes/MyNotes";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" Component={LandingPage} exact/>
          <Route path="/mynotes" Component={MyNotes} />
          <Route path="/login" Component={LoginScreen} />
          <Route path="/register" Component={RegisterScreen} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
