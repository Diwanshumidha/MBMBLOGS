//@ts-nocheck
'use client'

import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function EditorTiny({getdata}) {
  const editorRef = useRef(null);

  const log = (d) => {
      getdata(d.level.content)
  };
  return (
    <>
      <Editor
    
        apiKey='utrejl4nyu3zg5xz567dzcpx5dfuqb58zq3wrcfzwde2zahi'
        onInit={(evt, editor) => editorRef.current = editor}
        onChange={log}
    
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          selector: 'textarea#open-source-plugins',
          toolbar_sticky: true,
          plugins: 'preview importcss image  searchreplace autoresize   autolink autosave save directionality code visualblocks visualchars fullscreen  link  template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
          menubar: 'file edit view insert format tools table help',
          toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | image template link anchor codesample | ltr rtl',
          autosave_ask_before_unload: true,
          autosave_interval: '30s',
          autoresize_bottom_margin: 90,
          skin:'snow',
          // skin_url:'./MBM/skintool.json',
          min_height: screen.height + 100,
          autosave_prefix: '{path}{query}-{id}-',
          autosave_restore_when_empty: false,
          autosave_retention: '2m',
          fixed_toolbar_container: true,
          a11y_advanced_options: true,
          automatic_uploads: true,
          image_list: [
            { title: 'My image 1', value: 'https://www.example.com/my1.gif' },
            { title: 'My image 2', value: 'http://www.moxiecode.com/my2.gif' }
          ],
          file_picker_types: ' image ',
          
          file_picker_callback: (cb, value, meta) => {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
        
            input.addEventListener('change', (e) => {
              const file = e.target.files[0];
        
              const reader = new FileReader();
              reader.addEventListener('load', () => {
                console.log(file.size > 500000 && 'Exceeding')
                if (file.size > 500000) return 
                const id = 'blobid' + (new Date()).getTime();
                const blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                const base64 = reader.result.split(',')[1];
                const blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
                
                // console.log(base64)
                /* call the callback and populate the Title field with the file name */
                cb(blobInfo.blobUri(), { title: file.name });
              });
              console.log(file)
        
              reader.readAsDataURL(file);
              
            });
        
            input.click();
          },
          link_list: [
            { title: 'My page 1', value: 'https://www.tiny.cloud' },
            { title: 'My page 2', value: 'http://www.moxiecode.com' }
          ],
          importcss_append: true,
          templates: [
            { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
            { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
            { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
          ],
          template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
          template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
          height: screen.height,
          quickbars_selection_toolbar: 'bold italic underline | forecolor backcolor | quicklink h2 h3 blockquote  quicktable',
          noneditable_class: 'mceNonEditable',
          toolbar_mode: 'sliding',
          contextmenu: 'link table',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px}'
        }}
      />
      
    </>
  );
}
