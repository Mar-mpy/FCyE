export default function BookIllustration({ compact = false }) {
  return (
    <div className={`book-scene ${compact ? 'compact' : ''}`} aria-hidden="true">
      <div className="sun"></div>
      <div className="cloud cloud-one"></div>
      <div className="cloud cloud-two"></div>
      <div className="tree">
        <span className="trunk"></span><span className="leaf leaf-a"></span><span className="leaf leaf-b"></span><span className="leaf leaf-c"></span>
      </div>
      <div className="book">
        <span className="book-cover"></span>
        <span className="book-page"></span>
        <b>FCyE</b>
      </div>
      <div className="kid kid-left"><span className="head"></span><span className="body"></span><span className="leg one"></span><span className="leg two"></span></div>
      <div className="kid kid-right"><span className="head"></span><span className="body"></span><span className="leg one"></span><span className="leg two"></span></div>
      <div className="grass"></div>
    </div>
  )
}
