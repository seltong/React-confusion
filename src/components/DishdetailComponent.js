import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
} from "reactstrap";

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    formatDate(date) {
        return date.toLocaleDateString();
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        if (comments != null) {
            const listComments = comments.map((comment) => {
                let date = " " + new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                }).format(comments.date);

                return (
                    <div className="Comment">
                        <p className="Comment-text">{comment.comment}</p>
                        <p className="Comment-date">
                            -- {comment.author}, {date}
                        </p>
                    </div>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <div className="list-unstyled">
                        {listComments}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dish;

        return (
            <div className="row">
                <div className="col-12 col-md-5 mt-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 mt-1">
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }
}

export default Dishdetail;
