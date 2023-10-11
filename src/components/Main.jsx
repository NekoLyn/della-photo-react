import React from "react";

const staff = [];
function Main() {
  return (
    <main>
      <div className="main-container">
        {/* <!-- item1 --> */}
        <div className="item-box">
          <div className="item">
            <img
              src="http://nunforest.com/photofolio/upload/portfolio/cr1.jpg"
              alt="People"
            />
            <h2 className="heading-1">PEOPLE</h2>
            <div className="item-mesh"></div>
          </div>
          <div className="hover-box">
            <p className="para-1">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue
            </p>
          </div>
        </div>
        {/* <!-- item2 --> */}
        <div className="item-box">
          <div className="item">
            <img
              src="http://nunforest.com/photofolio/upload/portfolio/cr2.jpg"
              alt="People"
            />
            <h2 className="heading-1">NATURE</h2>
            <div className="item-mesh"></div>
          </div>
          <div className="hover-box">
            <p className="para-1">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue
            </p>
          </div>
        </div>
        {/* <!-- item3 --> */}
        <div className="item-box">
          <div className="item">
            <img
              src="http://nunforest.com/photofolio/upload/portfolio/cr3.jpg"
              alt="People"
            />
            <h2 className="heading-1">CITY</h2>
            <div className="item-mesh"></div>
          </div>
          <div className="hover-box">
            <p className="para-1">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue
            </p>
          </div>
        </div>
        {/* <!-- item4 --> */}
        <div className="item-box">
          <div className="item">
            <img
              src="http://nunforest.com/photofolio/upload/portfolio/cr4.jpg"
              alt="People"
            />
            <h2 className="heading-1">FOOD</h2>
            <div className="item-mesh"></div>
          </div>
          <div className="hover-box">
            <p className="para-1">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue
            </p>
          </div>
        </div>
        {/* <!-- item5 --> */}
        <div className="item-box">
          <div className="item">
            <img
              src="http://nunforest.com/photofolio/upload/portfolio/cr5.jpg"
              alt="People"
            />
            <h2 className="heading-1">OBJECT</h2>
            <div className="item-mesh"></div>
          </div>
          <div className="hover-box">
            <p className="para-1">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue
            </p>
          </div>
        </div>
      </div>
      {/* <!-- slide control --> */}
      <div className="control">
        <div className="prev"></div>
        <div className="next"></div>
      </div>
    </main>
  );
}

export default Main;
