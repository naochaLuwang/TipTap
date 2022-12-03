import React from "react";
import { Tooltip, Button } from "@chakra-ui/react";

const Heading = ({ editor }) => {
  return (
    <>
      <Tooltip label="Heading 1">
        <Button
          size="sm"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </Button>
      </Tooltip>

      <Button
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </Button>
      <Button
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        H3
      </Button>
    </>
  );
};

export default Heading;
