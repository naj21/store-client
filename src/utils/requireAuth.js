import React from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashMessages';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page'
        });
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
      }
    }

    render() {
      if(this.props.isAuthenticated===false){
        return <Redirect to='/login'/>
      }
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }


  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}
