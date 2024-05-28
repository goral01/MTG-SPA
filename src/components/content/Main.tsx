import { Component } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store/reducers";
import { fetchReviews } from "../../store/actions/reviewAction";
import Review from "./reviewItem/ReviewItem";

import s from "./Main.module.scss";

const ITEMS_PER_PAGE = 10;

interface MainProps {
    language: string;
    reviews: any;
    fetchReviews: () => void;
}

interface MainState {
    currentPage: number;
}

class Main extends Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
        this.state = {
            currentPage: 1,
        };
    }

    componentDidMount() {
        this.props.fetchReviews();
    }

    handleChangePage = (page: number) => {
        this.setState({ currentPage: page });
    };

    render() {
        const { currentPage } = this.state;
        const { reviews, language } = this.props;

        if (reviews.loading) {
            return <div>Загрузка...</div>;
        }

        if (reviews.error) {
            return <div>Ошибка: {reviews.error}</div>;
        }

        if (!reviews.reviews) {
            return null;
        }

        const clients = reviews.reviews[language];
        const clientKeys = Object.keys(clients);
        const lastIndex = currentPage * ITEMS_PER_PAGE;
        const firstIndex = lastIndex - ITEMS_PER_PAGE;
        const currentClients = clientKeys.slice(firstIndex, lastIndex);

        const totalPages = Math.ceil(clientKeys.length / ITEMS_PER_PAGE);

        return (
            <div className={s.root}>
                <h2>Отзывы</h2>
                <div className={s.container}>
                    {currentClients.map((clientKey, index) => {
                        const client = clients[clientKey];
                        return (
                            <Review
                                key={index}
                                name={client.name}
                                review={client.review}
                                date={client.date}
                            />
                        );
                    })}
                </div>

                <div className={s.pagination}>
                    {currentPage > 1 && (
                        <>
                            <button onClick={() => this.handleChangePage(1)} className={s.btn}>
                                1
                            </button>
                            {currentPage > 2 && currentPage - 2 !== 1 && (
                                <span className={s.dots}>...</span>
                            )}
                        </>
                    )}

                    {Array.from({ length: totalPages }, (_, index) => {
                        if (
                            (index + 1 === currentPage && totalPages !== 1) ||
                            (index + 1 === currentPage - 1 && currentPage > 2) ||
                            (index + 1 === currentPage + 1 && currentPage < totalPages - 1)
                        ) {
                            return (
                                <button
                                    key={index}
                                    onClick={() => this.handleChangePage(index + 1)}
                                    className={`${s.btn} ${index + 1 === currentPage ? s.active : ""}`}
                                >
                                    {index + 1}
                                </button>
                            );
                        }
                        return null;
                    })}

                    {currentPage < totalPages && (
                        <>
                            {currentPage < totalPages - 1 && currentPage + 2 !== totalPages && (
                                <span className={s.dots}>...</span>
                            )}
                            <button onClick={() => this.handleChangePage(totalPages)} className={s.btn}>
                                {totalPages}
                            </button>
                        </>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    language: state.language,
    reviews: state.reviews,
});

const mapDispatchToProps = {
    fetchReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
