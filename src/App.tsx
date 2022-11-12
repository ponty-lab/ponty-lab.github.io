import { ThemeProvider } from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lightTheme } from "./styles/theme";
import Home from "./pages";
import Docs from "./pages/docs";
import GlobalStyle from "./styles/global.style";
//import SignUp from './pages/signup';
//import Contact from './pages/contact';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route exact path='/index' element={<Home />} /> */}
          <Route path="/docs" element={<Docs />} />
          {/*<Route path='/sign-up' element={<SignUp />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
