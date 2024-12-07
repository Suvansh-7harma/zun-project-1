import React from 'react'
import "./product.css";

const Product = () => {
  return (
    <div className="product-page">
      <div className="prod-img-sec">
        <img
          src="https://d1vfpdpyv21g5i.cloudfront.net/zunpulse/products_v5/zunvolt/ZV222108/1667561187894_ZV222108_06.jpg"
          alt="product-image" className='zunvolt-heater-img'
        ></img>
      </div>
      <div className="description">
        <div className="desc-1">
          <div className="upper">
            <div className="heading">
              ZunVolt Grigora Instant Water Heater 3L (Geyser) White Body With
              Dual Thermostat
            </div>
            <div className="price">
              <span className="after-discount">Rs. 2,199</span>
              <span className="actual-price">Rs. 6000</span>
              <span classname="percentage-off">63%OFF</span>
            </div>
          </div>
          <div className="mid">
            <span className="icon">kettleicon</span>
            <div className="detail-desc">
              No more waiting for hot water with ZunVolt Grigora 3l instant
              water heater that gives you hot water instantly. The 100% copper
              heating element coated with magnesium oxide ensure quick and
              efficient heating. A shockproof ABS plastic body with 0.7mm Jindal
              steel glass provides minimum heat loss and long life. Suited for
              use in kitchens, salons and bathrooms, the ZunVolt Grigora 3l
              instant water heater is a versatile geyser that is essential for
              winters. Bring home this amazing product and enjoy an instant
              supply of hot water.
            </div>
          </div>
          <div className="lower">
            <span className="ship-time">Ships within 36 hour</span>
            <span className="addtocart">
              <button className="addtocart-btn">add to cart</button>
            </span>
          </div>
        </div>
        <div className="desc-2">
          <span>replacement & return</span>
          <span>?</span>
        </div>
        <div className="coupon-discont">
          Panels are excluded from coupon discount
        </div>
        <div className="desc-3">
          <div className="speci-feature">
            <span className="specifications">specification</span>
            <span className="features">features</span>
          </div>
          <div className="key-value-like">
            <div className="row">
              <span className="key">Type</span>
              <span className="value">Instant water Heater</span>
            </div>
            <hr></hr>
            <div className="row">
              <span className="key">Type</span>
              <span className="value">Instant water Heater</span>
            </div>
            <hr></hr>
            <div className="row">
              <span className="key">Type</span>
              <span className="value">Instant water Heater</span>
            </div>
            <div className="row">
              <span className="key">Type</span>
              <span className="value">Instant water Heater</span>
            </div>
            <div className="row">
              <span className="key">Type</span>
              <span className="value">Instant water Heater</span>
            </div>
          </div>
        </div>
        <div className="highlights">
          <div className="hightlights">highlights</div>
          <div className="images">
            <img className="img-1" src="" alt="img-1"></img>
            <img className="img-2" src="" alt="img-2"></img>
            <img className="img-3" src="" alt="img-3"></img>
            <img className="img-4" src="" alt="img-4"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product