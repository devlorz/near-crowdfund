import React, { useState } from "react";
import { Bookmark, Heart, Share } from "tabler-icons-react";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  createStyles,
  NumberInput,
  Button,
} from "@mantine/core";
import Big from "bignumber.js";
import { utils } from "near-api-js";

const BOATLOAD_OF_GAS = Big(3)
  .times(10 ** 13)
  .toFixed();
const ONE_NEAR = utils.format.parseNearAmount("1");

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: "none",
  },

  title: {
    display: "block",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  action: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

export default function ArticleCard({ donation, className, ...others }) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const [value, setValue] = useState(1);

  const onDonate = async (e) => {
    if (value > 0) {
      e.preventDefault();
      await window.contract.add_donation(
        {
          id: donation.id,
          amount: value * 1,
        },
        BOATLOAD_OF_GAS,
        Big(value)
          .times(10 ** 24)
          .toFixed()
      );
    }
  };

  const target = new Big(donation.total_donations).dividedBy(ONE_NEAR);

  return (
    <Card
      withBorder
      radius="md"
      className={cx(classes.card, className)}
      {...others}
    >
      <Card.Section>
        <Image src={donation.image_url} height={180} />
      </Card.Section>

      <Text className={classes.title} weight={900}>
        {donation.title}
      </Text>

      <Text weight={500}>Donation Target: {donation.donation_target} NEAR</Text>

      <Text weight={500}>Total Donation: {target.toString()} NEAR</Text>

      <Text size="sm" color="dimmed" lineClamp={5}>
        {donation.description}
      </Text>

      <Group position="apart" className={classes.footer}>
        <Center>
          <NumberInput value={value} onChange={setValue} />
          <Button onClick={onDonate}>Donate</Button>
        </Center>
      </Group>
    </Card>
  );
}
