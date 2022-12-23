import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../Pages/Homepage'
import { ConfirmOrder } from '../Pages/ConfirmOrder'

export const RouterPages = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ConfirmOrder" element={<ConfirmOrder />} />
    </Routes>
  )
}
