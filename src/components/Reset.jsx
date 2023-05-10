import React from 'react'

const Reset = () => {
    const handleResetApp = () => {
        const resultado = confirm('Seguro que quiere resetear el juego?')

        if (resultado) {
            //continuo por el reset
        }
    }

    return (
        <div>
            <button
                type='button'
                onClick={handleResetApp}
                className=' rounded-md bg-violet-300 '>
                Reset
            </button>
        </div>
    )
}

export default Reset

