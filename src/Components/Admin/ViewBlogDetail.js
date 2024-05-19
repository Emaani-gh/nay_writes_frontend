import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const ViewBlogDetail = () => {
  const api = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({});
  const [categ, setCateg] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [removeImage, setRemoveImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const navigate = useNavigate();

  const fetchCateg = async () => {
    const res = await axios.get(`${api}/categories`);
    setCateg(res.data);
  };

  const { id } = useParams();
  const fetchBlog = async () => {
    const res = await axios.get(`${api}/blogs/${id}`);
    setFormData(res.data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    fetchCateg();
    fetchBlog();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const dataToSend = new FormData();

    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }

    // Append the removeImage flag to the form data if image removal is requested
    if (removeImage) {
      dataToSend.append("removeImage", true);
    } else {
      dataToSend.append("image", imageFile);
    }

    try {
      const res = await axios.put(`${api}/blogs/${id}`, dataToSend);

      if (res.status === 200) {
        setFormData({});
        navigate("/admin/blogs");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGetContent = (event, editor) => {
    const content = editor.getData();
    setFormData({ ...formData, content });
  };

  useEffect(() => {
    if (formData.content) {
      setEditorContent(formData.content);
    }
  }, [formData.content]);

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
          <h2 className="heading">Edit Blog</h2>
          <form className="create-blog-form" onSubmit={(e) => handleSubmit(e)}>
            {loading ? (
              <div className="sweet-loading">
                <RingLoader
                  css={override}
                  size={150}
                  color={"#123abc"}
                  loading={loading}
                />
              </div>
            ) : (
              <>
                <div className="input-group">
                  <div className="form-group">
                    <label>Title:</label>
                    <input
                      type="text"
                      name="title"
                      required
                      value={formData.title || ""}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Blogger:</label>
                    <input
                      type="text"
                      name="blogger"
                      required
                      value={formData.blogger || ""}
                      onChange={(e) => handleChange(e)}
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
                    data={editorContent}
                    required
                    onChange={(event, editor) => {
                      handleGetContent(event, editor);
                    }}
                    onReady={(editor) => {}}
                  />
                </div>

                {/* Conditionally render image preview based on removeImage state */}
                {!removeImage && (
                  <div className="form-group">
                    <label>Image Preview:</label>
                    {(previewImage || formData.image) && (
                      <div className="imgPreview">
                        <img
                          src={previewImage || formData.image}
                          alt="Blog Preview"
                        />
                      </div>
                    )}
                  </div>
                )}

                <div className="form-group">
                  <label>Choose a Different Image:</label>
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={(e) => handleImageChange(e)}
                  />
                </div>

                <div className="form-group">
                  <label>Remove Image:</label>
                  <input
                    type="checkbox"
                    name="removeImage"
                    checked={removeImage}
                    onChange={(e) => setRemoveImage(e.target.checked)}
                  />
                </div>

                <button type="submit">Update Blog</button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ViewBlogDetail;
