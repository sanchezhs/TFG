import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { Button, Modal, Container, Row, Col } from 'react-bootstrap'

export function myModal() {
  const { modalShow, setModalShow } = useContext(AppContext);
  return (
    <>
      <Modal
        show={modalShow.show}
        onHide={() => setModalShow({ show: false, body: [] })}
      >
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            {modalShow.body.map((error, i) => (
              <Row key={i} id="modal-row">
                <Col style={{ overflowY: "scroll" }}>
                  <p>{error}</p>
                </Col>
              </Row>
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setModalShow({ show: false, body: [] })}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
