import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import ImageUpload from "./ImageUpload";
import { useSession } from "next-auth/react";
// import { Cross2Icon } from '@radix-ui/react-icons';


const DialogModal = ({content}:{content:string}) => {
  const user = useSession();
  const [open, setOpen] = React.useState(false);
  const [heading, setHeading] = useState("");
  const [author, setauthor] = useState(user.data?.user?.name?.toString());
  const [base64Image, setBase64Image] = useState<string | null>(null);

  function handleSubmit() {
    console.log(heading, author, base64Image, user,content);
    setHeading('')
    setauthor(user.data?.user?.name?.toString())
    setBase64Image('')
    // setOpen(false);

  }
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild className="">
        <button className="text-white ml-auto fixed bottom-7  hover:bg-orange-600 inline-flex h-[35px] py-3 items-center justify-center rounded-[4px] bg-orange-400 px-[30px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Add Blog
        </button>

      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black data-[state=open]:animate-overlayShow opacity-30 fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-orange-400 m-0 text-[17px] font-medium">
            Add Blog
          </Dialog.Title>
          <Dialog.Description className="text-black mt-[10px] mb-5 text-[15px] leading-normal">
            Add the heading and other details to the blogs
          </Dialog.Description>
          <form onSubmit={handleSubmit}>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="text-black w-[90px] text-right text-[15px]"
                htmlFor="name"
              >
                Heading
              </label>
              <input
                className="text-orange-300 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="name"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                placeholder="Heading of the blog"
                required
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="text-black w-[90px] text-right text-[15px]"
                htmlFor="username"
              >
                Author
              </label>
              <input
                className="text-orange-300  shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="username"
                value={author}
                onChange={(e) => setauthor(e.target.value)}
                required
              />
            </fieldset>
            <fieldset>
              <ImageUpload
                base64Image={base64Image}
                setBase64Image={setBase64Image}
              />
            </fieldset>
            <div className="mt-[25px] flex justify-end">
              <button
                type="submit"
                className="bg-orange-400 text-green11 hover:bg-orange-600 focus:shadow-orange-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium  leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
              >
                Add Blog
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogModal;
