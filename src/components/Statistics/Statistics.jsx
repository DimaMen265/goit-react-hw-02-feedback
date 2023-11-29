import styles from "./Statistics.module.css";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={styles.listStatistics}>
            <li>
                <p>Good: {good}</p>
            </li>
            <li>
                <p>Neutral: {neutral}</p>
            </li>
            <li>
                <p>Bad: {bad}</p>
            </li>
            <li>
                <p>Total: {total}</p>
            </li>
            <li>
                <p>Positive feedback: {positivePercentage}%</p>
            </li>
        </ul>
    );
};
