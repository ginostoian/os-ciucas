import { micromark } from 'micromark'
import ReactMarkdown from 'react-markdown'
import { CgCloseR } from 'react-icons/cg'

import classes from './AnuntOverlay.module.css'

const AnuntOverlay = ({ text, onClose }) => {

    return (
        <div className={classes.anuntOverlay}>
            <div className={classes.anuntButtonContainer} onClick={onClose}>
                <CgCloseR />
            </div>
            <div>
                <ReactMarkdown>
                    {text}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default AnuntOverlay
