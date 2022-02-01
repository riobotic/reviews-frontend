import { useState } from "react";
function Show(props) {
  const id = props.match.params.id;
  const review = props.review;
  const rate = review.find((p) => p._id === id);

  const [editForm, setEditForm] = useState(rate);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateReview(editForm);
    props.history.push("/")
  };

  const removeRate = () => {
      props.deleteReview(rate._id)
      props.history.push("/")
  }

  return (
    <div className="rate">
      <h1>{rate.name}</h1>
      <h2>{rate.description}</h2>
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
          value={editForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input type="submit" value="Update Rate" />
      </form>
    </div>
  );
}

export default Show;