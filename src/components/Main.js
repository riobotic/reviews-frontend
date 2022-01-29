import { useEffect, useState } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';

function Main(props) {
  const [reviews, setReview] = useState(null)

  const URL = "http://localhost:3000/"

  const getReview = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setReview(data);
  };

  const createReview = async (person) => {
    // make post request to create Review
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    });
    // update list of Review
    getReview();
  };

  const updateReview = async (rate, id) => {
    // make put request to create Review
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(rate),
    });
    // update list of Review
    getReview()
  };

  const deleteReview = async (id) => {
    // make delete request to create Review
    await fetch(URL + id, {
      method: "DELETE",
    })
    // update list of Review
    getReview()
  };

  useEffect(() => getReview(), [])

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index reviews={reviews} createReview={createReview} />
        </Route>
        <Route
          path="/review/:id"
          render={(rp) => (
            <Show
              reviews={reviews}
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