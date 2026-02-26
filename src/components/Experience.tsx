import styles from './Experience.module.css'
import TimeLine from './TimeLine'
import EducationCard from './EducationCard'

const expData = [
  {
    company: 'Idea Theorem Inc. — Toronto, ON',
    role: 'Senior Web Developer',
    date: 'May 2024 – Mar 2025',
    responsibilities: [
      'Built and maintained React-based UI components for production apps, improving delivery speed via reusable patterns.',
      'Integrated API-driven features to support reliable user experiences across production apps.',
      'Achieved 40% decrease in load time by optimizing images, reducing bundle size & refactoring CSS (Core Web Vitals).',
      'Improved accessibility audit scores by 25% applying WCAG 2.1 AA standards using axe & Lighthouse.',
      'Configured AWS S3 + CloudFront for asset delivery across production pages.',
      'Collaborated in Agile sprints; participated in peer code reviews and iterative releases.',
    ],
  },
  {
    company: 'Idea Theorem Inc. — Toronto, ON',
    role: 'Junior Web Developer',
    date: 'Jul 2019 – May 2024',
    responsibilities: [
      'Developed responsive front-end experiences using HTML5, CSS/SASS, JavaScript & React.',
      'Supported React/Next.js UI updates, component enhancements, bug fixes & API-connected user flows.',
      'Worked with PHP-based & CMS-driven websites for front-end customization and structured content delivery.',
      'Translated Figma designs into responsive layouts, reducing QA layout issues by 30%.',
      'Resolved 100+ rendering and layout issues through cross-browser testing & regression checks.',
      'Collaborated in Agile sprints using Jira and Git/Bitbucket.',
    ],
  },
]

const eduData = [
  {
    institution: 'Humber Polytechnic',
    degree: 'Web Development Program',
    field: '',
    date: '2018 – 2019'
  },
  {
    institution: 'Universidad de Dagupan',
    degree: 'B.S. Computer Science',
    field: '',
    date: '2008 – 2013'
  },
]

function Experience() {
  return (
    <section id="experience" className={styles.experienceWrapper} aria-labelledby="experience-heading">
      <h2 id="experience-heading" className={`${styles.sectionTitle} fade-up`}>Professional Experience</h2>
      <div className={`${styles.accentLine} fade-up`} aria-hidden="true"></div>
      <p className={`${styles.sectionSub} fade-up`}>Building impactful web products since 2019</p>

      <TimeLine items={expData} />

      <h2 id="education-heading" className={`${styles.sectionTitle} fade-up`} style={{ marginTop: '4rem' }}>Education</h2>
      <div className={`${styles.accentLine} fade-up`} aria-hidden="true"></div>
        {eduData.map((edu, index) => (
            <EducationCard
              key={index}
              institution={edu.institution}
              degree={edu.degree}
              field={edu.field}
              date={edu.date}
            />
          ))
        }
    </section>
  )
}

export default Experience
