import Article from "./components/article"
import Input from "./components/inputs/inputs"

function App() {
  return (
    <>
      <Article.Article>
        <Article.Header>
          <h2>Inputs</h2>

          <p className="metadata">
            <span>Stuff to input and interact with</span>
          </p>
        </Article.Header>

        <Article.Divider />

        <Article.Section>
          <h3>Text</h3>
          <Input.Text id="text-input" placeholder="Enter some text" onChange={(value) => console.log(value)} />
          <Input.Text id="text-input-disabled" placeholder="Disabled input" disabled onChange={(value) => console.log(value)} />
        </Article.Section>

        <Article.Divider />

        <Article.Section>
          <h3>Select</h3>
          <Input.Select onChange={(value) => console.log(value)}>
            <Input.Select.Option value="option1" label="Option 1" />
            <Input.Select.Option value="option2" label="Option 2" />
            <Input.Select.Option value="option3" label="Option 3" />
          </Input.Select>

          <Input.Select disabled onChange={(value) => console.log(value)}>
            <Input.Select.Option value="option1" label="Disabled" />
          </Input.Select>
        </Article.Section>

        <Article.Divider />

        <Article.Section>
          <h3>Range</h3>
          <Input.Range name="range-input" id="range-input" onChange={(value) => console.log(value)} min={0} max={100} step={1} />
          <Input.Range name="range-input-disabled" id="range-input-disabled" disabled onChange={(value) => console.log(value)} min={0} max={100} step={1} />
        </Article.Section>

        <Article.Divider />

        <Article.Section>
          <h3>Text Area</h3>
          <Input.TextArea id="text-area" placeholder="Enter some text" onChange={(value) => console.log(value)} />
          <Input.TextArea id="text-area-disabled" placeholder="Disabled input" disabled onChange={(value) => console.log(value)} />
        </Article.Section>

        <Article.Divider />
        
        <Article.Section>
          <h3>Checkbox</h3>
          <Input.Checkbox id="checkbox" label="Check me" onChange={(checked) => console.log(checked)} />
          <Input.Checkbox id="checkbox-disabled" label="Disabled checkbox" disabled onChange={(checked) => console.log(checked)} />
        </Article.Section>

        <Article.Divider />

        <Article.Section>
          <h3>Radio</h3>
          <Input.Radio id="radio1" name="radio-group" label="Option 1" onChange={(checked) => console.log(checked)} />
          <Input.Radio id="radio2" name="radio-group" label="Option 2" onChange={(checked) => console.log(checked)} />
          <Input.Radio id="radio-disabled" name="radio-group-disabled" label="Disabled radio" disabled onChange={(checked) => console.log(checked)} />
        </Article.Section>
      </Article.Article>
    </>
  )
}

export default App
