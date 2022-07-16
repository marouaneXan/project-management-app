import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Client from "./components/Client";
import AddClientModal from "./components/AddClientModal";
const client=new ApolloClient({
  uri:"http://localhost:5000/graphql",
  cache:new InMemoryCache()
})
function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <AddClientModal/>
        <Client/>
      </div>
    </ApolloProvider>
    </>
  );
}

export default App;
