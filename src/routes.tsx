import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './App.tsx'
import Home from './components/Home.tsx'
import Arin from './components/Arin.tsx'
import Code from './components/Code.tsx'
import Craft from './components/Craft.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/arin" element={<Arin />} />
    <Route path="/code" element={<Code />} />
    <Route path="/Craft" element={<Craft />} />
  </Route>
)
