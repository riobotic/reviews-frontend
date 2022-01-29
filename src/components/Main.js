import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [reviews, setReview] = useState(null);

  const URL = "http://localhost:4000/reviews/";

  const getReview = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setReview(data);
  };

  const createReview = async (rate) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rate),
    });
    getReview();
  };

  const updateReview = async (rate) => {
    await fetch(URL + rate._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rate),
    });
    getReview();
  };

  const deleteReview = async (id) => {
    await fetch(URL + id, {
      method: "delete",
    });
    getReview();
  };

  useEffect(() => getReview(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index review={review} createReview={createReview} />
        </Route>
        <Route
          path="/reviews/:id"
          render={(rp) => (
            <Show
              review={review}
              updateReview={updateReview}
              deleteReview={deleteReview}
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;