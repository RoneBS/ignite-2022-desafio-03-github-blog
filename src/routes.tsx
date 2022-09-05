import { Routes, Route } from 'react-router-dom'
import { Blog } from './pages/Blog'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
    </Routes>
  )
}
