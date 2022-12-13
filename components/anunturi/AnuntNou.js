import { Poppins } from '@next/font/google'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);

import classes from './AnuntNou.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const AnuntNou = () => {
    const [value, setValue] = useState("**Hello world!!!**");

    return (
        <div className={`${poppins.className} ${classes.container}`}>
            <div className={classes.editorContainer}>
                <MDEditor value={value} onChange={setValue} height='400px' />
            </div>
        </div>
    )
}

export default AnuntNou
