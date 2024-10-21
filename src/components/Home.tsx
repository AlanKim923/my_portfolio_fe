"use client";

import { useState } from "react";
import styles from "../styles/home.module.css";
import Icon from "../components/Icon";

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
                            <h1 className={styles.homeTitle}>안녕하세요.</h1>
                            <h1 className={styles.homeSubTitle}>김은동 포트폴리오인데용</h1>
                        </div>
                        <div className={styles.additionalInfo}>
                            <p className={styles.additionalDetails}>
                                <span className={styles.label}>생년월일: </span>
                                <span className={styles.value}>2003. 09. 23.</span>
                            </p>
                            <p className={styles.additionalDetails}>
                                <span className={styles.label}>전화번호: </span>
                                <span className={styles.value}>010-9946-3524</span>
                            </p>
                            <p className={styles.additionalDetails}>
                                <span className={styles.label}>이메일: </span>
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
                            <h2 className={styles.homeContentTitle}>기술 스택.</h2>
                        </div>
                        <div className={styles.categoryButtons}>
                            <button
                                className={activeCategory === "languages" ? styles.active : ""}
                                onClick={() => handleCategoryChange("languages")}
                            >
                                언어
                            </button>
                            <button
                                className={activeCategory === "frameworks" ? styles.active : ""}
                                onClick={() => handleCategoryChange("frameworks")}
                            >
                                프레임워크
                            </button>
                            <button
                                className={activeCategory === "databases" ? styles.active : ""}
                                onClick={() => handleCategoryChange("databases")}
                            >
                                데이터베이스
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
        {name: "Express", iconSrc: "/icons/express.svg"}
    ],
    databases: [
        {name: "PostgreSQL", iconSrc: "/icons/postgresql.svg"},
        {name: "MongoDB", iconSrc: "/icons/mongodb.svg"}
    ]
};

export default Home;
