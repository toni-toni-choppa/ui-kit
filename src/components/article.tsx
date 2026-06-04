import article from "./article.module.css";

function ArticleWrapper({ children }: { children: React.ReactNode }) {
  return <article className={article.article}>{children}</article>;
}

function Header({ children }: { children: React.ReactNode }) {
  return <header className={article.header}>{children}</header>;
}

function Metadata({ children }: { children: React.ReactNode }) {
  return <p className={article.metadata}>{children}</p>;
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className={article.section}>{children}</section>;
}

function Divider() {
  return <hr className={article.divider}></hr>;
}

const Article = Object.assign(ArticleWrapper, {
  Header,
  Metadata,
  Section,
  Divider,
});

export default Article;
