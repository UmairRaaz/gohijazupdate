
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PackageProvider } from './context/index.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <PackageProvider>
    <div><Toaster/></div>
    <App />
  </PackageProvider>,
)
