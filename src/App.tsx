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
import HooksCustom from "./pages/Hooks/HooksCustom.tsx";
import HookReducer from "./pages/Hooks/HookReducer.tsx";
import Contexte from "./pages/Hooks/Contexte.tsx";
import Formulaire from "./pages/Formulaire.tsx";
import Store from "./pages/Store.tsx";
import AlertContainer from "./components/AlertContainer.tsx";
import Login from "./pages/Login.tsx";
import AuthGuard from "./utils/guards/AuthGuard.tsx";
import {lazy} from "react";
import Tanstack from "./pages/Tanstack.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const Profile = lazy(() => import('./pages/Profile.tsx')); // Lazy loading


const App = () => {

    const queryClient = new QueryClient({
       defaultOptions: {
           queries: {
               refetchOnWindowFocus: true,
               staleTime: 1000 * 60 * 5,
           }
       }
    });

    return (
        <>
            <QueryClientProvider client={queryClient}>
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
                            <Route path='custom' element={<HooksCustom />} />
                            <Route path='reducer' element={<HookReducer />} />
                            <Route path='context' element={<Contexte />} />
                        </Route>
                        <Route path='/form' element={<Formulaire />} />
                        <Route path='/store' element={<Store />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/profil' element={<AuthGuard><Profile /></AuthGuard>} />
                        <Route path='/query' element={<Tanstack />} />
                        <Route path='*' element={<h1>😭 404 - êtes vous perdu•e ?</h1>} />
                  </Routes>

                    <AlertContainer />
              </BrowserRouter>
          </QueryClientProvider>
        </>
    )
}

export default App;
