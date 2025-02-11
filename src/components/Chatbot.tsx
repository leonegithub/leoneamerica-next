"use client";

import React, { useState, useRef, useEffect } from "react";
import parse from "html-react-parser";
import "./chatbot.css";

interface Message {
  user: string;
  message: string;
}

const Chatbot = () => {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
    /*  if (messages.length === 0) {
      sendMessage("Hello");
    } */
  }, [messages]);

  interface BackendMessage {
    utente: string;
    LeonIA: string;
    Data: string;
  }

  interface FormDataResponse {
    ExitCode: number;
    ExitDescription: string | null;
    ReturnedObject: BackendMessage[];
    ReturnedError: string[];
  }

  useEffect(() => {
    async function fetchConversation(init: boolean = false) {
      const formData = new FormData();
      formData.append("progetto", "lis2025");
      formData.append("ip", "222.222.222");
      /*  async function getIPFromAmazon() {
        try {
          const res = await fetch("https://checkip.amazonaws.com/");
          const data = (await res.text()).trim();
          console.log(data);
          formData.append("ip", data);
        } catch (error) {
          console.error("Error fetching IP address", error);
        }
      }
      await getIPFromAmazon(); */
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

        if (data.ExitCode === 0) {
          const conversationFromBackend = data.ReturnedObject.flatMap(
            (item) => [
              { user: "user", message: item.utente },
              { user: "bot", message: item.LeonIA },
            ]
          );
          const helpMessage = conversationFromBackend.find(
            (msg) => msg.message === "How can I help you"
          );
          const filtered = conversationFromBackend.filter(
            (msg) => msg.message !== "How can I help you"
          );
          for (let i = filtered.length - 1; i >= 0; i--) {
            if (
              filtered[i].user === "user" &&
              filtered[i].message.trim() === ""
            ) {
              filtered.splice(i, 1);
            }
          }
          if (helpMessage) {
            filtered.unshift(helpMessage);
          }
          setMessages(filtered);
        } else {
          console.error("Backend error:", data.ReturnedError.join(", "));
        }
      } catch (error) {
        console.error("Error fetching conversation", error);
      }
    }
    fetchConversation(true);
  }, []);

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
    formData.append("progetto", "lis2025");
    formData.append("ip", "222.222.222");

    /*  async function getIPFromAmazon() {
      try {
        const res = await fetch("https://checkip.amazonaws.com/");
        const data = await res.text();
        console.log(data);
        formData.append("ip", data);
      } catch (error) {
        console.error("Error fetching IP address", error);
      }
    }
    await getIPFromAmazon(); */

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

      const conversationFromBackend = data.ReturnedObject.flatMap((item) => [
        { user: "user", message: item.utente },
        { user: "bot", message: item.LeonIA },
      ]);
      const helpMessage = conversationFromBackend.find(
        (msg) => msg.message === "How can I help you"
      );
      const filtered = conversationFromBackend.filter(
        (msg) => msg.message !== "How can I help you"
      );
      for (let i = filtered.length - 1; i >= 0; i--) {
        if (filtered[i].user === "user" && filtered[i].message.trim() === "") {
          filtered.splice(i, 1);
        }
      }
      if (helpMessage) {
        filtered.unshift(helpMessage);
      }
      setMessages(filtered);
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
          <i
            style={{
              cursor: "pointer",
              backgroundColor: "var(--colore-primario)",
              padding: "10px",
              borderRadius: "30px",
              color: "white",
              textAlign: "center",
            }}
            onClick={() => setIsOpen(!isOpen)}
            className="fa-regular fa-message fa-2x"
          ></i>

          {/*     <span
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
          </span> */}
        </div>
      ) : (
        <div className="chatbot-container" id="big">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="opening-line"
            style={{ cursor: "pointer" }}
          >
            <span className="chatbot-title">LeonIA Assistant</span>
            <span className="close-icon">
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
            {messages.map((message, index) => (
              <div
                key={index}
                ref={index === messages.length - 1 ? lastMessageRef : null}
                className="message-item"
              >
                {message.user === "user" && (
                  <span className={index === 0 ? `hidden` : `user`}>
                    {parse(message.message)}
                  </span>
                )}

                {message.user === "bot" && (
                  <span className="bot">
                    {isLoading && index === messages.length - 1 ? (
                      <div className="loader"></div>
                    ) : (
                      parse(message.message)
                    )}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me something..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && input.trim().length > 0) {
                  sendMessage(input);
                }
              }}
            />
            {input.length > 0 ? (
              <button onClick={() => sendMessage(input)}>Send</button>
            ) : (
              <button disabled>Send</button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
