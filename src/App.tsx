import React from 'react';
import { GanttChart, Target, Puzzle, ListChecks } from 'lucide-react';
import { platformObjectives } from './data/objectives';
import { platformFeatures } from './data/features';
import { projectTasks } from './data/tasks';
import ProjectSummary from './components/ProjectSummary';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
          Reverse engineering, Analyse et Planification de LeetCode
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Objectifs */}
        <section className="mb-8">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Target className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Objectifs de la Plateforme
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {platformObjectives.map((objective) => (
                <div key={objective.id} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600">{objective.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="mb-8">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Puzzle className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Fonctionnalités Principales
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {platformFeatures.map((category) => (
                <div key={category.id} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planification */}
        <section>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-6">
              <GanttChart className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Planification du Projet
              </h2>
            </div>
            {projectTasks.map((phase, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {phase.phase}
                </h3>
                <div className="grid gap-4">
                  {phase.tasks.map((task) => (
                    <div key={task.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <ListChecks className="h-5 w-5 text-indigo-600" />
                          <h4 className="text-lg font-medium text-gray-900">
                            {task.id}. {task.name}
                          </h4>
                        </div>
                        <div className="text-sm text-gray-500">
                          {task.duration}
                          {task.predecessors.length > 0 && (
                            <span className="ml-4">
                              Dépend de: {task.predecessors.join(', ')}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="mt-2 text-gray-600 ml-8">
                        {task.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <ProjectSummary />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;