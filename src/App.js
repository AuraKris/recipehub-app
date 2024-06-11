import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './pages/NavBar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Forum from './pages/Forum';
import Login from './pages/Login';
import Register from './pages/Register';
import RecipePage from './pages/RecipePage';
import PostDetails from './pages/PostDetails';
import NewPost from './pages/NewPost';
import UserProfile from './pages/UserProfile';
import { RecipesProvider } from './pages/RecipesContext';
import { ForumProvider } from './pages/ForumContext';
import { CommentsProvider } from './pages/CommentsContext';
import { AuthProvider, useAuth } from './pages/AuthContext';

function PrivateRoute({ children }) {
    const { user } = useAuth();
    return user ? children : <Navigate to="/joinus" />;
}

function App() {
    return (
        <Router>
            <AuthProvider>
                <RecipesProvider>
                    <ForumProvider>
                        <CommentsProvider>
                            <div className="App">
                                <Navbar />
                                <div className="container home">
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/recipes" element={<Recipes />} />
                                        <Route path="/recipes/:id" element={<RecipePage />} />
                                        <Route path="/forum" element={<Forum />} />
                                        <Route path="/forum/:id" element={<PostDetails />} />
                                        <Route path="/forum/new" element={<PrivateRoute><NewPost /></PrivateRoute>} />
                                        <Route path="/joinus" element={<Login />} />
                                        <Route path="/register" element={<Register />} />
                                        <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
                                    </Routes>
                                </div>
                                <Footer />
                            </div>
                        </CommentsProvider>
                    </ForumProvider>
                </RecipesProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;
