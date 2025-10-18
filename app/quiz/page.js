'use client';

import { useState } from 'react';
import Link from 'next/link';

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const Sparkles = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

export default function CareerPathQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const preOrderLink = "https://bit.ly/nonlinearcareerworkbook";
  const siteUrl = "https://www.non-linearcareer.com/"; // Change this to your actual domain

  const questions = [
    {
      id: 1,
      question: "When someone asks 'What do you do?', how do you feel?",
      options: [
        { text: "Confident - I have a clear answer", value: "linear", weight: 1 },
        { text: "It's complicated - I do multiple things", value: "multi", weight: 2 },
        { text: "Frustrated - My title doesn't capture what I actually do", value: "explorer", weight: 2 },
        { text: "Excited - I love explaining my unique path", value: "pioneer", weight: 3 }
      ]
    },
    {
      id: 2,
      question: "Looking at your resume, what pattern do you see?",
      options: [
        { text: "Clear progression in one field", value: "linear", weight: 1 },
        { text: "Related but different roles", value: "multi", weight: 2 },
        { text: "Completely different industries", value: "explorer", weight: 3 },
        { text: "A mix of everything - employment, freelance, side projects", value: "pioneer", weight: 3 }
      ]
    },
    {
      id: 3,
      question: "How do you feel about traditional career advice?",
      options: [
        { text: "It works for me", value: "linear", weight: 1 },
        { text: "Some of it applies", value: "multi", weight: 2 },
        { text: "Most of it doesn't fit my situation", value: "explorer", weight: 2 },
        { text: "It makes me feel like I'm doing something wrong", value: "pioneer", weight: 3 }
      ]
    },
    {
      id: 4,
      question: "When you discover a new interest or skill, you usually:",
      options: [
        { text: "See how it fits into my current career path", value: "linear", weight: 1 },
        { text: "Add it to my skill set", value: "multi", weight: 2 },
        { text: "Explore it fully, even if it seems unrelated", value: "explorer", weight: 3 },
        { text: "Consider pivoting my whole career around it", value: "pioneer", weight: 3 }
      ]
    },
    {
      id: 5,
      question: "How many career 'pivots' have you made?",
      options: [
        { text: "None - I'm in my original field", value: "linear", weight: 1 },
        { text: "1-2 related shifts", value: "multi", weight: 2 },
        { text: "3-4 significant changes", value: "explorer", weight: 3 },
        { text: "I've lost count - I pivot regularly", value: "pioneer", weight: 3 }
      ]
    },
    {
      id: 6,
      question: "When describing your skills, you:",
      options: [
        { text: "Focus on one main expertise", value: "linear", weight: 1 },
        { text: "Have a primary skill plus secondary ones", value: "multi", weight: 2 },
        { text: "Struggle to pick just one - you're multi-talented", value: "explorer", value: 2 },
        { text: "See connections others don't between different skills", value: "pioneer", weight: 3 }
      ]
    },
    {
      id: 7,
      question: "Your ideal work situation is:",
      options: [
        { text: "One stable job in my field", value: "linear", weight: 1 },
        { text: "One main job with side interests", value: "multi", weight: 2 },
        { text: "Portfolio career - multiple income streams", value: "explorer", weight: 3 },
        { text: "Whatever allows me to explore and grow", value: "pioneer", weight: 3 }
      ]
    },
    {
      id: 8,
      question: "When you look at LinkedIn 'success stories', you feel:",
      options: [
        { text: "Inspired - that could be me", value: "linear", weight: 1 },
        { text: "Interested but not jealous", value: "multi", weight: 2 },
        { text: "Disconnected - that's not my version of success", value: "explorer", weight: 2 },
        { text: "Like you're playing a different game entirely", value: "pioneer", weight: 3 }
      ]
    },
    {
      id: 9,
      question: "The idea of doing the same job for 20 years makes you feel:",
      options: [
        { text: "Secure and excited", value: "linear", weight: 1 },
        { text: "Fine if there's growth opportunity", value: "multi", weight: 2 },
        { text: "Restless and confined", value: "explorer", weight: 3 },
        { text: "Absolutely terrified", value: "pioneer", weight: 3 }
      ]
    },
    {
      id: 10,
      question: "How often do you question your career choices?",
      options: [
        { text: "Rarely - I'm confident in my path", value: "linear", weight: 1 },
        { text: "Occasionally, when things feel stagnant", value: "multi", weight: 2 },
        { text: "Frequently - I'm always exploring options", value: "explorer", weight: 3 },
        { text: "Constantly - but I see it as curiosity, not crisis", value: "pioneer", weight: 3 }
      ]
    },
    {
      id: 11,
      question: "Your transferable skills are:",
      options: [
        { text: "All within one industry", value: "linear", weight: 1 },
        { text: "Applicable to related fields", value: "multi", weight: 2 },
        { text: "Diverse across multiple industries", value: "explorer", weight: 3 },
        { text: "So transferable they're hard to categorize", value: "pioneer", weight: 3 }
      ]
    },
    {
      id: 12,
      question: "When you think about your career 5 years from now:",
      options: [
        { text: "I see a clear progression", value: "linear", weight: 1 },
        { text: "I have a general direction", value: "multi", weight: 2 },
        { text: "I see multiple possible paths", value: "explorer", weight: 2 },
        { text: "I have no idea and that excites me", value: "pioneer", weight: 3 }
      ]
    }
  ];

  const careerTypes = {
    linear: {
      title: "The Specialist",
      score: "10-15 points",
      description: "You thrive in focused, progressive career paths. You value deep expertise in your field and find satisfaction in becoming the go-to person in your domain.",
      strengths: ["Deep expertise", "Clear progression", "Industry credibility", "Focused growth"],
      challenges: ["May feel boxed in by specialization", "Limited exposure to other fields", "Risk of burnout in one area"],
      recommendation: "While your path is more linear, the workbook can help you identify transferable skills and explore adjacent opportunities within your field."
    },
    multi: {
      title: "The Adaptor",
      score: "16-24 points",
      description: "You navigate between related fields, building a diverse skill set while maintaining some thread of connection. You're comfortable with changing career paths but appreciate some continuity.",
      strengths: ["Versatile skill set", "Adaptable to change", "Cross-functional thinking", "Balanced approach"],
      challenges: ["Explaining career narrative", "Bridging different experiences", "Finding the through-line"],
      recommendation: "This workbook is PERFECT for you. You'll learn to articulate your unique value proposition and see the patterns in your seemingly different roles."
    },
    explorer: {
      title: "The Explorer",
      score: "25-30 points",
      description: "Your career is a beautiful collection of experiences across different industries. You're driven by curiosity and growth, not titles. Traditional paths feel limiting.",
      strengths: ["Unique perspective", "Resilient through change", "Creative problem-solving", "Broad network"],
      challenges: ["Resume doesn't 'make sense'", "Imposter syndrome", "Explaining your path", "Finding your narrative"],
      recommendation: "This workbook was made FOR YOU. You'll finally have tools to translate your diverse experience into a coherent, powerful career story."
    },
    pioneer: {
      title: "The Pioneer",
      score: "31-36 points",
      description: "You're creating a career that doesn't exist yet. You combine interests in unconventional ways. You're not confused, you're creating a new path that others will follow.",
      strengths: ["Innovation mindset", "Fearless pivoting", "Unique positioning", "Trend-setting potential"],
      challenges: ["Feeling misunderstood", "Lack of role models", "Explaining your vision", "Trusting your path"],
      recommendation: "YOU NEED THIS WORKBOOK. It will validate your journey and give you frameworks to build confidence in your pioneering path. You're not scattered!  You're a visionary."
    }
  };

  const handleAnswer = (value, weight) => {
    setAnswers({ ...answers, [currentQuestion]: { value, weight } });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, answer) => sum + answer.weight, 0);
    let resultType;

    if (totalScore <= 15) resultType = 'linear';
    else if (totalScore <= 24) resultType = 'multi';
    else if (totalScore <= 30) resultType = 'explorer';
    else resultType = 'pioneer';

    setShowResults(resultType);
  };

  const handlePreOrder = () => {
    window.open(preOrderLink, '_blank');
  };

  // Add this function at the top of your component
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      console.log("Email is empty.");
      return;
    }

    setIsSubmitting(true);
    const r = careerTypes[showResults]; // Get the result type here
    const formId = 'dde8646d39'; // Using the form ID from the provided script
    const apiKey = 'hlZtbnY0oyXajQQzixw94w'; // Make sure you've replaced this with your actual API Key

    if (apiKey === 'hlZtbnY0oyXajQQzixw94wY') {
      console.error("Please replace 'YOUR_API_KEY' with your actual ConvertKit API key.");
      setIsSubmitting(false);
      alert("Error: ConvertKit API key not set up. Please check the code.");
      return;
    }


    try {
      console.log("Attempting to submit email");
      const response = await fetch(`https://api.convertkit.com/v3/forms/${dde8646d39}/subscribe`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          api_key: apiKey,
          email: email,
          tags: [r.title], // Tags them by career type!
          fields: {
            career_type: r.title
          }
        })
      });

      console.log("ConvertKit API response status:", response.status);
      const responseData = await response.json();
      console.log("ConvertKit API response data:", responseData);

      if (response.ok) {
        setEmailSubmitted(true);
        console.log("Email successfully submitted.");
      } else {
        // Log specific error details from ConvertKit API response
        console.error("ConvertKit API error response:", responseData);
        let errorMessage = 'Unknown error';
        if (responseData && responseData.errors && responseData.errors.length > 0) {
           errorMessage = responseData.errors.map(err => err.message).join(', ');
        } else if (responseData && responseData.message) {
           errorMessage = responseData.message;
        }

        alert(`Error submitting email: ${errorMessage}. Check console for details.`);
      }


      // OR Option 2: FormSpree (simpler)
      // await fetch('https://formspree.io/f/xvgwlegp', {
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify({
      //     email: email,
      //     career_type: r.title
      //   })
      // });


    } catch (error) {
      console.error("Error during email submission (network or other issue):", error);
      alert(`Error saving email. Please check your internet connection and the browser console for more details. You can still pre-order below!`);
    } finally {
      setIsSubmitting(false);
    }
  };


  // Social sharing functions
  const shareOnTwitter = () => {
    const result = careerTypes[showResults];
    const text = `I just discovered I'm ${result.title} in the non-linear Career Path Quiz by Chinenye Oguadinma 🎯 Find out your non-linear career path:`;
    const url = `${siteUrl}/quiz`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = `${siteUrl}/quiz`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  const copyLink = () => {
    const url = `${siteUrl}/quiz`;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const r = careerTypes[showResults];
    const totalScore = Object.values(answers).reduce((sum, answer) => sum + answer.weight, 0);

    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-gray-100">
            <div className="text-center mb-8">
              <Sparkles className="w-16 h-16 mx-auto mb-4" style={{ color: '#282c50' }} />
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Your Career Type:</h2>
              <h3 className="text-5xl font-bold mb-4" style={{ color: '#282c50' }}>
                {r.title}
              </h3>

            </div>

            {/* Social Sharing Buttons */}
            <div className="flex justify-center gap-3 mb-8 flex-wrap">
              <button
                onClick={shareOnTwitter}
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Share on X
              </button>
              <button
                onClick={shareOnLinkedIn}
                className="flex items-center gap-2 px-4 py-2 text-white rounded-lg hover:opacity-90 transition text-sm"
                style={{ backgroundColor: '#0077B5' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Share on LinkedIn
              </button>
              <button
                onClick={copyLink}
                className="flex items-center gap-2 px-4 py-2 border-2 rounded-lg hover:bg-gray-50 transition text-sm"
                style={{ borderColor: '#282c50', color: '#282c50' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                Copy Link
              </button>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">{r.description}</p>
              </div>

              {/* Ensuring r.recommendation is displayed correctly */}
              <div>
                <h4 className="font-bold text-xl mb-3" style={{ color: '#282c50' }}>Recommendation:</h4>
                <p className="text-lg text-gray-700 leading-relaxed">{r.recommendation}</p>
              </div>


              <div>
                <h4 className="font-bold text-xl mb-3" style={{ color: '#282c50' }}>Your Strengths:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {r.strengths.map((strength, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span style={{ color: '#282c50' }}>✓</span>
                      <span className="text-gray-700">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-3" style={{ color: '#282c50' }}>Common Challenges:</h4>
                <ul className="space-y-2">
                  {r.challenges.map((challenge, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Email Capture Section */}
              <div className="rounded-xl p-8 text-white text-center" style={{backgroundColor:'#282c50'}}>
                {!emailSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold mb-4">Get Your Personalized Career Guide</h3>
                    <p className="mb-6 text-lg text-gray-100">
                      Enter your email to receive:
                      <br/>✓ Detailed breakdown of {r.title} career strategies
                      <br/>✓ Actionable steps to leverage your unique path
                      <br/>✓ Exclusive insights not found anywhere else
                    </p>
                    <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting || !email}
                        className="bg-white font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ color: '#282c50' }}
                      >
                        {isSubmitting ? 'Submitting...' : 'Get My Guide'}
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-4">Success!</h3>
                    <p className="mb-6 text-lg text-gray-100">
                      Check your inbox for your personalized career guide.
                    </p>
                  </>
                )}
              </div>

            </div>

            <div className="border-t pt-8">
              <div className="rounded-xl p-8 text-white text-center" style={{ backgroundColor: '#282c50' }}>
                <h3 className="text-2xl font-bold mb-4">Ready to Own Your Non-Linear Path?</h3>
                <p className="mb-6 text-lg text-gray-100">Get the complete workbook with 30+ exercises designed for careers like yours.</p>

                <div className="mb-6">

                  <button
                    onClick={handlePreOrder}
                    className="w-full max-w-md bg-white font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
                    style={{ color: '#282c50' }}
                  >
                    Pre-Order the Workbook Now
                  </button>
                </div>

                <p className="text-sm text-gray-300">Join hundreds of others discovering their career clarity</p>
              </div>
            </div>

            <div className="text-center mt-6 space-y-4">
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setShowResults(false);
                  setEmail('');
                  setEmailSubmitted(false);
                }}
                className="text-gray-600 hover:text-gray-800 underline"
              >
                Retake Quiz
              </button>
              <div>
                <Link href="/" className="text-gray-600 hover:text-gray-800 underline">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {currentQuestion === 0 && (
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#282c50' }}>
              What's Your Non-Linear Career Path?
            </h1>
            <p className="text-xl text-gray-600">
              Take this 2-minute quiz to discover your unique career personality
            </p>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 border-2 border-gray-100">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%`, backgroundColor: '#282c50' }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#282c50' }}>
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.value, option.weight)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    answers[currentQuestion]?.value === option.value
                      ? 'bg-opacity-5'
                      : 'border-gray-200 hover:border-border-gray-400 hover:bg-gray-50'
                  }`}
                  style={
                    answers[currentQuestion]?.value === option.value
                      ? { borderColor: '#282c50', backgroundColor: 'rgba(40, 44, 80, 0.05)' }
                      : {}
                  }
                >
                  <span className="text-lg text-gray-700">{option.text}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition ${
                currentQuestion === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'hover:bg-gray-100'
              }`}
              style={currentQuestion === 0 ? {} : { color: '#282c50' }}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            <button
              onClick={nextQuestion}
              disabled={!answers[currentQuestion]}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-white transition ${
                !answers[currentQuestion]
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'hover:shadow-lg'
              }`}
              style={!answers[currentQuestion] ? {} : { backgroundColor: '#282c50' }}
            >
              <span>{currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-6 space-y-2">
          <p className="text-sm text-gray-600">No email required • Takes 2 minutes • Get instant results</p>
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-800 underline block">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
