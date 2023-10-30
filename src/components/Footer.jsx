import styles from "./Footer.module.css";
function Footer(props) {
  const companies = ["LEGO", "Shell", "Matas", "Prada"];
  return (
    <footer className={styles.footer}>
      <p>Her er en meget standard footer hvor jeg gerne vil vise {props.contact.email}</p>
      <ul>
        {companies.map((comp) => (
          <Client company={comp} />
        ))}
      </ul>
    </footer>
  );

  function Client(props) {
    return <li>{props.company}</li>;
  }
}

export default Footer;
