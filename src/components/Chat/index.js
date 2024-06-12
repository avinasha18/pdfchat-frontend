import React, { useState } from 'react';
import axios from 'axios';
import { IoIosSend } from "react-icons/io";
import './index.css'
import { IoIosRemoveCircle } from "react-icons/io";
import { Oval } from 'react-loader-spinner'; // Import the spinner component
import FileUpload from '../FileUpload';
import {
  ChatContainer,
  Navbar,
  Logo,
  FileInfo,
  PdfUpload,
  ChatSection,
  Questions,
  QuestionForm,
  QuestionInput,
  SendButton,
  MessageList,
  MessageItem,
  MessageBubble,
  UserIcon,
  AiIcon
} from './styledComponents';

const Chat = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [loading, setLoading] = useState(false); // State to handle loading spinner

  const updateFiles = (files) => {
    setFile(files[0]);
    setFileName(files[0].name);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFileName('');
    setQuestions([]);
    setCurrentQuestion('');
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    if (currentQuestion.trim() && file) {
      const formData = new FormData();
      formData.append("files", file);

      // Add the user's question to the chat immediately
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        { text: currentQuestion, user: 'user' }
      ]);
      setLoading(true); // Show loading spinner
      setCurrentQuestion(''); // Clear the input field

      try {
        // Upload the file
        await axios.post("/upload/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // Submit the question
        const response = await axios.post("/ask/", { question: currentQuestion }, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Update the chat with the AI's response
        setQuestions((prevQuestions) => [
          ...prevQuestions,
          { text: response.data.reply, user: 'ai' }
        ]);
      } catch (error) {
        console.error("Error uploading files or asking question:", error);
      } finally {
        setLoading(false); // Hide loading spinner
      }
    }
  };

  return (
    <ChatContainer>
      <Navbar>
        <Logo src="ai.svg" alt="Company Logo" />
        {fileName && (
          <FileInfo>
            <span>{fileName}</span>
            <IoIosRemoveCircle className="fas fa-times" onClick={handleRemoveFile} />
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
        <ChatSection>
          <Questions>
            <MessageList>
              {questions.map((question, index) => (
               <MessageItem key={index} className={`message ${question.user}`}>
               {question.user === 'user' && <UserIcon />}
               {question.user === 'ai' && <AiIcon />}
               <div className="message-bubble">
                 <MessageBubble user={question.user}>{question.text}</MessageBubble>
               </div>
             </MessageItem>
              ))}
              {loading && (
                <div style={{ textAlign: 'center' }}>
                  <Oval color="#00BFFF" height={30} width={30} />
                </div>
              )}
            </MessageList>
          </Questions>
          <QuestionForm onSubmit={handleQuestionSubmit}>
  <div className="input-wrapper">
    <QuestionInput
      type="text"
      value={currentQuestion}
      onChange={(e) => setCurrentQuestion(e.target.value)}
      placeholder="Ask a question about the PDF..."
      aria-label="Type your question here"
    />
  </div>
  <button type="submit" className="send-button">
    <IoIosSend />
  </button>
</QuestionForm>
        </ChatSection>
      )}
    </ChatContainer>
  );
};

export default Chat;
