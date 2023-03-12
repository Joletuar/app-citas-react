import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header"; // Importamos nuestro componente
import ListadoPacientes from "./components/ListadoPacientes";

export function App() {

    const [pacientes,setPacientes] = useState([])
    const [paciente,setPaciente] = useState({})

    useEffect( () => {
        const obtenerLS = () => {
            const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
            setPacientes(pacientesLS)
        }

        obtenerLS();
    }, [])

    // Vamos a guardar los registros de la lista de pacientes en local storage
    useEffect( () => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }, [pacientes])


    // Función para eliminar un paciente
    const eliminarPaciente = id => {
        return setPacientes(
            pacientes.filter( paciente => {
                paciente.id !== id
            })
        )
    }


    // Vamos a mostrar nuestro componente importado por pantalla

    return (
        // Importamos nuestro componente: <COMPONENTE />
        <div className="container mx-auto mt-5">
            <Header />
            <div className=" mx-5 first-letter:mt-12 md:flex">
                <Formulario
                // Enviamos la lista de pacientes para actualizarla 
                pacientes={pacientes} 
                // Enviamos también su método modificador
                setPacientes={setPacientes}
                // Enviamos para meter sus datos dentro de los input
                paciente={paciente}
                
                setPaciente={setPaciente}
                />
                <ListadoPacientes 
                // Enviamos una lista de pacientes para que el componente ListaPacientes los reciba 
                pacientes={pacientes}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
        
    );
};
