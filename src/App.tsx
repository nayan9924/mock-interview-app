import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import PublicLayout  from "@/layouts/public-layout";
import AuthenticationLayout from "@/layouts/auth-layout";

import HomePage from "@/routes/home";
import SignInPage from "@/routes/sign-in";
import SignUpPage from "@/routes/sign-up";

const App = () => {
  return (
    <Router>
      <Routes>
        {/*public routes*/}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />}/>
        </Route>

        {/*auth layout*/}
        <Route element={<AuthenticationLayout/>}>
          <Route path="/signin/*" element={<SignInPage />}/>
          <Route path="/signup/*" element={<SignUpPage />}/>
        </Route>

        {/*protected routes*/}
      </Routes>
    </Router>
  )
};

export default App