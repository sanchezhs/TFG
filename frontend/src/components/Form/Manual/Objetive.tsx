import Form from "react-bootstrap/Form";

export function Objetive({ state, dispatch }: { state: any; dispatch: any }) {
  return (
    <div>
      {" "}
      <Form.Group className="mb-3" controlId="formObjetive">
        <Form.Label>Optimize</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="x + 2y - 3z + ..."
          onChange={(e) => {
            dispatch({ type: "setObjetive", payload: e.target.value });
          }}
          value={state.objetive}
          autoFocus
        />
        <Form.Control.Feedback type="invalid">
          This field may not be blank.
        </Form.Control.Feedback>
      </Form.Group>
    </div>
  );
}
