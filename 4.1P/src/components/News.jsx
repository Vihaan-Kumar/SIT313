import { Form, Button, Segment, Input } from "semantic-ui-react";

function News() {
  return (
    <Segment textAlign="center" style={{ marginTop: "3rem" }}>
      <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
      <Form>
        <Input
          type="email"
          placeholder="Enter your email"
          style={{ width: "300px", marginRight: "10px" }}
        />
        <Button primary>Subscribe</Button>
      </Form>
    </Segment>
  );
}

export default News;
