import React from 'react'
import styles from './SkillsCategory.module.css'

interface SkillsCategoryProps {
  title: string
  items: { iconClass: string; label: string; emoji?: string }[]
  ariaLabel: string
}

const SkillsCategory: React.FC<SkillsCategoryProps> = (props) => {
  const headingId = `cat-${props.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <div className={`${styles.skillCategory} fade-up`} role="region" aria-labelledby={headingId}>
      <h3 id={headingId} className={styles.skillCatTitle}>{props.title}</h3>
      <ul className={styles.techList} role="list" aria-label={props.ariaLabel}>
        {props.items.map((item, index) => (
          <li key={index} className={styles.techItem}>
            {item.emoji ? (
              <span className={item.iconClass} aria-hidden="true">{item.emoji}</span>
            ) : (
              <i className={item.iconClass} aria-hidden="true"></i>
            )}{' '}
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsCategory
