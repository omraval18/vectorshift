"use client"
import React, { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark,okaidia,atomDark,vscDarkPlus,oneDark,duotoneDark,vs} from "react-syntax-highlighter/dist/esm/styles/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";


export default function Code({ code, language }:{code:string,language:string}) {
    
    return (
            <SyntaxHighlighter
                language={language}
                style={duotoneDark}
                className="max-w-full max-h-64 rounded-b-lg"
                showLineNumbers={true}
            wrapLines={true}
            
            
            >
                {code}
            </SyntaxHighlighter>
    );
}
