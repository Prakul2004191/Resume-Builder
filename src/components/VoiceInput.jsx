export default function VoiceInput({ onResult }) {
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.start();

    recognition.onresult = (event) => {
      onResult(event.results[0][0].transcript);
    };
  };

  return (
    <button type="button" onClick={startListening}>
      🎤 Speak
    </button>
  );
}
