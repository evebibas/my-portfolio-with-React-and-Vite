// import React from 'react';
import { getImageUrl } from '../../utils';
import  styles  from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I am Eve 
            </h1>
            <p className={styles.description}>
            I am a full stack developer with 3 years of experience using React and NodeJs, 
            along with expertise in Apex Development, Lightning Web Components (LWC), Visualforce Pages, 
            Integration, Configuration and Customization. Reach out if youd like to learn more!
            </p>
            <a href="mailto:eve.bibas@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
      <img src = {getImageUrl("hero/heroImage.png")} alt = "hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
        
    </section>
  )
}