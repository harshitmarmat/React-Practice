import QuoteList from "../components/quotes/QuoteList";

const DummyData = [
    {id:'q1', author : 'Harshit' , text : 'One should always be a learner!'},
    {id:'q2', author : 'Marmat' , text : 'One day all hard-work will pay off!'}
]
const AllQuote = () => {
    return (
        <QuoteList quotes={DummyData} />
    )
}

export default AllQuote;