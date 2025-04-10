import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import Login from "pages/Login";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/home" element={<Inicio/>}/>
                        <Route path="/home/:id" element={<Player/>}/>
                        <Route path="/favoritos" element={<Favoritos/>}/>
                        <Route path="/favoritos/:id" element={<Player/>}/>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;