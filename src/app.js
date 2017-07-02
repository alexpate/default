import React from 'react';
import ReactDOM from 'react-dom';
import {injectGlobal} from 'styled-components';
import {normalize} from 'polished';

injectGlobal`${normalize()}`

import PatternGroup from 'components/pattern-group';

const App = () => {
  return (
    <PatternGroup />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
