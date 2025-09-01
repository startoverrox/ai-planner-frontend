import { createBrowserRouter, RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import GlobalToastHandler from '@/components/GlobalToastHandler'

import ProtectedRoute from './routes/layouts/ProtectedRoute'
import DefaultLayout from './routes/layouts/DefaultLayout'
import AuthLayout from './routes/layouts/AuthLayout'

import HomePage from './routes/pages/HomePage'
import LoginPage from './routes/pages/LoginPage'
import RegisterPage from './routes/pages/RegisterPage'
import ErrorPage from './routes/pages/ErrorPage'

const router = createBrowserRouter([
	{
		element: <ProtectedRoute />,
		errorElement: <ErrorPage />,
		children: [
			{
				element: <DefaultLayout />,
				children: [
					{
						path: '/',
						element: <HomePage />,
					},
				],
			},
		],
	},
	{
		element: <AuthLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/register',
				element: <RegisterPage />,
			},
		],
	},
])

function App() {
	return (
		<>
			<RouterProvider router={router} />
			<GlobalToastHandler />
			<ToastContainer />
		</>
	)
}

export default App
