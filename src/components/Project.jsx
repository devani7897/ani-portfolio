import { FaLaravel, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Application",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
      technologies: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
      features: [
        "Product catalog with categories",
        "User authentication system",
        "Shopping cart functionality",
        "Stripe payment integration",
        "Admin dashboard"
      ],
      icon: <FaLaravel className="text-red-500 text-4xl" />,
      bgColor: "bg-red-50 dark:bg-red-900/20",
      techIcons: [
        <FaLaravel key="laravel" className="text-red-500" />,
        <SiMysql key="mysql" className="text-blue-500" />,
        <FaDatabase key="db" className="text-gray-500" />
      ]
    },
    {
      title: "Learning Management System",
      description: "An online education platform with course management, student progress tracking, and video content delivery.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      features: [
        "Course creation and management",
        "User roles (Admin, Instructor, Student)",
        "Video streaming and quizzes",
        "Progress tracking",
        "Discussion forums"
      ],
      icon: <FaReact className="text-blue-400 text-4xl" />,
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      techIcons: [
        <SiMongodb key="mongo" className="text-green-500" />,
        <SiExpress key="express" className="text-gray-500" />,
        <FaReact key="react" className="text-blue-400" />,
        <FaNodeJs key="node" className="text-green-600" />
      ]
    },
    {
      title: "Blog Management System",
      description: "A content management system for bloggers with rich text editing, categories, and user comments.",
      technologies: ["Laravel", "MySQL", "Tailwind CSS", "Algolia Search"],
      features: [
        "Markdown editor for posts",
        "Category and tag system",
        "User comments with replies",
        "Search functionality",
        "SEO optimization"
      ],
      icon: <FaLaravel className="text-red-500 text-4xl" />,
      bgColor: "bg-red-50 dark:bg-red-900/20",
      techIcons: [
        <FaLaravel key="laravel" className="text-red-500" />,
        <SiMysql key="mysql" className="text-blue-500" />,
        <FaDatabase key="db" className="text-gray-500" />
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent backend-focused projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${project.bgColor}`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techIcons.map((icon, i) => (
                      <span key={i} className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm">
                        {icon}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-gray-800 shadow-sm text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-3">
                  <a
                    href="#"
                    className="px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  >
                    View Demo
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-colors dark:text-indigo-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            View All Projects on GitHub
            <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;