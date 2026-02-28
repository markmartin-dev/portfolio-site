import styles from './EducationCard.module.css'

interface EducationCardProps {
  institution: string
  degree: string
  field: string
  date: string
}

const EducationCard: React.FC<EducationCardProps> = (props) => {
  return (
    <li className={`${styles.educationCard} fade-up`}>
      <p className={styles.educationSchool}>{props.institution}</p>
      <h3 className={styles.educationDegree}>{props.degree}</h3>
      {props.field && <p className={styles.educationField}>{props.field}</p>}
      <p className={styles.educationYear}>
        <time dateTime={props.date.split('–')[0].trim()}>{props.date.split('–')[0].trim()}</time> &ndash; <time dateTime={props.date.split('–')[1].trim()}>{props.date.split('–')[1].trim()}</time>
      </p>
    </li>
  )
}

export default EducationCard