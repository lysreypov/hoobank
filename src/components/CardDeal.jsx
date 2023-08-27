import React from "react";

import styles, { layout } from "../styles";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section id="card" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h1 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          asperiores illum facere itaque commodi nihil sit eligendi soluta ex
          facilis!
        </p>
        <Button style="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="Card" className="w-full h-full object-contain" />
      </div>
    </section>
  );
};

export default CardDeal;
