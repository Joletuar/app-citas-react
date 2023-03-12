// Snipe bastante usado rfce, rafce
// El atributo for permite indicar a que input le pertenece dicho label

import { useState, useEffect } from 'react';
import Error from './Error';

// Estructura del useState

/*
conts [cliente, setCliente] = useState({});
conts [clientes, setClientes] = useState([]);
conts [modal, setModal] = useState(false);
conts [total, setTotal] = useState(0);

cliente: corresponde a la variable que contiene el valor del estado
setCliente: corresponde a la función que nos permitirá modificar el estado de la variable cliente
useState({}): contiene el valor inicial del componente, dentro de sus paréntesis se coloca su valor inicial

*/

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fechaAlta, setFechaAlta] = useState('');
    const [motivo, setMotivo] = useState('');

    const [error, setError] = useState(false);

    // Usamos este hook para renderizar el componente de nuevo solo si el paciente cambió
    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setMascota(paciente.mascota);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFechaAlta(paciente.fechaAlta);
            setMotivo(paciente.motivo);
        }
    }, [paciente]);

    // Generamos nuestro propio ID
    const getId = () => {
        return Date.now() + Math.random().toString(36).substring(2);
    };

    // Función que luego se la pasamos a un evento
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validando el formulario
        if ([mascota, propietario, email, fechaAlta, motivo].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        // Objeto de Paciente
        const objetoPaciente = {
            mascota,
            propietario,
            email,
            fechaAlta,
            motivo,
        };

        if (paciente.id) {
            // Editando el Registro
            // console.log(`Paciente recuperado ${paciente.id}`)
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map((pacienteState) =>
                pacienteState.id === paciente.id
                    ? objetoPaciente
                    : pacienteState
            );

            setPacientes(pacientesActualizados);
            setPaciente({});
        } else {
            // Nuevo registro
            objetoPaciente.id = getId();
            // console.log(`Paciente nuevo ${objetoPaciente.id}`)
            // Aqui usamos nuestro prop
            const newPacientes = [...pacientes, objetoPaciente];
            setPacientes(newPacientes);
        }

        // Reiniciar el formulario
        setMascota('');
        setPropietario('');
        setEmail('');
        setFechaAlta('');
        setMotivo('');
    };

    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='text-center font-black text-3xl mb-5'>
                Seguimiento de Pacientes
            </h2>
            <p className='text-lg mt-5 text-center'>
                Añade Pacientes y {''}
                <span className='font-bold text-indigo-600'>Administralos</span>
            </p>

            <form
                className='bg-white shadow-md py-10 px-5 rounded-xl mt-5 mb-10'
                onSubmit={handleSubmit}
            >
                {error && <Error />}

                <div className='mb-5'>
                    <label
                        className='block uppercase font-bold text-gray-800'
                        htmlFor='mascota'
                    >
                        Nombre Mascota:
                    </label>
                    <input
                        id='mascota'
                        type='text'
                        placeholder='Nombre de tu mascota'
                        className='border-2 mt-3 w-full'
                        value={mascota}
                        onChange={(e) => setMascota(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        className='block uppercase font-bold text-gray-800'
                        htmlFor='propietario'
                    >
                        Nombre Propietario:
                    </label>
                    <input
                        id='propietario'
                        type='text'
                        placeholder='Nombre del propietario'
                        className='border-2 mt-3 w-full'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        className='block uppercase font-bold text-gray-800'
                        htmlFor='email'
                    >
                        Email:
                    </label>
                    <input
                        id='email'
                        type='email'
                        placeholder='example@example.com'
                        className='border-2 mt-3 w-full'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        className='block uppercase font-bold text-gray-800'
                        htmlFor='alta'
                    >
                        Alta:
                    </label>
                    <input
                        id='alta'
                        type='date'
                        className='border-2 mt-3 w-full'
                        value={fechaAlta}
                        onChange={(e) => setFechaAlta(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        className='block uppercase font-bold text-gray-800'
                        htmlFor='motivo'
                    >
                        Motivo de la Consulta:
                    </label>
                    <textarea
                        id='motivo'
                        cols='30'
                        rows='5'
                        className='border-2 w-full p-2 mt-3'
                        placeholder='Ingrese el motivo de la consulta'
                        value={motivo}
                        onChange={(e) => setMotivo(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <input
                        type='submit'
                        value={
                            paciente.id ? 'Editar paciente' : 'Enviar paciente'
                        }
                        className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md'
                    />
                </div>
            </form>
        </div>
    );
};

export default Formulario;
