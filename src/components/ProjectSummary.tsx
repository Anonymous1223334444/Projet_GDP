import React from 'react';

const ProjectSummary = () => {
  const summaryData = [
    {
      category: 'Durée',
      details: [
        'Durée totale: 30 semaines',
        'Date de début estimée: T0',
        'Date de fin estimée: T0 + 30 semaines'
      ]
    },
    {
      category: 'Structure',
      details: [
        '5 phases principales',
        '13 tâches majeures',
        '4 jalons critiques'
      ]
    },
    {
      category: 'Ressources',
      details: [
        '6-8 développeurs',
        '1 chef de projet',
        '1 architecte technique',
        '2 QA engineers'
      ]
    },
    {
      category: 'Répartition',
      details: [
        'Analyse et Conception: 5 semaines',
        'Développement Core: 9 semaines',
        'Fonctionnalités Principales: 9 semaines',
        'Fonctionnalités Sociales: 4 semaines',
        'Finalisation: 5 semaines'
      ]
    }
  ];

  return (
    <div className="mt-8 border-t pt-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Résumé du Projet
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Catégorie
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Détails
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {summaryData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.category}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <ul className="list-disc pl-5 space-y-1">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectSummary;