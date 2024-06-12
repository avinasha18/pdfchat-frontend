import React, { useState } from "react";
import axios from "axios";
import {ThreeDots} from "react-loader-spinner";
import ChatItem from "./ChatItem";
import FileUpload from "../FileUpload";
import "./index.css";
import { PdfUpload,Navbar,FileInfo,Logo } from "./styledComponents";

const Chat = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [loading, setLoading] = useState(false); // State to handle loading spinner

  const updateFiles = (files) => {
    setFile(files[0]);
    setFileName(files[0].name);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFileName("");
    setQuestions([]);
    setCurrentQuestion("");
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    if (currentQuestion.trim() && file) {
      const formData = new FormData();
      formData.append("files", file);

      // Add the user's question to the chat immediately
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        { text: currentQuestion, user: "user" },
      ]);
      setLoading(true); // Show loading spinner
      setCurrentQuestion(""); // Clear the input field

      try {
        // Upload the file
        await axios.post("/upload/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // Submit the question
        const response = await axios.post(
          "/ask/",
          { question: currentQuestion },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Update the chat with the AI's response
        setQuestions((prevQuestions) => [
          ...prevQuestions,
          { text: response.data.reply, user: "ai" },
        ]);
      } catch (error) {
        console.error("Error uploading files or asking question:", error);
      } finally {
        setLoading(false); // Hide loading spinner
      }
    }
  };

  return (
    <>
    <Navbar>
        <Logo src="ai.svg" alt="Company Logo" />
        {fileName && (
          <FileInfo>
            <span>{fileName}</span>
          </FileInfo>
        )}
      </Navbar>
        
      {!file && (
        <PdfUpload>
          <FileUpload
            label="Upload PDF"
            updateFilesCb={updateFiles}
            accept=".pdf"
            multiple={false}
          />
        </PdfUpload>
      )}
{
  file && (
 
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <h1>Ask your Pdf</h1>
            </div>
          </div>
          {fileName && (
            <div className="file-info">
              <span>{fileName}</span>
              <button  onClick={handleRemoveFile}>
            <i class="fa-solid fa-trash"/>
            </button>         
            </div>
          )}
        </div>
        <div className="content__body">
          <div className="chat__items">
            {questions.map((question, index) => (
              <ChatItem
                key={index}
                animationDelay={index + 2}
                user={question.user}
                msg={question.text}
              />
            ))}
            {loading && (
              <div style={{ textAlign: "center" }}>
                <ThreeDots  color="#00BFFF" height={30} width={30} />
              </div>
            )}
          </div>
        </div>
        <div className="content__footer">
        <form onSubmit={handleQuestionSubmit}>
            <div className="sendNewMessage">
              <input
                type="text"
                value={currentQuestion}
                onChange={(e) => setCurrentQuestion(e.target.value)}
                placeholder="Ask a question about the PDF..."
                aria-label="Type your question here"
              />
              <button
                className="btnSendMsg"
                id="sendMsgBtn"
                type="submit"
              >
                <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
         
  )

}
    </>
  );
};

export default Chat;
