import './assets/css/App.css'
import { AuthProvider } from './contexts'
import { AppRoutes } from './routes'

export const App = () => {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  )
}

