import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../images/bug.svg";
import ideaImageUrl from "../../images/idea.svg";
import thoughtImageUrl from "../../images/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestarFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
      {/*A condição abaixo irá lidar com o estado de envio do feedback. Caso o feedback não esteja
      no estado de enviado, será feito a manipulação to tipo de feedback e uso do componente de
      acordo com o tipo*/}

      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestarFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestarFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400 ">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
          target={"_blank"}
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
