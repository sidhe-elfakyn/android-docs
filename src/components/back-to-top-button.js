import React from 'react';
import IconButton from '@mapbox/react-icon-button';

export default class BackToTopButton extends React.Component {
  render() {
    return (
      <div className="fixed block none-mm mx24 my24 z5 bottom right">
        <IconButton
          onClick={() => {
            document.documentElement.scrollTop = 0;
          }}
          icon="arrow-up"
          tooltipProps={{
            content: 'Back to top',
            respondsToClick: false,
            receivesFocus: false
          }}
          themeIcon="w36 h36 mx-auto"
          themeButton="btn--blue w60 h60 round-full shadow-darken25"
        />
      </div>
    );
  }
}
