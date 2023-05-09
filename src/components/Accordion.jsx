import { useState } from 'react';
import SingleQuestion from './SingleQuestion';

function Accordion({ questions }) {
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    setActiveId((currentId) => {
      if (currentId === id) return null;
      return id;
    });
  };

  const renderedQuestions = questions.map((question) => {
    return (
      <SingleQuestion
        key={question.id}
        {...question}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    );
  });

  return (
    <section className="container">
      <h1>Questions</h1>
      {renderedQuestions}
    </section>
  );
}
export default Accordion;
