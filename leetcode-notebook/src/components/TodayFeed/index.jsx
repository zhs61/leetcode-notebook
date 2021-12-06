import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";

function TodayFeed() {
  const [value, setValue] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3001/").then((res) => {
      let result = "";
      res.data.forEach((record) => {
        result += record.note;
        result += "\n---\n";
      });
      setValue(result);
    });
  }, []);

  return <MDEditor.Markdown source={value} />;
}

export default TodayFeed;
