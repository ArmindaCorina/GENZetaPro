import { useState } from 'react';

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    correo: '',
    telefono: '',
    curso: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (name === 'curso') {
      setSelectedCourse(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.apellido || !formData.edad || !formData.correo || !formData.telefono || !formData.curso) {
      setSubmitStatus('Por favor completa todos los campos');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('Enviando inscripción...');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('¡Inscripción enviada exitosamente! Te contactaremos pronto.');
      setFormData({
        nombre: '',
        apellido: '',
        edad: '',
        correo: '',
        telefono: '',
        curso: ''
      });
      setSelectedCourse('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Young%20diverse%20students%20collaborating%20in%20modern%20bright%20classroom%20with%20laptops%20and%20colorful%20sticky%20notes%2C%20dynamic%20learning%20environment%20with%20natural%20lighting%2C%20dark%20purple%20and%20blue%20cosmic%20background%2C%20contemporary%20educational%20space%20with%20technology%20integration%2C%20energetic%20atmosphere%20with%20neon%20accents&width=1920&height=1080&seq=hero-gen-z-cosmic&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-black/70"></div>

          <div className="relative z-10 w-full px-6 py-20">
            <div className="max-w-4xl mx-auto text-white">
              <div className="mb-8 text-center">
                <h1 className="font-['Pacifico'] text-6xl md:text-8xl mb-6 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text">
                  GEN Z PRO
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Lidera, Gana e Innova
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-cyan-200">
                  Programa de Inmersión Juvenil
                </p>
                <div className="text-5xl md:text-7xl font-black mb-8 text-white tracking-wider">
                  ¡HAZ QUE TU VOZ
                  <br />
                  Y TU DINERO
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    HABLEN POR TI!
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/30">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <i className="ri-lightbulb-line text-3xl text-cyan-400"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-300">Módulo I: Liderazgo e IA</h3>
                  <div className="bg-cyan-400/20 rounded-xl p-3 mb-4">
                    <p className="text-lg font-semibold text-cyan-200">📅 18 al 22 de agosto</p>
                  </div>
                  <p className="text-cyan-100 mb-4">Potencia tu liderazgo. Descubre el poder real de IA.</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 border border-yellow-400/30">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <i className="ri-money-dollar-circle-line text-3xl text-yellow-400"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-300">Módulo II: Oratoria y Finanzas</h3>
                  <div className="bg-yellow-400/20 rounded-xl p-3 mb-4">
                    <p className="text-lg font-semibold text-yellow-200">📅 25 al 29 de agosto</p>
                  </div>
                  <p className="text-yellow-100 mb-4">Habla con seguridad. Aprende a mover tu dinero con cabeza.</p>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-8 py-4 mb-6">
                  <span className="font-bold text-lg">¡SOLO PRESENCIAL!</span>
                </div>
                <p className="text-xl text-cyan-200">Contáctanos + Inscríbete Ya</p>
                <div className="mt-4 text-yellow-400 font-bold text-lg">
                  CUPOS LIMITADOS — RESERVA TU LUGAR HOY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Metodología Innovadora
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Utilizamos estrategias didácticas avanzadas diseñadas especialmente para la generación Z
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 rounded-3xl p-8 text-center border border-purple-400/30">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                <i className="ri-gamepad-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Juegos de Rol</h3>
              <p className="text-gray-300">Simulaciones realistas para practicar liderazgo y toma de decisiones</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 rounded-3xl p-8 text-center border border-cyan-400/30">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl">
                <i className="ri-computer-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Herramientas Tecnológicas</h3>
              <p className="text-gray-300">Plataformas digitales de última generación para el aprendizaje</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-800/50 to-orange-800/50 rounded-3xl p-8 text-center border border-yellow-400/30">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl">
                <i className="ri-team-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Participación Activa</h3>
              <p className="text-gray-300">Espacios colaborativos donde tu voz es protagonista</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-8 text-white">Estrategias que Transforman</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-500 rounded-full">
                    <i className="ri-check-line text-white text-lg"></i>
                  </div>
                  <span className="text-lg text-gray-300">Ejercicios prácticos con casos reales</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-cyan-500 rounded-full">
                    <i className="ri-check-line text-white text-lg"></i>
                  </div>
                  <span className="text-lg text-gray-300">Simulaciones de mercado financiero</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-yellow-500 rounded-full">
                    <i className="ri-check-line text-white text-lg"></i>
                  </div>
                  <span className="text-lg text-gray-300">Presentaciones con feedback inmediato</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-orange-500 rounded-full">
                    <i className="ri-check-line text-white text-lg"></i>
                  </div>
                  <span className="text-lg text-gray-300">Proyectos finales innovadores</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Creative%20young%20students%20working%20on%20innovative%20projects%20with%20tablets%20and%20laptops%2C%20modern%20classroom%20setting%20with%20dark%20purple%20and%20blue%20neon%20lighting%2C%20interactive%20whiteboards%2C%20collaborative%20learning%20environment%2C%20futuristic%20atmosphere%20with%20cosmic%20elements%20and%20technology%20integration&width=600&height=400&seq=metodologia-cosmic&orientation=landscape"
                alt="Metodología innovadora"
                className="rounded-3xl shadow-2xl object-top object-cover w-full h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section className="py-20 bg-gradient-to-br from-black to-purple-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Nuestros Cursos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Curso 1 */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-cyan-400/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full transform translate-x-8 -translate-y-8"></div>
              <div className="relative">
                <div className="w-16 h-16 flex items-center justify-center mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl">
                  <i className="ri-brain-line text-3xl text-white"></i>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-cyan-300">Liderazgo e Inteligencia Artificial</h3>
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-4 mb-6 border border-cyan-400/30">
                  <p className="text-lg font-semibold text-cyan-200">📅 18 - 22 de Agosto</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="bg-cyan-900/30 rounded-xl p-4">
                    <h4 className="text-lg font-bold text-cyan-300 mb-3">🎯 Liderazgo Transformacional</h4>
                    <ul className="space-y-2 text-cyan-100 text-sm">
                      <li>• ¿Qué es ser líder hoy?: definición sencilla y aplicada</li>
                      <li>• Tipos de liderazgo (participativo, autoritario, transformacional)</li>
                      <li>• El liderazgo como influencia positiva y colaboración</li>
                      <li>• Autoconocimiento y autoestima como base del liderazgo</li>
                      <li>• Ejercicios de toma de decisiones, trabajo en equipo y liderazgo situacional</li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/30 rounded-xl p-4">
                    <h4 className="text-lg font-bold text-blue-300 mb-3">🤖 Inteligencia Artificial</h4>
                    <ul className="space-y-2 text-blue-100 text-sm">
                      <li>• ¿Qué es la IA y para qué sirve?</li>
                      <li>• IA en la vida cotidiana: asistentes virtuales, redes, educación</li>
                      <li>• Ética y uso responsable de la tecnología</li>
                      <li>• Diseño de una idea creativa que integre IA al entorno estudiantil</li>
                      <li>• Ejercicios de creación de prompts y prototipos simples</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Curso 2 */}
            <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-yellow-400/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full transform translate-x-8 -translate-y-8"></div>
              <div className="relative">
                <div className="w-16 h-16 flex items-center justify-center mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl">
                  <i className="ri-presentation-line text-3xl text-white"></i>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-yellow-300">Oratoria y Finanzas</h3>
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-4 mb-6 border border-yellow-400/30">
                  <p className="text-lg font-semibold text-yellow-200">📅 25 - 29 de Agosto</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="bg-yellow-900/30 rounded-xl p-4">
                    <h4 className="text-lg font-bold text-yellow-300 mb-3">🎤 Oratoria y Comunicación</h4>
                    <ul className="space-y-2 text-yellow-100 text-sm">
                      <li>• Fundamentos de la comunicación efectiva</li>
                      <li>• El miedo escénico y cómo enfrentarlo</li>
                      <li>• Técnicas de voz, postura, lenguaje corporal y mirada</li>
                      <li>• Comunicación verbal y no verbal</li>
                      <li>• Prácticas de discursos breves y dinámicas de retroalimentación</li>
                    </ul>
                  </div>
                  <div className="bg-orange-900/30 rounded-xl p-4">
                    <h4 className="text-lg font-bold text-orange-300 mb-3">💰 Finanzas Inteligentes</h4>
                    <ul className="space-y-2 text-orange-100 text-sm">
                      <li>• Concepto de dinero, ingreso, gasto, ahorro e inversión</li>
                      <li>• Interés simple e interés compuesto</li>
                      <li>• Elaboración de presupuestos simples</li>
                      <li>• Emprendimiento juvenil</li>
                      <li>• Creación de idea de negocio o plan de ahorro</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Inscripción */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-400/30">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ¡Inscríbete Ahora!
              </h2>
              <p className="text-xl text-gray-300">
                Completa el formulario y da el primer paso hacia tu futuro exitoso
              </p>
              <div className="mt-6 inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-full font-bold text-lg">
                QUIERO SER GEN Z PRO
              </div>
            </div>

            <form onSubmit={handleSubmit} id="gen-z-pro-inscription" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-lg font-semibold text-white mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-lg bg-gray-800/50 border-2 border-gray-600 text-white rounded-xl focus:border-cyan-500 focus:outline-none transition-colors placeholder-gray-400"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="apellido" className="block text-lg font-semibold text-white mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-lg bg-gray-800/50 border-2 border-gray-600 text-white rounded-xl focus:border-cyan-500 focus:outline-none transition-colors placeholder-gray-400"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="edad" className="block text-lg font-semibold text-white mb-2">
                    Edad *
                  </label>
                  <input
                    type="number"
                    id="edad"
                    name="edad"
                    value={formData.edad}
                    onChange={handleInputChange}
                    required
                    min="15"
                    max="30"
                    className="w-full px-4 py-3 text-lg bg-gray-800/50 border-2 border-gray-600 text-white rounded-xl focus:border-cyan-500 focus:outline-none transition-colors placeholder-gray-400"
                    placeholder="Tu edad"
                  />
                </div>

                <div>
                  <label htmlFor="correo" className="block text-lg font-semibold text-white mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-lg bg-gray-800/50 border-2 border-gray-600 text-white rounded-xl focus:border-cyan-500 focus:outline-none transition-colors placeholder-gray-400"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-lg font-semibold text-white mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-lg bg-gray-800/50 border-2 border-gray-600 text-white rounded-xl focus:border-cyan-500 focus:outline-none transition-colors placeholder-gray-400"
                    placeholder="Tu teléfono"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="curso" className="block text-lg font-semibold text-white mb-2">
                  Selecciona tu Curso *
                </label>
                <div className="relative">
                  <select
                    id="curso"
                    name="curso"
                    value={formData.curso}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-8 text-lg bg-gray-800/50 border-2 border-gray-600 text-white rounded-xl focus:border-cyan-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Elige tu curso favorito</option>
                    <option value="liderazgo-ia">Liderazgo e Inteligencia Artificial (18-22 Agosto)</option>
                    <option value="oratoria-finanzas">Oratoria y Finanzas (25-29 Agosto)</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-xl text-gray-400"></i>
                  </div>
                </div>
              </div>

              {selectedCourse && (
                <div className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 rounded-xl p-6 border border-cyan-400/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-full">
                      <i className="ri-check-line text-white"></i>
                    </div>
                    <span className="text-lg font-semibold text-cyan-200">¡Excelente elección!</span>
                  </div>
                  <p className="text-cyan-100">
                    {selectedCourse === 'liderazgo-ia'
                      ? 'Te has inscrito en el curso de Liderazgo e Inteligencia Artificial. Prepárate para dominar el futuro digital.'
                      : 'Te has inscrito en el curso de Oratoria y Finanzas. Desarrollarás habilidades clave para el éxito profesional.'}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xl font-bold py-4 rounded-xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Enviando Inscripción...
                  </div>
                ) : (
                  'RESERVA TU LUGAR HOY'
                )}
              </button>

              {submitStatus && (
                <div className={`text-center p-4 rounded-xl ${
                  submitStatus.includes('exitosamente')
                    ? 'bg-green-900/50 text-green-300 border border-green-500/50'
                    : submitStatus.includes('completa')
                    ? 'bg-red-900/50 text-red-300 border border-red-500/50'
                    : 'bg-blue-900/50 text-blue-300 border border-blue-500/50'
                }`}>
                  <p className="text-lg font-semibold">{submitStatus}</p>
                </div>
              )}
            </form>

            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm rounded-full px-8 py-4 border border-purple-400/30">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-lock-line text-yellow-400"></i>
                </div>
                <span className="font-bold text-lg text-white">Tu futuro empieza aquí</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-black via-purple-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-cyan-400/20 to-purple-400/20 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-400/30 mb-6">
              <span className="text-cyan-300 font-bold">Mente + Voz + Dinero</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            ¿Listo para Transformar tu Futuro?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Únete a la generación que lidera, gana e innova
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg mb-8">
            <span className="bg-purple-600/30 border border-purple-400/50 px-6 py-3 rounded-full">💡 Desbloquea tus habilidades</span>
            <span className="bg-cyan-600/30 border border-cyan-400/50 px-6 py-3 rounded-full">🚀 Liderazgo</span>
            <span className="bg-yellow-600/30 border border-yellow-400/50 px-6 py-3 rounded-full">💰 Finanzas</span>
            <span className="bg-orange-600/30 border border-orange-400/50 px-6 py-3 rounded-full">🎯 Éxito</span>
          </div>
        </div>
      </section>
    </div>
  );
}
