import React from "react";

import * as Styles from './styles';

export class ErrorMessage extends React.Component {
  render() {
    return (
      <Styles.ErrorContainer>
        <Styles.ErrorText>Sorry, this page is broken</Styles.ErrorText>
      </Styles.ErrorContainer>
    );
  }
}

export default ErrorMessage;