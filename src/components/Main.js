import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props) {
  const [review, setReview] = useState(null)

  const URL = "https://reviews-backend-mr.herokuapp.com/reviews"

  const getReview = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setReview(data)
  }

  const createReview = async (rate) => {
    // make post request to create Review
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(rate),
    })
    // update list of Review
    getReview()
  }

  const updateReview = async (rate, id) => {
    // make put request to create Review
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(rate),
    })
    // update list of Review
    getReview()
  }

  const deleteReview = async (id) => {
    // make delete request to create Review
    await fetch(URL + id, {
      method: "DELETE",
    })
    // update list of Review
    getReview()
  }

  useEffect(() => getReview(), [])

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
  )
}

export default Main