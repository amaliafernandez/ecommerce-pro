import {FaGithub, FaLinkedin} from "react-icons/fa";
import TeamData from "./TeamData.jsx";

function Nosotros() {
    return (
        <section className="bg-bg text-text py-12 sm:py-16 md:py-20 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-14">
        <span className="text-accent font-semibold tracking-widest text-xs sm:text-sm uppercase">
          Nosotros
        </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3">
                    El equipo detrás de PROtech
                </h2>

                <p className="text-muted text-sm sm:text-base mt-4 sm:mt-5 leading-relaxed px-2 sm:px-0">
                    Somos un grupo de estudiantes de desarrollo Fullstack. Creamos
                    PROtech como proyecto integrador para ofrecer tecnología
                    profesional con una experiencia simple y moderna.
                </p>
            </div>
            {/*Equipo*/}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {TeamData.map((miembro) => (
                    <div
                        key={miembro.nombre}
                        className="bg-card border border-line rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center hover:border-accent transition-colors duration-300">


                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-accent flex items-center justify-center mb-4 sm:mb-5 shrink-0">
                            <span className="text-accent font-bold text-lg sm:text-xl">
                            {miembro.inicial}
                            </span>
                        </div>

                        <h3 className="font-bold text-base sm:text-lg break-words">
                            {miembro.nombre}
                        </h3>
                        <p className="text-accent text-xs sm:text-sm mt-1">
                            {miembro.rol}
                        </p>

                        {/* Redes */}
                        <div className="flex gap-4 mt-4 sm:mt-5">
                            <a
                                href={miembro.github}
                                target="_blank"
                                aria-label={`GitHub de ${miembro.nombre}`}
                                className="text-muted hover:text-text transition-colors"
                            >
                                <FaGithub size={20}/>
                            </a>
                            <a
                                href={miembro.linkedin}
                                target="_blank"
                                aria-label={`LinkedIn de ${miembro.nombre}`}
                                className="text-muted hover:text-text transition-colors"
                            >
                                <FaLinkedin size={20}/>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Nosotros;

