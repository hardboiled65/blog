import { useState } from "react"

import axios from 'axios'

import Tag from '../components/tag'

const New = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
  }

  const onInputTitle = (e) => {
    setTitle(e.target.value);
  }
  const onInputContent = (e) => {
    setContent(e.target.value);
  }
  const onDeleteTag = (deleteTag) => {
    console.log('delete ' + deleteTag);
    const newTags = tags.filter((tag) => {
      return deleteTag !== tag;
    });

    setTags(newTags);
  }
  const onInputNewTag = (e) => {
    setNewTag(e.target.value);
  }
  const onClickAddTag = () => {
    let newTags = [...tags, newTag];

    setTags(newTags);
  }
  const onClickPostButton = () => {
    let payload = {
      title: title,
      content: content,
      tags: tags,
    };
    const token = getCookie('token');
    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (token) {
      config.headers['Authorization'] = token;
    }
    axios.post('https://blog.hardboiled65.tk/api/v1/posts', payload, config)
      .then(response => {
        if (response.status === 200) {
          console.log('success');
        }
      })
      .catch(error => {
        alert('Failed to post new post: ' + error + '\n' + JSON.stringify(error.response.data));
      });
  }

  return (
    <div className="New">
      <div className="post-new-form">
        <label className="label-line" htmlFor="title">Title</label>
        <input className="post-new-input post-new-title" name="title"
          onInput={onInputTitle} />
      </div>

      <div className="post-new-form">
        <label className="label-line" htmlFor="content">Content</label>
        <textarea className="post-new-input post-new-content" name="content"
          onInput={onInputContent}>
        </textarea>
      </div>

      <div className="post-new-form">
        <label>Tags</label>
        <div className="tags">
          {tags.map((tag, index) => {
            return <Tag name={tag}
              type={'edit'}
              key={tag}
              onDeleteTag={onDeleteTag}></Tag>
          })}
          <div className="new-tag">
            <input
              value={newTag}
              onInput={onInputNewTag} />
            <button
              onClick={onClickAddTag}>+</button>
          </div>
        </div>
      </div>

      <button
        onClick={onClickPostButton}>
        Post
      </button>
    </div>
  )
}

export default New
