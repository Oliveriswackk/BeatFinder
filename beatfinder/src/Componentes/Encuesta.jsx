import '../Styles/Encuesta.css';


import React, { useState } from "react";

function Encuesta() {
  const questions = [
    {
      questionText: "¿Qué actividad prefieres hacer mientras escuchas música?",
      answerOptions: [
        { answerText: "Hacer ejercicio o entrenar", points: 8 },
        { answerText: "Relajarte y meditar", points: 1 },
        { answerText: "Salir de fiesta y bailar", points: 10 },
        { answerText: "Estudiar o trabajar", points: 3 },
        { answerText: "Disfrutar de la naturaleza", points: 5 },
        { answerText: "Conducir o viajar", points: 6 },
      ],
    },
    {
      questionText: "¿Qué instrumento te llama más la atención?",
      answerOptions: [
        { answerText: "Guitarra eléctrica", points: 8 },
        { answerText: "Piano o teclado", points: 3 },
        { answerText: "Violín o instrumentos de cuerdas clásicas", points: 1 },
        { answerText: "Batería o percusión", points: 7 },
        { answerText: "Sintetizador o sonidos electrónicos", points: 9 },
        { answerText: "Saxofón o trompeta", points: 4 },
      ],
    },
    {
      questionText: "¿Qué sentimiento te gusta que transmita la música?",
      answerOptions: [
        { answerText: "Energía y motivación", points: 8 },
        { answerText: "Melancolía y nostalgia", points: 2 },
        { answerText: "Paz y serenidad", points: 1 },
        { answerText: "Alegría y celebración", points: 10 },
        { answerText: "Reflexión y espiritualidad", points: 5 },
        { answerText: "Innovación y sorpresa", points: 9 },
      ],
    },
    {
      questionText: "¿Prefieres música con letras profundas o algo más rítmico?",
      answerOptions: [
        { answerText: "Letras profundas y significativas", points: 2 },
        { answerText: "Música rítmica para bailar", points: 10 },
        { answerText: "Algo relajante sin letra", points: 1 },
        { answerText: "Ambas, dependiendo del momento", points: 6 },
        { answerText: "Letras con humor y sarcasmo", points: 7 },
      ],
    },
    {
      questionText: "¿Qué tipo de voz prefieres en las canciones?",
      answerOptions: [
        { answerText: "Potente y apasionada", points: 8 },
        { answerText: "Suave y relajante", points: 3 },
        { answerText: "Coral o clásica", points: 1 },
        { answerText: "Ritmos rápidos y voces enérgicas", points: 10 },
        { answerText: "Voces graves y profundas", points: 5 },
        { answerText: "Voces distorsionadas o sintetizadas", points: 9 },
      ],
    },
    {
      questionText: "¿En qué ambiente prefieres escuchar música?",
      answerOptions: [
        { answerText: "En un concierto o festival al aire libre", points: 8 },
        { answerText: "En casa, con auriculares", points: 3 },
        { answerText: "En la naturaleza, mientras caminas", points: 5 },
        { answerText: "En una discoteca o club", points: 10 },
        { answerText: "En un espacio íntimo o acústico", points: 4 },
        { answerText: "En la iglesia o en un espacio espiritual", points: 1 },
      ],
    },
    {
      questionText: "¿Cuál es tu década favorita de música?",
      answerOptions: [
        { answerText: "2020s - Música moderna y experimental", points: 9 },
        { answerText: "2000s - Pop y electrónica", points: 6 },
        { answerText: "1990s - Grunge y Hip Hop", points: 8 },
        { answerText: "1980s - Synthwave y disco", points: 7 },
        { answerText: "1970s - Rock clásico", points: 5 },
        { answerText: "Antes de 1960 - Jazz y clásicos", points: 2 },
      ],
    },
    {
      questionText: "¿Qué tipo de ritmo prefieres?",
      answerOptions: [
        { answerText: "Lento y melódico", points: 1 },
        { answerText: "Rápido y constante", points: 10 },
        { answerText: "Complejo y cambiante", points: 4 },
        { answerText: "Pesado y contundente", points: 8 },
        { answerText: "Suave y fluido", points: 5 },
        { answerText: "Experimental e impredecible", points: 9 },
      ],
    },
    {
      questionText: "¿Te gusta bailar con la música que escuchas?",
      answerOptions: [
        { answerText: "Sí, siempre", points: 10 },
        { answerText: "Solo en ocasiones especiales", points: 6 },
        { answerText: "Prefiero escuchar sin bailar", points: 1 },
        { answerText: "Bailar en casa, cuando nadie me ve", points: 3 },
        { answerText: "Bailar con movimientos complejos", points: 7 },
      ],
    },
    {
      questionText: "¿Qué tipo de contenido prefieres en la letra de las canciones?",
      answerOptions: [
        { answerText: "Amor y relaciones", points: 3 },
        { answerText: "Reflexión social y crítica", points: 8 },
        { answerText: "Naturaleza y espiritualidad", points: 5 },
        { answerText: "Fiesta y diversión", points: 10 },
        { answerText: "Historia y narrativa", points: 4 },
        { answerText: "Fantasía y ciencia ficción", points: 9 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Manejador de la selección de respuesta
  const handleAnswerClick = (points) => {
    setTotalPoints(totalPoints + points); 

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true); 
    }
  };

  const getGenre = () => {
    if (totalPoints <= 20) return "Música Clásica o New Age";
    if (totalPoints <= 30) return "Jazz o Blues";
    if (totalPoints <= 40) return "Folk o Música Acústica";
    if (totalPoints <= 50) return "Indie o Alternativo";
    if (totalPoints <= 60) return "Pop";
    if (totalPoints <= 70) return "Salsa o Música Latina";
    if (totalPoints <= 80) return "Rock o Metal";
    if (totalPoints <= 90) return "Electrónica o Techno";
    if (totalPoints <= 100) return "Reguetón o Hip-Hop";
    return "Experimental o Avant-Garde";
  };

  return (
    <>
    <div>
        <h1>Soy el header. Ahorita me modificas</h1>
    </div>
    
    <div className="quiz">
      {showResult ? (
          <div className="result-section">
          <h2>Resultado: {getGenre()}</h2>
          {/* <p>Puntaje total: {totalPoints}</p> */}
        </div>
      ) : (
          <>
          <div className="question-section">
            <div className="question-count">
              <span>Pregunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                key={index}
                onClick={() => handleAnswerClick(answerOption.points)}
                >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
      </>
  );
}

export default Encuesta;