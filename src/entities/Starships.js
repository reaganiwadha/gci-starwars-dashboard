import React from "react";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { useParams } from "react-router";

import Feeder from "../Feeder";
import './customcards.css'

import { Button, Pagination, Card, Heading, Content, Container, List} from 'react-bulma-components';

const GET_DOGS = gql`
  query AllStarships($first: Int, $skip: Int) {
    allStarships(first: $first, skip: $skip) {
      id
      name
      consumables
      costInCredits
      manufacturer
      cargoCapacity
      createdAt
    }
  }
`;

const perPage = 10;

const Starships = () => {
  let { page } = useParams();

  return (
    <Query
      query={GET_DOGS}
      variables={{
        first: perPage,
        skip: perPage * (page - 1)
      }}
      fetchPolicy="cache-and-network"
    >
      {({ loading, error, data, fetchMore }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return (
          <Container>
              {data.allStarships.map(ship => (
                <Card key={ship.id}>
                    <Card.Header>
                        <Card.Header.Title>{ship.name}</Card.Header.Title>
                    </Card.Header>
                    <Card.Content>
                        <Content>
                        <List>
                            <List.Item><p>{ship.costInCredits}</p></List.Item>
                            <List.Item>{ship.consumables}</List.Item>
                            <List.Item>{ship.cargoCapacity}</List.Item>
                            <List.Item>{ship.createdAt}</List.Item>
                            
                                
                        </List>
                        </Content>
                    </Card.Content>
                </Card>
              ))}
            
            <Feeder data={data.allStarships} />
          </Container>
        );
      }}
    </Query>
  );
};

export default Starships;
