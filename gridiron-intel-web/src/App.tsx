import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Analysis from './pages/Analysis'
import Games from './pages/Games'
import Live from './pages/Live'
import Playbook from './pages/Playbook'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="games" element={<Games />} />
          <Route path="games/:id" element={<Games />} />
          <Route path="live" element={<Live />} />
          <Route path="playbook" element={<Playbook />} />
        </Route>
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          style: {
            background: '#1e293b',
            color: '#fff',
            border: '1px solid #334155',
          },
        }}
      />
    </>
  )
}

export default App