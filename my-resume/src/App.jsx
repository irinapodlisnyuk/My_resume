import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Layout from "./app/layout";

function App() {

  return (
    <>
       <HashRouter>
      <Routes>
        {/* Layout — родительский роут, он всегда на экране */}
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} /> */}

        </Route>
      </Routes>
      </HashRouter>
    </>
  )
}

export default App
