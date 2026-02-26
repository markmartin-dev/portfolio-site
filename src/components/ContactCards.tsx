import styles from './ContactCards.module.css'

interface ContactCardProps {
  icon: string
  type: string
  href: string
  external?: boolean
  ariaLabel: string
}

const ContactCard: React.FC<ContactCardProps> = (props) => {
    return (
        <a href={props.href} className={`${styles.contactCard} fade-up`} target={props.external ? "_blank" : undefined} rel="noopener noreferrer" aria-label={props.ariaLabel}>
            <span className={styles.contactCardIcon} aria-hidden="true">{props.icon}</span>
            <span className={styles.contactCardLabel}>{props.type}</span>
            <span className={styles.contactCardValue}>{props.href.replace(/^(mailto:|tel:|https?:\/\/)/, '')}</span>
        </a>
    )
}

export default ContactCard