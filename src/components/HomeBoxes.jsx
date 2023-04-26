import { useEffect } from "react";
import "../styles/balloons.css";

import Balloons from "../assets/img/balloons.png";
import Rent from "../assets/img/canopy.png";
import Event from "../assets/img/party.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeBoxes = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-row items-center justify-center gap-x-7 -mt-28">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="bg-blue-400 w-[300px] h-[400px] rounded-lg flex flex-col justify-center items-center gap-4 pt-10 shadow-md"
      >
        <p className="font-light text-4xl bg-blue-100/50 w-full">DECORACIÓN</p>
        <p className="text-center container font-light text-sm mb-2 text-blue-950">
          Nuestro servicio de decoración de globos es la opción perfecta para
          darle un toque especial a tu evento. Con una amplia variedad de
          diseños y colores, nuestros expertos en decoración de globos crearán
          un ambiente mágico y memorable para ti y tus invitados.
        </p>
        <img src={Balloons} alt="balloon" className="w-20" />
        <button className=" relative w-[100px] h-[30px] bg-secondary rounded-full">
          Leer Mas
        </button>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="bg-green-400 w-[300px] h-[400px] rounded-lg flex flex-col justify-center items-center gap-4 pt-10 shadow-md">
        <p className="font-light text-4xl bg-green-100/50 w-full ">RENTA</p>
        <p className="text-center container font-light text-sm mb-2 text-purple-900">
          Ofrecemos un servicio de renta para eventos que incluye mesas, sillas,
          carpas, iluminación y mucho más. Con nuestro amplio inventario,
          podemos ayudarte a crear la atmósfera perfecta para cualquier tipo de
          evento, desde bodas hasta fiestas de cumpleaños.
        </p>
        <img src={Rent} alt="balloon" className="w-20" />
        <button className=" relative w-[100px] h-[30px] bg-secondary rounded-full">
          Leer Mas
        </button>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="bg-yellow-500 w-[300px] h-[400px] rounded-lg flex flex-col justify-center items-center gap-4 pt-10 shadow-md">
        <p className="font-light text-4xl bg-yellow-100/50 w-full">EVENTOS</p>
        <p className="text-center container font-light text-sm mb-2 text-blue-950">
          Seas of Celebrations es un servicio de decoración de eventos que
          transforma cualquier espacio en un ambiente mágico y acogedor, con
          detalles personalizados y diseños únicos que hacen que cada
          celebración sea memorable e inolvidable.
        </p>
        <img src={Event} alt="balloon" className="w-20" />
        <button className=" relative w-[100px] h-[30px] bg-secondary rounded-full">
          Leer Mas
        </button>
      </div>
    </div>
  );
};

export default HomeBoxes;
