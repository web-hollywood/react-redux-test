import React from 'react';
import { getBEMClasses } from '../helpers/cssClassesHelper';

import '../styles/components/headerComponent.css';

const headerClasses = getBEMClasses(['header']);

const HeaderComponent = (props, context) => (
  <header className={headerClasses('container')}>
    <h1 className={headerClasses('title')}>Github Issue Management</h1>
  </header>
);

export default HeaderComponent;
