import React, { useEffect } from 'react';
import ActivityItem from '../ActivityItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_ACTIVITIES } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ACTIVITIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import styled from "styled-components";

function ActivityList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_ACTIVITIES);

  useEffect(() => {
    console.log("data",data)
    if (data) {
      dispatch({
        type: UPDATE_ACTIVITIES,
        activities: data.activities,
      });
      data.activities.forEach((activity) => {
        idbPromise('activities', 'put', activity);
      });
    } else if (!loading) {
      idbPromise('activities', 'get').then((activities) => {
        dispatch({
          type: UPDATE_ACTIVITIES,
          activities: activities,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterActivities() {
    if (!currentCategory) {
      return state.activities;
    }

    return state.activities.filter(
      (activity) => activity.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h1 style={{textAlign:'center'}}>Available Activities:</h1>
      {state.activities.length ? (
        <CardGridContainer>
          {filterActivities().map((activity) => (
            <ActivityItem
              key={activity._id}
              _id={activity._id}
              image={activity.image}
              name={activity.name}
              price={activity.price}
              quantity={activity.quantity}
              description={activity.description}
            />
          ))}
        </CardGridContainer>
      ) : (
        <h3>You haven't added any activities yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ActivityList;



export const CardGridContainer = styled.div` display: grid;
grid-template-columns: repeat(1, 1fr);
grid-column-gap: var(--spacing-l);
grid-row-gap: var(--spacing-l);
max-width: var(--width-container);
width: 100%;

@media (min-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
}
`;
