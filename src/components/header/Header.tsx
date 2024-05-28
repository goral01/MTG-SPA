import React, { Component } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store/reducers";
import { changeLanguage } from "../../store/actions/languageActions";
import Watch from "./watch/Watch";

import s from "./Header.module.scss";

interface HeaderProps {
    language: string;
    changeLanguage: (lang: string) => void;
}

class Header extends Component<HeaderProps> {
    handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.props.changeLanguage(e.target.value);
    };

    render() {
        return (
            <header className={s.root}>
                <div className="header-logo">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_P9d88SlhyhMFXjlYJJ_CBsgtKnCh6yuew&s"
                        alt="Logo"
                    />
                </div>
                <div className="language-selector">
                    <select value={this.props.language} onChange={this.handleLanguageChange}  className={s.lang}>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                </div>
                <Watch />
            </header>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    language: state.language,
});

const mapDispatchToProps = {
    changeLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
