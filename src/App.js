import BookList from "./components/BookList";
import AuthorList from "./components/AuthorsList"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        GraphQ App
        <BookList />
        <AuthorList />
      </div>
    </ApolloProvider>
  );
}

export default App;
