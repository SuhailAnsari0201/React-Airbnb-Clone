import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import { Button } from "@material-ui/core";
function SearchPage() {
  return (
    <div>
      <div className="searchPage__info">
        <p>62 stays &bull; 26 august to 30 august &bull; guest</p>
        <h1>Stays nearby </h1>.
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Palce</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest &bull; 1 bedroom &bull; 1 bed &bull; 1.5 shared bathroom &bull; wifi &bull; Kitchen &bull; Free parking &bull; Washing Machine"
        star={4.75}
        price="Rs. 3000 / night"
        total=" Rs 11000 total"
      />
      <SearchResult
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Private room in center of London"
        title="Independent luxury studio Apartment"
        description="2 guest &bull; 3 bedroom &bull; 1 bed &bull; 2 bathroom &bull; wifi &bull; Kitchen"
        star={4.3}
        price="Rs. 4000 / night"
        total=" Rs 15500 total"
      />
      <SearchResult
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location="Private room in center of London"
        title="London Studio Apartment"
        description="4 guest &bull; 4 bedroom &bull; 4 bed &bull; 2 bathroom &bull; Free parking &bull; Washing Machine"
        star={3.8}
        price="Rs. 3500 / night"
        total=" Rs 20500 total"
      />
      <SearchResult
        img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
        location="Private room in center of London"
        title="30 mins of Oxford Street, Excel London"
        description="1 guest &bull; 1 bedroom &bull; 1 bed &bull; 1.5 shared bathroom &bull; wifi &bull; Kitchen &bull; Free parking &bull; Washing Machine"
        star={4.1}
        price="Rs. 5500 / night"
        total=" Rs 32000 total"
      />
      <SearchResult
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500.c_limit/airbnb-plus-london.jpg"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest &bull; 1 bedroom &bull; 1 bed &bull; 1.5 bathroom &bull; wifi &bull; Free parking &bull; Dry Cleaning"
        star={5.0}
        price="Rs. 6000 / night"
        total=" Rs 45000 total"
      />
      <SearchResult
        img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
        location="Private room in center of London"
        title="The Blue Room In London"
        description="2 guest &bull; 1 bedroom &bull; 1 bed &bull; 1.5 bathroom &bull; wifi &bull; Washing Machine"
        star={4.2}
        price="Rs. 6500 / night"
        total=" Rs 48000 total"
      />
      <SearchResult
        img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest &bull; 1 bedroom &bull; 1 bed &bull; 1.5 bathroom &bull; wifi &bull; Kitchen &bull; Free Parking &bull; Washing Machine"
        star={3.8}
        price="Rs. 9000 / night"
        total=" Rs 65000 total"
      />
    </div>
  );
}

export default SearchPage;
