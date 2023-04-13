import styles from "./Button.module.css";

const Button = ({ img, text, onClick }) => (
  <div onClick={onClick} className={styles.Button}>
    <img src={img} />
    <span className="buttonText">{text}</span>
  </div>
);

export default Button;
