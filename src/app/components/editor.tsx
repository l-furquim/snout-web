"use client"

import 'highlight.js/styles/tokyo-night-dark.css'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import { all, createLowlight } from 'lowlight'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export const  TipTap = () => {
  const lowlight = createLowlight(all);

  const [clickedOptionBold, setclickedOptionBold] = useState(false);
  const [clickedOptionItalic, setclickedOptionItalic] = useState(false);
  const [clickedOptionStrike, setclickedOptionStrike] = useState(false);


  lowlight.register('html', html)
  lowlight.register('css', css)
  lowlight.register('js', js)
  lowlight.register('ts', ts)


  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    editorProps: {
      attributes: {
        class: 'w-[1300px] h-full prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    content: `
        <p>
          That's a boring paragraph followed by a fenced code block:
        </p>
        <pre>
          <code class="language-javascript">
            for (var i=1; i <= 20; i++){
              if (i % 15 == 0)
                console.log("FizzBuzz");
              else if (i % 3 == 0)
                console.log("Fizz");
              else if (i % 5 == 0)
                console.log("Buzz");
              else
                console.log(i);
            }
          </code>
        </pre>
        <p>
          Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs.
        </p>
              `,
  });

  return <>
          <div>
            {editor && 
              <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                <Button 
                onClick={() => editor.chain().focus().toggleBold().run() && setclickedOptionBold(!clickedOptionBold)}
                className={` ${editor.isActive('bold') ? 'is-active' : ''} ${clickedOptionBold ? 'bg-neutral-800 text-zinc-200  hover:bg-neutral-700': "bg-zinc-300 text-neutral-800 hover:bg-neutral-800 hover:text-zinc-200"}`}
              >
                Bold
              </Button>
              <Button
                onClick={() => editor.chain().focus().toggleItalic().run() && setclickedOptionItalic(!clickedOptionItalic)}
                className={`  ${editor.isActive('italic') ? 'is-active' : ''} ${clickedOptionItalic ? 'bg-neutral-800 text-zinc-200  hover:bg-neutral-700': "bg-zinc-300 text-neutral-800 hover:bg-neutral-800 hover:text-zinc-200"}`}
              >
                Italic
              </Button>
              <Button
                onClick={() => editor.chain().focus().toggleStrike().run() && setclickedOptionStrike(!clickedOptionStrike)}
                className={` ${editor.isActive('strike') ? 'is-active' : ''} ${clickedOptionStrike ? 'bg-neutral-800 text-zinc-200  hover:bg-neutral-700': "bg-zinc-300 text-neutral-800 hover:bg-neutral-800 hover:text-zinc-200"}`}
              >
                Strike
               </Button>
              </BubbleMenu>}
              <EditorContent editor={editor} />
          </div>
        </>
}