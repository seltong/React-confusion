import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
} from "reactstrap";

class Dishdetail extends Component {

    formatDate(date) {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit"
        }).format(new Date(Date.parse(date)));
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
        
    }

    renderComments(dish) {
        if(dish != null) {
            let comments = dish.comments;

            if (comments != null) {
                const listComments = comments.map((comment) => {
                    return (
                        <div className="Comment">
                            <p className="Comment-text">{comment.comment}</p>
                            <p className="Comment-date">
                                -- {comment.author}, {this.formatDate(comment.date)}
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
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dish;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 mt-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        {this.renderComments(dish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dishdetail;
