import React from "react";
import "./Claim_hero.css";

export default function Claim_hero() {
  return (
    <div className="clain_hero_page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-white">
            <h1 className="claim_page">Aishiba Dashboard</h1>
            <p>Connect Wallet To Check Your Holdings.</p>
            <p>
              NOTE: $RENQ tokens will be available for claim once presale has
              finished.
            </p>

            <button
              href="https://bscscan.com/token/0x0887a05ecda69a6236c43d6751d15a16c3386e39"
              target="_blank"
              className="heading_btn"
            >
              {" "}
              <span class="text">Smart Contract</span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
            </button>
          </div>

          <div className="col-md-6">
            <div className="claim_box">
              <div className="borse text-center text-white">
                <h1 className="left_calin_heainf">To Check Your Holdings</h1>
                <h6 className="connncet">Connect Wallet</h6>
                <h4 className="prsla_sold">
                  PRESALE <span className="slod"> - SOLD OUT </span>
                </h4>
                <p>$19.3 Million Raised</p>
                <p>Unable To Claim Tokens? -</p>
                <p>READ THIS ARTICLE</p>
                <p>Join Us For Latest Announcements:</p>

                <div className="d-flex my-4 justify-content-center gap-3 alignn-items-center  ">
                  <div>
                    <p className="mt-3 fw-bold">Your claimable: 1500$</p>
                  </div>

                  <div>
                    <button
                      className="heading_btn"
                      href="https://twitter.com/aishib_pro?s=21"
                      target="_blank"
                    >
                      {" "}
                      <span class="text">Claim</span>
                      <span class="blob"></span>
                      <span class="blob"></span>
                      <span class="blob"></span>
                      <span class="blob"></span>
                    </button>
                  </div>
                </div>

                <div className="twOb d-flex  justify-content-center gap-3">
                  <button
                    className="heading_btn"
                    href="https://twitter.com/aishib_pro?s=21"
                    target="_blank"
                  >
                    {" "}
                    <span class="text">Twitter</span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                  </button>
                  <button
                    href="https://bscscan.com/token/0x0887a05ecda69a6236c43d6751d15a16c3386e39"
                    target="_blank"
                    className="heading_btn"
                  >
                    {" "}
                    <span class="text">Smart Contract</span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
