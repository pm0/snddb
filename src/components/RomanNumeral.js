import React from 'react';
import * as styles from './RomanNumeral.module.scss';

const ROMAN_NUMERALS = [null, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

const RomanNumeral = ({ value }) => {
  return <div className={styles.root}>{ROMAN_NUMERALS[value]}</div>;
};

export default RomanNumeral;
