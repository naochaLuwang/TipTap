import React from "react";
import { Button, Icon } from "@chakra-ui/react";
import {
  FaAlignLeft,
  FaAlignRight,
  FaAlignCenter,
  FaAlignJustify,
} from "react-icons/fa";

const AlignmentButtons = ({ editor }) => {
  return (
    <>
      <Button
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
      >
        <Icon as={FaAlignLeft} />
      </Button>
      <Button
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}
      >
        <Icon as={FaAlignCenter} />
      </Button>
      <Button
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
      >
        <Icon as={FaAlignRight} />
      </Button>
      <Button
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={editor.isActive({ textAlign: "justify" }) ? "is-active" : ""}
      >
        <Icon as={FaAlignJustify} />
      </Button>
    </>
  );
};

export default AlignmentButtons;
