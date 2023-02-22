export const importReactFeatherSnippet = `// 💣 1. IMPORT THE CAMERA ICON FROM REACT FEATHER HERE

const Photography = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200">
      <div className="flex flex-col items-center rounded-xl bg-white p-12 shadow-xl">

{/* 💣 2. REPLACE THIS LINE WITH THE CAMERA ICON FROM REACT FEATHER */}

        <h1 className="mt-6 text-center text-3xl font-bold text-blue-900">
          Free Photography Lessons!
        </h1>
      </div>
    </div>
  );
};

export default Photography;`;

export const importReactFeatherAnswerSnippet = `import { Camera } from 'react-feather';

const Photography = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200">
      <div className="flex flex-col items-center rounded-xl bg-white p-12 shadow-xl">

        <Camera className="fill-blue-100 stroke-blue-900" size="12rem" />

        <h1 className="mt-6 text-center text-3xl font-bold text-blue-900">
          Free Photography Lessons!
        </h1>
      </div>
    </div>
  );
};

export default Photography;`;
