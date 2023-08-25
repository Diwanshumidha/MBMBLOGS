'use client'
import React, { useState } from "react";
import EditorTiny from "../_components/Editor";
import Dialog from "../_components/Modal";

const Page: React.FC = () => {
  const [content, setContent] = useState<string>("");

  return (
    <section>
      <div className=" bg-white ">
        <div className="min-h-screen">
          <EditorTiny
            getdata={(data: string) => {
              setContent(data);
            }}
          />
        </div>
        <div className="px-3 w-full mx-auto flex justify-end mt-6">
          {/* <button className="bg-orange-400 px-5 py-2">Submit Blog</button> */}
          <Dialog content={content} />
        </div>
      </div>
    </section>
  );
};

export default Page;
