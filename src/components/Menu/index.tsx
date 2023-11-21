import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import './styles.scss';

function Menu() {
  const recipes = useAppSelector((state) => state.recipes.list);
  return (
    <nav className="menu">
      <NavLink
        className={({ isActive }) =>
          clsx('menu-link', {
            'menu-link--active': isActive,
          })
        }
        to="/"
      >
        Accueil
      </NavLink>
      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          className={({ isActive }) =>
            clsx('menu-link', {
              'menu-link--active': isActive,
            })
          }
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
