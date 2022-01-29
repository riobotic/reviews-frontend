
  
import { useState } from "react";
function Show(props) {
  const id = props.match.params.id;
  const review = props.review;
  const rate = rate.find((p) => p._id === id);

  const [editForm, setEditForm] = useState(person);

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateReview(editForm);
    props.history.push("/")
  };

  const removeReview = () => {
      props.deleteReview(rate._id)
      props.history.push("/")
  }

  return (
    <div className="person">
      <h1>{rate.name}</h1>
      <h3>{rate.rating}</h3>
      <h3>{rate.description}</h3>
      <button id="delete" onClick={removeRate}>DELETE</button>
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

export default Show;