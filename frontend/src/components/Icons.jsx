// Icons.jsx
import React from 'react';
import styles from './Header.module.css';
import Icon from './Icon';

 function Icons() {
  return (
    <div className={styles.icons}>
      <Icon iconName="yoga" link="lien_vers_page_yoga" />
      <Icon iconName="swimm" link="lien_vers_page_nage" />
      <Icon iconName="velo" link="lien_vers_page_velo" />
      <Icon iconName="muscu" link="lien_vers_page_musculation" />
    </div>
  );
}
export default Icons;
