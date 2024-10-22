import styles from '../styles/career.module.css';

const CareerSection = () => {
    const careerData = [
        {
            companyName: "Telepix Co., Ltd.",
            companyLogo: "/icons/telepixLogo.svg",
            position: "BackEnd Engineer",
            duration: "2023.07 ~ Present",
            projects: [
                {
                    name: "Sea color visualization platform",
                    description: "Developing RESTful API using Python and FastAPI",
                    description2: "Building a database using PostgreSQL",
                },
                {
                    name: "~~~",
                    description: "~~~",
                    description2: "~~~",
                }
            ]
        },
        {
            companyName: "RMSoft Co., Ltd.",
            companyLogo: "/icons/rmsoftLogo.svg",
            position: "Web Developer",
            duration: "2022.11 ~ 2023.06",
            projects: [
                {
                    name: "~~~",
                    description: "~~~",
                    description2: "~~~",
                },
                {
                    name: "~~~",
                    description: "~~~",
                    description2: "~~~",
                }
            ]
        }
    ];

    return (
        <div>
            {careerData.map((career, index) => (
                <div className={styles.careerContainer} key={index}>
                    <div className={styles.careerContent}>
                        <div className={styles.careerLeft}>
                            <img src={career.companyLogo} alt={`${career.companyName} logo`}
                                 className={styles.companyLogo}/>
                            <h3 className={styles.companyName}>{career.companyName}</h3>
                        </div>
                        <div className={styles.careerRight}>
                            <p className={styles.careerPositionDuration}>{career.position} ({career.duration})</p>
                            {career.projects.map((project, projectIndex) => (
                                <div key={projectIndex}>
                                    <h4>{project.name}</h4>
                                    <p className={styles.description}>{project.description}</p>
                                    <p className={styles.description}>{project.description2}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CareerSection;
