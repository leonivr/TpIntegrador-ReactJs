import { Task } from "../../types/Task";
import {useFormik} from 'formik';
import {Form, Modal, Button } from "react-bootstrap";
import * as yup from 'yup';

type ModalAgregarTareaProps = {
    showModal: boolean;
    handleClose: () => void;
    createTask: (newTask:Task) => void;
}

const ModalAgregarTarea: React.FC<ModalAgregarTareaProps> = ({showModal, handleClose, createTask}) => {
    const validationSchema = yup.object({
        titulo: yup.string().required('Este campo es obligatorio'),
        descripcion: yup.string().required('Este campo es requerido'),
        tiempo: yup.number().required('Este campo es requerido').integer('El tiempo debe ser en números').positive('el tiempo debe ser mayor a 0'),
        imagen: yup.string().required('Este campo es requerido'),
        responsable: yup.string().required('Este campo es requerido'),
        estado: yup.string().required('Este campo es requerido'),
    })

    const formik = useFormik({
        initialValues: {
            titulo: '',
            descripcion: '',
            tiempo: 0,
            imagen: '',
            responsable: '',
            estado: '',
        },

        validationSchema: validationSchema,
        onSubmit: async (values) => {
            values.estado.toUpperCase();
            console.log('Datos del formulario', JSON.stringify(values));

            await createTask(values);
            handleClose();
        },
    });

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregue una tarea</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={formik.handleSubmit}>

                    {/*-----Titulo-----*/}
                    <div className="mb-3 mt-1 ">
                        <label htmlFor="titulo" className="form-label">Titulo</label>
                        <input
                         type="text"
                         className="form-control"
                         id="titulo"
                         name="titulo"
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.titulo}
                         /> 
                         {formik.touched.titulo && formik.errors.titulo ? (
                            <div className="text-danger">{formik.errors.titulo}</div>
                         ):null}
                    </div>
                    {/*-----Descripcion-----*/}        
                    <div className="mb-3 mt-1 ">
                        <label htmlFor="descripcion" className="form-label">Descripción</label>
                        <textarea
                         className="form-control"
                         id="descripcion"
                         name="descripcion"
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.descripcion}
                         rows={3} //Número de filas
                         cols={50} //Número de columnas
                         /> 
                         {formik.touched.descripcion && formik.errors.descripcion ? (
                            <div className="text-danger">{formik.errors.descripcion}</div>
                         ):null}
                    </div>

                    {/*-----Tiempo-----*/}
                    <div className="mb-3 mt-1 ">
                        <label htmlFor="tiempo" className="form-label">Tiempo</label>
                        <input
                         placeholder="Ej: 30 días"
                         type="number"
                         className="form-control"
                         id="tiempo"
                         name="tiempo"
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.tiempo}
                         /> 
                         {formik.touched.tiempo && formik.errors.tiempo ? (
                            <div className="text-danger">{formik.errors.tiempo}</div>
                         ):null}
                    </div>
                    {/*-----Imagen-----*/}
                    <div className="mb-3 mt-1 ">
                        <label htmlFor="imagen" className="form-label">Imagen</label>
                        <input
                         type="text"
                         className="form-control"
                         id="imagen"
                         name="imagen"
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.imagen}
                         /> 
                         {formik.touched.imagen && formik.errors.imagen ? (
                            <div className="text-danger">{formik.errors.imagen}</div>
                         ):null}
                    </div>

                    {/*-----Responsable -----*/}        
                    <div className="mb-3 mt-1 ">
                        <label htmlFor="responsable" className="form-label">Responsable</label>
                        <input
                         type="text"
                         className="form-control"
                         id="responsable"
                         name="responsable"
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.responsable}
                         /> 
                         {formik.touched.responsable && formik.errors.responsable ? (
                            <div className="text-danger">{formik.errors.responsable}</div>
                         ):null}
                    </div>
                    {/*-----Estado -----*/}        
                    <div className="mb-3 mt-1 ">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <Form.Select
                         id="estado"
                         name="estado"
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.estado}
                         > 
                         <option value="">Selecciona un estado</option>
                         <option value="PORHACER">Por hacer</option>
                         <option value="ENPRODUCCION">En producción</option>
                         <option value="PORTESTEAR">Por testear</option>
                         <option value="COMPLETADA">Completada</option>
                         </Form.Select>
                         {formik.touched.estado && formik.errors.estado ? (
                            <div className="text-danger">{formik.errors.estado}</div>
                         ):null}
                    </div>
                    <div className="text-end">
                        <Button className="px-5" variant="primary" type="submit">Enviar</Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
};

export default ModalAgregarTarea;