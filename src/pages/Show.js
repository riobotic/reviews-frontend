import { useState } from "react"
function Show(props) {
  const id = props.match.params.id
  const people = props.people
  const person = people.find((p) => p._id === id)

    const [editForm, setEditForm] = useState(person)

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

      const removeReview = () => {
        props.deleteReview(review._id);
        props.history.push("/");
      };


    return (
      <div className="review">
        <h1>{review.name}</h1>
        <h2>{review.rating}</h2>
        <h3>{review.descripton}</h3>
        <button id="delete" onClick={removeReview}>
        DELETE
      </button>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editorm.name}
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