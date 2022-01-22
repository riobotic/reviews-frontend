import { useEffect, useState, useRef } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';

function Main(props) {
  const [reviews, setReview] = useState(null)

  const URL = "http://localhost:3000/reviews/"

  const getReview = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setReview(data)
  }

  const createReview = async (reviews) => {
    // make post request
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(reviews),
    })
    // update list of reviews
    getReview()
  }

  useEffect(() => getReview(), [])

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index reviews={reviews} createReview={createReview} />
        </Route>
        <Route path="/reviews/:id" render={(rp) => <Show {...rp} />} />
      </Switch>
    </main>
  )
}

export default Main