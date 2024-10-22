"use client";

import { useState } from "react";
import styles from "../styles/home.module.css";
import Icon from "../components/Icon";
import Career from "../components/Career";

const Home = () => {
    const [activeCategory, setActiveCategory] = useState("languages");

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    return (
        <div>
            <div className={styles.homeHeader}>
                <div className={styles.headerContainer}>
                    <div className={styles.titleInfo}>
                        <div>
                            <h1 className={styles.homeTitle}>Hi there!</h1>
                            <h1 className={styles.homeSubTitle}>Welcome To My Portfolio!</h1>
                        </div>
                        <div className={styles.additionalInfo}>
                            <p className={styles.additionalDetails}>
                                <span className={styles.label}>Name: </span>
                                <span className={styles.value}>Eundong(Alan) Kim</span>
                            </p>
                            <p className={styles.additionalDetails}>
                                <span className={styles.label}>Date of Birth: </span>
                                <span className={styles.value}>2003. 09. 23.</span>
                            </p>
                            <p className={styles.additionalDetails}>
                                <span className={styles.label}>Phone Number: </span>
                                <span className={styles.value}>+82 (0)10-9946-3524</span>
                            </p>
                            <p className={styles.additionalDetails}>
                                <span className={styles.label}>Email: </span>
                                <span className={styles.value}>edkk1234@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.homeContent}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentInfo}>
                        <div>
                            <h2 className={styles.homeContentTitle}>My Skills.</h2>
                        </div>
                        <div className={styles.categoryButtons}>
                            <button
                                className={activeCategory === "languages" ? styles.active : ""}
                                onClick={() => handleCategoryChange("languages")}
                            >
                                Languages
                            </button>
                            <button
                                className={activeCategory === "frameworks" ? styles.active : ""}
                                onClick={() => handleCategoryChange("frameworks")}
                            >
                                Frameworks
                            </button>
                            <button
                                className={activeCategory === "databases" ? styles.active : ""}
                                onClick={() => handleCategoryChange("databases")}
                            >
                                Databases
                            </button>
                        </div>
                    </div>
                    <div className={styles.iconsContainer}>
                        {iconData[activeCategory].map((icon) => (
                            <div className={styles.iconWrapper} key={icon.name}>
                                <Icon name={icon.name} iconSrc={icon.iconSrc}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.homeContent}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentInfo}>
                        <div>
                            <h2 className={styles.homeContentTitle}>My Career.</h2>
                        </div>
                    </div>
                    <Career />
                </div>
            </div>
        </div>
    );
};

const iconData = {
    languages: [
        {name: "Python", iconSrc: "/icons/python.svg"},
        {name: "JavaScript", iconSrc: "/icons/javascript.svg"},
        {name: "TypeScript", iconSrc: "/icons/typescript.svg"}
    ],
    frameworks: [
        {name: "FastAPI", iconSrc: "/icons/fastapi.svg"},
        {name: "Express", iconSrc: "/icons/express.svg"},
        {name: "NextJS", iconSrc: "/icons/nextjs.svg"}
    ],
    databases: [
        {name: "PostgreSQL", iconSrc: "/icons/postgresql.svg"},
        {name: "MongoDB", iconSrc: "/icons/mongodb.svg"}
    ]
};

export default Home;
