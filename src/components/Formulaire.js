import React, { useState } from 'react';

function Formulaire() {
  // State to handle the form input fields
  const [formData, setFormData] = useState({
    theme: '',
    dateDebut: '',
    dateFin: '',
    cout: '',
    expert: ''
  });

  // State to store the submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <h2>Formulaire de l'événement</h2>
      <form onSubmit={handleSubmit}>
        {/* Theme */}
        <div className="mb-3">
          <label htmlFor="theme" className="form-label">
            Thème
          </label>
          <input
            type="text"
            id="theme"
            name="theme"
            className="form-control"
            value={formData.theme}
            onChange={handleChange}
            required
          />
        </div>

        {/* Start Date */}
        <div className="mb-3">
          <label htmlFor="dateDebut" className="form-label">
            Date de début
          </label>
          <input
            type="date"
            id="dateDebut"
            name="dateDebut"
            className="form-control"
            value={formData.dateDebut}
            onChange={handleChange}
            required
          />
        </div>

        {/* End Date */}
        <div className="mb-3">
          <label htmlFor="dateFin" className="form-label">
            Date de fin
          </label>
          <input
            type="date"
            id="dateFin"
            name="dateFin"
            className="form-control"
            value={formData.dateFin}
            onChange={handleChange}
            required
          />
        </div>

        {/* Cost */}
        <div className="mb-3">
          <label htmlFor="cout" className="form-label">
            Coût
          </label>
          <input
            type="number"
            id="cout"
            name="cout"
            className="form-control"
            value={formData.cout}
            onChange={handleChange}
            required
          />
        </div>

        {/* Expert */}
        <div className="mb-3">
          <label htmlFor="expert" className="form-label">
            Expert
          </label>
          <input
            type="text"
            id="expert"
            name="expert"
            className="form-control"
            value={formData.expert}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Confirmer
        </button>
      </form>

      {/* Display Submitted Data */}
      {submittedData && (
        <div className="mt-4">
          <h3>Informations saisies :</h3>
          <p><strong>Thème :</strong> {submittedData.theme}</p>
          <p><strong>Date de début :</strong> {submittedData.dateDebut}</p>
          <p><strong>Date de fin :</strong> {submittedData.dateFin}</p>
          <p><strong>Coût :</strong> {submittedData.cout} DH</p>
          <p><strong>Expert :</strong> {submittedData.expert}</p>
        </div>
      )}
    </div>
  );
}

export default Formulaire;
