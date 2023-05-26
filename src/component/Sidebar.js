import styles from "@/styles/Sidebar.module.css";
import React from "react";

const Sidebar = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <a className={styles.text} href={props.title === '학습 종료' ? '/study/shortcut' : ''}><img src={props.image}/>{props.title}</a>
        </div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default Sidebar;
