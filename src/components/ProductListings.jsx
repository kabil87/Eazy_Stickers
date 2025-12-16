
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import DropDown from "./DropDown"
import { useMemo, useState } from "react";

const options = ["Popularity", "Price Low to High", "Price High to Low"]

const ProductListings = ({products}) => {

const [searchText, setSearchText] = useState("");
  const [selectedSort, setSelectedSort] = useState("Popularity");

  const filteredAndSortedProducts = useMemo(() => {
    if (!Array.isArray(products)) {
      return [];
    }

    let filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase())
    );

    return filteredProducts.slice().sort((a, b) => {
      switch (selectedSort) {
        case "Price Low to High":
          return parseFloat(a.price) - parseFloat(b.price);
        case "Price High to Low":
          return parseFloat(b.price) - parseFloat(a.price);
        case "Popularity":
        default:
          return parseInt(b.popularity) - parseInt(a.popularity);
      }
    });
  }, [products, searchText, selectedSort]);

  function handleSearchChange(inputSearch) {
    setSearchText(inputSearch);
  }

  function handleSortChange(sortType) {
    setSelectedSort(sortType);
  }

    return (

        <div className="ml-16 md:ml-35 p-6  ">

         <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">

  <SearchBox
    handleSearch={handleSearchChange}
    label="Search"
    placeHolder="search here..."
    value={searchText}
  />

  <DropDown
    label="Sort by"
    options={options}
    selectedVlaue={selectedSort}
    handleSort={handleSortChange}
  />

</div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              {filteredAndSortedProducts.length > 0 && 
              filteredAndSortedProducts.map((product) =>{
                return <ProductCard key={product.productId} product={product} />
              }) 
              }

            </div>
        </div>
    )

}
  
export default ProductListings;