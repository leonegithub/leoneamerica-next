"use client";

import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";

const Chatbot = () => {
  const [input, setInput] = useState("");
  interface Message {
    user: string;
    message: string;
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (messages.length === 0) sendMessage("Buongiorno");
  }, [messages]);

  interface FormDataResponse {
    ReturnedObject: string;
  }

  const sendMessage = async (input: string): Promise<void> => {
    setIsLoading(true);
    const newMessages: Message[] = [
      ...messages,
      { user: "user", message: input },
    ];
    setMessages(newMessages);
    setInput("");

    const formData = new FormData();

    formData.append("messaggio", input);

    try {
      const response = await fetch(
        "https://php.leone.it/api/AI/GetAIResponse.php",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
          },
          body: formData,
        }
      );
      const data: FormDataResponse = await response.json();

      setMessages([
        ...newMessages,
        { user: "bot", message: data.ReturnedObject },
      ]);
    } catch (error) {
      console.error("Error fetching APIs", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen ? (
        <div className="chatbot-container" id="little">
          <div className="opening-line">
            <span className="chatbot-title">Assistente Essenza</span>
            <span
              className="close-icon"
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: "pointer" }}
            >
              {isOpen ? (
                <i
                  className="fa-sharp fa-solid fa-angle-down"
                  style={{ color: "#0d4fd1" }}
                ></i>
              ) : (
                <i
                  className="fa-sharp fa-solid fa-angle-up"
                  style={{ color: "#0d4fd1" }}
                ></i>
              )}
            </span>
          </div>
        </div>
      ) : (
        <div className="chatbot-container">
          <div className="opening-line">
            <span className="chatbot-title">Assistente Essenza</span>
            <span
              className="close-icon"
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: "pointer" }}
            >
              {isOpen ? (
                <i
                  className="fa-sharp fa-solid fa-angle-down"
                  style={{ color: "#0d4fd1" }}
                ></i>
              ) : (
                <i
                  className="fa-sharp fa-solid fa-angle-up"
                  style={{ color: "#0d4fd1" }}
                ></i>
              )}
            </span>
          </div>
          <div className="messages">
            {messages.map(
              (message, index) => (
                console.log(
                  `Rendering message at index ${index}, isLoading ${isLoading}`
                ),
                (
                  <div
                    key={index}
                    ref={index === messages.length - 1 ? lastMessageRef : null}
                    className="message-item"
                  >
                    {message.user === "user" && (
                      <span className={index === 0 ? `hidden` : `user`}>
                        {message.message}
                      </span>
                    )}

                    {message.user === "bot" && (
                      <span className="bot">
                        {isLoading && index === messages.length - 1
                          ? (console.log(`Showing loader for index ${index}`),
                            (<div className="loader"></div>))
                          : message.message}
                      </span>
                    )}
                  </div>
                )
              )
            )}
          </div>
          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Chiedimi qualcosa..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            />
            {input.length > 0 ? (
              <button onClick={() => sendMessage(input)}>Invia</button>
            ) : (
              <button disabled>Invia</button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
