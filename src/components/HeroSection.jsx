import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background pattern (optional) */}
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full max-w-7xl mx-auto" aria-hidden="true">
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent"></div>
        </div>
      </div>

      <div className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-32 lg:pb-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Text content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm</span>
              <span className="block text-indigo-600 dark:text-indigo-400">Anoop Maurya</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Backend Developer specializing in high-performance APIs and scalable systems.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#projects"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    View My Work
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 dark:text-indigo-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              {/* Replace with your actual image */}
              <div className="relative aspect-w-10 aspect-h-7 w-full overflow-hidden rounded-lg bg-white dark:bg-gray-800 group">
                <img
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-500"
                  src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="Developer working"
                />
                {/* Optional decorative element */}
                <div className="absolute inset-0 bg-indigo-600 mix-blend-multiply opacity-10 dark:opacity-20"></div>
              </div>
              
              {/* Optional badge/status */}
              <div className="absolute -bottom-8 -right-8 bg-indigo-600 dark:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
                <span className="block text-sm font-semibold">Available for</span>
                <span className="block text-lg font-bold">Freelance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling indicator (optional) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 animate-bounce">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;