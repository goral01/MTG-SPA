import { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import "./app.css";

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Provider>
            </div>
        );
    }
}

export default App;
