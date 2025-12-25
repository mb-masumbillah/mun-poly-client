import React, { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const TakeExam = () => {
  const { examId } = useParams()
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState(120 * 60) // 120 minutes in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [exam] = useState({
    id: examId,
    name: 'Mathematics Final Exam',
    duration: 120,
    totalQuestions: 5
  })

  const [questions] = useState([
    {
      id: 1,
      question: 'What is the derivative of x²?',
      type: 'Multiple Choice',
      options: ['2x', 'x²', '2x²', 'x'],
      correctAnswer: 0,
      points: 10
    },
    {
      id: 2,
      question: 'What is the integral of 2x?',
      type: 'Multiple Choice',
      options: ['x²', '2x²', 'x² + C', '2x + C'],
      correctAnswer: 2,
      points: 10
    },
    {
      id: 3,
      question: 'Solve: 2x + 5 = 15',
      type: 'Short Answer',
      points: 10
    },
    {
      id: 4,
      question: 'The derivative of a constant is zero.',
      type: 'True/False',
      correctAnswer: 'True',
      points: 5
    },
    {
      id: 5,
      question: 'Explain the fundamental theorem of calculus.',
      type: 'Essay',
      points: 15
    },
  ])

  const handleSubmit = useCallback(() => {
    // In real app, this would submit to backend
    console.log('Exam submitted:', answers)
    navigate('/results')
  }, [answers, navigate])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [handleSubmit])

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const currentQ = questions[currentQuestion]
  const answeredCount = Object.keys(answers).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{exam.name}</h1>
              <p className="text-sm text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-sm text-gray-600">Time Remaining</div>
                <div className={`text-2xl font-bold ${timeLeft < 300 ? 'text-red-600' : 'text-gray-800'}`}>
                  {formatTime(timeLeft)}
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Submit Exam
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 sticky top-24">
              <h3 className="font-bold text-gray-800 mb-4">Question Navigation</h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((q, index) => (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                      index === currentQuestion
                        ? 'bg-indigo-600 text-white'
                        : answers[q.id]
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  Answered: <span className="font-semibold text-green-600">{answeredCount}</span> / {questions.length}
                </div>
              </div>
            </div>
          </div>

          {/* Question Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    Question {currentQuestion + 1}
                  </h2>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-semibold">
                    {currentQ.points} points
                  </span>
                </div>
                <p className="text-lg text-gray-700 mb-6">{currentQ.question}</p>
              </div>

              <div className="space-y-4">
                {currentQ.type === 'Multiple Choice' && (
                  <div className="space-y-3">
                    {currentQ.options.map((option, index) => (
                      <label
                        key={index}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                          answers[currentQ.id] === index.toString()
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${currentQ.id}`}
                          value={index}
                          checked={answers[currentQ.id] === index.toString()}
                          onChange={() => handleAnswerChange(currentQ.id, index.toString())}
                          className="w-5 h-5 text-indigo-600"
                        />
                        <span className="ml-3 text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentQ.type === 'True/False' && (
                  <div className="space-y-3">
                    {['True', 'False'].map((option) => (
                      <label
                        key={option}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                          answers[currentQ.id] === option
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${currentQ.id}`}
                          value={option}
                          checked={answers[currentQ.id] === option}
                          onChange={() => handleAnswerChange(currentQ.id, option)}
                          className="w-5 h-5 text-indigo-600"
                        />
                        <span className="ml-3 text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {(currentQ.type === 'Short Answer' || currentQ.type === 'Essay') && (
                  <textarea
                    value={answers[currentQ.id] || ''}
                    onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                    rows={currentQ.type === 'Essay' ? 8 : 4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    placeholder="Type your answer here..."
                  />
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                    currentQuestion === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Previous
                </button>
                {currentQuestion < questions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Submit Exam
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeExam

