import { useState } from "react";
import QRcode from "react-qr-code";

export default function QrGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handelGenerate() {
    console.log("working?");
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR CODE GENERATOR</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter a value"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handelGenerate}
        >
          Generate
        </button>
      </div>
      <div className="qrcode">
        <QRcode id="qr-code-value" value={qrCode} size={400} />
      </div>
    </div>
  );
}
