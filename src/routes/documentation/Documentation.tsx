import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import python_docs from "./documentation_python.md";
import remarkGfm from "remark-gfm";

export default function Documentation() {
  const [language, setLanguage] = useState<"python" | "java">("python");

  const [pythonArticle, setPythonArticle] = useState<string>();
  const [javaArticle, setJavaArticle] = useState<string>();

  useEffect(() => {
    // the useEffect cant be asynchronous
    const e = async () => {
      const pythonRes = await fetch(python_docs);
      const javaRes = await fetch(python_docs); // remake with java

      setPythonArticle(await pythonRes.text());
      setJavaArticle(await javaRes.text());
    };
    e();
  }, []);

  // Failsafe because i chose to fetch markdown documents lol
  if (!pythonArticle || !javaArticle) {
    return <p>Loading</p>;
  }

  return (
    <ReactMarkdown>
      {language === "python" ? pythonArticle : javaArticle}
    </ReactMarkdown>
  );
}
