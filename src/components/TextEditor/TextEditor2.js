/* eslint-disable */
/*
? 김용훈 만듬
*/

import { useEffect, useRef,useState } from 'react';
import 'codemirror/lib/codemirror.css';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import styled from 'styled-components/macro';

const QuestionBodyForm = styled.div`
display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 768px;
  font-size: 28px;
  margin-top: 20px;
  height: 570px;
  border-radius: 5px;
  padding-bottom: 100px;
  background-color: white;
  border: 1px solid rgba(152, 152, 152, 0.6);
  .tf_result {
    height: 110px;
    width: 710px;
    margin: 20px 0px 3px 30px;
    padding-bottom: 20px;

  }

`;

const QuestionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  margin: 10px 0px 0px 20px;

  border: 0.01px solid #43549f;
  color: white;
  :hover {
    background-color: #0173cc;
    border: 2px solid #0173cc;
  }
  background-color: #0995fd;
  border: 2px solid #0a95ff;
  border-radius: 4px;
  cursor: pointer;
`;

export default function ToastEditor2() {
    // Editor DOM 선택용
    const editorRef = useRef();
    const [textData,setData] = useState('');
     const [state,setState] = useState('');
    // 등록 버튼 핸들러
    const handleRegisterButton = () => {
        // 입력창에 입력한 내용을 HTML 태그 형태로 취득
        // console.log(editorRef.current?.getInstance().getHTML());
        // // 입력창에 입력한 내용을 MarkDown 형태로 취득
        // console.log(editorRef.current?.getInstance().getMarkdown());
      
        setData(editorRef.current?.getInstance().getMarkdown());
    };

        const Textbody2= textData;
    useEffect(()=> {
      fetch("http://localhost:3000/posts",{ 
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8", },
        body: JSON.stringify({
          Textbody2,
        })
      }).then((response) => response.json())
        .then((data)=> console.log(data))             
  },[textData]);

useEffect(() => {
        
  console.log(state);
},[state])

 const  handleChangeEditor = () => {
    setState(editorRef.current?.getInstance().getHTML());
  };
return (
    <>
    <QuestionBodyForm>
        <Editor 
            onChange={[handleRegisterButton,handleChangeEditor]}
            ref={editorRef} // DOM 선택용 useRef
            placeholder="내용을 입력해주세요."
            previewStyle="vertical" // 미리보기 스타일 지정
            height="2000px" // 에디터 창 높이
            initialEditType="markdown" //wysiwyg
            toolbarItems={[
                // 툴바 옵션 설정
                ['heading', 'bold', 'italic', 'strike'],
                ['hr', 'quote'],
                ['ul', 'ol', 'task', 'indent', 'outdent'],
                ['table', 'image', 'link'],
                ['code', 'codeblock']
            ]}
            useCommandShortcut={false} // 키보드 입력 컨트롤 방지
        ></Editor>

{/* <QuestionButton onClick={handleRegisterButton}>등록</QuestionButton> */}
        
        <QuestionButton onClick={handleChangeEditor}>
              뷰어로 확인
              </QuestionButton>
           
            <div>
              <textarea
                className="tf_result"
                value={state}
                readOnly="readOnly"
              ></textarea>
            </div>
            
            </QuestionBodyForm>
            </>
            
         

    
);
}