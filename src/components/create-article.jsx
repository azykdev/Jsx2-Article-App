import { useState } from "react";
import ArticleService from "../service/article";

function CreateArticle() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    body: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(form);
      // const res = await ArticleService.createArticle(form);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ minHeight: "90vh" }}
      className="bg-light d-flex justify-content-center align-items-center"
    >
      <div style={{ width: 500 }}>
        <h1>Create Article</h1>
        <form>
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            required
            minLength={5}
            maxLength={50}
            onChange={handleChange}
            name="title"
            value={form.title}
          />
          <input
            type="text"
            placeholder="Description"
            className="form-control my-3"
            required
            minLength={5}
            maxLength={50}
            onChange={handleChange}
            name="description"
            value={form.description}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter Article Content"
            className="form-control my-3"
            style={{ resize: "none", height: "100px" }}
            required
            minLength={10}
            maxLength={1000}
            onChange={handleChange}
            name="body"
            value={form.body}
          ></textarea>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateArticle;
