import Article from "./components/article"
import Button from "./components/buttons"

function App() {
  return (
    <>
      <Article.Article>
        <Article.Header>
          <h2>Buttons</h2>

          <p className="metadata">
            <span>Stuff you click and it does other stuff</span>
          </p>
        </Article.Header>

        <Article.Divider />

        <Article.Section>
          <h3>Variants</h3>
          <Button label="Primary Button" onClick={() => {}} variant="primary" />
          <Button label="Secondary Button" onClick={() => {}} variant="secondary" />
          <Button label="Transparent Button" onClick={() => {}} variant="transparent" />
        </Article.Section>

        <Article.Divider />
        
        <Article.Section>
          <h3>Sizes</h3>
          <Button label="Small Button" onClick={() => {}} size="small" />
          <Button label="Medium Button" onClick={() => {}} size="medium" />
          <Button label="Large Button" onClick={() => {}} size="large" />
        </Article.Section>

        <Article.Divider />

        <Article.Section>
          <h3>Disabled State</h3>
          <Button label="Disabled Button" onClick={() => {}} disabled />
        </Article.Section>
      </Article.Article>
    </>
  )
}

export default App
