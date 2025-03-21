import TimelineItem from './TimelineItem';

const experiences = [
  {
    title: 'Backend Developer',
    company: 'Benkiko DAO',
    period: '2024 - Present',
    description: 'Developed Konvobot, an AI-powered chatbot that rewards customers with tokens and automates client interactions, including payments, transaction inquiries, and customer support.',
    achievements: [
      'Conducted stakeholder meetings to define bot features and analyzed user needs for system requirements',
      'Trained AI models using TensorFlow and NLTK for dynamic text generation and natural language processing',
      'Integrated Twilio APIs with cloud services for automated payment processing and notifications',
      'Developed microservices using MERN stack for scalable system architecture',
      'Implemented Mpesa Daraja B2C APIs for mobile payment integration with robust security features',
      'Conducted comprehensive testing and wrote detailed documentation for developers and users',
      'Deployed and maintained application on cloud platform with automated deployment pipelines'
    ],
  },
  {
    title: 'UI/UX Designer',
    company: 'Merxpress E-Commerce',
    period: '2023 - 2024',
    description: 'Designed and implemented user-centric components for the Merxpress marketplace, enhancing the e-commerce platform\'s user experience and visual appeal.',
    achievements: [
      'Conducted user research and created detailed personas to inform design decisions',
      'Developed wireframes and prototypes using Figma and Adobe XD',
      'Implemented responsive UI components using React.js with accessibility features',
      'Collaborated with cross-functional teams for seamless design implementation',
      'Conducted usability testing leading to 25% increase in user engagement',
      'Utilized analytics tools to monitor and improve user interactions'
    ],
  },
  {
    title: 'Developer Intern',
    company: 'Lanstar Technologies',
    period: '2023',
    description: 'Contributed to full-stack development and database management during a three-month attachment.',
    achievements: [
      'Collaborated on project requirements and sprint planning',
      'Developed RESTful APIs using Java EE for server-client communication',
      'Created responsive web interfaces with HTML, CSS, and JavaScript',
      'Managed MySQL databases and optimized queries for performance',
      'Participated in code reviews and maintained version control using Git',
      'Conducted unit and integration testing for system stability'
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            {...experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
}