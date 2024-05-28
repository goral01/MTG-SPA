import { Component } from "react";
import Header from "../components/header/Header";
import Main from "../components/content/Main";

import s from "./Home.module.scss";

class Home extends Component {
    render() {
        return (
            <div className={s.root}>
                <div className={s.container}>
                    <Header />
                    <Main />
                </div>
            </div>
        );
    }
}

export default Home;
