import React from 'react';
import classnames from 'classnames';

class FlashMessage extends React.Component {
  render() {
    const { id, type, text } = this.props.message;
    setTimeout(() => {
      this.props.deleteFlashMessage(id);
    }, 3000);
    return (
      <div className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error'
      })}>
        {text}
      </div>
    );
  }
}


export default FlashMessage;
