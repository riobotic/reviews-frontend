
import { useState } from "react"
import { Link } from "react-router-dom"

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    rating: "",
    description: "",
  })

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault()
    props.createReview(newForm)
    setNewForm({
      name: "",
      rating: "",
      description: "",
    })
  }


  // loaded function
  const loaded = () => {
    return props.review.map((review) => (
      <div key={review._id} className="review">
        <Link to={`/review/${review._id}`}>
          <h1>{review.name}</h1>
        </Link>
        <h2>{review.rating}</h2>
        <h3>{review.description}</h3>
      </div>
    ))
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.rating}
          name="rating"
          placeholder="rating"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input type="submit" value="Create review" />
      </form>
      {props.review ? loaded() : loading()}
    </section>
  )
}

export default Index