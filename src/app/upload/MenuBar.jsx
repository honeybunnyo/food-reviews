import './styles.scss'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
new Editor({
  extensions: [StarterKit],
})

const MenuBar = ({content, setContent}) => {
  const { editor } = useEditor({
    extensions,
    content: " ",
    onUpdate: ({ editor }) => {
      // This callback is called on every change.
      setContent(editor.getHTML())
    },
  })
  
  if (!editor) return null;

  const buttonStyle = "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-200 hover:font-semibold focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"

  return (
    <div className="control-group">
      <div className="button-group">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={`${buttonStyle} ${editor.isActive('bold') ? 'is-active' : ''}`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={`${buttonStyle} ${editor.isActive('italic') ? 'is-active' : ''}`}
        >
          Italic
        </button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className={buttonStyle}
          >
          Clear marks
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`${buttonStyle} ${editor.isActive('paragraph') ? 'is-active' : ''}`}
        >
          Paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`${buttonStyle} ${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}`}

        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`${buttonStyle} ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`${buttonStyle} ${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}`}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={`${buttonStyle} ${editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}`}
        >
          H4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={`${buttonStyle} ${editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}`}
        >
          H5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={`${buttonStyle} ${editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}`}
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${buttonStyle} ${editor.isActive('bulletList') ? 'is-active' : ''}`}
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${buttonStyle} ${editor.isActive('orderedList') ? 'is-active' : ''}`}
        >
          Ordered list
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${buttonStyle} ${editor.isActive('blockquote') ? 'is-active' : ''}`}
        >
          Blockquote
        </button>
        <button 
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={buttonStyle}
        >
          Horizontal rule
        </button>
        <button 
          onClick={() => editor.chain().focus().setHardBreak().run()}
          className={buttonStyle}
          >
          Hard break
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
          className={buttonStyle}
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
          className={buttonStyle}
        >
          Redo
        </button>
      </div>
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
]

export default ({content, setContent}) => {
  return (
    <EditorProvider slotBefore={<MenuBar content={content} setContent={setContent}/>} extensions={extensions}></EditorProvider>
  )
}