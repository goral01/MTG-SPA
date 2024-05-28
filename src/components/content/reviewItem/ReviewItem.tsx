import React from "react";

import s from "./ReviewItem.module.scss";

interface ReviewProps {
    name: string;
    review: string;
    date: string;
}

const getShortName = (name: string): string => {
    const parts = name.split(" ");
    if (parts.length >= 2) {
        const firstName = parts[1][0];
        const lastName = parts[0];
        return `${lastName} ${firstName}.`;
    }
    return name;
};

class Review extends React.Component<ReviewProps> {
    render() {
        const { name, review, date } = this.props;
        const shortName = getShortName(name);

        return (
            <div className={s.root}>
                <h3>{shortName}</h3>
                <p>{review}</p>
                <p>Date: {date}</p>
            </div>
        );
    }
}

export default Review;
