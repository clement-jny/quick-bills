import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Toaster position='top-right' />
		<RouterProvider router={router} />
	</React.StrictMode>
);
{/* <QueryClientProvider client={queryClient}>
	
	<RouterProvider router={router} />
</QueryClientProvider> */}