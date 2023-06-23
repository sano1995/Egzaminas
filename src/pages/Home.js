import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Axios from "../Axios";
export default function Home() {
  const [menu, setMenu] = useState([]);

  const getMenu = async () => {
    try {
      const res = await Axios.get("/procedures");
      console.log(res);
      setMenu(res.data.data.procedures);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  // const menu_render = menu.map((el) => {
  //   const services = el.services.map((service) => {
  //     return <Card obj={service} key={uuidv4()} />;
  //   });

  //   return (
  //     <>
  //       <h2 className="category mt-4">{el.title}</h2>
  //       {/* <div className="menu_container row row-cols-1 row-cols-md-2 g-4"> */}
  //       <div className="menu_container">{services}</div>
  //     </>
  //   );
  // });

  const menu_render = menu.map((el) => {
    return <Card obj={el} key={uuidv4()} />;
  });

  return (
    <>
      <Navbar />
      <div>
        <Carousel />
      </div>
      {menu_render}

      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
      <Footer />
    </>
  );
}
