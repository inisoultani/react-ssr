import React from 'React';
import { connect } from 'react-redux';
import { fetchCurrentUserAsync } from '../../redux/authSlice';
import HomePage from '../pages/HomePage';
import { Redirect } from 'react-router';

const auth = (ChildComponent) => {
  const ComposedComponent = (props) => {
    // console.log(props);

    const renderComponent = () => {
      if (props.location.pathname === '/admins' && props.auth.currentUser) {
        return <ChildComponent {...props} />;
      }

      return <Redirect to="/" />;
    };

    return <React.Fragment>{renderComponent()}</React.Fragment>;
  };

  const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    };
  };

  return connect(mapStateToProps, { fetchCurrentUserAsync })(ComposedComponent);
};

export default auth;
