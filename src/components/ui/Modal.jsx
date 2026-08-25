function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-clack/60 p-4" onClick={onClose}>
      {/* <div className="bg-bar border border-line runded-2x1 w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <button onClick={onClose} className="text-muted hover: text-text">
            ✕
          </button>
        </div>
        {children}
      </div> */}
    </div>
  );
}

export default Modal;
