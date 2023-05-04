import "../styles/boxInfo.css";
import Conf from "../assets/img/Cone.png"
import RentIcon from "../assets/img/RentIcon.png"
import Deco from "../assets/img/Deco.png"

const BoxInfo = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center  font-extralight z-0">
        <div className="card z-0">
          <div className="icon">
          <img src={Deco} className="w-[110px] z-10" />
          </div>

          <div className="content z-0">
            <h2 className="bg-white/30 rounded-full py-2">DECORACIÓN</h2>
            <p className="text-[15px]">
              Decoramos con globos tu evento para crear un ambiente mágico y
              memorable. Ofrecemos diseños y colores personalizados para darle
              un toque especial a cualquier ocasión.
            </p>
          </div>
        </div>
        <div className="card scale-110">
          <div className="icon">
          <img src={RentIcon} className="w-[100px] z-10" />
          </div>
          <div className="content">
            <h2 className="bg-white/30 rounded-full py-2">RENTA</h2>
            <p className="text-[15px]">
              En Seas of Celebrations frecemos renta para eventos con mesas,
              sillas, carpas, iluminación y más. Creamos la atmósfera ideal para
              bodas y fiestas.
            </p>
          </div>
        </div>
        <div className="card z-0">
          <div className="icon">
            <img src={Conf} className="w-[100px] z-10" />
          </div>
          <div className="content">
            <h2 className="bg-white/30 rounded-full py-2">EVENTOS</h2>
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
