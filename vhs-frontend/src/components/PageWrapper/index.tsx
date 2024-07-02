import './index.scss'
import {ReactNode} from "react";

export const PageWrapper = ({children}: ReactNode) => {
    return <div className='page-wrapper'>
        {children}
    </div>
}