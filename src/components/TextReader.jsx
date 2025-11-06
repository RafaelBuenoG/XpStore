"use client";

export default function TextReader() {
    function readSelectedText() {
        const selected = window.getSelection().toString();
        if (!selected) {
            alert("Selecione algum texto para ler.");
            return;
        }

        const utterance = new SpeechSynthesisUtterance(selected);
        utterance.lang = "pt-BR";
        speechSynthesis.speak(utterance);
    }

    return (
        <button
            onClick={readSelectedText}
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                zIndex: 9999,
                padding: "12px 18px",
                background: "#4CAF50",
                color: "#fff",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
            }}
        >
            Ler texto
        </button>
    );
}