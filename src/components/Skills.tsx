import styles from './Skills.module.css'
import SkillsCategory from './SkillsCategory'
import { skillsData } from '../data/skillsData'

function Skills() {
  return (
    <section id="skills" className={styles.skillsWrapper} aria-labelledby="skills-heading">
      <h2 id="skills-heading" className={`${styles.sectionTitle} fade-up`}>Core Technical Skills</h2>
      <div className={`${styles.accentLine} fade-up`} aria-hidden="true"></div>
      <p className={`${styles.sectionSub} fade-up`}>5+ years of hands-on web development expertise</p>

      <div className={styles.skillsGrid}>
        {skillsData.map((category, index) => (
          <SkillsCategory
            key={index}
            title={category.title}
            ariaLabel={category.ariaLabel}
            items={category.items}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
