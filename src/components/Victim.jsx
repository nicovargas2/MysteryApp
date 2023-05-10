import React from 'react'

const Victim = () => {
    return (
        <>
            <div className="grid">
                <div className="font-bold underline text-left ml-10 mb-2 mt-2">
                    Victima
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
                                <td>Ama de llaves</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Conde</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Condesa</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Doncella</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Jardinero</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                            <tr>
                                <td>Mayordomo</td>
                                <td className='text-center'><input type="checkbox" className="default:ring-2" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Victim