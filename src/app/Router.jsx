import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Page2 from '../pages/Page2';
import Layout from "../components/Layout";
const Router = () => (
  <BrowserRouter>
  <Layout>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;