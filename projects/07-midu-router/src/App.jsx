import { Suspense, lazy } from 'react'
import SearchPage from './pages/Search'
import Page404 from './pages/Page404'
import Route from './pages/Route'
import Router from './pages/Router'
import './App.css'

const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

const appRoutes = [

  { route: '/search/:query', component: SearchPage }
]

function App () {
  return (

    <main>
      <Suspense fallback={null} />
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route route='/' component={HomePage} />
        <Route route='/about' component={AboutPage} />
      </Router>
      <Suspense />
    </main>

  )
}

export default App
