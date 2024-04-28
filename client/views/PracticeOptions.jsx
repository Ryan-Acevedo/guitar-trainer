import {Link} from "react-router-dom";

const PracticeOptions = () => {
    return (
        <>
        <nav className="d-flex align-items-center justify-content-between mb-4">
            <h1>Select an Option:</h1>
            <Link className="btn btn-lg btn-warning" to={"/"}>Home</Link>
        </nav>
        <div className="d-flex justify-content-between">
            <div>
                <h2 className="text-decoration-underline mb-3 text-white">Level 1</h2>
                <div className="d-flex flex-column gap-1 mb-3">
                    <h2>Intervals:</h2>
                    <button className="btn btn-lg btn-warning">ABCs</button>
                    <button className="btn btn-lg btn-warning">Find the Note</button>
                    <button className="btn btn-lg btn-warning">Unison Groupings</button>
                    <button className="btn btn-lg btn-warning">Otave Groupings</button>
                </div>
                <div className="d-flex flex-column gap-1 mb-3">
                    <h2>Scales:</h2>
                    <button className="btn btn-lg btn-warning">FF</button>
                    <button className="btn btn-lg btn-warning">FF +7</button>
                    <button className="btn btn-lg btn-warning">Modes to keys</button>
                </div>
                <div className="d-flex flex-column gap-1">
                    <h2>Chords:</h2>
                    <button className="btn btn-lg btn-warning">CAGED - Major</button>
                </div>
            </div>
            <div>
                <h2 className="text-decoration-underline mb-3 text-white">Level 2</h2>
                <div className="d-flex flex-column gap-1 mb-3">
                    <h2>Intervals:</h2>
                    <button className="btn btn-lg btn-warning">Simple Quantities</button>
                    <button className="btn btn-lg btn-warning">Simple Qualities</button>
                    <button className="btn btn-lg btn-warning">Inversions</button>
                    <button className="btn btn-lg btn-warning">Compound</button>
                </div>
                <div className="d-flex flex-column gap-1 mb-3">
                    <h2>Scales:</h2>
                    <button className="btn btn-lg btn-warning">Scale Degrees</button>
                    <button className="btn btn-lg btn-warning">CAGED</button>
                    <button className="btn btn-lg btn-warning">CAGED Variations</button>
                </div>
                <div className="d-flex flex-column gap-1">
                    <h2>Chords:</h2>
                    <button className="btn btn-lg btn-warning">Triads</button>
                    <button className="btn btn-lg btn-warning">Chord Tones</button>
                    <button className="btn btn-lg btn-warning">Arpeggios</button>
                    <button className="btn btn-lg btn-warning">7ths</button>
                </div>
            </div>
            <div>
            <h2 className="text-decoration-underline mb-3 text-white">Level 3</h2>
                <div className="d-flex flex-column gap-1 mb-3">
                    <h2>Intervals:</h2>
                    <button className="btn btn-lg btn-warning">Ear Master</button>
                    <button className="btn btn-lg btn-warning">FF - Harmonic Minor</button>
                    <button className="btn btn-lg btn-warning">FF - Melodic Minor</button>
                    <button className="btn btn-lg btn-warning">Sequences</button>
                </div>
                <div className="d-flex flex-column gap-1 mb-3">
                    <h2>Scales:</h2>
                    <button className="btn btn-lg btn-warning">3NPS - I</button>
                    <button className="btn btn-lg btn-warning">3NPS - M</button>
                    <Link className="btn btn-lg btn-warning" to={"/scales/diatonic/3nps/e"}>3NPS - E</Link>
                </div>
                <div className="d-flex flex-column gap-1 mb-2">
                    <h2>Chords:</h2>
                    <button className="btn btn-lg btn-warning">Extensions & Alterations</button>
                    <button className="btn btn-lg btn-warning">Voice Leading</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default PracticeOptions