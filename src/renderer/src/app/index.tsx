import LibraryPage from "@renderer/pages/Library/ui/LibraryPage"
import UploadPage from "@renderer/pages/Upload/ui/UploadPage"
import WelcomePage from "@renderer/pages/Welcome/ui/WelcomePage"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router"

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to='/bienvenida'/>
        },
        {
            path: '/bienvenida',
            element: <WelcomePage/>
        },
        {
            path: '/perfil',
            element: <div>Tu Información</div>
        },
        {
            path: '/biblioteca',
            element: <LibraryPage/>
        },
        {
            path: '/cargar',
            element: <UploadPage/>
        },
        {
            path: '/play/:id',
            element: <div>Música actual</div>
        }
    ])

    return <RouterProvider router={router}/>
    
}

export default App
