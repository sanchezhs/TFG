import { useContext } from 'react'
import { ScrollContext } from '../../../context/ScrollContext'

export function Qaoa() {

    const { firstRef } = useContext(ScrollContext)

  return (
    <>
    <h3 ref={firstRef}>QS {" "}
    <small className="text-muted">How does it work?</small>
    </h3>
    {/* <p>explicar un poco c&oacute;mo funciona qaoa y la web, se podra usar cuenta en ibm...</p> */}
    <p>
    The Quantum Approximate Optimization Algorithm (<a href="https://arxiv.org/pdf/1411.4028.pdf">QAOA</a>) is a quantum algorithm that can be used to find approximate solutions 
    to combinatorial optimization problems. It is a variational algorithm, meaning that it uses both a classical computer and a quantum computer
    through a process called quantum annealing, whose goal is to find the minimum of a function.
    </p>
    <p>
      This tool allows you to test the QAOA algorithm on such problems, and to see the results obtained by the algorithm.       
    </p>


    </>
  )
}