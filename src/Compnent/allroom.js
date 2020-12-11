import React from 'react'

import "./Navber.css";
import Heroerror from "./heroerror";




export default function hero(hero) {
  return (
      <>
          <header className="imageovar">
              <Heroerror
                  titel={"LUXURIOUS ROOMS"}
                  texst={"Deluxe Roms starting At $299"}
                  butons={"OUR ROOMS"}
                  tos={"/romse/"}
              />
          </header>
      </>
  );
}
