'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [speakerName, setSpeakerName] = useState('');
  const [speakerEmail, setSpeakerEmail] = useState('');
  const [speakerMessage, setSpeakerMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSpeakerInquiry = (e) => {
    e.preventDefault();
    // TODO: Connect to your email service (FormSpree, EmailJS, etc.)
    console.log({ speakerName, speakerEmail, speakerMessage });
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#282c50' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The Non-Linear Career Workbook
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Helping you make sense of an interdisciplinary career
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Your career doesn't have to follow a straight line. This workbook helps you connect the dots, 
                find your unique path, and build confidence in your non-traditional journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://bit.ly/nonlinearcareerworkbook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-center font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition"
                  style={{ color: '#282c50' }}
                >
                  Pre-Order Now - $24
                </a>
                <Link
                  href="/quiz"
                  className="border-2 border-white text-white text-center font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition"
                >
                  Take the Free Quiz
                </Link>
              </div>
            </div>

             {/*Right: Images/book cover.jpg */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                {/book cover.jpg/}
                <div className="bg-white p-4 rounded-lg shadow-2xl">
                  <div className="aspect-[3/4] bg-gray-200 rounded flex items-center justify-center">
                    {/book cover.jpg/}
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L1440 120L1440 0C1440 0 1200 60 720 60C240 60 0 0 0 0L0 120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#282c50' }}>
              What's Inside the Workbook
            </h2>
            <p className="text-xl text-gray-600">
              30+ practical exercises to help you navigate your unique career path
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(40, 44, 80, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#282c50' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#282c50' }}>Self-Assessment Tools</h3>
              <p className="text-gray-600">
                Discover your career type, strengths, and unique patterns through guided exercises
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(40, 44, 80, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#282c50' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#282c50' }}>Career Mapping</h3>
              <p className="text-gray-600">
                Connect the dots between your experiences and see the thread in your journey
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(40, 44, 80, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#282c50' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#282c50' }}>Action Plans</h3>
              <p className="text-gray-600">
                Practical frameworks to make confident decisions about your next career move
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/IMG_0373 Medium 2.jpeg/}
            <div>
              <div className="aspect-square bg-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center px-4">
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#282c50' }}>
                About Author
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                 Chinenye Olivia Oguadinma is a data storyteller, social entrepreneur, and advocate for non-linear career paths. With a background 
                  spanning chemical engineering, business administration, UN consulting, and data strategy, 
                </p>
                <p>
                  She has built her career on making complex ideas accessible to 
                    diverse audiences. Chinenye helps AI, data, and social impact teams
                      communicate clearly with funders, decision-makers, and communities
                        through video scripting, dashboard design, and knowledge content. 
                </p>
                <p>
                  As a  Tech content creator  she shares insights on career development, data science, and inclusive tech, guiding others
                          navigating unconventional professional journeys.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-4" style={{ color: '#282c50' }}>Connect with me:</h3>
                <div className="flex gap-4">
                  <a href="https://youtube.com/@chinenyeoguadinma" className="text-gray-600 hover:text-gray-900">
                    YouTube
                  </a>
                  <a href="https://instagram.com/nenyeoguadinma" className="text-gray-600 hover:text-gray-900">
                    Instagram
                  </a>
                  <a href="https://linkedin.com/in/chinenyeoguadinmna" className="text-gray-600 hover:text-gray-900">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Inquiry Section */}
      <section id="speaker" className="py-20" style={{ backgroundColor: '#282c50' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl font-bold mb-4">
              Book Me to Speak
            </h2>
            <p className="text-xl text-gray-300">
              I speak on non-linear careers, personal branding, and navigating career transitions
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSpeakerInquiry} className="bg-white rounded-lg p-8 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={speakerName}
                    onChange={(e) => setSpeakerName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50"
                    style={{ focusRingColor: '#282c50' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={speakerEmail}
                    onChange={(e) => setSpeakerEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Details / Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={speakerMessage}
                    onChange={(e) => setSpeakerMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50"
                    placeholder="Tell me about your event, audience size, date, and what you'd like me to speak about..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white font-bold py-4 px-8 rounded-lg hover:opacity-90 transition"
                  style={{ backgroundColor: '#282c50' }}
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white rounded-lg p-8 shadow-xl text-center">
              <svg className="w-16 h-16 mx-auto mb-4" style={{ color: '#282c50' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#282c50' }}>Thank You!</h3>
              <p className="text-gray-600">I'll get back to you within 24-48 hours.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#282c50' }}>
            Ready to Make Sense of Your Career Path?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start with the free quiz or pre-order the complete workbook
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="text-white text-center font-bold py-4 px-8 rounded-lg hover:opacity-90 transition"
              style={{ backgroundColor: '#282c50' }}
            >
              Take the Free Quiz
            </Link>
            <a
              href="https://bit.ly/nonlinearcareerworkbook"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 text-center font-bold py-4 px-8 rounded-lg hover:bg-gray-50 transition"
              style={{ borderColor: '#282c50', color: '#282c50' }}
            >
              Pre-Order Workbook - $24
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
