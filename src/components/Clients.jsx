import React from "react";

import styles from "../styles";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section id="clients" className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 sm:min-w-[192px] ${styles.flexCenter} min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt="Clieng Logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
