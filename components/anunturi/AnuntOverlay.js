import ReactMarkdown from 'react-markdown'
import Markdown from 'markdown-to-jsx';
import { CgCloseR } from 'react-icons/cg'

import classes from './AnuntOverlay.module.css'

const AnuntOverlay = ({ text, onClose }) => {

    const parsedMd = text.split('  ')
    console.log(parsedMd)

    return (
        <div className={classes.anuntOverlay}>
            <div className={classes.anuntButtonContainer} onClick={onClose}>
                <CgCloseR />
            </div>
            <div className={classes.adContainer}>
                {parsedMd.map(element => {
                    return (<Markdown options={{ forceBlock: true }} key={element}>
                        {element}
                    </Markdown>)
                })}
            </div>
        </div>
    )
}

export default AnuntOverlay
