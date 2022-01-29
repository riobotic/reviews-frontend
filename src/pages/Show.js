import { useState } from "react"
function Show(props) {
  const id = props.match.params.id
  const reviews = props.reviews
  const rate = reviews.find((p) => p._id === id)

    const [editForm, setEditForm] = useState(rate)

    const handleChange = (event) => {
      setEditForm((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }))
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateReview(editForm);
        props.history.push("/");
      };

      const removeRate = () => {
        props.deleteReview(reviews._id);
        props.history.push("/");
      };


    return (
      <div className="rate">
        <h1>{rate.name}</h1>
        <h2>{rate.rating}</h2>
        <h3>{rate.descripton}</h3>
        <button id="delete" onClick={removeRate}>
        DELETE
      </button>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.rating}
          name="rating"
          placeholder="rating"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input type="submit" value="Update Review" />
      </form>
    </div>
  );
}

export default Show