
import React from 'react';
import style from './Cover.module.css';
import coverVideo from '../../Media/coverVideo.mp4';

const Cover = () => {
  return (
    <div className={style.coverContainer}>
      <video className={style.video} src={coverVideo} autoPlay loop muted />
      <h1>Pablo Daniel Vallejos</h1>
      <p>Frontend | Fullstack Developer </p>
    </div>
  );
};

export default Cover;