import Web from "/img/web.jpg";

export const Home = () => {
  return (
    <>
      <div className="flex mt-16  py-5">
        <div className="flex-1 flex justify-end">
          <div className="w-[37rem]">
            <h1 className="text-5xl ">
              Revolucion de sistemas <span className="font-bold">WEBS</span> y{" "}
              <span className="font-bold">MOVILES</span> para su empresa
            </h1>
            <p className="mt-9 text-lg text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              amet reprehenderit aliquid voluptas laboriosam porro ipsam
              temporibus. Accusamus, exercitationem rerum.
            </p>
          </div>
        </div>
        <div className="flex-1 ">
          <img src={Web} alt="Muestra de la pagina web" className="w-[27rem] rounded-3xl" />
        </div>
      </div>
   

    </>
  );
};
