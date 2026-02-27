import styles from './ContactCards.module.css'

interface ContactCardProps {
  icon?: string
  iconClass?: string
  type: string
  href: string
  external?: boolean
  ariaLabel?: string
}

const ContactCard: React.FC<ContactCardProps> = (props) => {
    return (
        <a href={props.href} className={`${styles.contactCard} fade-up`} target={props.external ? "_blank" : undefined} rel={props.external ? "noopener noreferrer" : undefined}>
            <span className={`${styles.contactCardIcon} ${props.iconClass || ''}`} aria-hidden="true">{props.icon || ''}</span>
            <span className={styles.contactCardLabel}>{props.type}</span>
            <span className={styles.contactCardValue}>{props.href.replace(/^(mailto:|tel:|https?:\/\/)/, '')}</span>
            {props.ariaLabel && <span className="sr-only">{props.ariaLabel}</span>}
        </a>
    )
}

export default ContactCard