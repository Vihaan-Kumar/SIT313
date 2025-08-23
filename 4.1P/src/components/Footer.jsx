import { Container, Grid, Segment, List, Icon } from "semantic-ui-react";

function Footer() {
  return (
    <Segment inverted vertical style={{ padding: "2rem 0", marginTop: "3rem" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <h4>Explore</h4>
              <List link inverted>
                <List.Item as="a">Home</List.Item>
                <List.Item as="a">Articles</List.Item>
                <List.Item as="a">Tutorials</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={4}>
              <h4>Support</h4>
              <List link inverted>
                <List.Item as="a">FAQs</List.Item>
                <List.Item as="a">Help</List.Item>
                <List.Item as="a">Contact Us</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={4}>
              <h4>Stay connected</h4>
              <Icon name="facebook" size="large" />
              <Icon name="twitter" size="large" />
              <Icon name="instagram" size="large" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          DEV@Deakin 2025 — Privacy Policy | Terms | Code of Conduct
          <div style={{ marginTop: "0.5rem" }}>
            © All rights reserved.
          </div>
        </div>
      </Container>
    </Segment>
  );
}

export default Footer;
