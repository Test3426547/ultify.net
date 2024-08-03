<template>
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ms-auto me-auto text-center">
          <h3 class="text-primary">Our Comprehensive Website Services</h3>
          <p class="text-body">Discover the essentials to create an effective and high-converting website. From design and development to ongoing maintenance, we've got you covered.</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-5 ms-auto">
          <div class="card bg-cover text-center mb-4" :style="{ backgroundImage: 'url(/curved1.jpg)' }">
            <div class="card-body z-index-2 py-9">
              <h2 class="text-white">Website Design & Development</h2>
              <p class="text-white">
                Build a strong online presence with custom design and development services tailored to your brand and business goals.
              </p>
              <label class="badge badge-light text-dark">Design & Development</label>
            </div>
            <div class="mask bg-gradient-primary border-radius-lg"></div>
          </div>
          <div class="card bg-cover text-center mb-4" :style="{ backgroundImage: 'url(/curved2.jpg)' }">
            <div class="card-body z-index-2 py-9">
              <h2 class="text-white">Mobile Conversion</h2>
              <p class="text-white">
                Optimize your website for mobile devices to enhance user experience and increase conversions on-the-go.
              </p>
              <label class="badge badge-light text-dark">Mobile Optimization</label>
            </div>
            <div class="mask bg-gradient-info border-radius-lg"></div>
          </div>
        </div>

        <div class="col-md-5 me-auto my-auto">
          <div class="p-3 info-horizontal d-flex mb-4">
            <div class="icon icon-md me-4">
              <svg class="text-primary" width="25px" height="25px" viewBox="0 0 46 42" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <g fill="#FFFFFF" fill-rule="nonzero">
                    <g>
                      <path class="color-foreground" d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z" opacity="0.59858631"></path>
                      <path class="color-foreground" d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"></path>
                      <path class="color-foreground" d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h4 class="text-body">Website Management</h4>
              <p class="text-body">
                Continuous website management to keep your site updated, secure, and performing at its best.
              </p>
            </div>
          </div>
          <div class="p-3 info-horizontal d-flex mb-4">
            <div class="icon icon-md me-4">
              <svg class="text-primary" width="25px" height="25px" viewBox="0 0 42 44" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <g fill="#923DFA" fill-rule="nonzero">
                    <g>
                      <path class="color-background" d="M18.8086957,4.70034783 C15.3814926,0.343541521 9.0713063,-0.410050841 4.7145,3.01715217 C0.357693695,6.44435519 -0.395898667,12.7545415 3.03130435,17.1113478 C5.53738466,10.3360568 11.6337901,5.54042955 18.8086957,4.70034783 Z" opacity="0.6"></path>
                      <path class="color-background" d="M38.9686957,17.1113478 C42.3958987,12.7545415 41.6423063,6.44435519 37.2855,3.01715217 C32.9286937,-0.410050841 26.6185074,0.343541521 23.1913043,4.70034783 C30.3662099,5.54042955 36.4626153,10.3360568 38.9686957,17.1113478 Z" opacity="0.6"></path>
                      <path class="color-foreground" d="M34.3815652,34.7668696 C40.2057958,27.7073059 39.5440671,17.3375603 32.869743,11.0755718 C26.1954189,4.81358341 15.8045811,4.81358341 9.13025701,11.0755718 C2.45593289,17.3375603 1.79420418,27.7073059 7.61843478,34.7668696 L3.9753913,40.0506522 C3.58549114,40.5871271 3.51710058,41.2928217 3.79673036,41.8941824 C4.07636014,42.4955431 4.66004722,42.8980248 5.32153275,42.9456105 C5.98301828,42.9931963 6.61830436,42.6784048 6.98113043,42.1232609 L10.2744783,37.3434783 C16.5555112,42.3298213 25.4444888,42.3298213 31.7255217,37.3434783 L35.0188696,42.1196087 C35.6014207,42.9211577 36.7169135,43.1118605 37.53266,42.5493622 C38.3484064,41.9868639 38.5667083,40.8764423 38.0246087,40.047 L34.3815652,34.7668696 Z M30.1304348,25.5652174 L21,25.5652174 C20.49574,25.5652174 20.0869565,25.1564339 20.0869565,24.6521739 L20.0869565,15.5217391 C20.0869565,15.0174791 20.49574,14.6086957 21,14.6086957 C21.50426,14.6086957 21.9130435,15.0174791 21.9130435,15.5217391 L21.9130435,23.7391304 L30.1304348,23.7391304 C30.6346948,23.7391304 31.0434783,24.1479139 31.0434783,24.6521739 C31.0434783,25.1564339 30.6346948,25.5652174 30.1304348,25.5652174 Z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h4 class="text-body">Conversion Rate Optimization</h4>
                <p class="text-body">
                  Enhance your website's performance by increasing the percentage of visitors who convert into customers. We use data-driven strategies to optimize user experience and maximize conversions.
                </p>
              </div>
            </div>
            <div class="p-3 info-horizontal d-flex mb-4">
              <div class="icon icon-md me-4">
                <svg class="text-primary" width="25px" height="25px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <g fill="#FFFFFF" fill-rule="nonzero">
                      <g>
                        <path class="color-foreground" d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"></path>
                        <path class="color-background" d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z" opacity="0.7"></path>
                        <path class="color-background" d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z" opacity="0.7"></path>
                      </g>
                    </g>
                  </g>
              </svg>
            </div>
            <div>
              <h4 class="text-body">Website Maintenance</h4>
              <p class="text-body">
                Regular maintenance ensures your website remains secure, updated, and efficient, minimizing downtime and enhancing user satisfaction.
              </p>
            </div>
          </div>
          <div class="p-3 info-horizontal d-flex mb-4">
            <div class="icon icon-md me-4">
              <svg class="text-primary" width="25px" height="25px" viewBox="0 0 52 35" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <g fill="#FFFFFF" fill-rule="nonzero">
                    <g>
                      <path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743">
                      </path>
                      <path class="color-foreground" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h4 class="text-body">Website Audit & Strategy</h4>
              <p class="text-body">
                Comprehensive audits and strategic planning to enhance your website's effectiveness, align it with your business goals, and ensure it meets industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col text-center">
          <NuxtLink to="/consultation" class="btn btn-primary btn-lg">
            Website Consultation
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WebsiteContent',
};
</script>

<style scoped>
.card {
  position: relative;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.info-horizontal {
  align-items: center;
}

.text-primary {
  color: var(--bs-primary) !important;
}

.text-body {
  color: var(--bs-body-color) !important;
}

.bg-light {
  background-color: var(--bs-light-bg) !important;
}

.btn-primary {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

.btn-primary:hover {
  background-color: darken(var(--bs-primary), 10%);
  border-color: darken(var(--bs-primary), 10%);
}

/* Dark mode styles */
.dark-mode .text-body {
  color: var(--bs-body-color-dark) !important;
}

.dark-mode .bg-light {
  background-color: var(--bs-dark-bg) !important;
}

.dark-mode .btn-primary {
  background-color: var(--bs-primary-dark);
  border-color: var(--bs-primary-dark);
}

.dark-mode .btn-primary:hover {
  background-color: darken(var(--bs-primary-dark), 10%);
  border-color: darken(var(--bs-primary-dark), 10%);
}
</style>