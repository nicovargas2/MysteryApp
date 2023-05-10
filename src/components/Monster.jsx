import React from 'react'

const Monster = () => {
    return (
        <>
            <div className="grid">
                <div className="font-bold underline text-left ml-10 mb-2 mt-2">
                    Monstruo
                </div>
                <div>
                    <table className="border columns-12">
                        <thead>
                            <tr>
                                <th className='columns-3'></th>
                                <th className='columns-9'></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Dracula</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Dr. Jekyll/Mr. Hyde</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Fantasma</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Frankenstein</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Hombre Lobo</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Momia</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Monster