import Presentation from "./pages/Presentation.tsx";
import "./styles/App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReactRouter from "./pages/ReactRouter.tsx";
import Navigation from "./components/Navigation.tsx";
import Reactivite from "./pages/Reactivite.tsx";
import Parent from "./pages/Parent.tsx";
const App = () => {

    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                  <Route path="/" element={<Presentation />} />
                  <Route path='/router' element={<ReactRouter />} />
                  <Route path='/reactivite' element={<Reactivite />} />
                    <Route path='/parent' element={<Parent/>} />
              </Routes>
          </BrowserRouter>
        </>
    )
}

export default App;
