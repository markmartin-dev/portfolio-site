import styles from './TimeLine.module.css'

interface TimeLineItem {
  company: string
  role: string
  date: string
  responsibilities: string[]
}

const TimeLine: React.FC<{ items: TimeLineItem[] }> = (props) => {
    return (
        <ul className={styles.timeline}>
            {props.items.map((item, index) => (
            <li key={index} className={`${styles.timelineItem} fade-up`}>
                <div className={styles.timelineDot} aria-hidden="true"></div>
                <div className={styles.timelineCard}>
                <span className={styles.timelineCompany}>{item.company}</span>
                <h3 className={styles.timelineRole}>{item.role}</h3>
                <p className={styles.timelineDate}>
                    <time>{item.date}</time>
                </p>
                <ul aria-label="Responsibilities and achievements">
                    {item.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                    ))}
                </ul>
                </div>
            </li>
            ))}
        </ul>  
    )
}

export default TimeLine

