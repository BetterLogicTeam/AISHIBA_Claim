import React, { useState } from "react";
import "./Claim_hero.css";
import { useSelector } from "react-redux";
import WalletModal from "../wallet_modal/WalletModal";
import { toast } from "react-hot-toast";
import { Presale_Abi, Presale_Contract } from "../../Contracts/contract";

export default function Claim_hero() {
  let { provider, acc, providerType, web3 } = useSelector(
    (state) => state.connectWallet
  );
  console.log("acc", acc);
  const [modalShow, setModalShow] = useState(false);
  const [Spinner, setSpinner] = useState(false);

  const showModal = () => {
    setModalShow(true);
  };
  const closeModal = () => {
    setModalShow(false);
  };

  const Claim = async () => {
    try {
      let ContractOf = new web3.eth.Contract(Presale_Abi, Presale_Contract);

      setSpinner(true);

      await ContractOf.methods.Claim().send({
        from: acc,
      });
      toast.success("Amount Claim! 🎉");
      setSpinner(false);
    } catch (error) {
      setSpinner(false);

      console.log(error);
    }
  };

  return (
    <div className="clain_hero_page">
      <WalletModal show={modalShow} onHide={closeModal} />

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-white">
            <h1 className="claim_page">Aishiba Dashboard</h1>
            <p>Connect Wallet To Check Your Holdings.</p>
            <p>
              NOTE: $RENQ tokens will be available for claim once presale has
              finished.
            </p>

            <a href="https://aishiba.pro/whitepaper.pdf" target="_blank">
              <button className="heading_btn">
                {" "}
                <span class="text">Whitepaper</span>
                <span class="blob"></span>
                <span class="blob"></span>
                <span class="blob"></span>
                <span class="blob"></span>
              </button>
            </a>
          </div>

          <div className="col-md-6">
            <div className="claim_box">
              <div className="borse text-center text-white">
                <h1 className="left_calin_heainf">To Check Your Holdings</h1>
                {/* <h6 className="connncet">Connect Wallet</h6> */}
                <h4 className="prsla_sold">
                  PRESALE <span className="slod"> - SOLD OUT </span>
                </h4>
                <p>$19.3 Million Raised</p>
                {/* <p>Unable To Claim Tokens? -</p>
                <p>READ THIS ARTICLE</p> */}
                <a
                  _ngcontent-nxk-c20=""
                  href="https://t.me/Aishiba_io"
                  target="_blank"
                  className="text-white"
                >
                  <p>Join Us For Latest Announcements:</p>
                </a>

                <div>
                  <p className="mt-3 fw-bold">Your claimable: 1500$</p>
                </div>
                <div className="d-flex my-4 justify-content-center gap-3 alignn-items-center  ">
                  <div>
                    <button
                      className="heading_btn"
                      href="https://twitter.com/aishib_pro?s=21"
                      target="_blank"
                      disabled={Spinner ? true : false}
                      style={{
                        cursor: Spinner ? "no-drop" : "pointer",
                      }}
                      onClick={() =>
                        acc?.startsWith("0x") ? Claim() : showModal()
                      }
                    >
                      {" "}
                      <span class="text">
                        {" "}
                        {acc?.startsWith("0x") ? (
                          <>
                            {Spinner ? (
                              <>
                                <span class="sr-only">Loading...</span>
                              </>
                            ) : (
                              "Claim"
                            )}
                          </>
                        ) : (
                          "Connect Wallet"
                        )}{" "}
                      </span>
                      <span class="blob"></span>
                      <span class="blob"></span>
                      <span class="blob"></span>
                      <span class="blob"></span>
                    </button>
                  </div>
                </div>

                {/* <div className="twOb d-flex  justify-content-center gap-3">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
