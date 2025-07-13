"use client";
import Image from "next/image";
import "./chatBotLauncher.css";

export default function ChatBotLauncher() {
  return (
    <div className="chatbot-launcher">
      <Image
        src="/logo-whatsapp.svg"
        alt="WhatsApp icon"
        width={48} // ajuste conforme o tamanho desejado
        height={48}
      />
    </div>
  );
}
