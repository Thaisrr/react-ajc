import Presentation from "./pages/Presentation.tsx";
import "./styles/App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReactRouter from "./pages/ReactRouter.tsx";
import Navigation from "./components/Navigation.tsx";
import Reactivite from "./pages/Reactivite.tsx";
import Parent from "./pages/Parent.tsx";
import HooksIndex from "./pages/Hooks/HooksIndex.tsx";
import ClasseComponent from "./pages/Hooks/ClasseComponent.tsx";
import UseEffect from "./pages/Hooks/UseEffect.tsx";
import Memoisation from "./pages/Hooks/Memoisation.tsx";
const App = () => {

    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Presentation />} />
                    <Route path='/router/:id' element={<ReactRouter title="React Router" />} />
                    <Route path='/reactivite' element={<Reactivite />} />
                    <Route path='/parent' element={<Parent/>} />
                    <Route path='/hooks' element={<HooksIndex />} >
                        <Route path='' element={<ClasseComponent /> } />
                        <Route path='use-effect' element={<UseEffect />} />
                        <Route path='memo' element={<Memoisation />} />
                    </Route>
              </Routes>
          </BrowserRouter>
        </>
    )
}

export default App;
