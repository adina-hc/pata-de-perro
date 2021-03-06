import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../../utils/actions';
import { QUERY_CATEGORIES } from '../../../utils/queries';
import { idbPromise } from '../../../utils/helpers';
import { CategoryButton, CategoryContainer, CategoryH2, CategoryItem, CategoryList } from './CategoryMenuElements';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <CategoryContainer>
      <CategoryH2>Choose a Category:</CategoryH2>
      <CategoryList>
      {categories.map((item) => (
        <CategoryItem  key={item._id}>
          <CategoryButton
            key={item._id}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            {item.name}
          </CategoryButton>
        </CategoryItem>
      ))}
        <CategoryItem>
          <CategoryButton
              onClick={() => {
                handleClick('');
              }}
            >
              Clear All
          </CategoryButton>
        </CategoryItem>
      </CategoryList>
    </CategoryContainer>
  );
}

export default CategoryMenu;

