import { GalleryJs } from "../utils/GalleryJs";
import "../styles/BannerGallery.css";

const BannerGallery = () => {
  window.onload = function () {
    GalleryJs();
  };
  return (
    <div className="pt-[100px] ">
      <main id="app">
        <section className="carousel_">
          <ul className="carousel__list">
            <li className="carousel__item">
              <div className="carousel__box">
                <div className="carousel__image">
                  <img
                    src="https://i.imgur.com/JgUTWDw.jpg"
                    width={450}
                    height={720}
                  />
                </div>
                <div className="carousel__contents">
                  {/* <h2 className="user__name">Anthony Lee</h2>
                  <h3 className="user__title">
                    Archetypal Professor of Recognition
                  </h3> */}
                </div>
              </div>
            </li>
            <li className="carousel__item">
              <div className="carousel__box">
                <div className="carousel__image">
                  <img
                    src="https://i.imgur.com/fjvD5iP.jpg"
                    width={450}
                    height={720}
                  />
                </div>
                <div className="carousel__contents">
                  {/* <h2 className="user__name">Alicia Chevalier</h2>
                  <h3 className="user__title">Corporate Usability Analyst</h3> */}
                </div>
              </div>
            </li>
            <li className="carousel__item">
              <div className="carousel__box">
                <div className="carousel__image">
                  <img
                    src="https://i.imgur.com/FiLo59A.jpg"
                    width={450}
                    height={720}
                  />
                </div>
                <div className="carousel__contents">
                  {/* <h2 className="user__name">Nate Boucher</h2>
                  <h3 className="user__title">Customer Impact Officer</h3> */}
                </div>
              </div>
            </li>
            <li className="carousel__item">
              <div className="carousel__box">
                <div className="carousel__image">
                  <img
                    src="https://i.imgur.com/0jkX0rD.jpg"
                    width={450}
                    height={720}
                  />
                </div>
                <div className="carousel__contents">
                  {/* <h2 className="user__name">Leah Harris</h2>
                  <h3 className="user__title">Designer and Bandit</h3> */}
                </div>
              </div>
            </li>
            <li className="carousel__item" data-active="data-active">
              <div className="carousel__box">
                <div className="carousel__image">
                  <img
                    src="https://i.imgur.com/om7eFnP.jpg"
                    width={450}
                    height={720}
                  />
                </div>
                <div className="carousel__contents">
                  {/* <h2 className="user__name">Angelina Laurent</h2>
                  <h3 className="user__title">Oracle for Inspiration</h3> */}
                </div>
              </div>
            </li>
            <li className="carousel__item">
              <div className="carousel__box">
                <div className="carousel__image">
                  <img
                    src="https://i.imgur.com/ZSs3Yy3.jpg"
                    width={450}
                    height={720}
                  />
                </div>
                <div className="carousel__contents">
                  {/* <h2 className="user__name">Gal Gadot</h2>
                  <h3 className="user__title">
                    Acting Designer and Consultant
                  </h3> */}
                </div>
              </div>
            </li>
            <li className="carousel__item">
              <div className="carousel__box">
                <div className="carousel__image">
                  <img
                    src="https://i.imgur.com/5pG0O3B.jpg"
                    width={450}
                    height={720}
                  />
                </div>
                <div className="carousel__contents">
                  {/* <h2 className="user__name">Albert Sørensen</h2>
                  <h3 className="user__title">
                    Neural Big Shot of Anticipation
                  </h3> */}
                </div>
              </div>
            </li>
            <li className="carousel__item">
              <div className="carousel__box">
                <div className="carousel__image">
                  <img
                    src="https://i.imgur.com/l26lUgx.jpg"
                    width={450}
                    height={720}
                  />
                </div>
                <div className="carousel__contents">
                  {/* <h2 className="user__name">Candice Marchand</h2>
                  <h3 className="user__title">
                    Mindful Realist of Motion Laws{" "}
                  </h3> */}
                </div>
              </div>
            </li>
            <li className="carousel__item">
              <div className="carousel__box">
                <div className="carousel__image">
                  <img
                    src="https://i.imgur.com/Krsaxmo.jpg"
                    width={450}
                    height={720}
                  />
                </div>
                <div className="carousel__contents">
                  {/* <h2 className="user__name">Jennifer Salazar</h2>
                  <h3 className="user__title">Design Habitué</h3> */}
                </div>
              </div>
            </li>
            <li className="carousel__item">
              <div className="carousel__box">
                <div className="carousel__image">
                  <img
                    src="https://i.imgur.com/vTtVqGC.jpg"
                    width={450}
                    height={720}
                  />
                </div>
                <div className="carousel__contents">
                  {/* <h2 className="user__name">Antonin Dufour</h2>
                  <h3 className="user__title">Human-Centered Designer</h3> */}
                </div>
              </div>
            </li>
          </ul>
          <div className="carousel__nav">
            <button className="prev">
              <svg width={24} height={24} viewBox="0 0 24 24">
                <path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" />
              </svg>
              <span className="text-blue-400">prev</span>
            </button>
            <button className="next">
              <span className="text-blue-400">next</span>
              <svg width={24} height={24} viewBox="0 0 24 24">
                <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" />
              </svg>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BannerGallery;
