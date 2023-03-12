function Paciente({ paciente, setPaciente, eliminarPaciente }) {
    // Función que se ejecuta cuando se click sobre el botón eliminar
    const handleEliminar = () => {
        confirm('¿Deseas eliminar el paciente?') &&
            eliminarPaciente(paciente.id);
    };

    return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 uppercase'>
                Nombre Mascota: {''}
                <span className='font-normal normal-case'>
                    {paciente.mascota}
                </span>
            </p>
            <p className='font-bold mb-3 uppercase'>
                Nombre Propietario: {''}
                <span className='font-normal normal-case'>
                    {paciente.propietario}
                </span>
            </p>
            <p className='font-bold mb-3 uppercase'>
                Email: {''}
                <span className='font-normal normal-case'>
                    {paciente.email}
                </span>
            </p>
            <p className='font-bold mb-3 uppercase'>
                Fecha Alta: {''}
                <span className='font-normal normal-case'>
                    {paciente.fechaAlta}
                </span>
            </p>
            <p className='font-bold mb-3 uppercase'>
                Sintomas: {''}
                <span className='font-normal normal-case'>
                    {paciente.motivo}
                </span>
            </p>
            <div className='flex justify-center'>
                <button
                    type='button'
                    onClick={() => setPaciente(paciente)}
                    className='max-w-full py-3 px-10 mt-5 mx-10 bg-indigo-600 hover:cursor-pointer rounded-md font-bold uppercase text-white'
                >
                    Editar
                </button>

                <button
                    type='button'
                    onClick={handleEliminar}
                    className='max-w-full py-3 px-10 mt-5 mx-10 bg-red-600 hover:cursor-pointer rounded-md font-bold uppercase text-white'
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Paciente;
