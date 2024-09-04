import { cards } from "../data/card.data";

export const Card = () => {
  return (
    <div className="mt-14">
      <h2 className="text-center">Caractristicas</h2>

      <div className=" lg:grid lg:grid-cols-3 w-full mt-9">
        {cards.map((card) => (
          <div className="flex justify-center">
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
