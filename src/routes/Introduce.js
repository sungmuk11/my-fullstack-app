import "../scss/introduce.scss";

const Introduce = () => {
  return (
    <div className="introduce">
      <div className="title">
        <h1>PARK SUNG MOOK</h1>
      </div>
      <div className="main_intro">
        <div className="skills">
          <div className="skill">
            <div className="img">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" />
            </div>
            <span className="description">html입문 1년차</span>
          </div>
          <div className="skill">
            <div className="img">
              <img src="https://i.namu.wiki/i/DLvI3H3jjaK2ONvOQZCzadfWeMkXkNRamQJr_O4oY7vah_ALG9oA6qqP-3DFbqs_fyUDHO7oIrtosaxe1jGX1A.svg" />
            </div>
            <span className="description">css입문 1년차</span>
          </div>
          <div className="skill">
            <div className="img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OrtM7FfDgFfgOmRqL4R__bU5cjx1ltwy1A&s" />
            </div>
            <span className="description">
              자바스크립트 입문 1년차 nodejs 완료
            </span>
          </div>
          <div className="skill">
            <div className="img">
              <img src="https://cdn.inflearn.com/wp-content/uploads/react.png" />
            </div>
            <span className="description">리액트 입문 1달차 리액트 연습중</span>
          </div>
        </div>
        <div className="me">
          <div className="inside_me">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLK63pMpCqjAQmmszFTdBygseKXniVaEIg9g&s" />
            <span className="intro_me">15살 중학교 2학년 코딩 입문 1년차</span>
            <div className="my_email">
              <div className="email_header">E-Mail</div>
              <div className="email">sungm00k0310@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
