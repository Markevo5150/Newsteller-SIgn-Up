export default function App() {
  return (
    <>
      <div className="main-container">
        <div className="image"></div>
        <div className="bottom">
          <h1 className="title">Stay updated!</h1>
          <p className="info">
            Join 60,000+ products managers receiving monthly updates on:
          </p>
          <div className="productInfo">
            <div className="product">
              <img src="../assets/images/icon-list.svg" alt="listIcon" />
              <p className="detail">
                Product discovery and building what matters
              </p>
            </div>

            <div className="product">
              <img src="../assets/images/icon-list.svg" alt="listIcon" />
              <p className="detail">
                Measuring to ensure updates are a success.
              </p>
            </div>

            <div className="product">
              <img src="../assets/images/icon-list.svg" alt="listIcon" />
              <p className="detail">And much more!</p>
            </div>
            <h3 className="emailTitle">Email address</h3>
            <input
              type="text"
              placeholder="email@company.com"
              className="emailBox"
            />
            <button className="subscribe">
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
