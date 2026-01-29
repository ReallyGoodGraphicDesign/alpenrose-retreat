import Modal from "./Modal";

function SectionModal({ section, onClose }) {
  if (!section) return null;

  return (
    <Modal onClose={onClose}>
      <h2>{section.title}</h2>

      {(section.long_text || section.text)
        .split("\n")
        .map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
    </Modal>
  );
}

export default SectionModal;
