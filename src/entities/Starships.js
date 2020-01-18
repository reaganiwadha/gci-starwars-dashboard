import React from "react";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { useParams } from "react-router";

import Feeder from "../Feeder";
import Paginator from '../Paginator.js'

import './customcards.css'

import { Button, Pagination, Card, CheckboxControlled, Container, Table} from 'react-bulma-components';

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
      crew
      hyperdriveRating
    }
  }
`;

const perPage = 10;

const Starships = () => {
  let { page } = useParams();

  if(page===null){
    page = 1;
  }


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
        if (loading) return <Button loading={true}>Please Wait</Button> ;
        if (error) return `Error! ${error.message}`;
        return (
          <Container>
            <Table striped={false}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Created At</th>
                  <th>Cost in Credits</th>
                  <th>Cargo Capacity</th>
                  <th>Consumables</th>
                  <th>Crew</th>
                  <th>Hyperdrive Rating</th>
                  <th  >Manufacturer</th>
                </tr>
              </thead>
              <tbody>
                {data.allStarships.map((ship,i) => (
                  <tr key={ship.id}>
                    <th>{i+1 + perPage * (page - 1)}</th>
                    <th>{ship.name}</th>
                    <th>{new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "2-digit"
                        }).format(new Date(ship.createdAt))}</th>
                    <th>{ship.costInCredits}</th>
                    <th>{ship.cargoCapacity}</th>
                    <th>{ship.consumables}</th>
                    <th>{ship.crew}</th>
                    <th>{ship.hyperdriveRating}</th>
                    <th>{ship.manufacturer}</th>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Paginator
             current={parseInt(page)} 
             path={"/starships/"}
             isAbleToNext={true}
             isAbleToPrevious={true}
             />
            <Feeder data={data.allStarships} />
          </Container>
        );
      }}
    </Query>
  );
};

export default Starships;
