import { Link } from "react-router-dom";
import System from "/img/system.jpg";

export const Eleccion = () => {
  return (
    <main className="mt-16">
      <div className="lg:flex lg:gap-x-9">
        <div className="lg:flex-1 flex justify-center lg:justify-end">
          <div className="lg:w-[70%]">
            <h2 className="text-center text-4xl font-bold">
              ¿Por Qué Eliges Cavitech?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-justify">
              <span className="text-2xl font-semibold text-blue-600">
                Tecnologías Avanzadas
              </span>{" "}
              y demandas en el mercado, con un rendimiento superior y velocidad
              del sistema. Además, ofrecemos{" "}
              <span className="text-blue-600 font-semibold">
                soporte de mantenimiento 24/7
              </span>{" "}
              para hacer crecer y organizar su{" "}
              <span className="font-bold uppercase text-red-500">NEGOCIO</span>.
            </p>
            <Link
              to="https://wa.me/51959467609?text=Hola,%20me%20gustaría%20más%20información%20sobre%20Cavitech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-red-600 transition-colors text-white py-2 px-4 rounded"
            >
              <button className="mt-9">
                Comunícate con nosotros
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-9 lg:mt-0 lg:flex-1 ">
          <img
            src={System}
            alt="Imagen de demostracion"
            className=" lg:w-[60%] rounded-3xl"
          />
        </div>
      </div>
    </main>
  );
};
