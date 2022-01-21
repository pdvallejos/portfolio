import React from 'react';
import style from './About.module.css';
import foto from '../../Media/foto.png';

const About = () => {
  return <div className={style.aboutContainer}>
      <div className={style.about_description}>
          <h3>Let me tell you something about me</h3>
          <p>Algo sobre mi jajajajajja</p>
      </div>
      <div className={style.about_img}>
        <img src={foto} alt="picture personal" />
      </div>
  </div>;
};

export default About;
