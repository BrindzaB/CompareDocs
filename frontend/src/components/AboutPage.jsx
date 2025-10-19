import { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AboutPage() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="w-full min-h-screen bg-transparent overflow-y-auto">
      <div className="flex justify-center items-center w-full min-h-screen px-10 sm:px-10 lg:px-20 pt-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-20 items-center justify-between w-full max-w-7xl">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6 leading-tight dark:from-purple-300 dark:via-orange-300 dark:to-red-300">
              CompareDocs
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-medium">
              Intelligent document comparison powered by AI and OCR technology
            </p>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
              Automate your document validation process. Upload invoices, delivery notes, and any business documents to instantly compare and verify critical information with pinpoint accuracy.
            </p>
            <div className="flex gap-4">
              <button 
                className="h-12 px-8 text-white bg-gray-900 hover:bg-gray-800 rounded-full font-medium text-center transition-transform duration-200 ease-in-out transform hover:scale-105 dark:border dark:border-gray-600 dark:bg-darkgrey dark:hover:bg-gray-900 cursor-pointer flex items-center gap-2"
                onClick={() => navigate("/")}
                >
                Get Started
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="flex-1 flex items-center justify-center relative min-h-[400px] lg:min-h-[500px] w-full">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-orange-400 to-red-400 rounded-2xl opacity-75 blur-lg"></div>
              <div className="relative w-full h-full p-8 bg-white rounded-2xl shadow-md opacity-90 dark:bg-gray-950 dark:border dark:border-gray-700 flex flex-col">
                {/* Document Header */}
                <div className="mb-6 pb-4 border-b-2 border-gray-300 dark:border-gray-600">
                  <div className="h-3 w-24 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full mb-2"></div>
                  <div className="h-2 w-32 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                </div>

                {/* Document Content */}
                <div className="flex-1 space-y-3">
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-2 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-2 w-4/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-2 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-2 w-4/5 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-2 w-3/5 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>

                {/* Document Footer */}
                <div className="mt-6 pt-4 border-t-2 border-gray-300 dark:border-gray-600">
                  <div className="flex gap-2">
                    <div className="h-2 w-20 bg-gradient-to-r from-purple-400 to-orange-400 rounded"></div>
                    <div className="h-2 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex justify-center w-full px-10 sm:px-10 lg:px-20 py-20 bg-gradient-to-b from-transparent via-gray-50 to-transparent dark:via-gray-900/30">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Built with modern technology for seamless document processing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '📁',
                title: 'Multi-Format Support',
                description: 'Upload and process documents in PDF and image formats (JPG, PNG, etc.) with ease'
              },
              {
                emoji: '✨',
                title: 'AI-Powered Analysis',
                description: 'OpenAI API extracts and compares key fields with exceptional accuracy and intelligence'
              },
              {
                emoji: '✓',
                title: 'Accurate Matching',
                description: 'Compare company name, invoice date, and total amount to verify document authenticity'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="relative p-1 rounded-2xl group cursor-pointer"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {hoveredCard === idx && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-orange-400 to-red-400 rounded-2xl opacity-75 blur-lg"></div>
                )}
                <div className={`relative w-full h-full p-8 bg-white rounded-2xl shadow-md transition-all duration-300 ${
                  hoveredCard === idx ? 'opacity-90' : 'opacity-100'
                } dark:bg-gray-950 dark:border dark:border-gray-700 flex flex-col items-center text-center hover:scale-102 duration-200 ease-in-out`}>
                  <div className="text-4xl mb-4">
                    {feature.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="flex justify-center w-full px-10 sm:px-10 lg:px-20 py-20">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Three simple steps to verify your documents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Upload Documents',
                description: 'Select and upload two documents you want to compare (PDF or image format)'
              },
              {
                step: '02',
                title: 'AI Processing',
                description: 'Our system uses Tesseract OCR and OpenAI API to extract key information'
              },
              {
                step: '03',
                title: 'Get Results',
                description: 'Instantly receive detailed comparison results showing matches and discrepancies'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-orange-400 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="flex justify-center w-full px-10 sm:px-10 lg:px-20 py-20 bg-gradient-to-b from-transparent via-gray-50 to-transparent dark:via-gray-900/30">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Frontend */}
            <div className="relative p-1 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-orange-300 rounded-2xl opacity-50 blur-lg dark:opacity-30"></div>
              <div className="relative w-full h-full p-8 bg-white rounded-2xl shadow-md opacity-90 dark:bg-gray-950 dark:border dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frontend</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">React</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Tailwind CSS</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Modern UI/UX</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Backend */}
            <div className="relative p-1 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-300 to-purple-300 rounded-2xl opacity-50 blur-lg dark:opacity-30"></div>
              <div className="relative w-full h-full p-8 bg-white rounded-2xl shadow-md opacity-90 dark:bg-gray-950 dark:border dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Backend</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Express.js</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Tesseract OCR</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">PDF2Pic</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">OpenAI API</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex justify-center w-full px-10 sm:px-10 lg:px-20 py-20">
        <div className="w-full max-w-4xl">
          <div className="relative p-1 rounded-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-orange-400 to-red-400 rounded-2xl opacity-75 blur-lg"></div>
            <div className="relative w-full h-full p-12 bg-white rounded-2xl shadow-md opacity-90 dark:bg-gray-950 dark:border dark:border-gray-700 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to automate your document validation?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Start comparing documents in seconds with our intelligent AI-powered solution
              </p>
              <button className="h-12 px-8 text-white bg-gray-900 hover:bg-gray-800 rounded-full font-medium text-center transition-transform duration-200 ease-in-out transform hover:scale-105 dark:border dark:border-gray-600 dark:bg-darkgrey dark:hover:bg-gray-900 cursor-pointer">
                Start Comparing Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}