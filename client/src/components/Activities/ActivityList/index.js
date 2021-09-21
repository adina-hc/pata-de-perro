import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import ActivityItem from '../ActivityItem';
import { useStoreContext } from '../../../utils/GlobalState';
import { UPDATE_ACTIVITIES } from '../../../utils/actions';
import { QUERY_ACTIVITIES } from '../../../utils/queries';
import { idbPromise } from '../../../utils/helpers';
import spinner from '../../../assets/spinner.gif';
import CategoryMenu from "../CategoryMenu";
import { ActivityListContainer, ActivityListH1, ActivityListH2, CardGridContainer } from './ActivityListElements';

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
    <ActivityListContainer>
      <ActivityListH1>Available Activities:</ActivityListH1>
      {state.activities.length ? (
        <CardGridContainer>
          <CategoryMenu/>
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
        <ActivityListH2>You haven't added any activities yet!</ActivityListH2>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </ActivityListContainer>
  );
}

export default ActivityList;

