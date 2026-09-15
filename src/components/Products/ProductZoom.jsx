export function ProductZoom({ isOpen, image, title, onClose }) {
  if (!isOpen) return null;
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur"
    >
      <button
        onClick={onClose}
        className="absolute bg-transparent! top-8 right-8 text-white hover:text-gray-300"
      >
        ✕
      </button>
      <img
        src={image}
        alt={title}
        className="max-w-[90vw] max-h-[85vh] object-contain drop-shadow-2xl rounded-xl"
      />
    </div>
  );
}
