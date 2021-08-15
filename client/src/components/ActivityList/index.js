import React, { useEffect } from 'react';
import ActivityItem from '../ActivityItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_ACTIVITIES } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ACTIVITIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

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
      <h2>Available Activities:</h2>
      {state.activities.length ? (
        <div className="flex-row">
          {filterActivities().map((activity) => (
            <ActivityItem
              key={activity._id}
              _id={activity._id}
              image={activity.image}
              name={activity.name}
              price={activity.price}
              quantity={activity.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any activities yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ActivityList;
