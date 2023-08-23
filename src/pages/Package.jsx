import React from 'react'
import Page from '../templates/Page'
import { currenty, packageList } from '../constants/Constants'
import Btn from '../components/btn/Btn'

const Package = () => {

    return (
        <Page title="Packages">

            <section className='pt-14 pl-5 pr-5 text-center'>
                <h2>Packages List</h2>
                <p className='mt-3'>Choose the package for your guest posting.</p>
            </section>

            <section className='login pt-14 pb-14 p-3' id='login'>

                <div className='max-w-6xl m-auto md:flex gap-5 items-center justify-center '>

                    {packageList.map(singlePackage => (
                        <div key={singlePackage.id} className='text-center bg-white flex-1 rounded-lg shadow-card dark:bg-slate-700'>
                            <div className='bg-slate-200 dark:bg-slate-800 p-5 overflow-hidden relative'>
                                <h4 className='uppercase'>{singlePackage.package}</h4>
                                {singlePackage.recommended && <div className='absolute top-6 -right-1 rotate-45 px-2 py-1 bg-primary text-white text-recommended'>Recommended</div>}
                            </div>
                            <div className='p-5'>
                                <h5 className='mb-3'>Price : {currenty + singlePackage.price}</h5>
                                <h5 className='mb-3'>Validity : {singlePackage.time}</h5>
                                <h5 className='mb-5'>Total Post : {singlePackage.total}</h5>
                                <Btn id="" type="primary" size='full' text={'Buy Now'} />
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </Page>
    )
}

export default Package