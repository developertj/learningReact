import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <Navbar />
      <Body />
      <>
        <Footer />
      </>
    </>
  );
};
// const styles = {
//   color: "red",
//   display: "flex",
//   justifyContent: "spaceBetween",
// };

const Title = () => {
  return (
    <a href="/">
      <img
        alt="Logo"
        className="logo"
        src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );
};

function Navbar() {
  return (
    <div className="navbar">
      <Title />
      <div>
        <ul className="list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

//static restaurant card
// const RestaurantCard = () => {
//   return (
//     <div className="card">
//       <img
//         alt="BK LOGO"
//         className="restaurantImg"
//         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ba9f1f59-30d5-44de-afad-df6db8471ead_9648.jpg"
//       />
//       <h2>Burger King</h2>
//       <h3>Burgers, American</h3>
//       <h4>4.3 Stars</h4>
//     </div>
//   );
// };

//dynamic restaurant card
const RestaurantCard = () => {
  return (
    <div className="card">
      <img alt="BK LOGO" className="restaurantImg" src={burgerKing.logo} />
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cuisines.join(", ")}</h3>
      <h4>{burgerKing.rating} Stars</h4>
    </div>
  );
};

const burgerKing = {
  name: "Burger King",
  logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ba9f1f59-30d5-44de-afad-df6db8471ead_9648.jpg",
  rating: "4.3",
  cuisines: ["Burgers", "American"],
};

const Body = () => {
  return (
    <div className="cardList">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

root.render(<App />);
