import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import RecipeBox from './pages/RecipeBox';
import Profile from './pages/Profile';
import Subscribe from './pages/Subscribe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipe/:id" element={<RecipeDetail />} />
          <Route path="recipes" element={<RecipeBox />} />
          <Route path="profile" element={<Profile />} />
          <Route path="subscribe" element={<Subscribe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
