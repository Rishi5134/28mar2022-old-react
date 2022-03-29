import React from 'react'

const Discount = () => {
    return (
        <>


            <div className='d-flex disc_partner'>


                <div className='bg-secondar text-white discount h-100 w-100 res_discount'>
                    <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>


                        <h1 className='text-white text-center'>Get Out Special Discount</h1>
                        <p className='res_discount1 my-2 mx-2'>
                            Donec eu tristique felis. Duis augue mi, auctor ut purus et,
                            dignissim aliquet quam.
                        </p>
                        <p className='res_discount1'>register your email for news and special offers</p>
                        <div className='res_col'>
                            <input type="text" className='m-2 input_discount' placeholder='E-mail address...' />
                            <button className=' discount_btn p-1 d-flex justify-content-center align-items-center mb-4'>
                                GET
                                COUPON NOW
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discount