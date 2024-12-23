import React from 'react';
import styles from './style.module.css';

const InputField = ({ type, placeholder, value, onChange }) => {
  if (type === 'textarea') {
    return <textarea className={styles.textAreaInput} placeholder={placeholder} value={value} style={{resize:'none', height: '110px'}} onChange={onChange}></textarea>;
  }
  return <input type={type} className={styles.input} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default InputField;
