import React from 'react';
import { connect } from 'dva';
import styles from './UsersPage.css';
import Users from '../components/User/Users';
import MainLayout from '../components/MainLayout/MainLayout';

function UsersPage({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <Users />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(UsersPage);
