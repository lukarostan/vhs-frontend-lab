import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from './components/List'
import './reset.css';
import {TapeDetailsItem} from "./components/TapeDetailsItem";
import {PageWrapper} from "./components/PageWrapper";
import {Header} from "./components/Header";
import {CreateTape} from "./components/CreateTape";
import {PrimeReactProvider} from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
import {EditTapeWrapper} from "./components/EditTapeWrapper";
import {QueryClient, QueryClientProvider} from "react-query";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Index/>
    },
    {
        path: '/details/:tapeId',
        element: <TapeDetailsItem/>
    },
    {
        path: '/edit/:tapeId',
        element: <EditTapeWrapper/>
    },
    {
        path: '/create',
        element: <CreateTape isEdit={false}/>
    },
])

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <PrimeReactProvider>
                <PageWrapper>
                    <Header onAddEntry={() => router.navigate('/create')}/>
                    <RouterProvider router={router}/>
                </PageWrapper>
            </PrimeReactProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
