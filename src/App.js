import React, {Component} from 'react';
import Navbar from "react-bootstrap/es/Navbar";
import Switch from "react-router-dom/es/Switch";
import {Route} from "react-router";
import RemoteStoreAlternative from "./Table/service/RemoteStore";
import GridMain from "./Grid/GridMain";


class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href={"/Table"}>Table</a>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <a href={"/GridMain"}>Grid</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route path="/Table" component={RemoteStoreAlternative}/>
                    <Route path="/GridMain" component={GridMain}/>
                </Switch>
            </div>
        );
    }
}

export default App;
