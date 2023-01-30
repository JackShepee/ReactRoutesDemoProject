import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is Fun!" },
  { id: "q2", author: "Vi", text: "Learning React is Hard!" },
  { id: "q3", author: "Nick", text: "Learning React is Funtastic!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;
