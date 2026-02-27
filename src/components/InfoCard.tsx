import styles from './InfoCard.module.css'
import React from 'react'

interface InfoCardProps {
  primaryText: string
  secondaryText?: React.ReactNode
  ariaLabel?: string
}

const InfoCard: React.FC<InfoCardProps> = (props) => {
  return (
    <div className={`${styles.infoCard} fade-up`} role="region" aria-label={props.ariaLabel || "Information card"}>
        <div className={styles.infoDot} aria-hidden="true"></div>
        <p className={styles.infoText}><strong>{props.primaryText}</strong></p>
        {
            props.secondaryText && <p className={styles.infoText}>{props.secondaryText}</p>
        }
    </div>
    )
}

export default InfoCard