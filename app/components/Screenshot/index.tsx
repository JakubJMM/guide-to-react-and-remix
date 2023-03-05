import { useEffect, useState } from "react";

interface ScreenshotProps {
  src: string;
  alt: string;
  challengeBlock?: boolean;
}

interface ImageModalProps {
  handleCloseModal: () => void;
  src: string;
  alt: string;
}

const ImageModal = ({ alt, handleCloseModal, src }: ImageModalProps) => {
  return (
    <div
      className="fixed top-0 left-0 z-50 flex h-screen w-screen cursor-pointer items-center justify-center bg-neutral-500 bg-opacity-90 p-4"
      onClick={handleCloseModal}
    >
      <div className="flex max-w-full items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="max-h-[95vh] rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

const Screenshot = ({ src, alt, challengeBlock = false }: ScreenshotProps) => {
  const [modalIsShowing, setModalIsShowing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modalIsShowing ? "hidden" : "auto";
  }, [modalIsShowing]);

  const handleOpenModal = () => {
    setModalIsShowing(true);
  };

  const handleCloseModal = () => {
    setModalIsShowing(false);
  };

  return (
    <div className="flex items-center justify-center">
      {modalIsShowing ? (
        <ImageModal alt={alt} handleCloseModal={handleCloseModal} src={src} />
      ) : null}
      <div
        className={`flex max-w-xl cursor-pointer items-center justify-center border border-neutral-500 bg-neutral-700 p-4 hover:bg-neutral-600 ${
          challengeBlock
            ? "border-opacity-50 bg-neutral-900 bg-opacity-50 hover:bg-neutral-800 hover:bg-opacity-50"
            : ""
        }`}
        onClick={handleOpenModal}
      >
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Screenshot;
