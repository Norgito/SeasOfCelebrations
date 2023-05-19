import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import PropTypes from "prop-types";

// create context
export const HouseContext = createContext();

// provider
const HouseContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [rents, setRents] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [country, setCountry] = useState("Event (any)");
  const [countries, setCountries] = useState(["Location "]);
  const [property, setProperty] = useState("Category (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Items
  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await getDocs(collection(db, "items"));
        const itemsArray = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setItems(itemsArray);
        setOriginalItems(itemsArray);
      } catch (error) {
        console.error(error);
      }
    };

    getItems();
  }, []);

  // Products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getDocs(collection(db, "products"));
        const productsArray = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(productsArray);
        setOriginalItems(productsArray);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  // Rents
  useEffect(() => {
    const getRents = async () => {
      try {
        const data = await getDocs(collection(db, "rents"));
        const rentsArray = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setRents(rentsArray);
        setOriginalItems(rentsArray);
      } catch (error) {
        console.error(error);
      }
    };
    getRents();
  }, []);

  // Countries
  useEffect(() => {
    const getCountriesList = async () => {
      try {
        const data = await getDocs(collection(db, "items"));
        const countries = data.docs.map((doc) => doc.data().country);
        const uniqueCountries = [...new Set(countries)];
        setCountries(uniqueCountries);
      } catch (err) {
        console.error(err);
      }
    };

    getCountriesList();
  }, []);

  // Properties
  useEffect(() => {
    const getPropertiesList = async () => {
      try {
        const data = await getDocs(collection(db, "items"));
        const properties = data.docs.map((doc) => doc.data().type);
        const uniqueProperties = [...new Set(properties)];
        setProperties(uniqueProperties);
      } catch (err) {
        console.error(err);
      }
    };

    getPropertiesList();
  }, []);

  // Images
  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await getDocs(collection(db, "items"));
        const images = data.docs.map((doc) => doc.data().image);
        setImages(images);
      } catch (err) {
        console.error(err);
      }
    };

    getImages();
  }, []);

  const handleClick = () => {
    setLoading(true);
    // check the string if includes '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    // get first string (price) and parse it to number
    const minPrice = parseInt(price.split(" ")[0]);
    // get last string (price) and parse it to number
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = originalItems.filter((item) => {
      const itemPrice = parseInt(item.price);
      // all values are selected
      if (
        item.country === country &&
        item.type === property &&
        itemPrice >= minPrice &&
        itemPrice <= maxPrice
      ) {
        return item;
      }
      // all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return item;
      }
      // country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return item.country === country;
      }
      // property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return item.type === property;
      }
      // price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (itemPrice >= minPrice && itemPrice <= maxPrice) {
          return item;
        }
      }
      // country and property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return item.country === country && item.type === property;
      }
      // country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (itemPrice >= minPrice && itemPrice <= maxPrice) {
          return item.country === country;
        }
      }
      // property and price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (itemPrice >= minPrice && itemPrice <= maxPrice) {
          return item.type === property;
        }
      }
      // country, property and price are not default
      if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (
          item.country === country &&
          item.type === property &&
          itemPrice >= minPrice &&
          itemPrice <= maxPrice
        ) {
          return item;
        }
      }
    });

    setItems(newHouses);
    setProducts(newHouses);
    setRents(newHouses);
    setLoading(false);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        items,
        setItems,
        setRents,
        setProducts,
        setPrice,
        handleClick,
        loading,
        setLoading,
        originalItems,
        setOriginalItems,
        images,
        setImages,
        products,
        rents,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

HouseContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HouseContextProvider;
