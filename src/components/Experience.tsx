import styles from './Experience.module.css'
import TimeLine from './TimeLine'
import EducationCard from './EducationCard'
import { expData } from '../data/experienceData'
import { eduData } from '../data/educationData'

function Experience() {
  return (
    <section id="experience" className={styles.experienceWrapper} aria-labelledby="experience-heading">
      <h2 id="experience-heading" className={`${styles.sectionTitle} fade-up`}>Professional Experience</h2>
      <div className={`${styles.accentLine} fade-up`} aria-hidden="true"></div>
      <p className={`${styles.sectionSub} fade-up`}>Building impactful web products since 2019</p>

      <TimeLine items={expData} />

      <h2 id="education-heading" className={`${styles.sectionTitle} fade-up`} style={{ marginTop: '4rem' }}>Education</h2>
      <div className={`${styles.accentLine} fade-up`} aria-hidden="true"></div>
      <div className={`${styles.educationCards} fade-up`} role="list" aria-labelledby="education-heading">
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
        </div>
    </section>
  )
}

export default Experience
