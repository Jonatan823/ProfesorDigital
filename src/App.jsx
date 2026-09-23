import React, { useState } from 'react';
import { Calendar, BookOpen, Mic, Settings, User, Bell, CheckSquare, Sparkles, Send, Upload } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('calendar');
  const [isRecording, setIsRecording] = useState(false);
  const [voiceText, setVoiceText] = useState('');

  // Estado para el formulario de configuración curricular de la IA
  const [formData, setFormData] = useState({
    jurisdiccion: 'Córdoba',
    institucion: 'IPET Nº 267',
    curso: '4º Año',
    division: 'A',
    materia: 'Música / Espacio Artístico',
    emailDocente: ''
  });

  const handleVoiceToggle = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setVoiceText('Escuchando comandos de voz... ("Agendar examen el viernes a las 10:00")');
    } else {
      setVoiceText('');
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Barra lateral minimalista */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="p-6 border-b border-slate-100 flex items-center space-x-3">
            <div className="bg-indigo-600 text-white p-2 rounded-lg">
              <BookOpen size={22} />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 leading-tight">ProfesorDigital</h1>
              <span className="text-xs text-slate-400">Argentina - Secundaria</span>
            </div>
          </div>
          
          <nav className="p-4 space-y-1">
            <button 
              onClick={() => setActiveTab('calendar')}
              className={`w-flex flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'calendar' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Calendar size={18} />
              <span>Calendario y Clases</span>
            </button>
            <button 
              onClick={() => setActiveTab('ai-config')}
              className={`w-flex flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'ai-config' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Sparkles size={18} />
              <span>Configuración IA & Planificación</span>
            </button>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center space-x-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
              JR
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium text-slate-900 truncate">Prof. Jonatan</p>
              <p className="text-xs text-slate-400 truncate">Bell Ville, Córdoba</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Cabecera superior */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold text-slate-800">
              {activeTab === 'calendar' ? 'Panel y Calendario Semanal' : 'Configuración Curricular Asistida por IA'}
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleVoiceToggle}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${isRecording ? 'bg-rose-50 border-rose-200 text-rose-600 animate-pulse' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
            >
              <Mic size={14} />
              <span>{isRecording ? 'Escuchando voz...' : 'Control por Voz'}</span>
            </button>
            <div className="h-6 w-px bg-slate-200"></div>
            <button className="p-2 text-slate-500 hover:text-slate-700 relative">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Banner de voz si está activo */}
        {voiceText && (
          <div className="bg-indigo-900 text-indigo-100 px-6 py-2 text-xs flex justify-between items-center">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span>{voiceText}</span>
            </span>
            <button onClick={() => setVoiceText('')} className="underline text-indigo-300 hover:text-white">Cerrar</button>
          </div>
        )}

        {/* Cuerpo dinámico */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'calendar' ? (
            <div className="space-y-6">
              {/* Resumen rápido */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Clase Actual</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">4º Año - División A</h3>
                  <p className="text-sm text-slate-500 mt-1">Planificación Semana 4: Secuencia Didáctica Activa</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Corrección Multimodal</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">Subir Trabajos Prácticos</h3>
                  <p className="text-sm text-slate-500 mt-1">Analizar fotos de carpetas o exámenes escritos a mano con Gemini</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Asistencia Futura</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">Modo Suplente IA</h3>
                  <p className="text-sm text-slate-500 mt-1">Clases autónomas interactivas en pantalla móvil</p>
                </div>
              </div>

              {/* Calendario Semanal Simulado */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-slate-800">Distribución Semanal - Horarios Escolares</h3>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">Semana en curso</span>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map((day, index) => (
                    <div key={index} className="bg-slate-50 border border-slate-100 rounded-lg p-3 min-h-[180px] flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-slate-500 uppercase">{day}</span>
                        <div className="mt-3 bg-white p-2.5 rounded border border-slate-200 shadow-xs">
                          <p className="text-xs font-semibold text-indigo-600">8:00 - 9:20 HS</p>
                          <p className="text-xs font-medium text-slate-800 mt-0.5">Curso 4º A</p>
                          <span className="inline-block mt-2 text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded">Planificado IA</span>
                        </div>
                      </div>
                      <button className="text-[11px] text-indigo-600 hover:underline text-center mt-2">+ Agregar Nota</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-8">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">Formulario Condicionante para Gemini</h3>
                <p className="text-sm text-slate-500">Completa estos datos oficiales para que la IA adapte la planificación anual al diseño curricular provincial de Argentina.</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Jurisdicción / Provincia</label>
                    <input 
                      type="text" 
                      value={formData.jurisdiccion}
                      onChange={(e5) => setFormData({...formData, jurisdiccion: e5.target.value})}
                      className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Institución Educativa</label>
                    <input 
                      type="text" 
                      value={formData.institucion}
                      onChange={(e5) => setFormData({...formData, institucion: e5.target.value})}
                      className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Curso</label>
                    <input 
                      type="text" 
                      value={formData.curso}
                      onChange={(e5) => setFormData({...formData, curso: e5.target.value})}
                      className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">División</label>
                    <input 
                      type="text" 
                      value={formData.division}
                      onChange={(e5) => setFormData({...formData, division: e5.target.value})}
                      className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Materia / Espacio</label>
                    <input 
                      type="text" 
                      value={formData.materia}
                      onChange={(e5) => setFormData({...formData, materia: e5.target.value})}
                      className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button 
                    onClick={() => alert('¡Datos guardados con éxito! La IA está lista para generar la planificación anual semana a semana.')}
                    className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center space-x-2 shadow-sm"
                  >
                    <Sparkles size={16} />
                    <span>Generar Planificación con Gemini IA</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
