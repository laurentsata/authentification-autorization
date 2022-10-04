// import Product from "@components/Product";
// eslint-disable-next-line import/no-unresolved
import Product from "@components/Product";
// import ProductsList from "@components/ProductsList";
import "./Home.css";

export default function Home() {
  // const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  // const handleLogout = () => {
  //   AuthAPI.logout();
  //   setIsAuthenticated(false);
  // };

  return (
    <div className="container-home">
      toto
      <div className="ban">
        <img
          src="https://res.cloudinary.com/dbkscupri/image/upload/v1664791572/modelpro/supercar_k5jsi3.png"
          alt="bannière"
        />
      </div>
      <div className="product">
        produits carte
        {/* <ProductsList /> */}
        <Product />
      </div>
      <div className="footer">
        tata le footer******************************************
      </div>
    </div>
  );
}
