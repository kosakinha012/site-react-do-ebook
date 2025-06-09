import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/home/Home.jsx';
import Produtos from './pages/produtos/Produtos.jsx';
import Info from './pages/info/Info.jsx';
import NotePage from "./pages/notes/notesPage.jsx"
import EditProfile from './components/perfil/perfil.jsx/EditProfile.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        // O elemento que vai ser renderizado da forma como esta no layout
        element: <Layout />,
        children: [
            {
                // Quando eu colocar so uma barra quero ir para a pagina principal
                path: '/',
                element: <Home />
            },
            {
                // Quando eu colocar /info quero ir para a pagina de informacoes
                path: '/info',
                element: <Info />
            },
            {
                path: '/produtos',
                element:<Produtos></Produtos>
            },
            {
                path:"/notes",
                element:<NotePage/>
            },
            {
                path:"/profile",
                element: <EditProfile/>
            }
            
        ]
    }
]);