import React from 'react'

const Place = () => {
    return (
        <>
            <div className="grid">
                <div className="font-bold underline text-left ml-10 mb-2 mt-2">
                    Lugar
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
                                <td>Alcoba</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Biblioteca</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Bodega</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Cocheras</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Laboratorio</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Panteon</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Salon</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Vestibulo</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Place