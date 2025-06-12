import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import PublicLayout  from "./layouts/public-layout";


const App = () => {
  return (
    <Router>
      <Routes>
        {/*public routes*/}
        <Route element={<PublicLayout />}>
        
        </Route>
        {/*protected routes*/}
      </Routes>
    </Router>
  )
};

export default App