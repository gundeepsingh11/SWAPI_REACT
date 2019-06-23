import React from 'react';
import withStyles from '../../../utility/withStyles';
import styles from './Header.style';
import Picture from '../../atoms/Picture';
import { withRouter } from 'react-router-dom';

const Header = ({ className, history, logOut }) => {
  const logoutUser = () => {
    localStorage.removeItem('userLogIn');
    return history.push('/');
  };

  return (
    <header className={className}>
      <div className="container">
        <div className="row middle-xs center-xs">
          <div className="col-xs search search-icon">
            <Picture
              className="search"
              largeImage="/static/img/search-icon.jpg"
              smallIamge="/static/img/search-icon.jpg"
              alt="search-planet"
            />
          </div>
          <Picture
            className="col-xs header-logo"
            largeImage="/static/img/Star-Wars-transparent-logo.png"
            smallIamge="/static/img/Star-Wars-transparent-logo.png"
          />

          <div
            className="col-xs end-xs search-icon"
            onClick={() => logoutUser()}>
            {logOut && (
              <Picture
                className="logout"
                largeImage="/static/img/logout.png"
                smallIamge="/static/img/logout.png"
                alt="logOut"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(withStyles(Header, styles));
