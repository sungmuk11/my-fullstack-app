import "../scss/note.scss";

const Note = () => {
  return (
    <div className="note-container">
      <div className="note">
        <div className="img-wrapper">
          <img src="https://picsum.photos/250/250" />
        </div>
        <div className="span-wrapper">
          <span>대충 설명 ~~</span>
        </div>
      </div>
    </div>
  );
};

export default Note;
