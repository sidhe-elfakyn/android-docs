import { highlightCodeSnippet } from '../util/highlight-code-snippet';

function MakeCodeSnippetJava() {
  const rawJavaCode = require('raw-loader!./java/simple-offline-map-activity--full-java.java');
  return {
    raw: rawJavaCode,
    highlighted: highlightCodeSnippet(rawJavaCode)
  };
}

function MakeCodeSnippetKotlin() {
  const rawKotlinCode = '// Not available';
  return {
    raw: rawKotlinCode,
    highlighted: highlightCodeSnippet(rawKotlinCode)
  };
}

const SimpleOfflineMapActivity = {
  java: MakeCodeSnippetJava(),
  kotlin: MakeCodeSnippetKotlin()
};

export { SimpleOfflineMapActivity };
