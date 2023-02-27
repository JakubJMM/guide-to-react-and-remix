import { useState } from "react";

export default function useShowAnswer() {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const handleShowAnswer = () => {
    setIsShowingAnswer(true);
  };

  return [isShowingAnswer, handleShowAnswer];
}
