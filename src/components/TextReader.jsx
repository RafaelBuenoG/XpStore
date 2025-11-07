"use client";
import { faHeadSideSpeak } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                background: "#0092B8",
                color: "#fff",
                borderRadius: "20px",
                border: "2px solid white",
                cursor: "pointer",
            }}
        >
            Ler texto
        </button>
    );
}