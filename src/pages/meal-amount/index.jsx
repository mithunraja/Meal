import React from "react";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";
import MealTab from "@/sections/front/MealTab";
import MealRow from "@/sections/front/MealRow";
import OrderSummary from "@/sections/front/OrderSummary";

const MealAmount = () => {
  return (
    <>
      <Layout>
        <section className={style.mealAmount}>
          <div className={`container-fluid ${style.mealAmountContainer}`}>
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                <OrderSummary />
              </div>
              <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                <div className={style.mealTabWrap}>
                  <MealTab />
                </div>

                <MealRow />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default MealAmount;
