import youNeed from "@/assets/front/images/you-need.jpg";
import style from "./index.module.scss";

const YouNeed = ({ pageContentResponse }) => {
  return (
    <>
      <section
        className={`mt-5 ${style.youNeed}`}
        style={{ backgroundImage: `url(${youNeed.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={style.youNeedInner}>
                <h2 className="wow fadeInUpSort delay1">
                  {pageContentResponse?.heading || 'No Heading'}
                </h2>
                <p className="wow fadeInUpSort delay3">
                  {pageContentResponse?.short_content || 'No Short Content'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YouNeed;
