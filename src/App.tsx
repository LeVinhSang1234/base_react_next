import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Route from "./routes/Route";
import store from "./sagas/store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Route />
        </BrowserRouter>
      </Layout>
    </Provider>
  );
}

export default App;
