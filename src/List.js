import React from "react";
import { Grid } from "@mantine/core";

import Card from "./Card";

export default function List() {
  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "960px",
        padding: 20,
      }}
    >
      <Grid>
        <Grid.Col md={6} lg={3}>
          <Card
            image="https://bafybeicwytige6acrrtjt7d3v5f7cfsdqac63hfh3elnlnmjxogbch3jda.ipfs.nftstorage.link"
            title="test"
            description="test"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <Card
            image="https://bafybeicwytige6acrrtjt7d3v5f7cfsdqac63hfh3elnlnmjxogbch3jda.ipfs.nftstorage.link"
            title="test"
            description="test"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <Card
            image="https://bafybeicwytige6acrrtjt7d3v5f7cfsdqac63hfh3elnlnmjxogbch3jda.ipfs.nftstorage.link"
            title="test"
            description="test"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <Card
            image="https://bafybeicwytige6acrrtjt7d3v5f7cfsdqac63hfh3elnlnmjxogbch3jda.ipfs.nftstorage.link"
            title="test"
            description="test"
          />
        </Grid.Col>
      </Grid>
    </div>
  );
}
