import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-gray-200">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="https://syndore.com"
          target="_blank"
          className="flex font-medium items-center md:justify-start justify-center cursor-pointer"
        >
          <Image
            src="/syndore-logo.png"
            alt="syndore"
            width={70}
            height={70}
            className="rounded-full"
          />
          <span className="ml-3 text-xl">Syndore</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Syndore
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.linkedin.com/company/syndore"
            target="_blank"
            className="ml-3 text-gray-200 cursor-pointer"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
