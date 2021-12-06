import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewNote() {
  const [tags, setTags] = useState("");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setTags(event.target.value);
  };
  const handleClick = () => {
    axios
      .post("http://localhost:3001/note", {
        tags: tags,
        note: value,
      })
      .then((res) => {
        navigate("/");
      });
  };

  return (
    <div style={{ margin: "20px 30px" }}>
      <h1>New Post</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          style={{ marginBottom: "10px", width: "500px" }}
          id="tags-input"
          size="large"
          label="Tags"
          variant="standard"
          value={tags}
          onChange={handleChange}
        />
        <Button
          style={{ height: "80%" }}
          variant="contained"
          onClick={handleClick}
        >
          Save
        </Button>
      </div>
      <MDEditor hideToolbar height={"500"} value={value} onChange={setValue} />
    </div>
  );
}

export default NewNote;
