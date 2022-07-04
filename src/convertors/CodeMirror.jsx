import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
// import {} from '@codemirror/'
import { javascript } from '@codemirror/lang-javascript';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'

function CodeMirror1() {
    const [B , setB] = useState('')
    const onChange = (value, viewUpdate) => {
        // console.log('value:', value);
       setB(()=> value)
       console.log(B);
      };
    
  return (
    <div className="h-60 w-4/12">
        <CodeMirror
          value={B}
          height="300px"
          // extensions={[javascript({ jsx: true })]}
          extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
          onChange={onChange}
        />
    </div>
  )
}

export default CodeMirror1