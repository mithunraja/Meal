import React, { useState } from "react";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";
import MealTab from "@/sections/front/MealTab";
import MealRow from "@/sections/front/MealRow";
import OrderSummary from "@/sections/front/OrderSummary";

const MealAmount = () => {
  // State for the heading text
  const [headingText, setHeadingText] = useState("יום 1");

  // Functions to update heading text from different sections
  const handleChangeTextToMeals = () =>
    setHeadingText("ארוחות מפנקות ליום שלך");
  const handleChangeTextToSnacks = () => setHeadingText("החטיפים הכי בריאים");
  const handleChangeTextToLowCalorie = () =>
    setHeadingText("ארוחות דלות קלוריות");
  return (
    <>
      <Layout>
        <section className={style.mealTabSection}>
          <MealTab />
        </section>
        <section className={style.mealAmount}>
          <div className={`container-fluid ${style.mealAmountContainer}`}>
            <div className="row">
              <div className="col-12">
                <div className={style.mealTabWrap}>
                  <MealRow headingText="יום 1 " />
                </div>
                <div className={style.mealTabWrap}>
                  <MealRow headingText="יום 2 " />
                </div>
                <div className={style.mealTabWrap}>
                  <MealRow headingText="יום 3 " />
                </div>
                <div className={style.orderSummarySection}>
                  <OrderSummary />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default MealAmount;
