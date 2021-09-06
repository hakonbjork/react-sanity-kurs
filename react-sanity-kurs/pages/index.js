import React from "react";
import { useRouter } from "next/dist/client/router";
import client from "../client";

const HomePage = (props) => {
  const { recipes } = props; // recipe will hopefully be a list

  return (
    <div className="home">
      <h1>Hei Trondheim</h1>
      <div className="recipes-list">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

const Recipe = ({ recipe }) => {
  const router = useRouter();

  return (
    <div
      className="recipe"
      onClick={() => router.push("oppskrift/" + recipe.slug.current)}
    >
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
    </div>
  );
};

HomePage.getInitialProps = async () => {
  return { recipes: await client.fetch(`*[_type == 'recipe']`) };
};

export default HomePage;
