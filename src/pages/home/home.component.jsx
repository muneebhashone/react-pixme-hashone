import React from "react";
import {Helmet} from "react-helmet";
import homeBg from "../../assets/home-bg.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import HomeSearch from "../../components/home-search/home-search.component";

import "./home.styles.css";
import IconBox from "../../components/icon-box/icon-box.component";

function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${homeBg})`,
      }}
    >
       <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Your Favorite Drink Has a Story to Tell | Pix Me A Drink</title>
        <meta name="description" content="Know your drink! Read about your favorite drink’s ingredients, history, and more, or view recipes to try new flavors in one place – Pix Me A Drink App."/>
        <link rel="canonical" href="https://pixmeadrink.com/" />
      </Helmet>
       </div>
      <h1 className="home_main-heading">Searching For The Perfect Drink?</h1>
      <HomeSearch />
      {/* <form className="home_search">
        <input
          type="text"
          name="search"
          placeholder="What's On Your Mind?"
          id="search"
        />
        <select name="search_filter" id="search_filter">
          <option value="ingredients">Ingredients</option>
          <option value="spirits">Spirits</option>
        </select>
        <button className="home_search-btn">Search</button>
      </form> */}
      <div className="home_btns">
        <IconBox Icon={FaApple} subtitle="Download on the" title="App Store" />
        <IconBox
          Icon={FaGooglePlay}
          subtitle="Available on the"
          title="Google Play"
        />
      </div>
    </div>
  );
}

export default Home;
