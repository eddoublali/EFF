// Evenement.jsx
import React from 'react';

function Evenement({ evenement }) {
  const calculateTotalCost = (cout_journalier, durée) => cout_journalier * durée;

  // Assuming `evenement.événements` is the array you're trying to work with.
  const overallTotalCost = evenement.événements.reduce((total, event) => {
    return total + calculateTotalCost(event.cout_journalier, event.durée);
  }, 0);

  return (
    <div className="container">
      <h2>Événements</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Thème</th>
            <th>Date Début</th>
            <th>Date Fin</th>
            <th>Description</th>
            <th>Coût Journalier</th>
            <th>Durée (jours)</th>
            <th>Coût Total</th>
          </tr>
        </thead>
        <tbody>
          {evenement.événements.map((event, index) => (
            <tr key={index}>
              <td>{event.thème}</td>
              <td>{event.date_debut}</td>
              <td>{event.date_fin}</td>
              <td>{event.description}</td>
              <td>{event.cout_journalier} €</td>
              <td>{event.durée}</td>
              <td>{calculateTotalCost(event.cout_journalier, event.durée)} €</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6" className="text-end fw-bold">Coût Total Global:</td>
            <td className="fw-bold">{overallTotalCost} €</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Evenement;
