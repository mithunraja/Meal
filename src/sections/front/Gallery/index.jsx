import style from "./index.module.scss";

// const GridItem = ({ src, className }) => (
//   <div
//     className={`${style.gridItem} ${className}`}
//     style={{ backgroundImage: `url(${src.src})` }}
//   />
// );

const GridItem = ({ src, className }) => (
  <div
    className={`${style.gridItem} ${className}`}
    style={{ backgroundImage: `url(${src})` }}
  />
);

const Gallery = ({ pageContentResponse, galleriesResponse }) => {

  //console.log("galleriesResponse: ", galleriesResponse);

  return (
    <section className={style.gridSection}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h2>{pageContentResponse?.gallery_section_heading || 'No Heading Found'}</h2>
              <p>{pageContentResponse?.gallery_section_subheading || 'No Sub Heading Found'}</p>
            </div>
            <div className={`mt-5 ${style.grid}`}>

              {galleriesResponse && galleriesResponse.length > 0 ? (

                galleriesResponse.map((gallery, index) => (

                  <GridItem
                    key={index}
                    src={
                      gallery?.gallery_image
                        ? `${process.env.NEXT_PUBLIC_IMAGE_FILE_PATH}/gallery/${gallery.gallery_image}`
                        : ""
                    }
                    className={`${style[`item${(index % 7) + 1}`]}`}
                  />

                ))

              ) : (

                <div className="text-center">
                  <h3>No Gallery Found</h3>
                </div>

              )}

              {/* <GridItem src={gridTwo} className={style.item2} />
              <GridItem src={gridThree} className={style.item3} />
              <GridItem src={gridOne} className={style.item4} />
              <GridItem src={gridFive} className={style.item5} />
              <GridItem src={gridSix} className={style.item6} />
              <GridItem src={gridFive} className={style.item7} /> */}

            </div>
            <div className="d-flex justify-content-center mt-5">
              {/* <a href="#" className={style.ViewMore}>
                הצג עוד
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
