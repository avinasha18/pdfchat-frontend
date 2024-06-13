import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import ChatItem from "./ChatItem";
import FileUpload from "../FileUpload";
import { PdfUpload, Filenname, DeleteButton, SendMessageButton, SendMessageInput, SendMessageIcon, Navbar, FileInfo, Logo, MainChatContent, ContentHeader, CurrentChattingUser, ContentBody, ContentFooter, SendNewMessage, SendMsgBtn, ErrorMessage } from "./styledComponents";

const Chat = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [loading, setLoading] = useState(false); // State to handle loading spinner
  const [error, setError] = useState(null); // State to handle API errors

  const updateFiles = (files) => {
    setFile(files[0]);
    setFileName(files[0].name);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFileName("");
    setQuestions([]);
    setCurrentQuestion("");
    setError(null); // Clear any previous errors
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    if (currentQuestion.trim() && file) {
      const formData = new FormData();
      formData.append("files", file);

    
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        { text: currentQuestion, user: "user" },
      ]);
      setLoading(true); // Show loading spinner
      setCurrentQuestion(""); // Clear the input field

      try {
        // Upload the file
        await axios.post('https://pdfchat-backend.onrender.com/upload/', formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // Submit the question
        const response = await axios.post(
          'https://pdfchat-backend.onrender.com/ask/',
          { question: currentQuestion },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Update the chat with the AI's response from Gemini
        setQuestions((prevQuestions) => [
          ...prevQuestions,
          { text: response.data.reply, user: "ai" },
        ]);
      } catch (error) {
        console.error("Error uploading files or asking question:", error);
        setError("Failed to submit question. Please try again later."); // Set error message
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

      {file && (
        <MainChatContent>
          <ContentHeader>
            <div className="blocks">
              <CurrentChattingUser>
                <h1>Ask your Pdf</h1>
              </CurrentChattingUser>
            </div>
            {fileName && (
              <FileInfo>
                <Filenname>{fileName}</Filenname>
                <DeleteButton onClick={handleRemoveFile}>
                  <i className="fa-solid fa-trash" />
                </DeleteButton>
              </FileInfo>
            )}
          </ContentHeader>
          <ContentBody>
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
                  <ThreeDots color="#00BFFF" height={30} width={30} />
                </div>
              )}
              {error && (
                <ErrorMessage>{error}</ErrorMessage>
              )}
            </div>
          </ContentBody>
          <ContentFooter>
            <form onSubmit={handleQuestionSubmit}>
              <SendNewMessage>
                <SendMessageInput
                  type="text"
                  value={currentQuestion}
                  onChange={(e) => setCurrentQuestion(e.target.value)}
                  placeholder="Ask a question about the PDF..."
                  aria-label="Type your question here"
                />
                <SendMessageButton type="submit">
                  <SendMessageIcon className="fa fa-paper-plane" />
                </SendMessageButton>
              </SendNewMessage>
            </form>
          </ContentFooter>
        </MainChatContent>
      )}
    </>
  );
};

export default Chat;
