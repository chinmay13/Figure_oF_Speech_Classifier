import React, { ChangeEvent, useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import Header from "./Header";
import "./DashboardStyle.css";
import axios from "axios";

const baseURL = "http://localhost:8000/getFOS";

function getFOS(text, setOutput) {
  axios.post(baseURL, { text: text }).then((response) => {
    setOutput(response.data.data[0]);
  });
}

function Dashboard() {
  const [output, setOutput] = useState("");
  const [text, setText] = useState("");
  const handleChange = (e) => {
    // 👇 Store the input value to local state
    setText(e.target.value);
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="input_area">
        <div className="ui input padding_1rem">
          <input
            className="width_40rem"
            type="text"
            id="textInput"
            placeholder="Enter your text here..."
            onChange={handleChange}
            value={text}
          ></input>
        </div>
        <div className="padding_1rem">
          <Button animated onClick={() => getFOS(text, setOutput)}>
            <Button.Content visible>Check Figure of Speech</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </div>
      </div>
      <div className="padding_1rem output-area">
        <div>{output}</div>
      </div>
    </div>
  );
}

export default Dashboard;
