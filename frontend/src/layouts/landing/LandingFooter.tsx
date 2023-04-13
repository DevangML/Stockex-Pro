import { NextPage } from "next";
import Link from "next/dist/client/link";
import { Fragment } from "react";
const LandingFooter: NextPage = () => {
  return (
    <Fragment>
      <div className="bottom section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="bottom-logo">
                <img className="pb-3" src="/images/logow.png" alt="" />

                <p>
                  Tendex is a unique and beautiful collection of UI elements
                  that are all flexible and modular. A complete and customizable
                  solution to building the website of your dreams.
                </p>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="bottom-widget">
                <h4 className="widget-title">Company</h4>
                <ul>
                  <li>
                    <Link legacyBehavior href="/about">About</Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/career">Career</Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/app">App</Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/team">Our Team</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="bottom-widget">
                <h4 className="widget-title">Support</h4>
                <ul>
                  <li>
                    <Link legacyBehavior href="/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/helpdesk">Helpdesk</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="bottom-widget">
                <h4 className="widget-title">Exchange Pair</h4>
                <div className="row">
                  <div className="col-xl-6">
                    <ul>
                      <li>
                        <Link legacyBehavior href="/trade">ETH to BTC</Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/trade">BTC to ETH</Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/trade">LTC to ETH</Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/trade">USDT to BTC</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6">
                    <ul>
                      <li>
                        <Link legacyBehavior href="/trade">BTC to USDT</Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/trade">LTC to BTC</Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/trade">XMR to BTC</Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/trade">ETC to DASH</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="copyright">
                <p>
                  © Copyright {new Date().getFullYear()}{" "}
                  <Link legacyBehavior href="/">
                    <a target="_blank"> Tendex </a>
                  </Link>
                  I All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="footer-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="bi bi-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingFooter;
