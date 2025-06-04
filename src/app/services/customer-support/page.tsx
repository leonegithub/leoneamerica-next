import "./style.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import leonedsl65 from "./Leone90_DSL-65.jpg";
import Image from "next/image";

export default function AssistenzaClienti() {
  return (
    <>
      <div className="assistenza-clienti">
        <div className="img-container">
          <Image src={leonedsl65} alt="leone-dsl"></Image>
        </div>
        <div className="container jumbo">
          <div className="info">
            <div className="section">
              <h2 className="blue">Expertise and Availability</h2>
              <p>
                The assistance department, composed of technicians and engineers
                constantly undergoing professional updates, is always available
                to provide product information and resolve any issues. A team of
                professionals located throughout Italy, in coordination with
                Leone and the company’s commercial partners, offers its
                professional experience in the field of implantology,
                reliability, and support to fellow doctors.
              </p>
            </div>
            <div className="section">
              <h2 className="blue">Timeliness</h2>
              <p>
                Careful management and a cutting-edge logistics system allow us
                to fulfill orders with maximum precision and deliver goods to
                the carrier on average within 1 business day.
              </p>
            </div>
          </div>
          <Form>
            <Row className="g-2">
              <Col md>
                <FloatingLabel label="Nome">
                  <Form.Control
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel label="Cognome">
                  <Form.Control
                    type="text"
                    id="cognome"
                    name="cognome"
                    placeholder="Cognome"
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="g-2">
              <Col md>
                <FloatingLabel label="Indirizzo email">
                  <Form.Control
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Indirizzo email"
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel label="Numero di telefono">
                  <Form.Control
                    name="telefono"
                    id="telefono"
                    type="number"
                    placeholder="Numero di telefono"
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Carica un file
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                accept="jpg, jpeg, csx, xls"
              />
            </div>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg p-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Send
            </button>
          </Form>
        </div>
      </div>
      ;
    </>
  );
}
