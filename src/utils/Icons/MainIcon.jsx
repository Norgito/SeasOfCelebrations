import "../../styles/MainIcons.css"

const MainIcon = () => {
  return (
    <div className="fab-container">
      <div className="fab shadow">
        <div className="fab-content">
          <span className="ri-chat-smile-2-line text-white text-[35px] bg-green-600 rounded-full p-2 "></span>
        </div>
      </div>
      <div className="sub-button shadow">
        <a href="google.com" target="_blank">
          <span className="ri-whatsapp-line bg-green-600 rounded-full text-white text-[25px] p-2"></span>
        </a>
      </div>
      <div className="sub-button shadow">
        <a href="google.com" target="_blank">
          <span className="ri-instagram-line text-[25px] InstaColor rounded-full text-white p-2"></span>
        </a>
      </div>
      <div className="sub-button shadow">
        <a href="google.com" target="_blank">
          <span className="ri-mail-line text-[25px] bg-blue-400 rounded-full text-white p-2"></span>
        </a>
      </div>
      <div className="sub-button shadow">
        <a href="google.com" target="_blank">
          <span className="ri-phone-line text-[25px] bg-indigo-400 rounded-full text-white p-2"></span>
        </a>
      </div>
    </div>
  );
};

export default MainIcon;
