import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In real app, this would be an API call
    console.log('Password reset requested for:', email)
    setShowConfirmation(true)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        {!showConfirmation ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Forgot Password</h1>
              <p className="text-gray-600">Enter your email address and we'll send you a reset link</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Reset Link
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">
                ← Back to Login
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Password Reset Link Sent</h2>
            <p className="text-gray-600 mb-6">
              A password reset link has been sent to your email address. Please check your inbox and follow the instructions.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ForgotPassword