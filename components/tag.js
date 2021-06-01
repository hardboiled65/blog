// type: ['link', 'edit']
const Tag = ({ name, type, onDeleteTag }) => {
  const tagType = type ? type : 'link';

  const onClickDeleteButton = () => {
    onDeleteTag(name);
  }

  return (
    <div className="Tag">
      <div className="name">
        <span>{ name }</span>
      </div>
      {tagType === 'edit' &&
        <div className="delete"
          onClick={onClickDeleteButton}>
          <span>X</span>
        </div>
      }
    </div>
  )
}

export default Tag
