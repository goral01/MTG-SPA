import { Component } from "react";

import s from "./Watch.module.scss"

interface WatchProps {
    format?: "12" | "24";
}

interface WatchState {
    currentTime: string;
}

class Watch extends Component<WatchProps, WatchState> {
    timer!: number;

    constructor(props: WatchProps) {
        super(props);
        this.state = {
            currentTime: this.getCurrentTime(),
        };
    }

    componentDidMount() {
        
        this.timer = window.setInterval(() => {
            this.setState({
                currentTime: this.getCurrentTime(),
            });
        }, 1000);
    }

    componentWillUnmount() {
      
        window.clearInterval(this.timer);
    }

    getCurrentTime(): string {
        
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        
        if (this.props.format === "12") {
            hours = hours % 12 || 12;
        }
        const formattedHours = String(hours).padStart(2, "0");

       
        return `${formattedHours}:${minutes}:${seconds}`;
    }

    render() {
        return <div className={s.root}>{this.state.currentTime}</div>;
    }
}

export default Watch;
