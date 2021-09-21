import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { OrderHistoryContainer,OrderHistoryH2,OrderHistoryH3,OrderHistoryLink, OrderHistoryWrapper, OrderHistoryWrapperCard, OrderHistoryWrapperCardIMG, OrderHistoryWrapperCardName, OrderHistoryWrapperCardPrice, OrderHistoryWrapperCardWrapperPrice, OrderHistoryWrapperElements } from '../components/Order';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <OrderHistoryContainer className="container my-1">
        <OrderHistoryLink to="/Activities">← Back to Activities</OrderHistoryLink>

        {user ? (
          <>
            <OrderHistoryH2>
              Order History for {user.firstName} {user.lastName}
            </OrderHistoryH2>
            {user.orders.map((order) => (
              <OrderHistoryWrapper key={order._id}>
                <OrderHistoryH3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </OrderHistoryH3>
                <OrderHistoryWrapperElements>
                  {order.activities.map(({ _id, image, name, price }, index) => (
                    <OrderHistoryWrapperCard key={index}>
                      <OrderHistoryLink to={`/activity/${_id}`}>
                        <OrderHistoryWrapperCardIMG alt={name} src={`/images/${image}`} />
                        <OrderHistoryWrapperCardName>{name}</OrderHistoryWrapperCardName>
                      </OrderHistoryLink>
                      <OrderHistoryWrapperCardWrapperPrice>
                        <OrderHistoryWrapperCardPrice>${price}</OrderHistoryWrapperCardPrice>
                      </OrderHistoryWrapperCardWrapperPrice>
                    </OrderHistoryWrapperCard>
                  ))}
                </OrderHistoryWrapperElements>
              </OrderHistoryWrapper>
            ))}
          </>
        ) : null}
      </OrderHistoryContainer>
    </>
  );
}

export default OrderHistory;
