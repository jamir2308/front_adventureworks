'use client';

import { 
  HelpCircle,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  Clock,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

export default function HelpPage() {
  const [activeTab, setActiveTab] = useState('faq');

  const faqItems = [
    {
      question: "¿Cómo puedo ver mi historial de pedidos?",
      answer: "Puedes ver tu historial de pedidos en la sección 'Mis Pedidos' de tu perfil."
    },
    {
      question: "¿Cuáles son los métodos de pago aceptados?",
      answer: "Aceptamos tarjetas de crédito/débito, PayPal y transferencias bancarias."
    },
    {
      question: "¿Cómo cambio mi información de contacto?",
      answer: "Ve a 'Configuración de cuenta' y edita tu información personal."
    }
  ];

  const contactMethods = [
    {
      icon: <Mail size={20} className="text-purple-600" />,
      title: "Correo electrónico",
      description: "Respuesta en 24 horas",
      action: "support@empresa.com"
    },
    {
      icon: <Phone size={20} className="text-purple-600" />,
      title: "Teléfono",
      description: "Lunes a Viernes, 9am-6pm",
      action: "+1 (555) 123-4567"
    },
    {
      icon: <MessageSquare size={20} className="text-purple-600" />,
      title: "Chat en vivo",
      description: "Disponible 24/7",
      action: "Iniciar chat"
    }
  ];

  const resources = [
    {
      icon: <FileText size={18} className="text-purple-600" />,
      title: "Guía de usuario",
      description: "Documentación completa del sistema"
    },
    {
      icon: <Clock size={18} className="text-purple-600" />,
      title: "Tutoriales",
      description: "Videos paso a paso"
    },
    {
      icon: <AlertCircle size={18} className="text-purple-600" />,
      title: "Solución de problemas",
      description: "Problemas comunes y soluciones"
    }
  ];

  return (
    <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="bg-purple-100 p-3 rounded-full inline-flex mb-4">
          <HelpCircle className="text-purple-700" size={40} />
        </div>
        <h1 className="text-4xl text-purple-800 font-semibold mb-2">Centro de Ayuda</h1>
        <p className="text-lg text-gray-600">¿En qué podemos ayudarte hoy?</p>
      </div>

      {/* Search Bar */}
      <div className="mb-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar en la ayuda..."
            className="w-full p-4 pl-12 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <HelpCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500" size={20} />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <button
          className={`px-6 py-3 font-medium ${activeTab === 'faq' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500'}`}
          onClick={() => setActiveTab('faq')}
        >
          Preguntas Frecuentes
        </button>
        <button
          className={`px-6 py-3 font-medium ${activeTab === 'contact' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500'}`}
          onClick={() => setActiveTab('contact')}
        >
          Contacto
        </button>
        <button
          className={`px-6 py-3 font-medium ${activeTab === 'resources' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500'}`}
          onClick={() => setActiveTab('resources')}
        >
          Recursos
        </button>
      </div>

      {/* FAQ Tab */}
      {activeTab === 'faq' && (
        <div className="space-y-6">
          <h2 className="text-2xl text-purple-700 font-semibold mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-2 border-purple-100 rounded-lg p-5 hover:bg-purple-50 transition-colors duration-200">
                <h3 className="text-lg font-medium text-purple-800 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
          <button className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-600 focus:outline-none transition-all duration-300 mt-6">
            Ver todas las preguntas
          </button>
        </div>
      )}

      {/* Contact Tab */}
      {activeTab === 'contact' && (
        <div>
          <h2 className="text-2xl text-purple-700 font-semibold mb-6">Métodos de contacto</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="border-2 border-purple-100 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {method.icon}
                  <h3 className="text-lg font-medium text-purple-800">{method.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <button className="text-purple-700 font-medium flex items-center">
                  {method.action} <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-purple-800 mb-3">Formulario de contacto</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Nombre</label>
                <input type="text" className="w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Correo electrónico</label>
                <input type="email" className="w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
              </div>
              <button className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-600 focus:outline-none transition-all duration-300">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Resources Tab */}
      {activeTab === 'resources' && (
        <div>
          <h2 className="text-2xl text-purple-700 font-semibold mb-6">Recursos útiles</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {resources.map((resource, index) => (
              <div key={index} className="border-2 border-purple-100 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {resource.icon}
                  <h3 className="text-lg font-medium text-purple-800">{resource.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button className="text-purple-700 font-medium flex items-center">
                  Ver más <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-purple-800 mb-3">Documentación técnica</h3>
            <p className="text-gray-600 mb-4">Para desarrolladores e integraciones técnicas.</p>
            <button className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-600 focus:outline-none transition-all duration-300">
              Ver documentación API
            </button>
          </div>
        </div>
      )}
    </div>
  );
}