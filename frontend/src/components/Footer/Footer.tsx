import { Container, Row, Col } from 'react-bootstrap'
import GitHubIcon from '@mui/icons-material/GitHub';

export function Footer() {
  return (
    <Container id="footer-div" fluid style={{textAlign: 'center'}}>
      <Row id="footer-row" style={{maxHeight: '20px', marginBottom: '3px'}}>
        <Col>QAOA Quantum Optimizer</Col>
      </Row>
      <Row id="footer-row">
        <Col>
            <a href="https:www.github.com/sanchezhs">
            <GitHubIcon color='secondary'/>
            </a>
        </Col>
      </Row>
    </Container>
  );
};
