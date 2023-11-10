import "./Dashboard.css";
import React from "react";
import PHONE_img from "../../components/images/phones.png";
import fb_img from "../../components/images/fb.png";
import insta_img from "../../components/images/insta.png"
import { useNavigate } from "react-router-dom"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons"; // Import only the necessary icons.



function LandingPage() {
  const navigate = useNavigate()
  const svgStyle = {
    fill: "#d70f64",
  };
  return (
    <div>
      <body>
     

        <main>
          {/* Hero */}
          <section className="hero">
            <div className="max-w-xl">
              <h3>It's the food and groceries you love, delivered</h3>

              <div className="actions">
                <div className="input-container">
                  <input type="text" placeholder="Enter your full address" />

                  {
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="fl-neutral-secondary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      id="locate-me"
                    >
                      <defs>
                        <path
                          fill="#d70f64"
                          d="M11.5 18a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM12 4v2.019a6.501 6.501 0 015.981 5.982L20 12v1h-2.019a6.501 6.501 0 01-5.98 5.981L12 21h-1v-2.019a6.501 6.501 0 01-5.981-5.98L3 13v-1h2.019A6.501 6.501 0 0111 6.02L11 4h1zm-.5 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 1a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2.5a1 1 0 100-2 1 1 0 000 2z"
                          id="sIcLocateRound"
                        ></path>
                      </defs>
                      <use xlinkHref="#sIcLocateRound" fillRule="evenodd"></use>
                    </svg>
                  }
                </div>

                <button onClick={()=>navigate("/Dashboard")}>Delivery</button>
              </div>
            </div>
          </section>

          {/* Partners */}
          <section className="partners">
            <div className="max-w-xl">
              <p className="backdrop-text">Partners</p>
              <p className="caption">
                You prepare the food, we handle the rest
              </p>
            </div>

            <div className="background-image"></div>

            <div className="max-w-xl">
              <div className="content">
                <p className="header-text">
                  List your restaurant or shop on foodpanda
                </p>

                <p>
                  Would you like millions of new customers to enjoy your amazing
                  food and groceries? So would we!
                </p>

                {/* other paragraphs */}

                <button>Get Started</button>
              </div>
            </div>
          </section>

          {/* Cities */}
          <section className="partners cities">
            <div className="max-w-xl">
              <p className="backdrop-text">Cities</p>
              <p className="caption">Find us in these cities and many more!</p>

              <div className="container">
                {/* <!-- Row 1 --> */}
                <div class="card">
                  <img
                    src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Karachi.jpg?width=400&height=400"
                    alt=""
                  />
                  <p>Karachi</p>
                </div>

                <div class="card">
                  <img
                    src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Lahore.jpg?width=400&height=400"
                    alt=""
                  />
                  <p>Lahore</p>
                </div>

                <div class="card">
                  <img
                    src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Islamabad.jpg?width=400&height=400"
                    alt=""
                  />
                  <p>Islamabad</p>
                </div>

                <div class="card">
                  <img
                    src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Rawalpindi.jpg?width=400&height=400"
                    alt=""
                  />
                  <p>Rawalpindi</p>
                </div>

                <div class="card">
                  <img
                    src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Faisalabad.jpg?width=400&height=400"
                    alt=""
                  />
                  <p>Faisalabad</p>
                </div>

                {/* <!-- Row 2 --> */}
                <div class="card">
                  <img
                    src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Multan.jpg?width=400&height=400"
                    alt=""
                  />
                  <p>Multan</p>
                </div>

                <div class="card">
                  <img
                    src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Hyderabad.jpg?width=400&height=400"
                    alt=""
                  />
                  <p>Hyderabad</p>
                </div>

                <div class="card">
                  <img
                    src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Sialkot.jpg?width=400&height=400"
                    alt=""
                  />
                  <p>Sialkot</p>
                </div>

                <div class="card">
                  <img
                    src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Peshawar.jpg?width=400&height=400"
                    alt=""
                  />
                  <p>Peshawar</p>
                </div>

                <div class="card">
                  <img
                    src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Sukkur.jpg?width=400&height=400"
                    alt=""
                  />
                  <p>Sukhur</p>
                </div>
              </div>
            </div>
          </section>

          {/* App */}
          <section className="partners app">
            <div className="max-w-xl">
              <p className="backdrop-text">App</p>
              <p className="caption">Put us in your pocket</p>
            </div>

            <div className="container">
              <div className="max-w-xl">
                <div className="image-container">
                  <img src={PHONE_img} alt="" />
                </div>

                <div className="content-container">
                  <p className="sub-heading">
                    Download the food and groceries you love
                  </p>

                  {
                    <p class="text">
                      It's all at your fingertips – the restaurants and shops
                      you love. Find the right food and groceries to suit your
                      mood, and make the first bite last. Go ahead, download us.
                    </p>
                  }

                  <div className="buttons-container">
                    {/* <!-- App Store Button --> */}
                    {
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="120"
                        height="40"
                        viewBox="0 0 120 40"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M110.443 0H9.562c-.368 0-.731 0-1.098.002-.307.002-.612.008-.922.013-.668.016-1.343.057-2.01.176a6.462 6.462 0 00-4.711 3.43 6.623 6.623 0 00-.626 1.905C.075 6.19.032 6.861.015 7.53c-.009.308-.01.616-.015.922v23.139c.005.31.006.611.015.921.017.671.06 1.342.18 2.004.117.671.314 1.3.626 1.907a6.24 6.24 0 001.183 1.616 6.293 6.293 0 001.622 1.18c.612.312 1.236.51 1.906.632.667.119 1.342.158 2.01.176.31.007.615.011.922.011.367.002.73.002 1.098.002h100.881c.362 0 .727 0 1.087-.002.307 0 .62-.004.926-.011.672-.018 1.346-.057 2.005-.176a6.854 6.854 0 001.914-.632 6.328 6.328 0 001.622-1.18c.477-.47.875-1.02 1.184-1.616a6.563 6.563 0 00.62-1.907c.125-.662.163-1.333.188-2.004.003-.31.003-.611.003-.921.008-.365.008-.726.008-1.096V9.545c0-.366 0-.73-.008-1.093 0-.306 0-.614-.003-.922-.025-.67-.063-1.34-.188-2.004a6.58 6.58 0 00-.62-1.904 6.489 6.489 0 00-2.806-2.803A6.845 6.845 0 00114.46.19c-.66-.119-1.333-.16-2.005-.176-.306-.005-.619-.011-.926-.013C111.17 0 110.805 0 110.443 0"
                            fill="#A9AAA9"
                          ></path>
                          <path
                            d="M8.469 39.164c-.306 0-.604-.004-.907-.01-.561-.016-1.226-.048-1.875-.164a5.889 5.889 0 01-1.66-.549 5.388 5.388 0 01-1.402-1.017 5.335 5.335 0 01-1.024-1.398 5.75 5.75 0 01-.544-1.659C.935 33.694.904 33.011.89 32.49a76.244 76.244 0 01-.015-.913V8.452s.01-.691.015-.894c.014-.525.045-1.208.166-1.874a5.724 5.724 0 01.545-1.664 5.343 5.343 0 011.018-1.4 5.583 5.583 0 013.064-1.568c.676-.12 1.36-.151 1.881-.164L8.47.876h103.056l.916.013c.514.012 1.2.043 1.864.162a5.987 5.987 0 011.676.549c.514.263.985.606 1.395 1.017a5.54 5.54 0 011.027 1.405 5.8 5.8 0 01.537 1.65c.115.632.151 1.28.174 1.89.003.283.003.588.003.89.009.376.009.733.009 1.094v20.95c0 .363 0 .718-.01 1.076 0 .325 0 .623-.003.93-.022.59-.058 1.238-.172 1.855a5.75 5.75 0 01-.541 1.672c-.27.52-.614.99-1.018 1.387-.415.419-.886.76-1.403 1.023a5.883 5.883 0 01-1.674.55c-.642.117-1.307.15-1.874.164-.293.007-.602.011-.9.011l-1.088.002L8.47 39.164"
                            fill="#000"
                          ></path>
                          <path
                            d="M24.839 20.321c-.026-2.753 2.258-4.094 2.363-4.157-1.293-1.882-3.3-2.139-4.003-2.159-1.684-.177-3.316 1.006-4.175 1.006-.874 0-2.195-.989-3.618-.959-1.831.028-3.546 1.087-4.485 2.73-1.94 3.352-.493 8.278 1.364 10.987.93 1.327 2.016 2.81 3.438 2.756 1.39-.057 1.91-.885 3.59-.885 1.663 0 2.15.885 3.6.852 1.492-.024 2.433-1.333 3.33-2.672 1.074-1.52 1.506-3.02 1.523-3.095-.035-.012-2.9-1.102-2.927-4.404M22.099 12.223c.748-.934 1.26-2.204 1.118-3.494-1.083.048-2.437.747-3.217 1.661-.69.805-1.306 2.124-1.147 3.365 1.216.09 2.466-.613 3.246-1.532M42.42 27.167h-4.746l-1.14 3.36h-2.01l4.496-12.43h2.09l4.495 12.43H43.56z"
                            fill="#FFFFFE"
                          ></path>
                          <path
                            fill="#000"
                            d="M38.166 25.617h3.762l-1.855-5.453h-.05z"
                          ></path>
                          <path
                            d="M55.315 25.996c0 2.816-1.51 4.626-3.79 4.626-1.293 0-2.32-.578-2.856-1.586h-.043v4.488h-1.864v-12.06h1.804v1.507h.034c.519-.972 1.624-1.602 2.891-1.602 2.305 0 3.824 1.818 3.824 4.627z"
                            fill="#FFFFFE"
                          ></path>
                          <path
                            d="M53.4 25.996c0-1.835-.951-3.041-2.4-3.041-1.424 0-2.382 1.231-2.382 3.041 0 1.826.958 3.049 2.382 3.049 1.449 0 2.4-1.198 2.4-3.049z"
                            fill="#000"
                          ></path>
                          <path
                            d="M65.307 25.996c0 2.816-1.51 4.626-3.789 4.626-1.293 0-2.32-.578-2.856-1.586h-.043v4.488h-1.864v-12.06h1.804v1.507h.034c.519-.972 1.623-1.602 2.891-1.602 2.305 0 3.823 1.818 3.823 4.627z"
                            fill="#FFFFFE"
                          ></path>
                          <path
                            d="M63.391 25.996c0-1.835-.95-3.041-2.398-3.041-1.424 0-2.382 1.231-2.382 3.041 0 1.826.958 3.049 2.382 3.049 1.449 0 2.398-1.198 2.398-3.049z"
                            fill="#000"
                          ></path>
                          <path
                            d="M71.912 27.063c.138 1.233 1.338 2.042 2.977 2.042 1.571 0 2.701-.809 2.701-1.92 0-.966-.682-1.543-2.295-1.939l-1.615-.388c-2.286-.552-3.348-1.619-3.348-3.352 0-2.144 1.873-3.617 4.532-3.617 2.631 0 4.435 1.473 4.495 3.617h-1.881c-.112-1.24-1.14-1.989-2.64-1.989-1.503 0-2.53.758-2.53 1.86 0 .88.656 1.397 2.262 1.793l1.372.335c2.555.604 3.617 1.628 3.617 3.447 0 2.325-1.856 3.782-4.808 3.782-2.761 0-4.627-1.423-4.747-3.671h1.908M83.58 19.32v2.143h1.727v1.474H83.58v4.996c0 .777.346 1.138 1.105 1.138.19 0 .492-.026.613-.043v1.464c-.207.053-.62.087-1.035.087-1.838 0-2.555-.69-2.555-2.447v-5.195h-1.32v-1.474h1.32V19.32h1.872M86.307 25.996c0-2.852 1.682-4.644 4.306-4.644 2.632 0 4.307 1.792 4.307 4.644 0 2.859-1.666 4.643-4.307 4.643-2.64 0-4.306-1.784-4.306-4.643z"
                            fill="#FFFFFE"
                          ></path>
                          <path
                            d="M93.02 25.996c0-1.956-.897-3.111-2.407-3.111s-2.407 1.163-2.407 3.111c0 1.964.896 3.11 2.407 3.11 1.51 0 2.407-1.146 2.407-3.11z"
                            fill="#000"
                          ></path>
                          <path
                            d="M96.456 21.463h1.778v1.543h.043c.285-1.025 1.113-1.637 2.183-1.637.268 0 .492.035.64.07v1.74c-.148-.06-.476-.113-.838-.113-1.2 0-1.942.81-1.942 2.085v5.375h-1.864v-9.063M109.691 27.865c-.25 1.645-1.855 2.774-3.909 2.774-2.641 0-4.28-1.766-4.28-4.6 0-2.843 1.648-4.687 4.202-4.687 2.512 0 4.091 1.723 4.091 4.47v.638h-6.413v.113c0 1.55.976 2.566 2.443 2.566 1.035 0 1.847-.49 2.097-1.274h1.77z"
                            fill="#FFFFFE"
                          ></path>
                          <path
                            d="M103.391 25.16h4.54c-.044-1.387-.932-2.3-2.227-2.3-1.286 0-2.217.93-2.313 2.3z"
                            fill="#000"
                          ></path>
                          <path
                            d="M37.932 8.74c1.775 0 2.816 1.088 2.816 2.968 0 1.908-1.033 3.005-2.816 3.005h-2.16V8.74h2.16z"
                            fill="#FFFFFE"
                          ></path>
                          <path
                            d="M36.7 13.868h1.129c1.251 0 1.972-.778 1.972-2.148 0-1.35-.733-2.136-1.972-2.136H36.7v4.284z"
                            fill="#000"
                          ></path>
                          <path
                            d="M41.798 12.456c0-1.452.812-2.338 2.131-2.338 1.315 0 2.128.886 2.128 2.338 0 1.462-.81 2.344-2.128 2.344-1.323 0-2.131-.882-2.131-2.344z"
                            fill="#FFFFFE"
                          ></path>
                          <path
                            d="M45.14 12.456c0-.977-.44-1.547-1.211-1.547-.775 0-1.21.57-1.21 1.547 0 .985.435 1.553 1.21 1.553.771 0 1.211-.572 1.211-1.553z"
                            fill="#000"
                          ></path>
                          <path
                            fill="#FFFFFE"
                            d="M51.718 14.713h-.925l-.932-3.32h-.072l-.928 3.32h-.916L46.7 10.205h.904l.809 3.44h.067l.928-3.44h.855l.928 3.44h.07l.806-3.44h.891l-1.24 4.508M54.005 10.205h.858v.716h.066c.22-.5.668-.803 1.348-.803 1.007 0 1.563.604 1.563 1.677v2.918h-.892v-2.695c0-.725-.314-1.085-.974-1.085-.66 0-1.078.44-1.078 1.142v2.638h-.89v-4.508M59.26 14.713h.891V8.445h-.891zM61.39 12.456c0-1.452.812-2.338 2.13-2.338 1.316 0 2.129.886 2.129 2.338 0 1.462-.81 2.344-2.128 2.344-1.323 0-2.131-.882-2.131-2.344z"
                          ></path>
                          <path
                            d="M64.732 12.456c0-.977-.44-1.547-1.211-1.547-.775 0-1.21.57-1.21 1.547 0 .985.435 1.553 1.21 1.553.771 0 1.211-.572 1.211-1.553z"
                            fill="#000"
                          ></path>
                          <path
                            d="M66.587 13.437c0-.81.605-1.279 1.68-1.345l1.223-.07v-.39c0-.475-.315-.744-.924-.744-.497 0-.842.182-.942.5h-.862c.091-.773.82-1.27 1.845-1.27 1.132 0 1.77.563 1.77 1.515v3.08h-.857v-.634h-.072c-.268.451-.762.708-1.355.708-.87 0-1.506-.526-1.506-1.35z"
                            fill="#FFFFFE"
                          ></path>
                          <path
                            d="M69.49 13.053v-.377l-1.103.07c-.621.042-.903.253-.903.65 0 .406.352.642.836.642.672 0 1.17-.426 1.17-.985z"
                            fill="#000"
                          ></path>
                          <path
                            d="M71.548 12.456c0-1.424.734-2.326 1.875-2.326.618 0 1.14.294 1.384.79h.068V8.446h.89v6.268h-.853V14h-.071c-.27.493-.797.787-1.418.787-1.149 0-1.875-.902-1.875-2.33z"
                            fill="#FFFFFE"
                          ></path>
                          <path
                            d="M72.469 12.456c0 .956.451 1.532 1.206 1.532.751 0 1.216-.584 1.216-1.528 0-.939-.47-1.531-1.216-1.531-.75 0-1.206.58-1.206 1.527z"
                            fill="#000"
                          ></path>
                          <path
                            d="M79.452 12.456c0-1.452.814-2.338 2.131-2.338 1.315 0 2.128.886 2.128 2.338 0 1.462-.809 2.344-2.128 2.344-1.321 0-2.13-.882-2.13-2.344z"
                            fill="#FFFFFE"
                          ></path>
                          <path
                            d="M82.795 12.456c0-.977-.44-1.547-1.212-1.547-.775 0-1.21.57-1.21 1.547 0 .985.435 1.553 1.21 1.553.772 0 1.212-.572 1.212-1.553z"
                            fill="#000"
                          ></path>
                          <path
                            d="M84.908 10.205h.857v.716h.066c.22-.5.668-.803 1.348-.803 1.008 0 1.563.604 1.563 1.677v2.918h-.891v-2.695c0-.725-.315-1.085-.975-1.085-.659 0-1.078.44-1.078 1.142v2.638h-.89v-4.508M93.778 9.083v1.142h.978v.75h-.978v2.317c0 .473.195.68.638.68.138 0 .216-.01.34-.021v.74a2.875 2.875 0 01-.485.047c-.99 0-1.385-.349-1.385-1.218v-2.545h-.717v-.75h.717V9.083h.892M95.974 8.445h.883v2.484h.07c.219-.505.696-.807 1.377-.807.962 0 1.556.609 1.556 1.68v2.91h-.893v-2.69c0-.72-.336-1.085-.966-1.085-.73 0-1.137.46-1.137 1.143v2.633h-.89V8.445M101.92 12.043h2.282c-.021-.708-.453-1.168-1.112-1.168-.66 0-1.12.464-1.17 1.168z"
                            fill="#FFFFFE"
                          ></path>
                          <path
                            d="M105.055 13.495c-.202.808-.924 1.305-1.956 1.305-1.294 0-2.086-.886-2.086-2.328 0-1.44.81-2.354 2.082-2.354 1.256 0 2.014.857 2.014 2.272v.31h-3.189v.05c.03.79.49 1.292 1.203 1.292.54 0 .91-.195 1.075-.547h.857z"
                            fill="#FFFFFE"
                          ></path>
                        </g>
                      </svg>
                    }
                    {/* <!-- Google Play Button --> */}
                    {
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="135"
                        class="center-svg"
                        height="40"
                        viewBox="0 0 135 40"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            x1="61.043%"
                            y1="4.97%"
                            x2="26.517%"
                            y2="71.939%"
                            id="a"
                          >
                            <stop stop-color="#00A0FF" offset="0%"></stop>
                            <stop stop-color="#00A1FF" offset=".657%"></stop>
                            <stop stop-color="#00BEFF" offset="26.01%"></stop>
                            <stop stop-color="#00D2FF" offset="51.22%"></stop>
                            <stop stop-color="#00DFFF" offset="76.04%"></stop>
                            <stop stop-color="#00E3FF" offset="100%"></stop>
                          </linearGradient>
                          <linearGradient
                            x1="107.604%"
                            y1="50.085%"
                            x2="-130.554%"
                            y2="50.085%"
                            id="b"
                          >
                            <stop stop-color="#FFE000" offset="0%"></stop>
                            <stop stop-color="#FFBD00" offset="40.87%"></stop>
                            <stop stop-color="orange" offset="77.54%"></stop>
                            <stop stop-color="#FF9C00" offset="100%"></stop>
                          </linearGradient>
                          <linearGradient
                            x1="86.25%"
                            y1="30.901%"
                            x2="-50.108%"
                            y2="135.959%"
                            id="c"
                          >
                            <stop stop-color="#FF3A44" offset="0%"></stop>
                            <stop stop-color="#C31162" offset="100%"></stop>
                          </linearGradient>
                          <linearGradient
                            x1="-18.781%"
                            y1="-11.805%"
                            x2="42.11%"
                            y2="35.108%"
                            id="d"
                          >
                            <stop stop-color="#32A071" offset="0%"></stop>
                            <stop stop-color="#2DA771" offset="6.85%"></stop>
                            <stop stop-color="#15CF74" offset="47.62%"></stop>
                            <stop stop-color="#06E775" offset="80.09%"></stop>
                            <stop stop-color="#00F076" offset="100%"></stop>
                          </linearGradient>
                        </defs>
                        <g fill="none" fill-rule="nonzero">
                          <path
                            d="M130 0H5C2.25 0 0 2.25 0 5v30c0 2.75 2.25 5 5 5h125c2.75 0 5-2.25 5-5V5c0-2.75-2.25-5-5-5z"
                            fill="#A6A6A6"
                          ></path>
                          <path
                            d="M130 .8a4.2 4.2 0 014.2 4.2v30a4.2 4.2 0 01-4.2 4.2H5A4.2 4.2 0 01.8 35V5A4.2 4.2 0 015 .8h125"
                            fill="#000"
                          ></path>
                          <path
                            d="M47.42 10.24c0 .84-.25 1.51-.75 2-.56.59-1.3.89-2.2.89-.87 0-1.6-.3-2.21-.9-.61-.6-.91-1.35-.91-2.23 0-.89.3-1.63.91-2.23.61-.6 1.34-.9 2.21-.9.43 0 .84.08 1.23.25.39.17.7.39.94.67l-.53.53c-.4-.47-.94-.71-1.64-.71-.63 0-1.18.22-1.64.67-.46.44-.69 1.02-.69 1.73s.23 1.29.69 1.73c.46.44 1.01.67 1.64.67.67 0 1.23-.22 1.68-.67.29-.29.46-.7.5-1.22h-2.18V9.8h2.91c.02.14.04.29.04.44zM52.03 7.73H49.3v1.9h2.46v.72H49.3v1.9h2.73v.74h-3.5v-6h3.5zM55.28 13h-.77V7.74h-1.68V7h4.12v.74h-1.68V13zM59.94 13V7h.77v6zM64.13 13h-.77V7.74h-1.68V7h4.12v.74h-1.68V13zM73.61 12.22c-.59.61-1.32.91-2.2.91-.88 0-1.61-.3-2.2-.91-.59-.61-.88-1.35-.88-2.22 0-.88.29-1.62.88-2.22.59-.61 1.32-.91 2.2-.91.87 0 1.6.3 2.2.91.59.61.89 1.35.89 2.22-.01.87-.3 1.61-.89 2.22z"
                            stroke="#FFF"
                            stroke-width=".2"
                            fill="#FFF"
                          ></path>
                          <path
                            d="M69.78 11.72c.44.45.99.67 1.63.67.64 0 1.19-.22 1.63-.67.44-.45.67-1.02.67-1.72s-.22-1.27-.67-1.72c-.44-.45-.99-.67-1.63-.67-.64 0-1.19.22-1.63.67-.44.45-.67 1.02-.67 1.72s.22 1.27.67 1.72z"
                            stroke="#FFF"
                            stroke-width=".2"
                            fill="#000"
                          ></path>
                          <path
                            stroke="#FFF"
                            stroke-width=".2"
                            fill="#FFF"
                            d="M75.57 13V7h.94l2.92 4.67h.03l-.03-1.16V7h.77v6h-.8l-3.05-4.89h-.04l.03 1.16v3.74h-.77z"
                          ></path>
                          <path
                            d="M68.13 21.75c-2.35 0-4.27 1.79-4.27 4.25 0 2.45 1.92 4.25 4.27 4.25 2.35 0 4.27-1.8 4.27-4.25 0-2.46-1.91-4.25-4.27-4.25z"
                            fill="#FFF"
                          ></path>
                          <path
                            d="M68.13 28.58c-1.29 0-2.4-1.06-2.4-2.58 0-1.53 1.11-2.58 2.4-2.58 1.29 0 2.4 1.05 2.4 2.58 0 1.52-1.11 2.58-2.4 2.58z"
                            fill="#000"
                          ></path>
                          <path
                            d="M58.82 21.75c-2.35 0-4.27 1.79-4.27 4.25 0 2.45 1.92 4.25 4.27 4.25 2.35 0 4.27-1.8 4.27-4.25 0-2.46-1.92-4.25-4.27-4.25z"
                            fill="#FFF"
                          ></path>
                          <path
                            d="M58.82 28.58c-1.29 0-2.4-1.06-2.4-2.58 0-1.53 1.11-2.58 2.4-2.58 1.29 0 2.4 1.05 2.4 2.58 0 1.52-1.11 2.58-2.4 2.58z"
                            fill="#000"
                          ></path>
                          <path
                            d="M47.74 23.05v1.8h4.32c-.13 1.01-.47 1.76-.98 2.27-.63.63-1.61 1.32-3.33 1.32-2.66 0-4.74-2.14-4.74-4.8 0-2.66 2.08-4.8 4.74-4.8 1.43 0 2.48.56 3.25 1.29l1.27-1.27c-1.08-1.03-2.51-1.82-4.53-1.82-3.64 0-6.7 2.96-6.7 6.61 0 3.64 3.06 6.61 6.7 6.61 1.97 0 3.45-.64 4.61-1.85 1.19-1.19 1.56-2.87 1.56-4.22 0-.42-.03-.81-.1-1.13h-6.07v-.01zM93.05 24.45c-.35-.95-1.43-2.71-3.64-2.71-2.19 0-4.01 1.72-4.01 4.25 0 2.38 1.8 4.25 4.22 4.25 1.95 0 3.08-1.19 3.54-1.88l-1.45-.97c-.48.71-1.14 1.18-2.09 1.18s-1.63-.44-2.06-1.29l5.69-2.35-.2-.48z"
                            fill="#FFF"
                          ></path>
                          <path
                            d="M87.25 25.87c-.05-1.64 1.27-2.48 2.22-2.48.74 0 1.37.37 1.58.9l-3.8 1.58z"
                            fill="#000"
                          ></path>
                          <path
                            fill="#FFF"
                            d="M82.63 30h1.87V17.5h-1.87zM79.57 22.7h-.06c-.42-.5-1.22-.95-2.24-.95-2.13 0-4.08 1.87-4.08 4.27 0 2.38 1.95 4.24 4.08 4.24 1.01 0 1.82-.45 2.24-.97h.06v.61c0 1.63-.87 2.5-2.27 2.5-1.14 0-1.85-.82-2.14-1.51l-1.63.68c.47 1.13 1.71 2.51 3.77 2.51 2.19 0 4.04-1.29 4.04-4.43v-7.64h-1.77v.69z"
                          ></path>
                          <path
                            d="M77.42 28.58c-1.29 0-2.37-1.08-2.37-2.56 0-1.5 1.08-2.59 2.37-2.59 1.27 0 2.27 1.1 2.27 2.59 0 1.48-.99 2.56-2.27 2.56z"
                            fill="#000"
                          ></path>
                          <path
                            d="M101.8 17.49h-4.47v12.5h1.87v-4.74h2.61c2.07 0 4.1-1.5 4.1-3.88s-2.04-3.88-4.11-3.88z"
                            fill="#FFF"
                          ></path>
                          <path
                            d="M101.85 23.52H99.2v-4.29h2.65c1.4 0 2.19 1.16 2.19 2.14 0 .98-.79 2.15-2.19 2.15z"
                            fill="#000"
                          ></path>
                          <path
                            d="M113.38 21.72c-1.35 0-2.75.6-3.33 1.91l1.66.69c.35-.69 1.01-.92 1.7-.92.97 0 1.95.58 1.96 1.61v.13c-.34-.19-1.06-.48-1.95-.48-1.79 0-3.6.98-3.6 2.81 0 1.67 1.46 2.75 3.1 2.75 1.25 0 1.95-.56 2.38-1.22h.06v.97h1.8v-4.79c.02-2.22-1.64-3.46-3.78-3.46z"
                            fill="#FFF"
                          ></path>
                          <path
                            d="M113.16 28.58c-.61 0-1.46-.31-1.46-1.06 0-.96 1.06-1.33 1.98-1.33.82 0 1.21.18 1.7.42a2.264 2.264 0 01-2.22 1.97z"
                            fill="#000"
                          ></path>
                          <path
                            fill="#FFF"
                            d="M123.74 22l-2.14 5.42h-.06L119.32 22h-2.01l3.33 7.58-1.9 4.21h1.95L125.82 22zM106.93 30h1.87V17.5h-1.87z"
                          ></path>
                          <path
                            d="M10.43 7.53c-.29.31-.46.79-.46 1.4v22.12c0 .62.17 1.1.46 1.4l.07.07 12.39-12.39v-.3L10.51 7.46l-.08.07z"
                            fill="url(#a)"
                          ></path>
                          <path
                            d="M27.03 24.27l-4.13-4.13v-.3l4.13-4.13.09.05 4.89 2.78c1.4.79 1.4 2.09 0 2.89l-4.89 2.78-.09.06z"
                            fill="url(#b)"
                          ></path>
                          <path
                            d="M27.12 24.22L22.9 20 10.43 32.46c.46.49 1.22.55 2.08.06l14.61-8.3"
                            fill="url(#c)"
                          ></path>
                          <path
                            d="M27.12 15.77l-14.61-8.3c-.86-.49-1.62-.43-2.08.06l12.46 12.46 4.23-4.22z"
                            fill="url(#d)"
                          ></path>
                        </g>
                      </svg>
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Office */}
          <section className="partners office">
            <div className="max-w-xl">
              <p className="backdrop-text">Office</p>
              <p className="caption">Take your office out to lunch</p>
            </div>

            <div className="background-image"></div>

            <div className="max-w-xl">
              <div className="content">
                <p className="header-text">Foodpanda for business</p>

                {
                  <p>
                    Order lunch or fuel for work-from-home, late nights in the
                    office, corporate events, client meetings, and much more.
                  </p>
                }

                <button>Get Started</button>
              </div>
            </div>
          </section>

          {/* Content and FAQs */}
          <section className="FAQ max-w-xl">
            {
              <p class="heading">
                Order food and groceries online from the best restaurants and
                shops on foodpanda
              </p>
            }
            {
              <p class="text">
                Are you hungry? Did you have a long and stressful day?
                Interested in getting a cheesy pizza delivered to your office or
                looking to avoid the weekly shop? Then foodpanda Pakistan is the
                right destination for you! foodpanda offers you a long and
                detailed list of the best restaurants and shops near you to help
                make your everyday easier. Our online food delivery service has
                it all, whether you fancy Indian, Pakistani or Afghan cuisine,
                foodpanda Pakistan has over 15,000 restaurants available in top
                cities like Islamabad, Lahore, Rawalpindi, and Karachi. Did you
                know you can order your groceries and more from foodpanda, too?
                Check out foodpanda shops for favourite partners like Al-Fatah,
                Greenvalley and more. Sit back and relax – let foodpanda
                Pakistan take the pressure off your shoulders.
              </p>
            }
            {<p class="heading">What's new?</p>}
            {
              <ul class="list">
                <li>
                  <span>✓</span> Selection of premium restaurants, all kind of
                  cuisines.
                </li>
                <li>
                  <span>✓</span> High quality delivery service.
                </li>
                <li>
                  <span>✓</span> Live chat feature to give App users instant
                  help when they need it.
                </li>
                <li>
                  <span>✓</span> NEW: foodpanda grocery delivery! Discover the
                  best shops, pharmacies, bakeries and more near you.
                </li>
              </ul>
            }
            {<div class="divider"></div>}
            {<p class="sub-heading">Frequently Asked Questions</p>}
            {<p class="bold-text">How can I get foodpanda delivery?</p>}
            {
              <p class="text">
                To get foodpanda delivery, simply locate the restaurants and
                shops near you by typing in your address, browse through a
                variety of restaurants and cuisines, check menus and prices,
                choose your dishes and add them to the basket. Now you only need
                to checkout and make the payment. Soon your delicious food will
                arrive at your doorstep!
              </p>
            }
            {<p class="bold-text">How can I order food in Pakistan?</p>}
            {
              <p class="text">
                To order food delivery in Pakistan, follow these simple steps:
              </p>
            }
            {
              <ul class="list indented">
                <li>
                  <strong>Find a restaurant.</strong> Enter your delivery
                  address in the location form to see all the places that
                  deliver to your location. It can be your home, office, a hotel
                  or even parks!
                </li>
                <li>
                  <strong>Choose your dishes.</strong> Browse the menu of the
                  chosen restaurant, select your dishes and add them to your
                  basket. When you are done, press the "Checkout" button.
                </li>
                <li>
                  <strong>Checkout & Payment.</strong> Check your order, payment
                  method selection and exact delivery address. Simply follow the
                  checkout instructions from there.
                </li>
                <li>
                  <strong>Delivery.</strong> We will send you an email and SMS
                  confirming your order and delivery time. Sit back, relax and
                  wait for piping hot food to be conveniently delivered to you!.
                </li>
              </ul>
            }
            {<p class="bold-text">Does foodpanda deliver 24 hours?</p>}
            {
              <p class="text">
                Yes, foodpanda in Pakistan delivers 24 hours. However, many
                restaurants may be unavailable for a late night delivery. Please
                check which places in Pakistan deliver to you 24 hours by using
                your address. You can also order groceries 24 hours a day via
                pandamart.
              </p>
            }
            {<p class="bold-text">Can you pay cash for foodpanda?</p>}
            {
              <p class="text">
                Yes, you can pay cash on delivery for foodpanda in Pakistan.
              </p>
            }
            {<p class="bold-text">How can I pay foodpanda online?</p>}
            {
              <p class="text">
                You can pay online while ordering at foodpanda Pakistan by using
                a credit or debit card or PayPal.
              </p>
            }
            {<p class="bold-text">Can I order foodpanda for someone else?</p>}
            {
              <p class="text">
                Yes, foodpanda Pakistan allows you to place an order for someone
                else. During checkout, just update the name and delivery address
                of the person you're ordering for. Please keep in mind that if
                the delivery details are not correct and the order cannot be
                delivered, we won't be able to process a refund.
              </p>
            }
            {
              <p class="bold-text">
                How much does foodpanda charge for delivery?
              </p>
            }
            {
              <p class="text">
                Delivery fee charged by foodpanda in Pakistan depends on many
                operational factors, most of all - location and a restaurant you
                are ordering from. You can always check the delivery fee while
                forming your order. Besides, you can filter the restaurants by
                clicking on "Free Delivery" icon on the top of your restaurants
                listing.
              </p>
            }
            {<p class="bold-text">What restaurants let you order online?</p>}
            {
              <p class="text">
                There are hundreds of restaurants on foodpanda Pakistan that let
                you order online. For example,
                <a href="#_">KFC</a> ,<a href="#_">McDonald's</a> ,
                <a href="#_">Pizza Hut,</a> <a href="#_">OPTP</a>,
                <a href="#_">Hardee's</a>, <a href="#_">Domino's</a>,
                <a href="#_">Kababjees</a> and many-many more! In order to check
                all the restaurants near you that deliver, just type in your
                address and discover all the available places.
              </p>
            }
            {<p class="bold-text">Does foodpanda have minimum order?</p>}
            {
              <p class="text">
                Yes, many restaurants have a minimum order. The minimum order
                value depends on the restaurant you order from and is indicated
                during your ordering process.
              </p>
            }
            {
              <p class="bold-text">
                What is the difference between delivery and Pick-Up?
              </p>
            }
            {
              <p class="text">
                If you choose delivery, a foodpanda rider will collect your
                order from the restaurant and take it to your chosen delivery
                address. If you choose Pick-Up, you can takeaway your food
                directly from the restaurant for extra savings – and to jump to
                the front of the queue. Pick-Up orders are available for
                restaurants only.
              </p>
            }
          </section>
        </main>

        <footer>
          {/* <!-- Divider --> */}
          <div class="divider max-w-xl"></div>
          {/* <!-- Divider --> */}

          {/* Branding */}
          <section className="branding max-w-xl">
            {
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                className="logo"
                viewBox="0 0 1366 346"
                style={{ enableBackground: "new 0 0 1366 346" }}
                xmlSpace="preserve"
              >
                <title>foodpanda</title>
                <g className="svg-stroke-container">
                  <path
                    style={svgStyle}
                    d="M305.1,129.9h18.7v-17.3c0-21,11.7-35,35-35l11.7,2.3v21l-12.8-2.3c-7,0-10.5,4.7-10.5,11.7v19.6h23.3v21
        h-23.3v88.7h-23.3v-88.7h-18.7V129.9z"
                  ></path>
                  <path
                    style={svgStyle}
                    class="st1"
                    d="M430.9,127.6c30.3,0,57.2,23.3,57.2,57.2c0,33.8-26.8,57.2-57.2,57.2c-30.3,0-57.2-23.3-57.2-57.2
                C373.8,150.9,400.6,127.6,430.9,127.6z M430.9,220.9c22.2,0,33.8-16.3,33.8-36.2c0-19.8-11.7-36.2-33.8-36.2
                c-22.2,0-33.8,16.3-33.8,36.2C397.1,204.6,408.8,220.9,430.9,220.9z"
                  ></path>
                  <path
                    style={svgStyle}
                    class="st1"
                    d="M555.5,127.6c30.3,0,57.2,23.3,57.2,57.2c0,33.8-26.8,57.2-57.2,57.2s-57.2-23.3-57.2-57.2
                C498.4,150.9,525.2,127.6,555.5,127.6z M555.5,220.9c22.2,0,33.8-16.3,33.8-36.2c0-19.8-11.7-36.2-33.8-36.2
                c-22.2,0-33.8,16.3-33.8,36.2C521.7,204.6,533.4,220.9,555.5,220.9z"
                  ></path>
                  <path
                    style={svgStyle}
                    class="st1"
                    d="M735,239.6h-21l-2.3-9.3l-1.2-1.2l-1.2,1.2c-7,7-18.7,11.7-30.3,11.7c-30.3,0-56-23.3-56-57.2
                c0-33.8,25.7-57.2,56-57.2c11.4,0,23.3,4.7,30.3,11.7l1.2,1.2l1.2-1.2V77.6H735V239.6z M680.2,148.6c-22.2,0-34.1,16.3-34.1,36.2
                c0,19.8,11.9,36.2,34.1,36.2c19.8,0,33.8-16.3,33.8-36.2C714,164.9,700,148.6,680.2,148.6z"
                  ></path>
                  <path
                    style={svgStyle}
                    class="st1"
                    d="M758.4,129.9h21l2.1,9.3l1.4,1.2l1.2-1.2c7-7,18.7-11.7,30.3-11.7c30.3,0,56,23.3,56,57.2
                c0,33.8-25.7,57.2-56,57.2c-11.4,0-23.3-4.7-30.3-11.7l-1.2-1.2l-1.4,1.2V289h-23.1V129.9z M813.2,220.9
                c22.2,0,33.8-16.3,33.8-36.2c0-19.8-11.7-36.2-33.8-36.2c-19.8,0-33.8,16.3-33.8,36.2C779.4,204.6,793.4,220.9,813.2,220.9z"
                  ></path>
                  <path
                    style={svgStyle}
                    class="st1"
                    d="M929.1,171.5h19.1v-4.8c0-13.2-9-19.3-21.5-19.3c-10.1,0-16.9,4.8-20.6,14.7l-20.9-4.4
                c4.6-18.7,20.6-30.5,41.7-30.5c29.4,0,44.1,14.5,44.1,43.7v68.7h-19.3l-2.2-14.5c-7.7,10.8-19.1,16.3-34.3,16.3
                c-19.5,0-34-11.6-34-33.6C881.2,185.1,900.4,171.5,929.1,171.5z M919.2,221.1c7.7,0,14.5-2.4,20.2-7.2c5.9-5.1,8.8-11.9,8.8-20.9
                v-2.4h-20c-14.1,0-22.8,6.6-22.8,17.1C905.4,215.6,910.2,221.1,919.2,221.1z"
                  ></path>
                  <path
                    style={svgStyle}
                    class="st1"
                    d="M992.6,129.9h21l2.3,9.3l1.2,1.2l1.2-1.2c4.7-7,16.3-11.7,25.7-11.7c28,0,44.3,18.7,44.3,44.3v67.7h-23.3
                v-67.7c-0.7-14.9-7.9-23.3-23.3-23.3c-13.8,0-25.2,11.2-25.7,24.7v66.3h-23.3V129.9z"
                  ></path>
                  <path
                    style={svgStyle}
                    class="st1"
                    d="M1215.3,239.6h-21l-2.3-9.3l-1.2-1.2l-1.2,1.2c-7,7-18.7,11.7-30.3,11.7c-30.3,0-56-23.3-56-57.2
                c0-33.8,25.7-57.2,56-57.2c11.4,0,23.3,4.7,30.3,11.7l1.2,1.2l1.2-1.2V77.6h23.3V239.6z M1160.4,148.6
                c-22.2,0-34.1,16.3-34.1,36.2c0,19.8,11.9,36.2,34.1,36.2c19.8,0,33.8-16.3,33.8-36.2C1194.3,164.9,1180.3,148.6,1160.4,148.6z"
                  ></path>
                  <path
                    style={svgStyle}
                    class="st1"
                    d="M1281.7,171.5h19.1v-4.8c0-13.2-9-19.3-21.5-19.3c-10.1,0-16.9,4.8-20.6,14.7l-20.9-4.4
                c4.6-18.7,20.6-30.5,41.7-30.5c29.4,0,44.1,14.5,44.1,43.7v68.7h-19.3l-2.2-14.5c-7.7,10.8-19.1,16.3-34.3,16.3
                c-19.5,0-34-11.6-34-33.6C1233.8,185.1,1252.9,171.5,1281.7,171.5z M1271.8,221.1c7.7,0,14.5-2.4,20.2-7.2
                c5.9-5.1,8.8-11.9,8.8-20.9v-2.4h-20c-14.1,0-22.8,6.6-22.8,17.1C1258,215.6,1262.8,221.1,1271.8,221.1z"
                  ></path>
                </g>
                <g>
                  <path
                    style={svgStyle}
                    class="st1"
                    d="M142.1,205.3c13.5,0,24.4-9.6,24.4-21.4h-48.7C117.8,195.7,128.6,205.3,142.1,205.3z"
                  ></path>
                  <g>
                    <path
                      style={svgStyle}
                      class="st1"
                      d="M224.4,103.3c5.5-4.8,9.1-11.8,9.1-19.8c0-14.4-11.7-26.1-26.2-26.1c-9.3,0-17.4,4.8-22,12
                  c-13-6.3-27.6-9.9-43-9.9c-15.4,0-30,3.5-43,9.8c-4.7-7.2-12.7-12-22-12c-14.4,0-26.2,11.7-26.2,26.1c0,7.9,3.5,15,9,19.7
                  c-10.7,15.8-17,34.9-17,55.4c0,54.7,44.5,99.1,99.1,99.1c54.6,0,99.1-44.4,99.1-99.1C241.4,138.2,235.1,119.1,224.4,103.3z
                   M142.3,250.1c-50.4,0-91.4-41-91.4-91.4c0-19,5.8-36.6,15.7-51.2c9-13.2,21.4-24,35.8-31c12-5.9,25.5-9.2,39.8-9.2
                  c14.3,0,27.8,3.3,39.9,9.2c14.5,7,26.8,17.8,35.8,31c9.9,14.6,15.7,32.2,15.7,51.2C233.7,209.1,192.7,250.1,142.3,250.1z"
                    ></path>
                    <path
                      style={svgStyle}
                      class="st1"
                      d="M142.1,177.8c1.5,0.4,17.2-4.9,17.2-12.3c0-4.1-12.7-4.9-17.2-4.9c-4.4,0-17.2,0.8-17.2,4.9
                  C124.9,172.9,140.6,178.2,142.1,177.8z"
                    ></path>
                    <path
                      style={svgStyle}
                      class="st1"
                      d="M199.7,115.8c-8.6-5.7-27.7-9.1-35.1,0.8c0,0-9.4,10.1-0.2,20.6c9.3,10.5,16.4,20.3,18.5,28.8
                  c2.1,8.5,5.5,12,12.4,12.1c6.9,0,20.1-10.5,21.8-27.4C218.8,133.8,208.3,121.4,199.7,115.8z M180,137.4c-2.9,0-5.2-2.3-5.2-5.2
                  c0-2.9,2.4-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2C185.1,135,182.8,137.4,180,137.4z"
                    ></path>
                    <path
                      style={svgStyle}
                      class="st1"
                      d="M119.6,116.5c-7.5-9.8-26.6-6.5-35.1-0.8c-8.6,5.7-19.1,18-17.4,34.9c1.6,16.9,14.9,27.4,21.8,27.4
                  c6.9,0,10.3-3.5,12.4-12.1c2.1-8.5,9.3-18.3,18.5-28.8C129,126.6,119.6,116.5,119.6,116.5z M105.8,137.4c-2.9,0-5.2-2.3-5.2-5.2
                  c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2C110.9,135,108.6,137.4,105.8,137.4z"
                    ></path>
                  </g>
                </g>
              </svg>
            }

            <div className="socials">
              {<img src={fb_img} alt="facebook" style={svgStyle} />}
              {<img src={insta_img} alt="instagram" style={svgStyle} />}
            </div>
          </section>

          {/* <!-- Divider --> */}
          <div class="divider max-w-xl"></div>
          {/* <!-- Divider --> */}

          {/* Links */}
          <section className="links max-w-xl">
            {
              <div class="first-col col">
                <p>&copy; 2022 foodpanda</p>
              </div>
            }
            {
              <div class="second-col col">
                <a href="#_">Press</a>
                <a href="#_">Help Center</a>
                <a href="#_">Refunds with pandapay</a>
                <a href="#_">Pandapay User Account Terms and Conditions</a>
                <a href="#_">Terms and conditions</a>
                <a href="#_">Privacy policy</a>
                <a href="#_">Security</a>
                <a href="#_">Download foodpanda App</a>
              </div>
            }
            {
              <div class="third-col col">
                <a href="#_">Careers</a>
                <a href="#_">Suggest a restaurant</a>
                <a href="#_">Corporate Customer</a>
                <a href="#_">All cuisines</a>
                <a href="#_">foodpanda Magazine</a>
                <a href="#_">Partner with us</a>
                <a href="#_">pandago - Request a rider</a>
                <a href="#_">foodpanda Vouchers & Promo</a>
              </div>
            }

            {
              <div class="fourth-col col">
                <a href="#_">All cities</a>
                <a href="#_">Update on COVID-19 in Pakistan</a>
                <a href="#_">pandamart Grocery Delivery</a>
                <a href="#_">foodpanda home chef</a>
                <a href="#_">Become an affiliate</a>
                <a href="#_">Ramzan deals</a>
              </div>
            }
          </section>

          {/* <!-- Divider --> */}
          <div class="divider max-w-xl"></div>
          {/* <!-- Divider --> */}

          {/* Countries */}
          <section className="countries max-w-xl">
            {<a href="#_">Laos</a>}
            {<div class="vertical-divider"></div>}
            {<a href="#_">Myanmar</a>}
            {<div class="vertical-divider"></div>}
            {<a href="#_">Thailand</a>}
            {<div class="vertical-divider"></div>}
            {<a href="#_">Hong Kong</a>}
            {<div class="vertical-divider"></div>}
            {<a href="#_">Taiwan</a>}
            {<div class="vertical-divider"></div>}
            {<a href="#_">Malaysia</a>}
            {<div class="vertical-divider"></div>}
            {<a href="#_">Phillipines</a>}
            {<div class="vertical-divider"></div>}
            {<a href="#_">Singapore</a>}
          </section>
        </footer>
      </body>
    </div>
  );
}

export default LandingPage;
