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
          <i className="devicon-jest-plain"></i> Jest  
          &middot; <i className="devicon-storybook-plain"></i> StoryBook 
          &middot; WCAG 2.2 AA
        </> 
      } 
        ariaLabel="Currently Learning Jest, StoryBook, WCAG 2.2 AA" 
      />
      <SkillsCards className="fade-up" />
    </section>
  )
}

export default Skills
