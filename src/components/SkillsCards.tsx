import React from "react";
import styles from "./SkillsCards.module.css";
import { skillsCardData, type SkillGroup } from "../data/skillsCardData";

type SkillsCardsProps = {
  data?: SkillGroup[];
  className?: string;
};

export const SkillsCards: React.FC<SkillsCardsProps> = ({
  data = skillsCardData,
  className,
}) => {
  return (
    <div className={[styles.grid, className].filter(Boolean).join(" ")}>
      {data.map((group) => (
        <section
          key={group.id}
          className={styles.card}
          aria-labelledby={`skills-card-${group.id}`}
        >
          <h3 id={`skills-card-${group.id}`} className={styles.title}>
            {group.title}
          </h3>

          <div className={styles.chipList}>
            {group.items.map((item) => {
              const chipClass = [
                styles.chip,
                item.plain ? styles.chipPlain : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <span key={`${group.id}-${item.label}`} className={chipClass}>
                  {item.iconClass ? (
                    <i
                      className={`${item.iconClass} ${styles.icon}`}
                      aria-hidden="true"
                    />
                  ) : null}
                  <span>{item.label}</span>
                </span>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SkillsCards;