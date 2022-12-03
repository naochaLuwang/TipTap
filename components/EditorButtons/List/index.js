import React from "react";
import { Button, Icon } from "@chakra-ui/react";
import { MdFormatListBulleted } from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";

const ListButtons = ({ editor }) => {
  return (
    <>
      <Button
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <Icon as={MdFormatListBulleted} />
      </Button>

      <Button
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <Icon as={AiOutlineOrderedList} />
      </Button>
    </>
  );
};

export default ListButtons;
