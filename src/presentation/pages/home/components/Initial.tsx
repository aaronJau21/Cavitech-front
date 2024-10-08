import Web from "/img/web.jpg";

export const Initial = () => {
  return (
    <div className="lg:flex mt-16 py-5">
      <div className="lg:flex-1 lg:flex lg:justify-end">
        <div className=" lg:w-[37rem]">
          <h1 className="text-3xl lg:text-5xl text-center lg:text-start ">
            Revolucion de sistemas <span className="font-bold">WEBS</span> y{" "}
            <span className="font-bold">MOVILES</span> para su empresa
          </h1>
          <p className="mt-9 lg:text-lg text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            amet reprehenderit aliquid voluptas laboriosam porro ipsam
            temporibus. Accusamus, exercitationem rerum.
          </p>
        </div>
      </div>
      <div className="lg:flex-1 ">
        <img
          src={Web}
          alt="Muestra de la pagina web"
          className="lg:w-[31rem] rounded-3xl"
        />
      </div>
    </div>
  );
};
