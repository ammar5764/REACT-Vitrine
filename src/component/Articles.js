import React from 'react';

const Articles = ({ articles }) => {
 
  const dateFormater = (date) => {
    const newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
  })
    return newDate 
   }

  return (
    <>
      <div className='article'>
        <div className="card-header">
          <h3>{articles.author}</h3>
          <em>posté le : {dateFormater(articles.date)}</em>
        </div>
        <p>{articles.content}</p>

        <div className="btn-container">
          <button>éditer</button><button>supprimer</button>
        </div>
      </div>
    </>
  );
};

export default Articles;