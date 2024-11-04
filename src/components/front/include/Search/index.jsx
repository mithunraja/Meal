import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import edit from "@/assets/front/images/search.svg";

const Search = () => {
  return (
    <>
      <div className={style.srcBox}>
        <input
          type="text"
          name=""
          id=""
          className={style.input1}
          placeholder="חפש..."
        />
        <button className={style.srcBtn}>
          <Image alt="" src={edit} width={0} height={0} />
        </button>
      </div>
    </>
  );
};

export default Search;
