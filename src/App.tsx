import Article from "./components/article";
import Layout from "./layout/layout";
import Button from "./components/buttons";
import Input from "./components/inputs/inputs";

import parseMarkdown from "./parse";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

const components = {
    h1: ({ children }: { children?: React.ReactNode }) => (
        <h1>{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
        <h2>{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
        <h3>{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
        <h4>{children}</h4>
    ),
    hr: () => <Article.Divider />
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Layout>
        <Layout.Sidebar isOpen={isSidebarOpen}>
          <Button
            icon={<img src="/sidebar.svg" alt="Sidebar" height="16" />}
            onClick={() => {
              setIsSidebarOpen((prev) => !prev);
              console.log(isSidebarOpen);
            }}
            size="small"
            variant="transparent"
          />
          <Input.Text id="search" placeholder="Search" />
          <Layout.SidebarList>
            <Layout.SidebarListItem>Item 1</Layout.SidebarListItem>
            <Layout.SidebarListItem>Item 2</Layout.SidebarListItem>
            <Layout.SidebarListItem>Item 3</Layout.SidebarListItem>
          </Layout.SidebarList>
        </Layout.Sidebar>
        <Layout.Content>
          <Layout.Header>
            <Button
              icon={<img src="/sidebar.svg" alt="Sidebar" height="16" />}
              onClick={() => {
                setIsSidebarOpen((prev) => !prev);
                console.log(isSidebarOpen);
              }}
              size="small"
              variant="transparent"
            />
            <Layout.HeaderTitle>Header Title</Layout.HeaderTitle>
          </Layout.Header>
          <Article>
            <Article.Header>
              <h2>{parseMarkdown("index").header.title}</h2>
              <Article.Metadata>{parseMarkdown("index").header.description}</Article.Metadata>
            </Article.Header>

            <Article.Divider />

            {
              parseMarkdown("index").sections.map((section, index) => (
                <>
                  <Article.Section key={index}>
                    <ReactMarkdown components={components}>{section}</ReactMarkdown>
                  </Article.Section>

                  <Article.Divider />
                </>
              ))
            }
          </Article>
        </Layout.Content>
      </Layout>
    </>
  );
}

export default App;
