// import Blogcontent from "./blo"

// function HighlightedText({ text, highlightedStrings }) {
//   const highlightText = () => {
//     let highlightedText = text;

//     highlightedStrings.forEach((highlightedString) => {
//       const regex = new RegExp(highlightedString, 'gi');
//       highlightedText = highlightedText.replace(regex, `<span class="highlighted">${highlightedString}</span>`);
//     });

//     return { __html: highlightedText };
//   };

//   return <div dangerouslySetInnerHTML={highlightText()} />;
// }


// Blogcontent.propTypes = {
//     text: PropTypes.string.isRequired,
//     highlightedStrings: PropTypes.arrayOf(PropTypes.string).isRequired,
//   };
  

// export default HighlightedText;
