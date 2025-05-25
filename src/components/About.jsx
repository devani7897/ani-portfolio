import { FaServer, FaDatabase, FaCode, FaCloud } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      icon: <FaServer className="text-indigo-600 dark:text-indigo-400 text-2xl" />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js,PHP, Laravel, Python, and Java."
    },
    {
      icon: <FaDatabase className="text-indigo-600 dark:text-indigo-400 text-2xl" />,
      title: "Database Design",
      description: "Designing efficient database schemas for SQL and NoSQL systems."
    },
    {
      icon: <FaCode className="text-indigo-600 dark:text-indigo-400 text-2xl" />,
      title: "API Development",
      description: "Creating RESTful and GraphQL APIs with proper documentation."
    },
    {
      icon: <FaCloud className="text-indigo-600 dark:text-indigo-400 text-2xl" />,
      title: "Cloud Infrastructure",
      description: "Deploying and managing applications on AWS, GCP, and Azure."
    }
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Bio */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-xs lg:max-w-none">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="Developer working"
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-indigo-600 mix-blend-multiply opacity-10 dark:opacity-20"></div>
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 dark:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="block text-sm">Years of</span>
                <span className="block text-xl font-bold">1+ Experience</span>
              </div>
            </div>

            <div className="mt-8 text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                I'm a passionate backend developer with expertise in building scalable systems that power modern web applications.
              </p>
              <p className="mb-4">
                My approach combines clean code architecture with performance optimization to deliver reliable backend services.
              </p>
              <p>
                When I'm not coding, I enjoy contributing to open-source projects and staying updated with the latest backend technologies.
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              My Technical Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-3">
                    {skill.icon}
                    <h4 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">
                      {skill.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Proficiencies */}
            <div className="mt-8">
              <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                Technical Proficiencies
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
                    <span>Node.js / Express</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
                    <span>Python / Django</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
                    <span>Database Systems</span>
                    <span>88%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
                    <span>Cloud Services</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;