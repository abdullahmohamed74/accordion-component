import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function SingleQuestion({ id, title, info, activeId, toggleQuestion }) {
  const isActive = activeId === id;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button onClick={() => toggleQuestion(id)} className="question-btn">
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
}
export default SingleQuestion;
