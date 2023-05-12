import { Row, Col } from "react-bootstrap";
import { Card } from "../../components/Elements/index";
import circuit from "./circuit.png";

export function Home() {
  const body = {
    comment: "no_button",
    type: "maximize",
    objective: "x",
    constraints: ["x <= 1"],
    circuitDepth: "p = 1",
  };

  return (
    <>
       <section id="container-section" className="container">
      <h3 >
        QAOA <small className="text-muted">How does it work?</small>
      </h3>
      <p>
        The Quantum Approximate Optimization Algorithm (
        <a href="https://arxiv.org/pdf/1411.4028.pdf">QAOA</a>) is a quantum
        algorithm that can be used to find approximate solutions to
        combinatorial optimization problems. It is a variational algorithm,
        meaning that it uses both a classical computer and a quantum computer
        through a process which is a discretization of quantum annealing, whose goal is to find the
        minimum of a function.
      </p>
      <p>
        This tool allows you to test the QAOA algorithm on integer programming
        problems, and to see the results obtained by the algorithm. The example
        below shows how to use the tool and the circuit that is generated for
        the problem.
      </p>
      <Row id="modal-row">
        <Card body={[body]} />
        <Col>
          <div style={{ position: "relative" }}>
            <figure style={{ textAlign: "center" }}>
              <img src={circuit} alt="QAOA Circuit" style={{ width: "100%" }} />
              <figcaption>QAOA Circuit</figcaption>
            </figure>
          </div>
        </Col>
      </Row>
      </section>
    </>
  );
}