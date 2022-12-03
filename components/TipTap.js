import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import { Button, HStack, Icon, Tooltip } from "@chakra-ui/react";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";

import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";

import Heading from "./EditorButtons/Heading";
import TypographyButtons from "./EditorButtons/Typography";
import AlignmentButtons from "./EditorButtons/Alignment";
import ListButtons from "./EditorButtons/List";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
const Tiptap = () => {
  const editor = useEditor({
    // element: document.querySelector(".element"),
    extensions: [
      Document,
      Paragraph,
      Text,
      BulletList,
      ListItem,
      Bold,
      Underline,
      OrderedList,
      HorizontalRule,
      Placeholder.configure({
        placeholder: "Write something...",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
    ],
    content: "<p>Hello World! 🌎️</p>",
  });

  const json = editor?.getJSON();

  console.log(json);

  if (!editor) {
    return null;
  }

  return (
    <>
      <HStack spacing={2}>
        <Heading editor={editor} />
        <TypographyButtons editor={editor} />
        <AlignmentButtons editor={editor} />
        <ListButtons editor={editor} />
        <Button
          size="sm"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          setHorizontalRule
        </Button>
      </HStack>

      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
