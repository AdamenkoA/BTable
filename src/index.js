import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import RemoteStoreAlternative from "./service/RemoteStore";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './bootstrap4.min.css'

ReactDOM.render(<RemoteStoreAlternative/>, document.getElementById('root'));
registerServiceWorker();
