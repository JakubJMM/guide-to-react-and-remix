export const reactShareChallenge = `// 💣 1. IMPORT THE REQUIRED COMPONENTS FROM REACT SHARE HERE

const Share = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200">
      <div className="m-12 flex flex-col items-center rounded-xl bg-white p-12 shadow-xl">

{/* 💣 2. REPLACE THIS LINE WITH THE CODE TO GENERATE A FACEBOOK SHARE BUTTON */}

        <h1 className="mt-6 text-center text-3xl font-bold text-blue-900">
          Share this page with your friends!
        </h1>
      </div>
    </div>
  );
};

export default Share;`;

export const reactShareBasicSolution = `import { FacebookShareButton, FacebookIcon } from 'react-share';

const Share = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200">
      <div className="m-12 flex flex-col items-center rounded-xl bg-white p-12 shadow-xl">

        <FacebookShareButton url="https://google.com" >
          <FacebookIcon />
        </FacebookShareButton>

        <h1 className="mt-6 text-center text-3xl font-bold text-blue-900">
          Share this page with your friends!
        </h1>
      </div>
    </div>
  );
};

export default Share;`;

export const reactShareAdvancedSolution = `import { FacebookShareButton, TwitterShareButton, PinterestShareButton, FacebookIcon, TwitterIcon, PinterestIcon } from 'react-share';

const Share = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200">
      <div className="m-12 flex flex-col items-center rounded-xl bg-white p-12 shadow-xl">

        <div className="flex">
          <FacebookShareButton className="mx-1" url="https://google.com" >
            <FacebookIcon />
          </FacebookShareButton>

          <TwitterShareButton className="mx-1" url="https://google.com" >
            <TwitterIcon />
          </TwitterShareButton>

          <PinterestShareButton className="mx-1" url="https://google.com" media="https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300" >
            <PinterestIcon />
          </PinterestShareButton>
        </div>

        <h1 className="mt-6 text-center text-3xl font-bold text-blue-900">
          Share this page with your friends!
        </h1>
      </div>
    </div>
  );
};

export default Share;`;
