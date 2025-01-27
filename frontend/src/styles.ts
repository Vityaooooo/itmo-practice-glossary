import "tailwindcss/tailwind.css";

document.body.className = "bg-orange-300 text-black font-sans";

// Header styles
const headerStyles = "p-5 navbar bg-orange-400 shadow-md w-full fixed top-0 left-0 z-10 flex items-center flex-start";
const logoStyles = "w-32";
const navLinkStyles = "ml-4 text-gray-700 hover:text-black transition duration-300 rounded-lg p-2 flex gap-10 ";

// Glossary styles
const glossaryContainerStyles = "pt-[100px] p-12 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
const glossaryCardStyles = "card bg-orange-400 shadow-lg p-6 drop-shadow-md";
const glossaryTitleStyles = "card-title font-semibold text-lg text-black mb-2 text-center";
const glossaryDescriptionStyles = "text-black text-sm";

// MindMap styles
const mindMapContainerStyles = "pt-[100px] w-full h-[calc(100vh-100px)]";
const buttonStyles = "btn bg-gray-800 text-white rounded-lg p-3 hover:bg-gray-700 transition duration-300";
const controlsStyles = "absolute bottom-4 right-4";

// React-Flow styles
const nodeStyles = "bg-red-200 text-gray-800 shadow rounded-lg px-4 py-2";
const edgeStyles = { animated: false, style: { stroke: '#f87171', strokeWidth: 2 } };
const edgeLabelStyles = { fontSize: 12, fill: 'black none', backgroudColor: 'none' };

export { 
  headerStyles, 
  logoStyles, 
  navLinkStyles, 
  glossaryContainerStyles, 
  glossaryCardStyles, 
  glossaryTitleStyles, 
  glossaryDescriptionStyles, 
  mindMapContainerStyles, 
  buttonStyles, 
  controlsStyles, 
  nodeStyles, 
  edgeStyles, 
  edgeLabelStyles 
};
