import "../styles/boxInfo.css";
import TreeBalloons from "./TreeBalloons";

const BoxInfo = () => {
  return (
    <div className="">
      <div className="flex justify-center gap-x-8 items-center  font-extralight">
        <div className="card ">
          <div className="icon">
            <div className="relative left-1/2 mt-0 z-20">
              <TreeBalloons />
            </div>
          </div>

          <div className="content">
            <h2 className="bg-white/30 rounded-full">DECORACIÓN</h2>
            <p className="text-[15px]">
              Decoramos con globos tu evento para crear un ambiente mágico y
              memorable. Ofrecemos diseños y colores personalizados para darle
              un toque especial a cualquier ocasión.
            </p>
          </div>
        </div>
        <div className="card scale-110">
          <div className="icon">
            <div className="relative left-1/2 mt-0 z-20 ">
              <TreeBalloons />
            </div>
          </div>
          <div className="content">
            <h2 className="bg-white/30 rounded-full">RENTA</h2>
            <p className="text-[15px]">
              En Seas of Celebrations frecemos renta para eventos con mesas,
              sillas, carpas, iluminación y más. Creamos la atmósfera ideal para
              bodas y fiestas.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <div className="relative left-1/2 mt-0 z-20 ">
              <TreeBalloons />
            </div>
          </div>
          <div className="content">
            <h2 className="bg-white/30 rounded-full">EVENTOS</h2>
            <p className="text-[15px]">
              Seas of Celebrations transforma espacios en ambientes mágicos y
              acogedores con detalles personalizados y diseños únicos, creando
              celebraciones inolvidables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxInfo;
