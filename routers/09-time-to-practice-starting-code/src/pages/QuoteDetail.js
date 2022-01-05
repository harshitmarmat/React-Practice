import { Fragment } from "react";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments"
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
    const DummyData = [
        {id:'q1', author : 'Harshit' , text : 'One should always be a learner!'},
        {id:'q2', author : 'Marmat' , text : 'One day all hard-work will pay off!'}
    ];

    const param = useParams();
    const quote = DummyData.find((quoteItem)=> quoteItem.id === param.quoteId);

    if(!quote){
        return (<p>No quote found!</p>)
    }
    console.log(quote);
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author = {quote.author} />
            <Route path={`/quotes/${param.quoteId}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`/quotes/${param.quoteId}/comment`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`/quotes/${param.quoteId}/comment`}>
                <Comments />
            </Route>
        </Fragment>
    )

}

export default QuoteDetail;