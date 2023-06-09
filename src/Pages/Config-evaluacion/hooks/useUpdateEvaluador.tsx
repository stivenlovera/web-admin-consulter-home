import { enqueueSnackbar } from "notistack";
import { IEvaluacion, IFormEvaluacion } from "../../../Services/Interface/configEvaluador";
import { UpdateEvaluadorService } from "../../../Services/evaluador";
const UseUpdateEvaluador = (formEvaluacion: IFormEvaluacion) => {

    const apiUpdateEvaluador = async () => {
        let status = false;
        try {
            const { data } = await UpdateEvaluadorService(formEvaluacion);
            if (data.status == 1) {
                status = true;
                enqueueSnackbar(data.message, { variant: 'success' });
            } else {
                enqueueSnackbar(data.message, { variant: 'error' });
            }
        } catch (error) {
            enqueueSnackbar('Ocurio un error', { variant: 'error' });
        }
        return status;
    }
    return {
        apiUpdateEvaluador
    }
}
export default UseUpdateEvaluador;