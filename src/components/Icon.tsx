import styles from "../styles/Icon.module.css";

interface IconProps {
    name: string;
    iconSrc: string;
}

const Icon = ({ name, iconSrc }: IconProps) => {
    return (
        <div className={styles.iconContainer}>
            <img
                className={styles.homeContentIcon}
                src={iconSrc}
                alt={name}
                width="100"
                height="100"
            />
            <p className={styles.homeContentIconName}>{name}</p>
        </div>
    );
};

export default Icon;
