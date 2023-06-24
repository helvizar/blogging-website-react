// Verify Account page

import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const VerifyAccountPage = () => {
  // get token from params
  const { token } = useParams()
  const navigate = useNavigate()

  // hook for sending token to be verified
  useEffect(() => {
    const patchAuth = async () => {
      const header = {
        Authorization: `Bearer ${token}`,
      }

      await axios.patch(
        'https://minpro-blog.purwadhikabootcamp.com/api/auth/verify',
        {},
        { headers: header }
      )
    }
    patchAuth()

    // save token to local storage
    localStorage.setItem('token', token)

    setTimeout(() => {
      navigate('/')
    }, 3000)
  }, [])

  return (
    <div>
      <h2>Verify Account</h2>
      <p>Your account has been successfully verified!</p>
      <p>Redirecting to the landing page...</p>
    </div>
  )
}

export default VerifyAccountPage
