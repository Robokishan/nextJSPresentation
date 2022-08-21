import { FC } from "react";

import Link from "next/link";

import { Card, Grid, Row, Text } from "@nextui-org/react";

import { PokemonInfoI } from "../../../interfaces";

interface Props {
  pokemon: PokemonInfoI;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, name, imagen, url } = pokemon;
  return (
    <Grid xs={6} sm={3} md={2} xl={2} key={id + name}>
      <Link href={`/pokemon/[name].tsx`} as={`/pokemon/${name}`}>
        <Card
          style={{
            cursor: "pointer",
          }}
          hoverable
        >
          <Card.Body css={{ p: 1 }}>
            <Text color="warning" size={22} css={{ textAlign: "center" }}>
              {name}
            </Text>
            <Card.Image
              src={imagen}
              width="100px"
              height="100px"
              alt={`Imagen de ${name} `}
            />
          </Card.Body>
          <Card.Footer>
            <Row justify="space-between">
              <Text
                css={{
                  backgroundColor: "yellow",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {id}
              </Text>
            </Row>
          </Card.Footer>
        </Card>
      </Link>
    </Grid>
  );
};
