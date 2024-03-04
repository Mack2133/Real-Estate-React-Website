import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import { PropertyView } from './components/PropertyView'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<PropertyView />} />
      </Routes>
    </DndProvider>
  )
}

export default App
