import styles from "./Section.module.css";
import PropTypes from "prop-types";

function Section ({title, children}) {
return (
  <section className={styles.contactBookSection}>
    <h2 className={styles.contactTitle}>{title}</h2>
    {children}
  </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
}

export default Section;