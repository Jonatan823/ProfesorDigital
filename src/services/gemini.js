// src/services/gemini.js
// Servicio para interactuar con la API de Google Gemini (Google AI Studio)

export async function generarPlanificacionIA(datosCurriculares) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error("Falta la clave VITE_GEMINI_API_KEY en las variables de entorno.");
  }

  const prompt = `
    Actúa como un experto en pedagogía y diseño curricular para escuelas secundarias en ${datosCurriculares.jurisdiccion}, Argentina.
    Necesito que generes una planificación anual estructurada semana a semana para:
    - Institución: ${datosCurriculares.institucion}
    - Curso y División: ${datosCurriculares.curso} ${datosCurriculares.division}
    - Espacio Curricular / Materia: ${datosCurriculares.materia}

    Por favor, devuelve la respuesta organizada en formato JSON limpio con una lista de semanas (del 1 al 36), indicando para cada semana el Eje Temático, los Saberes y Contenidos Priorizados, y una Actividad Práctica sugerida.
  `;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }]
      })
    });

    const data = await response.json();
    const textoRespuesta = data.candidates[0].content.parts[0].text;
    return textoRespuesta;
  } catch (error) {
    console.error("Error al conectar con Gemini:", error);
    throw error;
  }
}

