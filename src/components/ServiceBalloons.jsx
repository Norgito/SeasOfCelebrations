import Balloon from "../assets/balloon.png";

const ServiceBalloons = () => {
  return (
    <div className="text-[40px] font-secondary text-center Center flex-col react-floater-animated ">
    <img src={Balloon} className="w-[120px] lg:mr-[345px] absolute" />
    <img src={Balloon} className="w-[120px] lg:ml-[345px] absolute hidden lg:block" />
    <div className="z-20 Center ">
      <p className="text-white ColorSer shadow-lg rounded-full md:w-[400px] w-[350px] mt-[170px]">
        Services
      </p>
    </div>
  </div>
  )
}

export default ServiceBalloons