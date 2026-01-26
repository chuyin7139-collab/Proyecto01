import React from 'react';

const Cursos = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6"> Gestor de Tareas con IA</h1>
      
      <div className="space-y-4">
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-semibold text-gray-800"> Asistente IA Inteligente</h3>
          <p className="text-gray-600">Gestiona tus tareas conversando con nuestra IA</p>
        </div>
        
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-gray-800"> Priorización Automática</h3>
          <p className="text-gray-600">La IA organiza tus tareas por importancia</p>
        </div>
        
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold text-gray-800"> Análisis de Productividad</h3>
          <p className="text-gray-600">Reportes y sugerencias para mejorar tu eficiencia</p>
        </div>
      </div>
      
      <div className="mt-8">
        <button className="w-full py-3 bg-amber-500 text-white rounded-lg font-medium">
          Comenzar Ahora
        </button>
      </div>
    </div>
  );
};

export default Cursos;