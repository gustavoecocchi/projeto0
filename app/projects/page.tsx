'use client';

import { Card } from '@/components/ui/card';
import { useAppStore } from '@/store/app-store';

const projects = ['NexMind Core', 'AgentFlow Labs', 'VectorCore Studio'];

export default function ProjectsPage() {
  const { project, setProject } = useAppStore();

  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-semibold'>Seletor de Projeto</h1>
      <div className='grid gap-3 md:grid-cols-2'>
        {projects.map((item) => (
          <Card key={item} className='cursor-pointer hover:border-primary' onClick={() => setProject(item)}>
            <p className='font-medium'>{item}</p>
            <p className='text-sm text-muted'>{item === project ? 'Projeto selecionado' : 'Clique para selecionar'}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
