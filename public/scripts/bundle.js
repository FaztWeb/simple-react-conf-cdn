'use strict';

// JSX - JAVASCRIPT XML
var template = React.createElement(
    'p',
    null,
    'This is JXS from app.js!'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
