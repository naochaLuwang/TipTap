import React from "react";
import { Button } from "@chakra-ui/react";

const TypographyButtons = ({ editor }) => {
  return (
    <>
      <Button
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        color={editor.isActive("bold") ? "blue.500" : "gray.500"}
      >
        B
      </Button>

      <Button
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        color={editor.isActive("italic") ? "blue.500" : ""}
      >
        I
      </Button>

      <Button
        size="sm"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
      >
        U
      </Button>
    </>
  );
};

export default TypographyButtons;
