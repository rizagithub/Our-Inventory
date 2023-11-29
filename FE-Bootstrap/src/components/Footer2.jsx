import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Image, Modal, Button } from "react-bootstrap";

import "./Footer.css";

function Footer2 () {
  return (
    <MDBFooter bgColor='light' className=' pt-5 text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                About
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam, odio deleniti voluptatem neque sint nam. Cum placeat incidunt, quas recusandae quos optio vel esse repudiandae iure aspernatur, nam voluptatibus!
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Link</h6>
              <p>
                <a href='https://www.lamongankab.go.id/' className='text-reset'>
                  Kabupaten Lamongan
                </a>
              </p>
              <p>
                <a href='https://www.lamongankab.go.id/beranda/diskominfo/' className='text-reset'>
                  Diskominfo
                </a>
              </p>
              <p>
                <a href='https://www.lamongankab.go.id/beranda/diskominfo/' className='text-reset'>
                  Web Diskominfo
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help Center
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Address</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Jl. KH Ahmad Dahlan No.01 Lamongan
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol >

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <div className="col-md-2 col-12 text-md-center" id="sosmed">
                <ul className="social list-unstyled">
                  <li>
                    <a
                      href="https://www.instagram.com/academybinar/"
                      target="blank"
                    >
                      <Image
                        className="history-top__arrow-left my-2"
                        src="./instagram-logo.png"
                        style={{ width: "25px", height: "25px" }}
                      />
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@academybinar" target="blank">
                      <Image
                        className="history-top__arrow-left my-2"
                        src="./tiktok-logo.png"
                        style={{ width: "25px", height: "25px" }}
                      />
                      <span className="icon-tiktok"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/binaracademy/"
                      target="blank"
                    >
                      <Image
                        className="history-top__arrow-left my-2"
                        src="./facebook-logo.png"
                        style={{ width: "25px", height: "25px" }}
                      />
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@BinarAcademy"
                      target="_blank"
                    >
                      <Image
                        className="history-top__arrow-left my-2"
                        src="./youtube-logo.png"
                        style={{ width: "40px", height: "30px" }}
                      />
                      <span className="icon-youtube"></span>
                    </a>
                  </li>
                </ul>
                <p className="">
                  <a
                    href="mailto:ferdy.lz2000@gmail.com?subject=Subjek_email&body=Pesan_email"
                    target="_blank"
                    className="btn btn-tertiary"
                  >
                  </a>
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright : <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
           Rizatul Mas Ulah
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer2;