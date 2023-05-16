import { GateMenu } from "./Quantum/index";

export function Home() {
  return (
    <>
      <section id="container-section" className="container">
            <h3>QAOA</h3>
            <p>
              The Quantum Approximate Optimization Algorithm (
              <a href="https://arxiv.org/pdf/1411.4028.pdf">QAOA</a>) is a
              quantum algorithm that can be used to find approximate solutions
              to combinatorial optimization problems. It is a variational
              algorithm, meaning that it uses both a classical computer and a
              quantum computer through a process which is a discretization of
              quantum annealing, whose goal is to find the minimum of a
              function.
            </p>
            <p>
              This tool is designed to help users understand the basics of QAOA
              and how it works. The user can select a problem to solve, and
              adjust the parameters of the algorithm to see how it affects the
              solution. The user can also view the quantum circuit diagram of
              the algorithm, as well as the state vector and q-sphere of the
              quantum state at each step of the algorithm.
            </p>
            <p>
              Right picture is how this tool converts the problem into a
              circuit that can be optimized by the algorithm.
            </p>
            <h3>Quantum Gates</h3>
            <p>
              QAOA uses a sequence of quantum gates to approximate the solution
              to a combinatorial optimization problem. The gates used in this
              algorithm can be categorized into two sections: the gates
              specifically used in QAOA, and other gates that are beneficial to
              understand in order to grasp the functioning of the former.
            </p>
            <p>
              In QAOA, the primary gates employed are: Hadamard, RX
              , RZ and RZZ. These gates play a crucial role in
              manipulating the quantum state and encoding the problem's
              information. However, it is also advantageous to familiarize
              oneself with other fundamental gates used in quantum computing, as
              they provide a broader understanding of the context and principles
              underlying QAOA.
            </p>
            {/*         <p>
          Images generated by{" "}
          <a href="https://quantum-computing.ibm.com/composer/f">IBM</a>. 
        </p> */}
        <GateMenu />
      </section>
    </>
  );
}
