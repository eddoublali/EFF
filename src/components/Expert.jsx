import React from 'react';

function Expert({ expert }) {
  // Function to calculate the total cost for each event
  const calculateTotalCost = (cout_journalier, durée) => cout_journalier * durée;

  // Calculate the overall total cost for all events of this expert
  const overallTotalCost = expert.événements.reduce((total, event) => {
    return total + calculateTotalCost(event.cout_journalier, event.durée);
  }, 0);

  return (
    <div className="mb-4">
      <h3>{expert.nom_complet}</h3>
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
          {expert.événements.map((event, index) => (
            <tr key={index}>
              <td>{event.thème}</td>
              <td>{event.date_debut}</td>
              <td>{event.date_fin}</td>
              <td>{event.description}</td>
              <td>{event.cout_journalier} DH</td>
              <td>{event.durée}</td>
              <td>{calculateTotalCost(event.cout_journalier, event.durée)} DH</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6" className="text-end fw-bold">Total des coûts des événements assurés est :</td>
            <td className="fw-bold">{overallTotalCost} DH</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Expert;
