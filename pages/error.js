
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import error from '@/public/assets/Images/error-img.svg'
import Styles from '@/pages/error.module.css'
import { BTN_BACK_TO_HOMEPAGE, BTN_RELOAD, ERROR_INCONVIENCE_CAUSE, ERROR_OPPS, ERROR_SOMETHING_WENT_WRONG } from '@/text'

const Error = () => {
    const router = useRouter()
    return (
        <section
            className="wrapper"
        >
            <div className={`${Styles.errorcontainer} bg-primary`}>
                <div>
                    <Image height={680} src={error} alt="/" />
                </div>
                <div className="flex flex-col p-10 justify-center">
                    <h1>{ERROR_OPPS}</h1>
                    <h3 >{ERROR_SOMETHING_WENT_WRONG}</h3>
                    <p className='mb-4'>{ERROR_INCONVIENCE_CAUSE}</p>
                    <div className="flex gap-4 mt-4 items-center">
                        <Link href="/">
                            <button className='primary-button' >
                                {BTN_BACK_TO_HOMEPAGE}
                            </button>
                        </Link>
                        <button
                            className='primary-button-outline'
                            onClick={() => {
                                router.reload()
                            }}
                        >
                            {BTN_RELOAD}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Error