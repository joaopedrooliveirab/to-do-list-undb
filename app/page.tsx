'use client';
import { useState } from "react";

interface Task {
  id: number;
  text: string;
  category: string;
  date: string;
  completed: boolean;
}

const categories = ['Estudos', 'Corrida', 'Lazer', 'Culinária'];

export default function Home() {
  const [taskText, setTaskText] = useState('');
  const [activeCategory, setActiveCategory] = useState('Estudos');
  
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Estudar estrutura de dados em Python', category: 'Estudos', date: '26 mar 2026', completed: false },
    { id: 2, text: 'Estudar Análise de dados', category: 'Estudos', date: '26 mar 2026', completed: false },
    { id: 3, text: 'Correr 5km', category: 'Corrida', date: '26 mar 2026', completed: false },
    { id: 4, text: 'Assistir série', category: 'Lazer', date: '26 mar 2026', completed: false },
    { id: 5, text: 'Cozinhar jantar', category: 'Culinária', date: '26 mar 2026', completed: false },
  ]);

  function addTask() {
    if (taskText.trim() === '') return;
    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      category: activeCategory,
      date: '26 mar 2026',
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText('');
  }

  function toggleTask(id: number) {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  const filteredTasks = tasks.filter(t => t.category === activeCategory);
  const completedCount = filteredTasks.filter(t => t.completed).length;
  const progress = filteredTasks.length > 0 
    ? Math.round((completedCount / filteredTasks.length) * 100) 
    : 0;

  return (
    <div style={{ padding: '40px 20px', maxWidth: '550px', margin: '0 auto' }}>
      
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>MeuHub</h1>
        <p style={{ color: '#888', fontSize: '14px' }}>foco no dia a dia</p>
      </header>

      {/* Filtros com classe de cor dinâmica */}
      <div className="category-filters">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`filter-btn ${cat.toLowerCase()} ${activeCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Card de Progresso */}
      <div className="progress-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <span style={{ fontSize: '14px', color: '#64748b' }}>Progresso atual</span>
            <strong style={{ display: 'block', fontSize: '18px' }}>{activeCategory}</strong>
          </div>
          <span style={{ fontSize: '24px', fontWeight: '800', color: '#3db9ba' }}>{progress}%</span>
        </div>
        <div className="progress-bg">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <small style={{ display: 'block', marginTop: '8px', color: '#94a3b8' }}>
          {completedCount} de {filteredTasks.length} tarefas feitas
        </small>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
        <input 
          className="input-tarefa"
          style={{ flexGrow: 1 }}
          value={taskText} 
          onChange={(e) => setTaskText(e.target.value)} 
          placeholder={`Nova tarefa em ${activeCategory}...`} 
        />
        <button className="btn-adicionar" onClick={addTask}>+ Adicionar</button>
      </div>

      {/* Lista de Cards Refatorada */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredTasks.map((task) => (
          <div key={task.id} className="task-card" onClick={() => toggleTask(task.id)}>
            <input 
              type="checkbox" 
              className="task-checkbox" 
              checked={task.completed}
              readOnly 
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                {task.text}
              </span>
              <span className="task-date">{task.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}