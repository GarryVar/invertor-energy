import { useState } from "react";

const FORMTOMAIL_API_KEY = "WuOr3joaIJ83dU5y";
const FORMTOMAIL_URL = "https://api.formtomail.ru/send";

export function useOrderSubmit() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [message, setMessage] = useState(null);

  const submit = async (orderPayload) => {
    setStatus("sending");
    setMessage(null);
    try {
      const res = await fetch(FORMTOMAIL_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${FORMTOMAIL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayload),
      });
      const data = await res.json();
      console.log(data);

      if (res.ok && data.statusCode === 200) {
        setStatus("success");
      } else {
        setStatus("error");
        setMessage(data.message || "Ошибка отправки");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Нет соединения с сервером");
    }
    return { status, message };
  };

  return { submit, status, message };
}
