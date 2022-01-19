import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../components/lib/api";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
    const history = useHistory();
    const {sendRequest , status} = useHttp(addQuote);
    
    useEffect(()=>{
        if(status==='completed'){
            history.push('/quotes');
        }
    },[status,history]);
    
    const newQuoteHandler = (quoteData) =>{
        // console.log(quoteData);
        sendRequest(quoteData);
    }

    return (
        <QuoteForm isLoading={status==='pending'} onAddQuote={newQuoteHandler}/>
    )

}

export default NewQuote;