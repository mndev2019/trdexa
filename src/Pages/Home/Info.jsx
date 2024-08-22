//import React from 'react'

const Info = () => {
    return (
        <>
            <section className="py-10 px-40 info bg-gray-100">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-1">
                            <div className="w-full p-5 rounded-lg bg-white shadow-lg shadow-gray-300 h-full ">
                                <h1 className="text-black text-2xl font-semibold">How much you will pay based on number of messages ?</h1>
                                <div className="w-full mt-5 *:text-sm font-semibold">
                                    <label>Number of messages to be sent to customers in a month</label>
                                    <input type="text" className="w-full rounded-lg border border-gray-200 px-1 py-2 text-black" placeholder="100" />
                                </div>
                                <div className="w-full mt-5 ">
                                    <label className="text-sm font-semibold">Number of messages to be received from customers in a month</label>
                                    <input type="text" className="w-full rounded-lg border border-gray-200 px-1 py-2 text-black" placeholder="1000000" />
                                    <p className="text-xs text-black">*Neither Meta nor Tradexa charges any cost for this.</p>
                                </div>
                                <div className="w-full mt-5 ">
                                    <label className="text-sm font-semibold">Number of orders to be received from customers in WhatsApp</label>
                                    <input type="text" className="w-full rounded-lg border border-gray-200 px-1 py-2 text-black" placeholder="1000000" />
                                    <p className="text-xs text-black">*Neither Meta nor Tradexa charges any cost for this.</p>
                                </div>
                                <div className="w-full mt-5">
                                    <button className="bg-orange-600 text-white text-center p-2 rounded-lg w-full">Calculate Pricing</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full p-5 rightcol rounded-lg h-full">
                                <h1 className="text-white text-2xl font-bold">Calculated Pricing Result</h1>
                                <table className="w-full">
                                    <tbody>
                                        <tr className="*:px-2 *:py-8 *:text-sm *:text-white border-b border-gray-100 ">
                                            <td>
                                                Charges by Tradexa
                                            </td>
                                            <td>
                                                Rs. 0.01
                                                <p>per conversation within 24hrs</p>
                                            </td>
                                            <td className="text-end">
                                                ₹1
                                            </td>
                                        </tr>
                                        <tr className="*:px-2 *:py-8 *:text-sm *:text-white border-b border-gray-100">
                                            <td>
                                                Charges by Meta
                                            </td>
                                            <td>
                                                Rs. 0.75
                                                <p>per conversation within 24hrs</p>
                                            </td>
                                            <td className="text-end">
                                                ₹75
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="w-full">
                                    <tbody>
                                        <tr className="*:px-2 *:py-8 *:text-xl font-semibold *:text-white">
                                            <td>
                                                <h1>Calculated Price:</h1>

                                            </td>
                                            <td className="text-end">
                                                ₹76
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="w-full">
                                    <tbody>
                                        <tr className="*:px-2 *:py-5 *:text-xl font-semibold *:text-white">
                                            <td>
                                                <ul className="*:text-sm">
                                                    <li>
                                                        Fixed cost by Tradexa as per your plan
                                                    </li>
                                                    <li>
                                                        There are no charges by Tradexa or Meta for user initiated conversations.
                                                    </li>
                                                    <li>
                                                        There are no charges by Meta for sending messages within 24 hours after the first message.
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Info