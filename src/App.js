// Main App component

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Import components
import RegisterForm from './components/RegistrationForm'
import VerifyAccountPage from './components/VerifyAccountPage'
import LoginForm from './components/LoginForm'
import ChangePasswordForm from './components/ChangePasswordForm'
import ResetPasswordForm from './components/ResetPasswordForm'
import UpdateProfileForm from './components/UpdateProfileForm'
import UploadProfilePictureForm from './components/UploadProfilePictureForm'
import MyBlogsPage from './components/MyBlogsPage'
import FavoriteBlogsPage from './components/FavoriteBlogPage'
import CreateBlogForm from './components/CreateBlogForm'
import BlogDetailPage from './components/BlogDetailPage'
import FilterAndSortBlogs from './components/FilterAndSortBlogs'
import { Home } from './components/Home'
import { Profile } from './components/Profile'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/verification">Verify Account</Link>
            </li>
            <li>
              <Link to="/change-password">Change Password</Link>
            </li>
            <li>
              <Link to="/reset-password">Reset Password</Link>
            </li>
            <li>
              <Link to="/update-profile">Update Profile</Link>
            </li>
            <li>
              <Link to="/upload-profile-picture">Upload Profile Picture</Link>
            </li>
            <li>
              <Link to="/my-blogs">My Blogs</Link>
            </li>
            <li>
              <Link to="/favorite-blogs">Favorite Blogs</Link>
            </li>
            <li>
              <Link to="/create-blog">Create Blog</Link>
            </li>
            <li>
              <Link to="/blog-detail">Blog Detail</Link>
            </li>
            <li>
              <Link to="/filter-sort-blogs">Filter and Sort Blogs</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/verification/:token" element={<VerifyAccountPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/change-password" element={<ChangePasswordForm />} />
          <Route path="/reset-password" element={<ResetPasswordForm />} />
          <Route path="/update-profile" element={<UpdateProfileForm />} />
          <Route
            path="/upload-profile-picture"
            element={<UploadProfilePictureForm />}
          />
          <Route path="/my-blogs" element={<MyBlogsPage />} />
          <Route path="/favorite-blogs" element={<FavoriteBlogsPage />} />
          <Route path="/create-blog" element={<CreateBlogForm />} />
          <Route path="/blog-detail" element={<BlogDetailPage />} />
          <Route
            path="/filter-and-sort-blogs"
            element={<FilterAndSortBlogs />}
          />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
