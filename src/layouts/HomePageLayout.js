import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import SideBarContainer from '../containers/SideBarContainer';
import IssueListContainer from '../containers/IssueListContainer';

import { getBEMClasses } from '../helpers/cssClassesHelper';
import '../styles/homePageLayout.css';

const homePageLayoutClasses = getBEMClasses('main-layout');

class HomePageLayout extends React.Component {
  render() {
    return (
      <React.Fragment>

        <div className={homePageLayoutClasses('container')}>

          <div className={homePageLayoutClasses('header')}>
            <HeaderContainer />
          </div>

          <div className={homePageLayoutClasses('body')}>
            <div className={homePageLayoutClasses('body-left')}>
              <SideBarContainer />
            </div>
            <div className={homePageLayoutClasses('body-right')}>
              <IssueListContainer />
            </div>
          </div>

          <div className={homePageLayoutClasses('footer')}>
            <div className={homePageLayoutClasses('footer-row')}>
              <div className={homePageLayoutClasses('placeholder')} />
            </div>
          </div>

        </div>
        
      </React.Fragment>
    );
  }
}

export default HomePageLayout;
