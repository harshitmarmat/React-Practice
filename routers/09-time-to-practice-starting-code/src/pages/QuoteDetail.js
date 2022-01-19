import { Fragment, useEffect } from "react";
import { Link, Route, useParams ,useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments"
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../components/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
    const match = useRouteMatch();
    const param = useParams();
    const {quoteId} = param; 
    const {sendRequest , status , error , data: loadedData} = useHttp(getSingleQuote,true);

    useEffect(()=>{
        sendRequest(quoteId);
    },[sendRequest,quoteId]);

    if(status==='pending'){
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }
    if(error){
        return<p className="centered focused">{error}</p>
    }


    if(!loadedData.text){
        return (<p>No quote found!</p>)
    }
    console.log(match);
    return (
        <Fragment>
            <HighlightedQuote text={loadedData.text} author = {loadedData.author} />
            <Route path={match.url} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comment`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comment`}>
                <Comments />
            </Route>
        </Fragment>
    )

}

export default QuoteDetail;