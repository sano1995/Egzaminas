import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "../Axios";
import { useFormik } from "formik";

function AdminAdd() {
  const initialValues = {
    title: "",
    category: "",
    duration: "",
    price: "",
    image: "",
  };

  const onSubmit = async (values) => {
    try {
      let { title, category, duration, price, image } = values;
      const res = await axios.post("/procedures/", {
        title,
        category,
        duration,
        price,
        image,
      });
      formik.resetForm();
      alert("Procedura sukurta");
    } catch (err) {
      alert(err.response.data.mess);
    }
  };

  const validate = (values) => {
    let errors = {};
    console.log(values);
    if (!values.title) {
      errors.title = "Prašome užpildyti laukelį (Pavadinimas)";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <p>pavadinimas</p>
      <Form.Control
        type="text"
        id="title"
        name="title"
        placeholder="Pavadiminas"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <p>Kategorija</p>

      <Form.Control
        type="text"
        placeholder="Kategorija"
        id="category"
        name="category"
        value={formik.values.category}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <p>trukme</p>
      <Form.Control
        type="number"
        placeholder="laikas "
        id="duration"
        name="duration"
        value={formik.values.duration}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <p>kaina</p>
      <Form.Control
        type="number"
        placeholder="kaina"
        id="price"
        name="price"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Form.Label htmlFor="basic-url">Nuotraukos URL</Form.Label>
      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon3">
        https://example.com/
      </InputGroup.Text> */}
        <Form.Control
          id="basic-url"
          aria-describedby="basic-addon3"
          name="image"
          value={formik.values.image}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </InputGroup>
      <button type="submit">Prideti</button>
    </form>
  );
}

export default AdminAdd;
