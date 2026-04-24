import { useState, useEffect } from "react";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home'
import Experience from "./views/Experience";
import ProfessionalDevelopment from "./views/Professional Development";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <ThemeProvider>
      <>

        {!loading ? (
          <div >
            <Navbar />
            <Home />
            <About />
            <Experience />
            <ProfessionalDevelopment />
            <Contact />
          </div>

        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>

  );
}

export default App;
