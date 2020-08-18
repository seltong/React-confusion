import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
    }).format(new Date(Date.parse(date)));
}

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
    if (comments != null) {
        const listComments = comments.map((comment) => {
            return (
                <div className="Comment">
                    <p className="Comment-text">{comment.comment}</p>
                    <p className="Comment-date">
                        -- {comment.author}, {formatDate(comment.date)}
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

const Dishdetail = (props) => {
    const dish = props.dish;

    if (dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 mt-1">
                        <RenderDish dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        <RenderComments comments={dish.comments} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default Dishdetail;
