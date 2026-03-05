import styles from './Skills.module.css'
import SkillsCards from './SkillsCards'
import InfoCard from './InfoCard'

function Skills() {
  return (
    <section id="skills" className={styles.skillsWrapper} aria-labelledby="skills-heading">
      <h2 id="skills-heading" className={`${styles.sectionTitle} fade-up`}>Technologies I Use</h2>
      <div className={`${styles.accentLine} fade-up`} aria-hidden="true"></div>
      <p className={`${styles.sectionSub} fade-up`}>5+ years of hands-on web development expertise</p>
      <InfoCard 
        primaryText='Currently Learning:' 
        secondaryText={
        <>
          <i className="devicon-jest-plain"></i> Jest &nbsp; 
          &middot;&nbsp; <i className="devicon-python-plain"></i> Python &nbsp;
          &middot;&nbsp; <i className="devicon-storybook-plain"></i> StoryBook
        </> 
      } 
        ariaLabel="Currently Learning Jest, StoryBook, WCAG 2.2 AA" 
      />
      <SkillsCards className="fade-up" />
    </section>
  )
}

export default Skills
