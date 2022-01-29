
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
    return props.reviews.map((rate) => (
      <div key={rate._id} className="rate">
        <Link to={`/reviews/${rate._id}`}>
          <h1>{rate.name}</h1>
        </Link>
        <h2>{rate.rating}</h2>
        <h3>{rate.description}</h3>
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
        <input type="submit" value="Create Review" />
      </form>
      {props.reviews ? loaded() : loading()}
    </section>
  )
}

export default Index