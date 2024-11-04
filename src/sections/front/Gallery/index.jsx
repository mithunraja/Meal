import React from "react";
import style from "./index.module.scss";
import gridOne from "@/assets/front/images/grid/1.jpg";
import gridTwo from "@/assets/front/images/grid/2.jpg";
import gridThree from "@/assets/front/images/grid/3.jpg";
import gridFive from "@/assets/front/images/grid/5.jpg";
import gridSix from "@/assets/front/images/grid/6.jpg";

const GridItem = ({ src, className }) => (
  <div
    className={`${style.gridItem} ${className}`}
    style={{ backgroundImage: `url(${src.src})` }}
  />
);

const Gallery = () => {
  return (
    <section className={style.gridSection}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h2>גלריית תמונות</h2>
              <p>המאכלים הטובים ביותר עבורך ועבור המשפחה</p>
            </div>
            <div className={`mt-5 ${style.grid}`}>
              <GridItem src={gridOne} className={style.item1} />
              <GridItem src={gridTwo} className={style.item2} />
              <GridItem src={gridThree} className={style.item3} />
              <GridItem src={gridOne} className={style.item4} />
              <GridItem src={gridFive} className={style.item5} />
              <GridItem src={gridSix} className={style.item6} />
              <GridItem src={gridFive} className={style.item7} />
            </div>
            <div className="d-flex justify-content-center mt-5">
              <a href="#" className={style.ViewMore}>
                הצג עוד
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
