import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import AdminHeader from "./AdminHeader";
import { IoIosArrowRoundBack } from "react-icons/io";

const CreateBlog = () => {
  const api = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name } = e.target;

    if (name === "image") {
      const file = e.target.files[0];
      setFormData({ ...formData, [name]: file });
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      const value = e.target.value;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();

    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }

    try {
      const res = await axios.post(`${api}/blogs`, dataToSend);

      if (res.status === 200) {
        setFormData({});
        navigate("/admin/blogs");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleGetContent = (event, editor) => {
    const content = editor.getData();
    setFormData({ ...formData, content });
  };

  return (
    <>
      <AdminHeader />
      <div className="container">
        <div className="icon-div">
          <IoIosArrowRoundBack
            size={40}
            color={"#3335b4"}
            className="icon"
            onClick={(e) => {
              navigate(-1);
            }}
          />
          back
        </div>
      </div>

      <div className="container">
        <div className="create-blog-container">
          <h2 className="heading">Create New Blog</h2>
          <form className="create-blog-form" onSubmit={(e) => handleSubmit(e)}>
            {/*  */}

            <div className="input-group">
              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title || ""}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Blogger:</label>
                <input
                  type="text"
                  name="blogger"
                  value={formData.blogger || ""}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <div className="form-group">
                <label>Category:</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category || ""}
                  onChange={(e) => handleChange(e)}
                  required
                />
                {/* <select
                name="category"
                value={formData.category || ""}
                onChange={(e) => handleChange(e)}
                required
              >
                <option value="">Select Category</option>
                {categ.map((c, index) => (
                  <option key={index} value={c.category_name}>
                    {c.category_name}
                  </option>
                ))}
              </select> */}
              </div>
              <div className="form-group">
                <label>Summary:</label>
                <input
                  type="text"
                  name="summary"
                  value={formData.summary || ""}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Content:</label>
              <CKEditor
                id="my-editor"
                editor={ClassicEditor}
                data={""}
                required
                config={{ height: 300 }}
                onChange={(event, editor) => {
                  handleGetContent(event, editor);
                }}
                onReady={(editor) => {}}
              />
            </div>
            <div className="form-group">
              <label>Image Preview:</label>
              {formData.image && (
                <div className="imgPreview">
                  <img src={previewImage} alt="Blog Preview" />
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Image:</label>
              <input
                type="file"
                accept="image/*"
                name="image"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button type="submit">Create Blog</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
