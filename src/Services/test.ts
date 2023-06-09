import axios from "axios";
import { IResponseTest,IResponseDeleteTest,IResponseEditarTest,IResponseInsertTest,IResponseUpdateTest } from "./Interface/test";
import { IEvaluacion } from "./Interface/configEvaluador";

export async function GetTestService() {
    return await axios.get<IResponseTest>(`${process.env.REACT_APP_API_CONSULTER_HOME}/api/test`);
}
export async function StoreTestService(evaluacion: IEvaluacion) {
    return await axios.post<IResponseInsertTest>(`${process.env.REACT_APP_API_CONSULTER_HOME}/api/test`, evaluacion);
}
export async function EditarTestService(evaluacion_id: number) {
    return await axios.get<IResponseEditarTest>(`${process.env.REACT_APP_API_CONSULTER_HOME}/api/test/editar/${evaluacion_id}`);
}
export async function UpdateTestService(evaluacion: IEvaluacion) {
    return await axios.put<IResponseUpdateTest>(`${process.env.REACT_APP_API_CONSULTER_HOME}/api/test/${evaluacion.evaluacion_id}`, evaluacion);
}
export async function DeleteTestService(evaluacion_id: number) {
    return await axios.delete<IResponseDeleteTest>(`${process.env.REACT_APP_API_CONSULTER_HOME}/api/test/${evaluacion_id}`);
}