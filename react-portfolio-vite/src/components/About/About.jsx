import React from 'react';
import { getImageUrl } from '../../utils';
import  styles  from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>

                    <img src = {getImageUrl("about/aboutImage.png")} alt = "about me image" className={styles.aboutImage} style={{ width: "110%" }}/>
                    
                    <ul className={styles.ul}>

                        <li className={styles.li}>
                            <img src={getImageUrl("about/cursorIcon.png")} alt="Image 1" />
                            <h3>Frontend Developer</h3>
                            <p>I’m a front-end developer with experience
                            in building responsive and optimized sites</p>
                        </li>

                        <li className={styles.li}>
                            <img src={getImageUrl("about/serverIcon.png")} alt="Image 2" />
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and
                            optimised back-end systems and APIs</p>
                        </li>

                        <li className={styles.li}>
                            <img src={getImageUrl("about/uiIcon.png")} alt="Image 3" />
                            <h3>Salesforce Developer</h3>
                            <p>I am a Salesforce developer with proficiency 
                                in general programming and development skills.</p>
                        </li>

                    </ul>
            </div>
        </section>
      )
};
