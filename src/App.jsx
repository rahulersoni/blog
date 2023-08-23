import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Single from './templates/Single';
import ArcheiveCategory from './templates/ArcheiveCategory';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Author from './templates/Author';
import Dashboard from './pages/Dashboard';
import Search from './templates/Search';
import ProtectedRoute from './utils/ProtectedRoute';
import Package from './pages/Package';
import PageNotFound from './templates/PageNotFound';
import { latestPostsData } from './constants/Constants';


function App() {

    return (
        <div className="App dark:bg-slate-800" id='top'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home data={latestPostsData} />} />
                    <Route path="/search" element={<Search data={latestPostsData} />} />
                    <Route path="/package" element={<Package />} />

                    {/* Login Protection routes  */}
                    <Route element={<ProtectedRoute />} >
                        <Route path="/dashboard" element={<Dashboard data={latestPostsData} />} />
                        <Route path="/dashboard/:slug" element={<Dashboard data={latestPostsData} />} />
                    </Route>

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/forgot-password" element={<ForgotPassword data={latestPostsData} />} />
                    <Route path="/author/:name" element={<Author data={latestPostsData} />} />
                    <Route path="/post/:name" element={<Single data={latestPostsData} />} />
                    <Route path="/category/:name" element={<ArcheiveCategory data={latestPostsData} />} />

                    <Route path="*" element={<PageNotFound />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
