import { BrowserRouter, Route, Switch } from "react-router-dom";
import Shadow from "./containers/CSS_SHADOWS/Shadow";
import IndexLayout from "./layouts/IndexLayout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IndexLayout>
          <Switch>

            <Route path='/css-shadow'>
              <Shadow />
            </Route>

            <Route path='/css-gradient'>
              <p>Css Gradients</p>
            </Route>

            <Route path="/">
              <p>Home</p>
            </Route>

          </Switch>
        </IndexLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
