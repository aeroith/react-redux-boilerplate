import React from 'react';

const injectProps = injectedProps => WrappedComponent => props => (
  <WrappedComponent {...injectedProps} {...props} />
);

export default injectProps;
