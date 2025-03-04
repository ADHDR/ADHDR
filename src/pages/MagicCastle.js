import "./MagicCastle.css";

const MagicCastle = () => {
  return (
    <div className="magic-castle">
      <div className="contents">
        <div className="navigation-bar">
          <div className="materials">
            <div className="chrome" />
          </div>
          <div className="window-grabber">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
          <div className="title-and-controls">
            <div className="trailing">
              <div className="trailing-button-1">
                <div className="div">􀈂</div>
              </div>
              <div className="trailing-button-1">
                <div className="div">􀊫</div>
              </div>
              <div className="trailing-button-1">
                <div className="div">􀈏</div>
              </div>
              <div className="trailing-button-1">
                <div className="div">􀉥</div>
              </div>
              <div className="trailing-button-1">
                <div className="label">Done</div>
              </div>
            </div>
            <div className="center">
              <div className="trailing-button-1">
                <div className="div">􀓔</div>
              </div>
              <div className="trailing-button-1">
                <div className="div">􀓔</div>
              </div>
              <div className="trailing-button-1">
                <div className="div">􀓔</div>
              </div>
            </div>
            <div className="leading-controls">
              <div className="leading">
                <div className="trailing-button-1">
                  <div className="div">􀋲</div>
                </div>
              </div>
              <div className="document-title">
                <div className="label">Document Title</div>
                <img
                  className="down-arrow-circle"
                  alt=""
                  src="/down-arrow-circle.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contents1" />
        <img className="bg-icon" alt="" src="/bg@2x.png" />
      </div>
      <div className="menu">
        <div className="material">
          <div className="regular" />
        </div>
        <div className="header">
          <div className="leading-side">
            <img className="thumbnail-icon" alt="" src="/thumbnail@2x.png" />
            <div className="label1">Document Title</div>
            <div className="action-button">
              <div className="oval" />
              <div className="div8">􀈂</div>
            </div>
          </div>
        </div>
        <div className="item-1">
          <div className="label2">Item</div>
          <div className="symbol">􀓔</div>
        </div>
        <div className="item-2">
          <div className="label2">Item</div>
          <div className="symbol">􀓔</div>
        </div>
        <div className="item-3">
          <div className="label2">Item</div>
          <div className="symbol">􀓔</div>
        </div>
        <div className="item-4">
          <div className="label2">Item</div>
          <div className="symbol">􀓔</div>
        </div>
        <div className="item-5">
          <div className="label2">Item</div>
          <div className="symbol">􀓔</div>
        </div>
        <div className="item-6">
          <div className="label2">Item</div>
          <div className="symbol">􀓔</div>
        </div>
        <div className="item-7">
          <div className="label2">Item</div>
          <div className="symbol">􀓔</div>
        </div>
        <div className="item-8">
          <div className="label2">Item</div>
          <div className="symbol">􀓔</div>
        </div>
        <div className="item-9">
          <div className="label2">Destructive Action</div>
          <div className="symbol8">􀓔</div>
        </div>
      </div>
      <div className="status-bar">
        <div className="left">
          <div className="time">9:41</div>
          <div className="time">Mon Jun 10</div>
        </div>
        <div className="right">
          <img
            className="combined-shape-icon"
            alt=""
            src="/combined-shape.svg"
          />
          <img
            className="combined-shape-icon1"
            alt=""
            src="/combined-shape1.svg"
          />
          <div className="div9">100%</div>
          <img className="battery-icon" alt="" src="/battery-icon@2x.png" />
        </div>
      </div>
      <div className="home-indicator">
        <div className="home-indicator1" />
      </div>
      <img className="bezel-icon" alt="" src="/bezel@2x.png" />
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <img className="magic-castle-icon" alt="" src="/magic-castle@2x.png" />
      <div className="magic-castle1">
        <span className="magic-castle-txt-container">
          <p className="magic">{`MAGIC `}</p>
          <p className="magic">CASTLE</p>
        </span>
      </div>
    </div>
  );
};

export default MagicCastle;
