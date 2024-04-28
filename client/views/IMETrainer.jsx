import { useState } from 'react';
import { Link } from 'react-router-dom';

const ROOT_OPTIONS = [
  { id: 1, label: 1 },
  { id: 2, label: 2 },
  { id: 3, label: 3 },
  { id: 4, label: 4 },
  { id: 5, label: 5 },
  { id: 6, label: 6 },
];

const MODE_OPTIONS = [
  { id: 1, label: 'Ionian' },
  { id: 2, label: 'Dorian' },
  { id: 3, label: 'Phrygian' },
  { id: 4, label: 'Lydian' },
  { id: 5, label: 'Mixolydian' },
  { id: 6, label: 'Aeolian' },
  { id: 7, label: 'Locrian' },
];

const numberFormatMap = {
  1: '1st',
  2: '2nd',
  3: '3rd',
  4: '4th',
  5: '5th',
  6: '6th',
};

const keys = [
  'C',
  'G',
  'D',
  'A',
  'E',
  'B',
  'Gb',
  'Db',
  'Ab',
  'Eb',
  'Bb',
  'F',
  'Cb',
  'F#',
  'C#',
];

const IMETrainer = () =>  {
  
  const [selectedRoots, setSelectedRoots] = useState([]);
  const [selectedModes, setSelectedModes] = useState([]);
  const [flashCardSet, setFlashCardSet] = useState([]);
  
  const [singleFlashCard, setSingleFlashCard] = useState([]);
  const [nextIndex, setNextIndex] = useState(0);

  const [flipped, setFlipped] = useState(true);

  const handleRootOptions = (root) => {
    const newSelectedRoots = selectedRoots.includes(root)
      ? selectedRoots.filter((r) => r !== root)
      : [...selectedRoots, root];
    setSelectedRoots(newSelectedRoots);
  };

  const handleModeOptions = (mode) => {
    const newSelectedModes = selectedModes.includes(mode)
      ? selectedModes.filter((m) => m !== mode)
      : [...selectedModes, mode];
    setSelectedModes(newSelectedModes);
  };

  const handleNextIndex = () => {
    flipped? null : setFlipped(true);
    if (nextIndex == flashCardSet.length-1) {
      setNextIndex(0);
    }
    else {setNextIndex(nextIndex+1);}
    console.log(nextIndex);
    setSingleFlashCard([flashCardSet[nextIndex]]);
  }
  
  const generateFlashCardsSet = () => {
    flipped? null : setFlipped(true);
    const cardSet = [];
    selectedRoots.forEach((root) => {
      selectedModes.forEach((mode) => {
        keys.forEach((key) => {
          const card = generateCard(root, mode, key);
          cardSet.push(card);
        });
      });
    });
    const shuffledArray = cardSet.sort((a, b) => 0.5 - Math.random());
    setFlashCardSet(shuffledArray);
    setNextIndex(0);
    setSingleFlashCard([shuffledArray[nextIndex]])
  };

  const generateCard = (root, mode, key) => {
    return {
      id: crypto.randomUUID(),
      key: key,
      root: root.label,
      mode: mode.label,
      image: `/src/assets/images/${mode.label}-${root.label}.png`
    };
  };

  return (
    <>
    {/* HEADER */}
    <nav className="d-flex align-items-center justify-content-between mb-4">
      <div>
        <h1 className="mb-1">Guitar Trainer</h1>
        <h2 className="mb-4">Diatonic 3NPS - E</h2>
      </div>
      <div>
        <Link className="btn btn-lg btn-warning mb-2" to={`/`}>Home</Link><br></br>
        <Link className="btn btn-lg btn-primary" to={`/practice-options`}>Options</Link>
      </div>
    </nav>
    {/* BODY */}
    <div className="d-flex justify-content-between mt-5">
      <div className="flex-grow-1 me-5">   
        {/* FLASHCARD */}
        <div className="d-flex flex-column me-5">
          {singleFlashCard.map((flashCard) => (
            flipped?
            <div className="bg-white border p-5 text-center" key={flashCard.id} onClick={() => setFlipped(!flipped)}>
              <p className="fs-1 py-5">{`${flashCard.key} ${flashCard.mode} - ${numberFormatMap[flashCard.root]} string root`}</p>
              <p>{`${flashCardSet.indexOf(flashCard)+1}/${flashCardSet.length}`}</p>
            </div> :
            <div className="bg-white border p-3 text-center" key={flashCard.id} onClick={() => setFlipped(!flipped)}>
              <img src={flashCard.image} className="fs-1 py-2"/>
              <p>{`${flashCardSet.indexOf(flashCard)+1}/${flashCardSet.length}`}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <button className="btn btn-lg btn-warning mt-3 me-3" onClick={handleNextIndex}>Next</button>
          <button className="btn btn-lg btn-success mt-3" onClick={generateFlashCardsSet}>Generate flash cards</button>
        </div>
      </div> 
      <div className="d-flex gap-5">
        {/* ROOT OPTIONS */}
        <div className="d-flex flex-column gap-2">
          {ROOT_OPTIONS.map((root) => (
            <button
              key={root.id}
              onClick={() => handleRootOptions(root)}
              className={`btn btn-lg ${selectedRoots.includes(root) ? 'btn-warning' : 'btn-danger'}`}>
              {root.label}
            </button>
          ))}
          </div>
          {/* MODE OPTIONS */}
          <div className="d-flex flex-column gap-2">
            {MODE_OPTIONS.map((mode) => (
              <button
                key={mode.id}
                onClick={() => handleModeOptions(mode)}
                className={`btn btn-lg ${selectedModes.includes(mode) ? 'btn-warning' : 'btn-danger'}`}>
                {mode.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default IMETrainer;
