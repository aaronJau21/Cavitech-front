import { cards } from "../data/card.data";

export const Card = () => {
  return (
    <div className="mt-14">
      <h2 className="text-center">Caractristicas</h2>

      <div className=" lg:grid lg:grid-cols-3 w-full mt-9 g">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`flex justify-center   my-7 animate__animated animate__fadeInDownBig animate-duration-1000`}
          >
            <div className="bg-fondo w-96 p-5 rounded-2xl shadow-2xl">
              {card.svg}

              <h3 className="text-2xl text-center">{card.title}</h3>
              <p>{card.lorem}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
