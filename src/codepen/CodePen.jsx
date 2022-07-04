import React, { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import CodeMirror from '@uiw/react-codemirror';
import { dracula} from '@uiw/codemirror-theme-dracula'


function CodePen() {

    const [htmlMock, setHtmlMock] = useLocalStorage('html', '')
    const [cssMock, setCssMock] = useLocalStorage('css', '')
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState('')

    
    const htmlChange = (value, viewUpdate) => {
       setHtmlMock(()=> value)
      };

    const cssChange = (value, viewUpdate) => {
       setCssMock(()=> value)
      };
    const jsChange = (value, viewUpdate) => {
       setJs(()=> value)
      };
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setSrcDoc(`
          <!DOCTYPE html>
          <html lang="en">
           <head>
           <meta charset="UTF-8" />
           <meta http-equiv="X-UA-Compatible" content="IE=edge" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           </head>
           <style>${cssMock}</style>
          <script>${js}</script>

      <body>
          ${htmlMock}
      </body>
      <style>${cssMock}</style>
      <script>${js}</script>
      </html>
        `)
      }, 250)
  
      return () => clearTimeout(timeout)
    }, [htmlMock, cssMock, js])

  return (
    <div className='w-full relative h-screen'>
       <div className="h-60 ml-3 mtp col-span-1 sm:fixed top-0 w-[24rem]">
        <div>
          <h1 className='bg-black text-white-text uppercase text-center'>html</h1>
        <CodeMirror
          value={htmlMock}
          height="33.3vh"
          theme={dracula}
          extensions={[html()]}
          onChange={htmlChange}
        />
        </div>
        <div className='mt'>
        <h1 className='bg-black text-white-text uppercase text-center'>css</h1>

        <CodeMirror
          value={cssMock}
          height="33.3vh"
          theme={dracula}
          extensions={[css()]}
          onChange={cssChange}
        />
        </div>
        <div>
        <h1 className='bg-black text-white-text uppercase text-center'>Javascript</h1>

        <CodeMirror
          value={js}
          height="33.3vh"
          theme={dracula} 
          extensions={[javascript({ jsx: true })]}
          onChange={jsChange}
        />
        </div>
    </div>

    <div className="sm:ml-[25rem]">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          frameborder="0"
          class='mtp'
          style={{overflow:'hidden', marginLeft :'0rem',height:'100vh',width:'100%',position:'absol]ute',top:'0%',left:'0px',right:'0px',bottom:'0px'}}
        />
      </div>
    </div>
  )
}

export default CodePen

