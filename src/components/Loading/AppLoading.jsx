import React from "react";
import TransportGif from "../../assets/images/gif/app-loading.gif";

const AppLoading = (props) => {
  const loadStyle = { position: "fixed" };
  const appClass =
    "text-cetner w-100 h-100  d-flex align-items-center justify-content-center";
  const textStyle = {
    position: "absolute",
    width: "100%",
    top: "84%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <div style={loadStyle} className={appClass}>
      <img
        src={TransportGif}
        alt="در حال بارگذاری صفحات"
        className="w-100 h-100 d-block"
      />
      <h2 style={{ ...textStyle }}>در حال رفتن به مقصد لطفا شکیبا باشید</h2>
    </div>
  );
};

export default AppLoading;
