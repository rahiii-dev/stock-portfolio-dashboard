import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";
import NotFound from "./pages/NoteFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App;