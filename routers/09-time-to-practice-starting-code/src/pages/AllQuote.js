import { useEffect } from "react";
import useHttp from "../components/hooks/use-http";
import { getAllQuotes } from "../components/lib/api";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner"
import NoQuotesFound from '../components/quotes/NoQuotesFound'

const AllQuote = () => {
    const {sendRequest , status,error , data : loadedData} = useHttp(getAllQuotes,true);

    useEffect(()=>{
        sendRequest();
    },[sendRequest]);

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

    if(status==='completed' && (!loadedData|| loadedData.length===0)){
        return<NoQuotesFound />
    }

    return (
        <QuoteList quotes={loadedData} />
    )
}

export default AllQuote;