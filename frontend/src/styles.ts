import "tailwindcss/tailwind.css";

document.body.className = "bg-gray-100 text-gray-900 font-sans";

// Header styles
const headerStyles = "p-5 navbar bg-white shadow-md w-full fixed top-0 left-0 z-10 flex items-center flex-start";
const logoStyles = "w-32";
const navLinkStyles = "ml-4 text-gray-700 hover:text-gray-900 transition duration-300 rounded-lg p-2 flex gap-10"; ;

// Glossary styles
const glossaryContainerStyles = "pt-[100px] p-12 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
const glossaryCardStyles = "card bg-white shadow-lg rounded-2xl p-6 drop-shadow-md";
const glossaryTitleStyles = "card-title font-semibold text-lg text-gray-800 mb-2";
const glossaryDescriptionStyles = "text-gray-600 text-sm";

// MindMap styles
const mindMapContainerStyles = "pt-[100px] w-full h-[calc(100vh-100px)]";
const buttonStyles = "btn bg-gray-800 text-white rounded-lg p-3 hover:bg-gray-700 transition duration-300";
const controlsStyles = "absolute bottom-4 right-4";

export { headerStyles, logoStyles, navLinkStyles, glossaryContainerStyles, glossaryCardStyles, glossaryTitleStyles, glossaryDescriptionStyles, mindMapContainerStyles, buttonStyles, controlsStyles };
