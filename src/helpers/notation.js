export default function setDataNote () {
    const notes = document.querySelectorAll('.c-panel__vote-average');
    notes.forEach(note => {
      let number = Math.round(note.textContent);
      note.setAttribute("data-score", number);
    });
}