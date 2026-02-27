import styles from './Contact.module.css'
import { contactCardData } from '../data/contactCardData'
import ContactCards from './ContactCards'
import InfoCard from './InfoCard'

function Contact() {
  return (
    <section id="contact" className={styles.contactWrapper} aria-labelledby="contact-heading">
      <div className={styles.contactInner}>
        <h2 id="contact-heading" className={`${styles.sectionTitle} fade-up`}>Get In Touch</h2>
        <div className={`${styles.accentLine} fade-up`} aria-hidden="true"></div>
        <p className="fade-up">
          Based in Brampton, ON and available for Toronto-area and remote opportunities. Whether you have a role to
          discuss or a project in mind &mdash; reach out through any channel below.
        </p>

        <div className={`${styles.contactCards} fade-up`} role="list">
          {contactCardData.map((card, index) => (
              <ContactCards
                key={index}
                icon={card.icon}
                iconClass={card.iconClass}
                type={card.type}
                ariaLabel={card.ariaLabel}
                href={card.href}
                external={card.external}
              />
            ))
          }
        </div>
        <InfoCard primaryText='Open to work' secondaryText='Canada &middot; Onsite &middot; Hybrid &middot; Remote' ariaLabel='Availability status: Open to work in Canada. Onsite, hybrid, or remote. Full-time or contract' />
      </div>
    </section>
  )
}

export default Contact
