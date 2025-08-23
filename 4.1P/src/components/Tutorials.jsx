import { Card, Button, Image, Icon } from "semantic-ui-react";

const articles = [
  {
    title: "React vs Vue",
    description: "Comparing two popular frontend frameworks",
    author: "John Doe",
    rating: "5",
    image: "https://picsum.photos/200/150?random=1",
  },
  {
    title: "React Hooks",
    description: "Understanding useState & useEffect",
    author: "Jane Smith",
    rating: "5",
    image: "https://picsum.photos/200/150?random=2",
  },
  {
    title: "Modern JS",
    description: "Features of ES6 and beyond",
    author: "Alex Lee",
    rating: "5",
    image: "https://picsum.photos/200/150?random=3",
  },
];

function Tutorials() {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h2>Featured Tutorials:</h2>
      <Card.Group itemsPerRow={3}>
        {articles.map((a, i) => (
          <Card key={i}>
            <Image src={a.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{a.title}</Card.Header>
              <Card.Description>{a.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="star" color="yellow" /> {a.rating} | {a.author}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <Button primary style={{ marginTop: "1rem" }}>
        See all articles
      </Button>
    </div>
  );
}

export default Tutorials;
