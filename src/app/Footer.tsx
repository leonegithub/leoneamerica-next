"use client";

import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      {/* Widgets - Bootstrap Brain Component */}
      <section className="py-4 py-md-5 py-xl-6 py-xxl-8">
        <div className="container ">
          <div className="row gy-3">
            <div className="col-6 col-md-4">
              <div className="link-wrapper">
                <h4 className="mb-3 fw-bold">Services</h4>
                <ul className="m-0 list-unstyled">
                  <li className="mb-1">
                    <Link href={"/servizi/download"}>Downloads</Link>
                  </li>
                  <li className="mb-1">
                    <a href="#!">Newlist</a>
                  </li>
                  <li className="mb-1">
                    <Link href={`/servizi/assistenza-clienti`}>
                      Customer support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="link-wrapper">
                <h4 className="mb-3 fw-bold">Scientific publications</h4>
                <ul className="m-0 list-unstyled">
                  <li className="mb-1">
                    <a href="#!">Orthodontics</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="link-wrapper">
                <h4 className="mb-3 fw-bold">Quality</h4>
                <ul className="m-0 list-unstyled">
                  <li className="mb-1">
                    <Link href={`/quality/safety-sheets`}>Safety sheets</Link>
                  </li>
                  <li className="mb-1">
                    <Link href={`/quality/quality-system`}>Quality system</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Social Media - Bootstrap Brain Component */}
      <div className="pb-4">
        <div className="container">
          <div className="row align-items-sm-center gy-3">
            <div className="col-12 col-sm-6">
              <div className="link-wrapper">
                <p>Copyright Leone </p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="social-media-wrapper">
                <ul className="m-0 list-unstyled d-flex justify-content-sm-end gap-3 gap-xl-4">
                  <li>
                    <a href="#!" className="link-opacity-75-hover link-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-youtube"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-opacity-75-hover link-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.117 0H.883A.883.883 0 0 0 0 .883v14.235c0 .487.396.883.883.883h7.823v-6.106H5.515V6.328h2.191V4.853c0-2.185 1.337-3.379 3.284-3.379.929 0 1.731.07 1.962.1v2.273h-1.347c-1.045 0-1.248.496-1.248 1.221v1.55h2.496l-.326 2.449h-2.17V16h4.273a.883.883 0 0 0 .883-.883V.883A.883.883 0 0 0 15.117 0z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-opacity-75-hover link-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.036 0 9.34-5 9.34-9.34v-.425C14.82 4.793 15.508 3.888 16 2.78a9.465 9.465 0 0 1-2.683.733 4.81 4.81 0 0 0 2.115-2.647 9.584 9.584 0 0 1-3.074 1.17A4.795 4.795 0 0 0 7.874 5.207a13.64 13.64 0 0 1-9.897-5.04 4.8 4.8 0 0 0 1.48 6.442A4.788 4.788 0 0 1 1 6.743v.05a4.797 4.797 0 0 0 3.84 4.694 4.79 4.79 0 0 1-2.162.08 4.797 4.797 0 0 0 4.482 3.325" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-opacity-75-hover link-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .515.511 0 1.146 0h13.708C15.489 0 16 .515 16 1.146v13.708C16 15.489 15.489 16 14.854 16H1.146C.511 16 0 15.489 0 14.854V1.146zM5.949 13.153V8.993H4.322V13.15h1.627zm-1.164-6.408c.527 0 .858-.352.858-.794 0-.444-.331-.794-.853-.794s-.86.35-.86.794c0 .442.333.794.855.794h-.002zm8.259 6.408v-3.3c0-.874-.287-1.466-1.022-1.466-.557 0-.889.373-1.035.73h.014v-1.367h-1.628c.022.463 0 3.301 0 3.301h1.631zM12.951 8.993c-.445 0-.732.269-.854.577h-.012v-.516h-1.647v5.162h1.627v-2.749c0-1.314.488-2.24 1.618-2.24.564 0 1.269.409 1.269 1.587v1.379h1.627v-1.453c0-1.644-1.28-2.82-2.762-2.82" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
