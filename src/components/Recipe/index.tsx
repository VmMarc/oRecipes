/* eslint-disable arrow-body-style */
import { useParams } from 'react-router-dom';

import Page from '../Page';
import AppHeader from '../AppHeader';

import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

import { useAppSelector } from '../../hooks/redux';
import { findRecipe } from '../../store/selectors/recipes';

import './styles.scss';

function Recipe() {
  const { slug } = useParams();

  if (!slug) {
    throw new Error('Slug is missing');
  }

  const recipe = useAppSelector((state) =>
    findRecipe(state.recipes.list, slug)
  );

  if (!recipe) {
    throw new Error('Recipe not found');
  }
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients list={recipe.ingredients} />
        <Instructions steps={recipe.instructions} />
      </div>
    </Page>
  );
}

export default Recipe;
