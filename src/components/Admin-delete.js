import Table from "react-bootstrap/Table";

function AdminDelete() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Kategorija</th>
          <th>Pavadinimas</th>
          <th>trukme</th>
          <th>kaina</th>
          <th>nuotrauka</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AdminDelete;
