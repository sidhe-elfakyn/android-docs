import { highlightCodeSnippet } from '../util/highlight-code-snippet';

function MakeCodeSnippetJava() {
  const rawJavaCode = require('raw-loader!./java/snapshot-share-activity--full-java.java');
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

const SnapshotShareActivity = {
  java: MakeCodeSnippetJava(),
  kotlin: MakeCodeSnippetKotlin()
};

export { SnapshotShareActivity };
