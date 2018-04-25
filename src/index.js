import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './bootstrap4.min.css'
import App from "./App";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById("root"));

/*ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<RemoteStoreAlternative/>, document.getElementById('table'));
ReactDOM.render(<GridMain/>, document.getElementById('grid'));*/
registerServiceWorker();
