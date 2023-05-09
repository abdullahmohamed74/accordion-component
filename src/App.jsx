import Accordion from './components/Accordion';
import questions from './components/data';

function App() {
  return (
    <main>
      <Accordion questions={questions} />
    </main>
  );
}
export default App;
