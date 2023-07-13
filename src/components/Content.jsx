import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { gql } from 'graphql-request';
import graphcms from '../graphcms';

import '../styles/Content.css';
import { useEffect, useState } from 'react';
import { a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Content = ({postId}) => {

  const [post,setPost] = useState(null)
 
  // const { data } = Data;
  // const { title, content } = post

  const replaceBlackslashes = (str) => {
    return str.replace(/`/g, '')
  }

  useEffect(() => {

    async function fetchData() {
      try{
        const res = await graphcms.request(POST_DATA,{postId})
        const {post} = await res
        setPost(post)
      } catch(err) {
        console.log("err: ",err)
      }
    }
   

    fetchData()


  },[])

  if(!post) return (
    <div>
      <h1>loading...</h1>
    </div>
  )
return (
    <div className="contentWrapper">
      <h1>{post.title}</h1>
      {post.content.map((item, index) => {
        if (item.type === 'subheading') {
          return (
            <div className="template-subheading" key={index}>
              <h2>{item.value.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: item.value.value.replace(/`/g, '') }} />
            </div>
          );
        } else if (item.type === 'code') {
          return (
            <div className="template-codebox" key={index}>
              <h4>{item.value.title}</h4>
              <SyntaxHighlighter style={a11yDark} language={item.value.language}>
                {replaceBlackslashes(item.value.value.markdown)}
              </SyntaxHighlighter>
            </div>
          );
        } else if (item.type === 'paragraph') {
          return (
            <div className='template-paragraph' key={index}>
              {item.value.title && <h3>{item.value.title}</h3>}
              <div dangerouslySetInnerHTML={{ __html: item.value.value.replace(/`/g, '') }} />
            </div>
          );
        } else if (item.type === 'image') {
         
            return (
              <div className='template-imgbox' key={index}>
                <img src={item.value.src.url} alt={item.value.caption} />
                {/* <p>{item.value.caption}</p> */}
              </div>
            );
          
        } else {
          return null; // Handle other content types if needed
        }
      })}
    </div>
  );
};

export default Content;


const POST_DATA = gql`
query GetPost($postId: ID!) {
  post(where: {id: $postId}) {
    title
    content(first: 30) {
      ... on Content {
        type
        value {
          ... on Code {
            title
            language
            value {
              markdown
            }
          }
          ... on Subheading {
            title
            value
          }
          ... on Paragraph {
            title
            value
          }
          ... on Image {
            src{
              url
            }
            caption
          }
        }
      }
    }
  }
}

`
